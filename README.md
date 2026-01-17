![Repo Views](https://visitor-badge.laobi.io/badge?page_id=aritradev.Ai-Image-Generator&left_text=Repo%20Views&right_color=%23DE1B89)

# 🎨 AI Image Generator

A responsive web application that generates high-quality images from text prompts in seconds. Built with **React** and powered by the **Hugging Face Inference API** (using the `stabilityai/sd-turbo` model).

## 🚀 Live Demo
**[Click Here to View Live Project](https://aiimagegenerator-beryl.vercel.app/)**

---

## ✨ Features
* **Instant Generation:** Uses the `SD-Turbo` model for extremely fast 1-step image generation.
* **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop screens.
* **Smart Loading UI:** Includes a visual loading bar and error handling (CORS/API limits).
* **Visitor Counter:** integrated visitor tracking badge.
* **Secure:** API keys are protected using Environment Variables.

## 🛠️ Tech Stack
* **Frontend:** React.js, CSS3
* **AI Backend:** Hugging Face Inference API (`@huggingface/inference`)
* **Hosting:** Vercel

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your computer.

### 1. Clone the repository
git clone [https://github.com/YOUR_GITHUB_USERNAME/ai-image-generator.git](https://github.com/YOUR_GITHUB_USERNAME/ai-image-generator.git)
cd ai-image-generator

### 2. Install dependencies
npm install
npm install @huggingface/inference

### 3. Set up your API Key
Create a free account at Hugging Face.
Go to Settings > Access Tokens and create a READ token.
In your project folder, create a new file named .env.
Paste your token inside .env like this:
Code snippet
REACT_APP_HUGGING_FACE_TOKEN=hf_YourActualTokenHere...

### 4. Run the App
npm start

Open http://localhost:3000 to view it in the browser.
