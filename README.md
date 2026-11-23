# Backend Development

A collection of coursework, practical experiments, assignments, and learning projects completed for the **Backend Development** course.

<div align="center">

![Course](https://img.shields.io/badge/Course-CSFS3008P-blue?style=for-the-badge)
![Semester](https://img.shields.io/badge/Semester-5th-green?style=for-the-badge)
![Batch](https://img.shields.io/badge/Batch-05%20(Core)-orange?style=for-the-badge)

</div>

## Student Details

| Detail | Information |
|---|---|
| **Name** | Prashu Chauhan |
| **SAP ID** | 590016978 |
| **Batch** | 05 (Core) |
| **Semester** | 5th |
| **Subject** | Backend Development |
| **Course Code** | CSFS3008P |
| **Faculty** | Prateek Raj |

## About This Repository

This repository is organised into two main sections:

- **Lab** — practical experiments covering web fundamentals, frontend technologies, JavaScript, Node.js, Express, MongoDB/Mongoose, and Django.
- **Theory** — unit-wise backend demonstrations, assignments, API and database concepts, authentication, and related work.

## Repository Structure

```text
Backend/
├── Lab/
│   ├── cms-lab/
│   ├── Experiment1/
│   ├── Experiment-2/
│   ├── Experiment-3/
│   ├── Experiment-4/
│   ├── Experiment-5/
│   ├── Experiment07_08/
│   ├── Experiment-9_10_11/
│   ├── Experiment12/
│   ├── Experiment13/
│   └── Experiment-15/
│
├── Theory/
│   ├── Assignment01_ToDoApp/
│   ├── SocketIO-Chat/
│   ├── Unit1/
│   │   ├── FASTAPI/
│   │   └── flask_server/
│   ├── Unit2/
│   │   ├── Authentication/
│   │   ├── DataModel/
│   │   └── JWT_Authentication/
│   └── Unit3/
│       └── docker-demo/
│
└── README.md
```

## Lab Experiments

The links below take you to the corresponding experiment folders. Where an HTML page is present, a direct link to that file is also provided.

| Experiment | Work / Focus | Folder | HTML file |
|---|---|---|---|
| **Experiment 1** | Basic HTML page and repository setup | [Open folder](./Lab/Experiment1/) | [index.html](./Lab/Experiment1/index.html) |
| **Experiment 2** | CSS fundamentals: selectors, styling, layout and animations | [Open folder](./Lab/Experiment-2/) | [HTML examples](./Lab/Experiment-2/) |
| **Experiment 3** | Responsive design, Flexbox, Grid and navigation layouts | [Open folder](./Lab/Experiment-3/) | [HTML examples](./Lab/Experiment-3/) |
| **Experiment 4** | Bootstrap and Tailwind CSS practical work | [Open folder](./Lab/Experiment-4/) | [Open folder](./Lab/Experiment-4/) |
| **Experiment 5** | HTML practical | [Open folder](./Lab/Experiment-5/) | [index.html](./Lab/Experiment-5/index.html) |
| **Experiments 7–8** | JavaScript practical work | [Open folder](./Lab/Experiment07_08/) | [index.html](./Lab/Experiment07_08/index.html) |
| **Experiments 9–11** | JavaScript / web practical work with data files | [Open folder](./Lab/Experiment-9_10_11/) | [index.html](./Lab/Experiment-9_10_11/index%20%281%29.html) |
| **Experiment 12** | Node.js and Express practical | [Open folder](./Lab/Experiment12/) | — |
| **Experiment 13** | MongoDB and Mongoose setup | [Open folder](./Lab/Experiment13/) | — |
| **Experiment 15** | Django To-Do application | [Open folder](./Lab/Experiment-15/) | [Templates folder](./Lab/Experiment-15/django_todo_app/templates/) |

### Mini Project: Blog CMS

**Folder:** [Lab/cms-lab](./Lab/cms-lab/) · [Project README](./Lab/cms-lab/README.md)

A Node.js and Express-based Blog CMS project using EJS templates and MongoDB.

Refer to the project README for its implementation details and instructions.

## Theory and Assignments

| Unit / Work | Contents | Open |
|---|---|---|
| **Assignment 01 – To-Do App** | Browser-based app demonstrating HTML, CSS, JavaScript and browser storage | [Open project](./Theory/Assignment01_ToDoApp/) · [index.html](./Theory/Assignment01_ToDoApp/index.html) |
| **Socket.IO Chat** | Client-server chat application | [Open project](./Theory/SocketIO-Chat/) · [Client page](./Theory/SocketIO-Chat/client/index.html) |
| **Unit 1 – FastAPI** | FastAPI backend demonstration and templates | [Open project](./Theory/Unit1/FASTAPI/) · [Template](./Theory/Unit1/FASTAPI/templates/index.html) |
| **Unit 1 – Flask** | Flask environment / backend work | [Open project](./Theory/Unit1/flask_server/) |
| **Unit 2 – Authentication** | Authentication demonstration | [Open project](./Theory/Unit2/Authentication/) |
| **Unit 2 – Data Model** | Python data model and SQLite database demonstration | [Open project](./Theory/Unit2/DataModel/) |
| **Unit 2 – JWT Authentication** | JWT-based authentication implementation | [Open project](./Theory/Unit2/JWT_Authentication/) |
| **Unit 3 – Docker Demo** | Docker practical work | [Open project](./Theory/Unit3/docker-demo/) |

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, Tailwind CSS
- **Backend:** Node.js, Express.js, Python, Flask, FastAPI, Django
- **Templating / Real-time:** EJS, Socket.IO
- **Databases:** MongoDB, SQLite
- **Tools:** Git, GitHub, Pipenv, Docker

## Running the Work

### Static HTML pages

1. Open the relevant experiment folder.
2. Open its HTML file (for example, `index.html`) in a browser.

### Node.js / Express projects

Open a terminal in the relevant project folder, install its dependencies, and run its entry-point file. For example:

```bash
cd Lab/cms-lab
npm install
node app.js
```

### Python projects

Use the `Pipfile` in the relevant project folder to install its dependencies with Pipenv, then run that project's Python entry point.

> **Note:** Links to HTML files in this README open the files on GitHub. GitHub's file view displays the source; to open a page as a hosted, interactive website, the project must be published using a static hosting service such as GitHub Pages. Backend applications also need their server and required database/services running.

---

<div align="center">

**Prashu Chauhan** · Backend Development · CSFS3008P

Submitted to **Prateek Raj**

</div>
