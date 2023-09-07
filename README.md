# EduArchive

## Introduction

Welcome to **EduArchive**, a Content Management System (CMS) for educational articles on Arts, Mathematics and Technology. This repository contains the source code for the EduArchive web application project. It has been created as part of the Project assessment for IT6037 Data Access and Management course that is part of the Diploma of Software Development programme at Whitecliffe's School of Information Technology.

Please follow the instructions below to get started with setting up the project on your local machine and collaborating with the team.

---

## Table of Contents

- [EduArchive](#eduarchive)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Cloning the Repository](#cloning-the-repository)
    - [Installing Dependencies](#installing-dependencies)
      - [Backend Dependencies](#backend-dependencies)
      - [Frontend Dependencies](#frontend-dependencies)
    - [Running the Application](#running-the-application)
      - [Running the Backend Server](#running-the-backend-server)
      - [Running the Frontend Client](#running-the-frontend-client)
  - [Team Collaboration](#team-collaboration)
    - [Team Members](#team-members)
    - [Tools](#tools)
      - [Microsoft Teams](#microsoft-teams)
      - [Figma](#figma)
      - [GitHub](#github)
      - [Vite](#vite)
      - [VS Code](#vs-code)
      - [MongoDB Atlas and Compass](#mongodb-atlas-and-compass)
  - [Project Structure](#project-structure)
    - [Backend (Powered by Node.js, Express \& MongoDB)](#backend-powered-by-nodejs-express--mongodb)
    - [Frontend (Powered by React with Vite \& Tailwind CSS)](#frontend-powered-by-react-with-vite--tailwind-css)
  - [CSS Styling](#css-styling)
    - [Tailwind CSS](#tailwind-css)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

---

## Installation

### Cloning the Repository

To get started, you'll first need to clone the **EduArchive** repository to your local machine.

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

```
git clone https://github.com/Whitecliffe-IT/eduarchive.git
```

4. Once the repository has been cloned, navigate to the project's **mern** directory:

```
cd eduarchive/mern
```

### Installing Dependencies

The **EduArchive** application consists of a backend server and a frontend client, each located within the **mern** folder. Both the backend and frontend have their own set of dependencies.

#### Backend Dependencies

1. Ensure you are in the backend directory of the **mern** folder:

```
cd backend
```

2. Install the necessary backend dependencies:

```
npm install
```

#### Frontend Dependencies

1. Ensure you are in the frontend directory of the **mern** folder:

```
cd frontend
```

2. Install the necessary frontend dependencies:

```
npm install
```

### Running the Application

To run the **EduArchive** application, you will need to start both the backend server and the frontend client.

#### Running the Backend Server

1. Open the terminal in VS Code.
2. Ensure you are in the backend directory of the **mern** folder:

```
cd backend
```

2. Start the backend server:

```
npm start
```

Once successfully started, you should see messages indicating that the server is running on port 3001 and it has connected to the database.

#### Running the Frontend Client

1. Open a new terminal in VS Code.
2. Ensure you are in the frontend directory of the **mern** folder:

```
cd frontend
```

2. Start the frontend client:

```
npm run dev
```

Once successfully started, you should see a message pointing to the frontend client on http://localhost:5173/. You can now open your browser and navigate to http://localhost:5173/ to view the **EduArchive** application.

---

## Team Collaboration

### Team Members

The **EduArchive** project is a collaborative effort involving the following team members:

| Name                 | Role |
| -------------------- | ---- |
| Charles Canning      |      |
| Pyper McCreanor-Rupe |      |
| Gray Hawes           |      |
| Ciar Smythe          |      |
| Jethro Read          |      |
| Maki Kamiya          |      |

### Tools

The team used a number of tools during this project to facilitate team communication, collaboration and project development. These include:

#### Microsoft Teams

Microsoft Teams was used as the primary communication tool for the team. It was used for online team meetings, posting daily standup updates, chat discussions, file sharing, Kanban board, and general team messaging.

#### Figma

Figma was used as the design tool for the project. It was used to create the wireframes and mockups for the application.

#### GitHub

GitHub was used as the version control system for the project. It serves as the repository for the source code for the project. The team also made use of the GitHub Project and GitHub Discussions to manage some aspects of the development of the codebase of the project.

#### Vite

Vite was used as the build tool and development server for the frontend of the project. Vite uses native ES modules for serving files, which means there's no bundling required during development. This results in super-fast hot module replacement (HMR), ensuring that changes in the code are instantly reflected in the browser. Vite also supports TypeScript and CSS preprocessors out of the box, making it an excellent choice for building modern web applications. For more information, please visit the [Vite website](https://vitejs.dev/).

#### VS Code

VS Code was used as the primary code editor for the project.

#### MongoDB Atlas and Compass

MongoDB Atlas was used as the cloud database for the project. MongoDB Compass served as the GUI for the database.

---

## Project Structure

The **EduArchive** project is a full-stack web application built using the MERN stack:

- **MongoDB:** A document-oriented NoSQL database, used to store data in flexible, JSON-like format. For more information, please visit the [MongoDB website](https://www.mongodb.com/).
- **Express:** A lightweight and flexible Node.js web application framework, facilitating the rapid development of robust web APIs. For more information, please visit the [Express website](https://expressjs.com/).
- **React:** A JavaScript library for building interactive user interfaces, enabling the development of single-page applications with reusable component structures. For more information, please visit the [React website](https://react.dev/).
- **Node.js:** A JavaScript runtime environment built on Chrome's V8 JavaScript engine, allowing the development of scalable and efficient web servers. For more information, please visit the [Node.js website](https://nodejs.org/en/).

The project's structure is as follows:

```
eduarchive/
│
└───mern/
    │
    ├───backend/
    │   ├───models/
    │   │   └───articles.js       # Mongoose model for Article
    │   ├───routes/               # Express route definitions
    │   │   └───articleRoutes.js  # Routes specific to Article
    │   ├───.env                  # Environment variables for the backend
    │   ├───index.js              # Entry point for the backend server
    │   └───...                   # Other backend-specific files and folders like package.json, etc.
    │
    └───frontend/
        ├───public/               # Static files and the root HTML file
        ├───src/
        │   ├───assets/           # Images and other static assets
        │   ├───components/       # Individual React components
        │   └───pages/            # Main React pages
        ├───App.jsx               # Main React component that acts as the root for the frontend application
        ├───index.css             # Global CSS styles, including Tailwind's base styles
        ├───main.jsx              # Entry point script for the frontend application
        ├───index.html            # Main HTML file where the React app gets mounted
        ├───postcss.config.js     # PostCSS configuration file for processing styles
        ├───tailwind.config.js    # Configuration for Tailwind CSS customisations and utilities
        ├───vite.config.js        # Vite-specific configuration file
        └───...                   # Other files and folders for configuration and setup, like package.json, etc.
```

### Backend (Powered by Node.js, Express & MongoDB)

- **models/:** Contains the Mongoose models used for defining the schema and structure of data in MongoDB.
  - **articles.js:** Defines the structure for the Article data.
- **routes/:** Directs API requests to appropriate handlers.
  - **articleRoutes.js:** Specifies routes related to Article operations.
- **.env:** Houses environment variables, such as database connections or JWT secrets.
- **index.js:** Acts as the entry point for starting the backend server.

### Frontend (Powered by React with Vite & Tailwind CSS)

- **public/:** Contains static files and resources.
- **src/assets/:** Features images and other static content.
- **src/components/:** Individual reusable React components.
- **src/pages/:** Main views or pages built using React components.
- **App.jsx:** The main component, integrating various pages and components to form the structure of the frontend app.
- **index.css:** Contains global styles and Tailwind CSS base imports.
- **main.jsx:** The starting script for the Vite-powered React frontend.
- **postcss.config.js:** Configuration for PostCSS with plugins required for Tailwind CSS.
- **tailwind.config.js:** Configuration for customising Tailwind CSS's utilities, theme, and more.
- **vite.config.js:** Contains Vite-specific configurations.

The project structure of **eduarchive** ensures a clean separation of the frontend and backend, optimising development experience. Leveraging Vite and Tailwind CSS on the frontend further enhances performance and styling efficiency.

---

## CSS Styling

In modern web applications, styling plays a pivotal role in offering an engaging and responsive user experience. For the **EduArchive** project, we've chosen Tailwind CSS to style the frontend client.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that offers a highly customisable and low-level approach to styling. It provides a comprehensive set of utility classes that empower developers to rapidly build modern user interfaces without leaving the HTML. Some of the key benefits it provides over native CSS and other CSS frameworks include:

- **Developer Productivity:** Instead of switching between separate HTML and CSS files, developers can quickly build and iterate on the UI using utility classes, leading to faster development cycles. Moreover, when viewing the HTML, developers can immediately understand the styling being applied because of the descriptive utility classes. This directness can be a benefit during code reviews and collaborations.
- **Consistency:** Tailwind's utility classes encourage a consistent design system. With predefined spacing, colour, and typography scales, it becomes easier to maintain a cohesive look and feel across the entire application.
- **Responsiveness:** With built-in responsive modifiers, creating mobile-responsive layouts is seamless and intuitive.
- **Customization:** The tailwind.config.js file provides extensive customisation capabilities, allowing colours, spacing, breakpoints, and more to be tailored to the project's design requirements.
- **Performance:** Unused styles are purged out of the box, ensuring the final build is lean and optimised for production.

For more information on Tailwind CSS, please visit the [Tailwind CSS website](https://tailwindcss.com/).

---

## License

The **EduArchive** project is currently not bound by any specific license and is license-free. This means that, as of now, there are no formal restrictions on its use, modification, or distribution. However, it's always recommended to check back for any future licensing updates or consult the repository maintainers before using the project. Always ensure due credit is given when appropriate, and remember that while the software is license-free, it still comes with no warranties.

---

## Acknowledgements

(To be completed)

---

[Return To Top](#eduarchive)
