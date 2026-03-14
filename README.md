# library-Faq-Chatbot
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

## 📂 Project Structure
* `index.html`: The main interface and structure.
* `style.css`: Custom styling for the chatbot and FAQ views.
* `script.js`: Core logic for Firebase integration and keyword matching.

## ⚖️ License
This project is licensed under the GPL-3.0 License.
