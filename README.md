# 🤖 Library FAQ Chatbot

A **rule-based automated FAQ assistant** designed for academic and institutional libraries.  
This chatbot helps users quickly find answers to common library questions using **keyword matching** powered by **Firebase Realtime Database**.

It provides an **interactive chat interface**, a **browsable FAQ list**, and **multi-channel librarian contact options**.

---

## ✨ Features

- 🔎 **Live FAQ Search**  
  Instantly filter and retrieve answers from the library knowledge base.

- 🤖 **Rule-Based Chatbot**  
  Keyword matching provides quick automated responses to user queries.

- 💬 **Dual Interaction Interface**
  - Chat-based question interface  
  - Browsable FAQ list

- 📱 **Responsive Design**  
  Fully mobile-friendly UI optimized for students and library users.

- 📞 **Contact Librarian Fallback**
  When no answer is found, users can contact the librarian via:
  - WhatsApp
  - Email

- ☁️ **Cloud Database Integration**  
  Uses Firebase Realtime Database to store and manage FAQ data.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 (Custom Properties) | Responsive UI styling |
| JavaScript (ES6+) | Chatbot logic & interaction |
| Firebase Realtime Database | FAQ data storage |
| Firebase Hosting | Deployment |
| Google Fonts (Poppins) | Typography |

---

## ⚙️ How It Works

1. The chatbot connects to **Firebase Realtime Database** where the library's **FAQ knowledge base** is stored.
2. When a user types a question:
   - The script scans the database
   - Matches keywords from the query
3. The most relevant answer is displayed instantly in the chat interface.

---

# 📖 Installation Guide

Follow these steps to set up, secure, and deploy your own Library FAQ Assistant.

---

## Step 1 — Firebase Project Setup

1. Go to the **Firebase Console**  
2. Click **Add Project**  
3. Name your project:

```
Library-Faq-Chatbot
```

4. In **Project Overview**, click the **Web App icon (</>)**
5. Register the app
6. Copy the **firebaseConfig** object

You will need this configuration in **Step 3**.

---

## Step 2 — Database Initialization

1. Go to:

```
Build → Realtime Database
```

2. Click **Create Database**
3. Choose your preferred location
4. Start in **Test Mode**
5. Import your FAQ JSON file or create a node:

```
library_faqs
```

---

## Step 3 — Local Environment Setup

1. Clone this repository or create a new project folder.

2. Create the following folder structure:

```
Library-Faq-Chatbot
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── firebase.json
├── .gitignore
└── README.md
```

3. Place your **HTML, CSS, and JS files** inside the `public` folder.

4. Open `script.js` and paste your **firebaseConfig** from Step 1.

---

## Step 4 — Install Firebase CLI

Open your terminal or command prompt and run:

```bash
npm install -g firebase-tools
```

Then login to your Firebase account:

```bash
firebase login
```

---

## Step 5 — Initialize Firebase

Inside your project folder run:

```bash
firebase init
```

Choose the following options:

- Select **Hosting**
- Choose **Use an existing project**
- Select your **Library-Faq-Chatbot** project
- Set the **public directory** to:

```
public
```

- Configure as **Single Page App**

```
Yes
```

- When asked to overwrite `index.html`

```
Type N (No)
```

---

## Step 6 — Secure Your Keys (GitHub Safety)

Create a `.gitignore` file in your project root.

Add the following:

```
config.js
.env
node_modules
```

If you plan to make the project **public on GitHub**, replace real keys with placeholders:

```
YOUR_API_KEY_HERE
```

---

## Step 7 — Deploy to Firebase Hosting

Run the following command:

```bash
firebase deploy --only hosting
```

After deployment, Firebase will generate a **Hosting URL**.

Example:

```
https://library-faq-chatbot.web.app
```

---

## Step 8 — Set Database Security Rules

Go to:

```
Realtime Database → Rules
```

Paste the following rules:

```json
{
  "rules": {
    "library_faqs": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

This allows:
- Public **read access**
- Restricted **write access**

---

# 📂 Project Structure

```
Library-Faq-Chatbot
│
├── public/
│   ├── index.html      # Main UI and Chat Interface
│   ├── style.css       # Responsive Styling
│   └── script.js       # Chatbot Logic & Firebase Integration
│
├── firebase.json       # Hosting Configuration
├── .gitignore          # Hidden files and secrets
└── README.md           # Project documentation
```

---

# 🎯 Use Cases

This project is suitable for:

- Academic Libraries
- College Help Desks
- Digital Library Portals
- Student Self-Service Systems
- Institutional FAQ Assistants

---

# 🔮 Future Improvements

Possible upgrades for the chatbot:

- NLP-based query matching
- Admin dashboard for FAQ management
- User query analytics
- Voice input support
- Multi-language support
- AI-powered response suggestions

---

# ⚖️ License

This project is licensed under the **GPL-3.0 License**.

# 🔗 Quick Links
- 🚀 **Live Demo:** [View the Chatbot Live](https://library-faq-chatbot.web.app)

---

# 👤 Author

**Manjunatha A**  
Library Assistant | Web Developer | Tech Curator  

Specializing in **Digital Transformation and Automated Library Services**.

---

⭐ If you find this project useful, please **star the repository** on GitHub.
