function setVH() { 
    let vh = window.innerHeight * 0.01; 
    document.documentElement.style.setProperty('--vh', `${vh}px`); 
}
window.addEventListener('resize', setVH);
setVH();

const firebaseConfig = { 
    apiKey: "", 
    authDomain: "", 
    projectId: "", 
    storageBucket: "", 
    messagingSenderId: "", 
    appId: "", 
databaseURL: ""};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
let libraryData = [];

db.ref('library_faqs').on('value', (snap) => {
    const data = snap.val();
    if(data) { 
        libraryData = Object.entries(data).map(([key, val]) => ({ 
            id: key, q: val.q, a: val.a, k: val.k 
        })); 
        renderFAQList(); 
    }
});
function appendMsg(content, type, showFeedback = false) {
    const chat = document.getElementById("chat");
    const row = document.createElement("div");
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    row.className = `msg-row ${type}-row`;
    
    const isDraft = content.includes('class="draft-card"');
    const displayContent = (type === 'bot' && !isDraft) ? formatMessage(content) : content;
    
    if(type === 'bot') { 
        const msgId = "bot-" + Date.now();
        row.innerHTML = `
            <div class="bot-avatar">KCWLIB</div>
            <div class="bot" id="${msgId}">
                ${displayContent}
                ${showFeedback ? `
                <div style="margin-top:10px; padding-top:5px; border-top:1px solid rgba(255,255,255,0.2); font-size:10px;">
                    <p style="margin-bottom:4px; opacity:0.8;">Was this response accurate?</p>
                    <span style="cursor:pointer; margin-right:12px;" onclick="handleFeedback('${msgId}', true)">✅ Yes</span>
                    <span style="cursor:pointer;" onclick="handleFeedback('${msgId}', false)">❌ No</span>
                </div>` : ''}
                <span class="timestamp">${time}</span>
            </div>`; 
    } else { 
        row.innerHTML = `<div class="user">${content.replace(/&/g, "&amp;").replace(/</g, "&lt;")}<span class="timestamp">${time}</span></div>`; 
    }
    chat.appendChild(row);
    chat.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' });
}

function botResponse(content, feedback = false) {
    document.getElementById("typing").style.display = "block";
    setTimeout(() => { 
        document.getElementById("typing").style.display = "none"; 
        appendMsg(content, "bot", feedback); 
    }, 1000);
}

function send() {
    const input = document.getElementById("msg");
    if(!input.value.trim()) return;
    appendMsg(input.value, "user"); 
    matchAndReply(input.value); 
    input.value = ""; 
    document.getElementById("suggestion-container").style.display = "none";
}
function matchAndReply(input) {
    const userText = input.toLowerCase().trim();
    const greetings = ["hi", "hello", "hey", "hai", "hlo", "greetings", "good morning", "good afternoon", "good evening", "what's up", "yo", "sup", "howdy", "namaste", "salaam"];
    if (greetings.includes(userText)) { botResponse("Hello! How can I help you today?", false); return; }

    let best = { score: 0, a: "" };
    libraryData.forEach(item => {
        let score = 0;
        const keywords = item.k ? item.k.toLowerCase().split(',') : [];
        keywords.forEach(kw => { if (userText.includes(kw.trim())) score += 0.6; });
        if (item.q && userText.includes(item.q.toLowerCase())) score += 0.8;
        if (score > best.score) best = { score: score, a: item.a };
    });

    if (best.score >= 0.5) { botResponse(best.a, true); } 
    else { showFallback(input); }
}

function handleFeedback(id, isCorrect) {
    const el = document.getElementById(id);
    const area = el.querySelector('div[style*="border-top"]');
    if(isCorrect) {
        area.innerHTML = "<p style='opacity:0.9;'>Thank you for the feedback!</p>";
    } else {
        area.remove();
        showFallback("The information provided was not accurate to my request.");
    }
}

function formatMessage(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => {
        return `<div style="margin-top:10px;"><a href="${url}" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding:8px 15px; background:#fff; color:var(--primary); font-weight:600; font-size:11px; border-radius:20px; text-decoration:none;">🔗 Open Link</a></div>`;
    });
}

function showFallback(q) {
    const id = "draft-" + Date.now();
    const card = `<div class="draft-card"><p style="font-size:10px;font-weight:700;color:var(--primary);margin-bottom:8px;letter-spacing:1px;">REACH A LIBRARIAN</p><textarea class="draft-textarea" id="${id}">${q}</textarea><div style="display:flex;gap:8px;"><button class="draft-btn" style="background:var(--email);" onclick="sendEmail('${id}')">Email</button><button class="draft-btn" style="background:var(--whatsapp);" onclick="sendWhatsApp('${id}')">WhatsApp</button></div></div>`;
    botResponse(card, false);
}

function sendWhatsApp(id) { window.open(`https://wa.me/911234567890?text=${encodeURIComponent(document.getElementById(id).value)}`); }
function sendEmail(id) { window.location.href = `mailto:genlib@psgrkcw.ac.in?subject=Library Inquiry&body=${encodeURIComponent(document.getElementById(id).value)}`; }

function switchTab(tab) {
    const isChat = tab === 'chat';
    document.getElementById('chat-content').style.display = isChat ? 'flex' : 'none';
    document.getElementById('faq-content').style.display = isChat ? 'none' : 'flex';
    document.getElementById('btn-chat-tab').classList.toggle('active-tab', isChat);
    document.getElementById('btn-faq-tab').classList.toggle('active-tab', !isChat);
}

function renderFAQList(filteredData = libraryData) {
    const list = document.getElementById('faq-list');
    list.innerHTML = "";
    filteredData.forEach(item => {
        const div = document.createElement('div');
        div.className = "faq-item"; div.innerHTML = `<strong>${item.q}</strong>`;
        div.onclick = () => { switchTab('chat'); appendMsg(item.q, "user"); botResponse(item.a, true); };
        list.appendChild(div);
    });
}

function filterFAQs() {
    const query = document.getElementById('faq-search').value.toLowerCase();
    const filtered = libraryData.filter(item => item.q.toLowerCase().includes(query) || (item.k && item.k.toLowerCase().includes(query)));
    renderFAQList(filtered);
}
function showLiveSuggestions() {
    const val = document.getElementById("msg").value.toLowerCase().trim();
    const box = document.getElementById("suggestion-container");
    if (val.length < 2) { box.style.display = "none"; return; }
    const matches = libraryData.filter(i => (i.q||"").toLowerCase().includes(val)).slice(0, 3);
    if (matches.length > 0) {
        box.innerHTML = matches.map(m => `<div class="suggestion-item" onclick="selectSuggestion('${m.q.replace(/'/g, "\\'")}')">🔍 ${m.q}</div>`).join('');
        box.style.display = "block";
    } else box.style.display = "none";
}

function selectSuggestion(q) { document.getElementById("msg").value = q; document.getElementById("suggestion-container").style.display = "none"; send(); }
function endChat() { document.getElementById('chat').innerHTML = ""; botResponse("Session refreshed. How can I help you?", false); }

window.onload = () => {
    botResponse("Welcome to the KCW Library Information Center. You may enter your inquiry below for assistance.", false);
};
