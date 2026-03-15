# 🤖 Library FAQ Chatbot
A rule-based automated FAQ assistant for library support, integrated with Firebase Realtime Database.

## ✨ Features
* **Live FAQ Search:** Instantly filter common library questions.
* **Smart Interaction:** Rule-based keyword matching for intuitive responses.
* **Dual Interface:** Dedicated tabs for direct Chat and a browsable FAQ list.
* **Multi-Channel Support:** Built-in "Contact Librarian" fallback via WhatsApp and Email.
* **Responsive Design:** Mobile-friendly UI optimized for student use on the go.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3 (Custom Properties), JavaScript (ES6+)
* **Database:** Firebase Realtime Database
* **Hosting:** Firebase Hosting
* **Fonts:** Poppins (via Google Fonts)

## 🚀 How It Works
The assistant connects to a Firebase Realtime Database where the library's "Knowledge Base" is stored. When a user types a query, the script matches keywords against the database entries to provide the most relevant answer.

---

## 📖 Installation Guide
Follow these steps to set up, secure, and deploy your own Library FAQ Assistant.

### Step 1 — Firebase Project Setup
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add Project** and name it `Library-Faq-Chatbot`.
3. In the Project Overview, click the **Web icon (`</>`)** to register your app.
4. Copy the `firebaseConfig` object (you will need this for Step 3).

### Step 2 — Database Initialization
1. In the left sidebar, go to **Build > Realtime Database**.
2. Click **Create Database** and choose your location.
3. Start in **Test Mode** (we will secure it in Step 8).
4. Import your JSON data or create a node named `library_faqs`.

### Step 3 — Local Environment Setup
1. Clone this repository or create a new folder on your computer.
2. Inside the folder, create a sub-folder named `public`.
3. Place your `index.html`, `style.css`, and `script.js` inside the `public` folder.
4. **Important:** Open `script.js` and paste your `firebaseConfig` from Step 1.

### Step 4 — Install Firebase CLI
1. Open your terminal/command prompt.
2. Install the Firebase tools globally:  
   `npm install -g firebase-tools`
3. Login to your account:  
   `firebase login`

### Step 5 — Initialize Firebase
1. Run `firebase init` in your project root.
2. Select **Hosting** (Spacebar to select, Enter to confirm).
3. Choose **Use an existing project** and select your project name.
4. Set `public` as your public directory.
5. Configure as a **single-page app** (Yes).
6. **Crucial:** When asked to overwrite `index.html`, type **N** (No).

### Step 6 — Secure Your Keys (GitHub Safety)
1. Create a `.gitignore` file in your root folder.
2. Add `config.js` or any file containing your private API keys to this file.
3. For the public GitHub version, replace your real keys in `script.js` with placeholders like `YOUR_API_KEY_HERE`.

### Step 7 — Deploy to Live URL
1. In your terminal, run:  
   `firebase deploy --only hosting`
2. Once finished, copy the **Hosting URL** provided in the terminal.

### Step 8 — Set Security Rules
Go to **Realtime Database > Rules** and paste the following to protect your data:

```json
{
  "rules": {
    "library_faqs": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}


/Library-Faq-Chatbot
├── public/
│   ├── index.html    # Main UI and Chat Interface
│   ├── style.css     # Responsive Styling
│   └── script.js     # Logic & Firebase Integration
├── firebase.json     # Hosting Configuration
├── .gitignore        # Hidden files and secrets
└── README.md         # Documentation


⚖️ License
This project is licensed under the GPL-3.0 License.

👤 Author
MANJUNATHA A Library Assistant | Web Developer | Tech Curator Specializing in Digital Transformation and Automated Library Services.









