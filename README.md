🤖 Library FAQ Chatbot

A rule-based automated FAQ assistant designed for academic and institutional libraries.
This chatbot helps users quickly find answers to common library questions through keyword-based matching powered by Firebase Realtime Database.

It provides an interactive chat interface, a browsable FAQ list, and multi-channel librarian contact options.

✨ Features

🔎 Live FAQ Search
Instantly filter and retrieve answers from the library knowledge base.

🤖 Rule-Based Chatbot
Keyword matching provides quick automated responses to user queries.

💬 Dual Interaction Interface

Chat-based question interface

Browsable FAQ list

📱 Responsive Design
Fully mobile-friendly UI optimized for students and library users.

📞 Contact Librarian Fallback
When no answer is found, users can contact the librarian via:

WhatsApp

Email

☁️ Cloud Database Integration
Uses Firebase Realtime Database to store and manage FAQ data.

🛠️ Tech Stack
Technology	Purpose
HTML5	Structure of the application
CSS3 (Custom Properties)	Responsive UI styling
JavaScript (ES6+)	Chatbot logic & interaction
Firebase Realtime Database	FAQ data storage
Firebase Hosting	Deployment
Google Fonts – Poppins	Typography
⚙️ How It Works

The chatbot connects to Firebase Realtime Database where the library's FAQ knowledge base is stored.

When a user enters a question:

The script scans the database

Matches keywords from the query

The most relevant answer is displayed instantly in the chat interface.

📖 Installation Guide
1️⃣ Create a Firebase Project

Go to the Firebase Console.

Click Add Project.

Name it Library-Faq-Chatbot.

Register a Web App (</> icon).

Copy the firebaseConfig object.

2️⃣ Initialize the Realtime Database

Navigate to Build → Realtime Database.

Click Create Database.

Choose your preferred region.

Start in Test Mode.

Import FAQ JSON data or create a node:

library_faqs
3️⃣ Project Setup

Create the following folder structure:

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

Inside script.js, paste your firebaseConfig.

4️⃣ Install Firebase CLI

Install Firebase tools globally:

npm install -g firebase-tools

Login to Firebase:

firebase login
5️⃣ Initialize Firebase Hosting

Run:

firebase init

Select:

Hosting

Configuration options:

Setting	Value
Project	Existing Project
Public Directory	public
Single Page App	Yes
Overwrite index.html	No
6️⃣ Secure API Keys (GitHub Safety)

Create a .gitignore file:

config.js
.env
node_modules

Replace sensitive Firebase values with placeholders in public repositories:

YOUR_API_KEY_HERE
7️⃣ Deploy to Firebase Hosting

Deploy the project:

firebase deploy --only hosting

Firebase will generate a live hosting URL.

8️⃣ Apply Database Security Rules

In Realtime Database → Rules, add:

{
  "rules": {
    "library_faqs": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}

This allows public reading while restricting write access.

📂 Project Structure
Library-Faq-Chatbot
│
├── public/
│   ├── index.html      # Chat interface and FAQ UI
│   ├── style.css       # Responsive styling
│   └── script.js       # Chatbot logic & Firebase integration
│
├── firebase.json       # Firebase hosting configuration
├── .gitignore          # Ignore secrets and dependencies
└── README.md           # Project documentation
🎯 Use Cases

This chatbot is ideal for:

Academic Libraries

College Help Desks

Digital Library Portals

Student Self-Service Systems

🔮 Future Improvements

NLP-based query matching

Admin dashboard for FAQ management

Analytics for user queries

Voice input support

Multi-language support

⚖️ License

This project is licensed under the GPL-3.0 License.

👤 Author

Manjunatha A
Library Assistant | Web Developer | Tech Curator

Specializing in Digital Transformation and Automated Library Services.
