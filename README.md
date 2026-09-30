# Backend
This repo  contains the backend works.
<div align="center">

# 🖥️ Backend Development

### Lab Experiments · Theory Units · Assignments

![Course](https://img.shields.io/badge/Course-CSFS3008P-blue?style=for-the-badge)
![Semester](https://img.shields.io/badge/Semester-5th-green?style=for-the-badge)
![Batch](https://img.shields.io/badge/Batch-05%20(Core)-orange?style=for-the-badge)

</div>

---

## 👤 Student Details

| | |
|---|---|
| **Name** | Prashu Chauhan |
| **SAP ID** | 590016978 |
| **Batch** | 05 (Core) |
| **Semester** | 5th |
| **Subject** | Backend Development |
| **Course Code** | CSFS3008P |
| **Faculty** | Prateek Raj |

---

## 📖 About This Repository

This repository contains all my work for the **Backend Development** course. It is organised into two parts:

- **Theory**: unit-wise learning material, code demos and assignments
- **Lab**: hands-on experiments and a mini project (Blog CMS)

---

## 📑 Table of Contents

1. [Repository Structure](#️-repository-structure)
2. [Theory](#-theory)
3. [Lab](#-lab)
4. [Technologies Used](#️-technologies-used)
5. [How to Run](#️-how-to-run)

---

## 🗂️ Repository Structure

```text
Backend/
│
├── Theory/
│   ├── report.md
│   ├── Assignment01_ToDoApp/     → Notes App (LocalStorage)
│   ├── Unit1/                    → Introduction to Backend Development
│   │   ├── FASTAPI/
│   │   └── flask_server/
│   └── Unit2/                    → Data Management, API Development
│       └── DataModel/
│
├── Lab/
│   ├── Experiment1/              → Basic HTML page
│   ├── Experiment13/
│   │   └── mongoose-demo/        → Mongoose environment setup
│   └── cms-lab/                  → Blog CMS mini project
│
└── README.md
```

---

## 📚 Theory

### Unit I: Introduction to Backend Development

| Folder | Purpose |
|---|---|
| [`FASTAPI`](./Theory/Unit1/FASTAPI/README.md) | Introduction to building backend APIs with FastAPI |
| `flask_server` | Flask server environment set up with Pipenv (`Pipfile`) |
| [`Assignment01_ToDoApp`](./Theory/Assignment01_ToDoApp/) | Notes App built from the Web Storage API lecture (details below) |

### Unit II: Data Management, API Development

| Folder | Purpose |
|---|---|
| `DataModel` | Python (`main.py`) demo that defines a student data model and stores records in a SQLite database (`students.db`) |

📝 Theory report: [`Theory/report.md`](./Theory/report.md)

---

### 📌 Assignment 01: Notes App (LocalStorage, SessionStorage & JSON)

📁 Folder: [`Theory/Assignment01_ToDoApp`](./Theory/Assignment01_ToDoApp/) · 📄 [Assignment README](./Theory/Assignment01_ToDoApp/README.md) · 🌐 [Working page](./Theory/Assignment01_ToDoApp/index.html)

**Purpose:** A browser-based notes app built from the Unit 1 lecture on the *Web Storage API*. It shows how data can persist in the browser without a server.

**Required features**
- Add, edit and delete notes
- Notes persist after page refresh using `localStorage`
- Each note stores `id`, `text`, `createdAt` and `updatedAt`

**Extra features:** search/filter, character count (0/500), clear all notes, empty-input validation, responsive layout

**Concepts demonstrated:** `localStorage.setItem()` / `getItem()` / `removeItem()`, `JSON.stringify()` / `JSON.parse()`, CRUD operations, DOM rendering

**Tech:** HTML · CSS · JavaScript

**Screenshot**

![Notes App](./Theory/Assignment01_ToDoApp/screenshots/notes-app.png)

---

## 🧪 Lab

### Experiment 1: Creating an HTML Page with Basic Tags

| | |
|---|---|
| **Aim** | Create an HTML page using all the basic tags and set up the repository |
| **What I did** | Cloned the `Backend` repo, created the `Lab` and `Theory` folders, and added `index.html` and `report.md` |
| **Challenges** | Cloning the repo to local storage; adding the Lab and Theory folders |
| **Outcome** | Both files created successfully and the basic HTML page runs in the browser |
| **Tech** | HTML, Git, GitHub |
| **Links** | 📄 [Report](./Lab/Experiment1/report.md) · 🌐 [Working page](./Lab/Experiment1/index.html) |

<!-- 🖼️ Add Experiment 1 screenshots here -->

---

### Experiment 13: Mongoose Demo (MongoDB with Node.js)

| | |
|---|---|
| **Aim** | Connect Node.js to MongoDB using Mongoose |
| **Status** | 🔧 Environment setup completed (`package.json`, dependencies installed); implementation in progress |
| **Tech** | Node.js, MongoDB, Mongoose |
| **Folder** | [`Lab/Experiment13/mongoose-demo`](./Lab/Experiment13/mongoose-demo) |

---

### 🚀 Mini Project: Simple Blog CMS (`cms-lab`)

📁 Folder: [`Lab/cms-lab`](./Lab/cms-lab) · 📄 [Detailed project README](./Lab/cms-lab/README.md)

A **Blog Content Management System** where users can create posts and read them, with all data stored permanently in MongoDB.

**Features**
- Create a post with title, content and author (with validation)
- `createdAt` is generated automatically by the backend
- Home page lists all posts, newest first
- Clicking a title opens the full post, retrieved by MongoDB `_id`

**Tech:** Node.js · Express.js · EJS · MongoDB (native driver) · HTML/CSS

**Routes**

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Display all posts |
| GET | `/posts/new` | Show the create-post form |
| POST | `/posts` | Validate and create a post |
| GET | `/posts/:id` | Display one complete post |

**Flow:** `Browser → Express Route → Backend Logic → MongoDB → EJS Template → HTML Response`

**Screenshots**

| Home Page | Create Post | Individual Post |
|---|---|---|
| ![Home](./Lab/cms-lab/screenshots/home.png) | ![Create](./Lab/cms-lab/screenshots/create-post.png) | ![Post](./Lab/cms-lab/screenshots/individual-post.png) |

---

## 🛠️ Technologies Used

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

---

## ▶️ How to Run

**Clone the repository**
```bash
git clone https://github.com/PrashuChauhan2764/Backend.git
cd Backend
```

**Static pages (Experiment 1, Assignment 01):** open `index.html` in Chrome or Edge.

**Blog CMS (Node.js + MongoDB):**
```bash
cd Lab/cms-lab
npm install
node app.js
```
Make sure MongoDB is running locally, then open `http://localhost:3000`.

**Python demos (Theory):**
```bash
cd Theory/Unit2/DataModel
pipenv install
pipenv run python main.py
```

---

<div align="center">

**Prashu Chauhan** · SAP ID 590016978 · Batch 05 (Core)
Submitted to **Prateek Raj** · Backend Development (CSFS3008P)

</div>
