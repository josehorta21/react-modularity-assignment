# React Modularity Assignment

## 📌 Overview
This project demonstrates **component modularity in React** using both **default exports/imports** and **named exports/imports**.  
The application is built with multiple reusable components to show proper project structure and code organization.

This assignment focuses on:

- Component-based architecture
- Default vs Named exports/imports
- Shared components
- Test cases (normal and edge cases)

---

## 🎯 Objective
To gain hands-on experience with component modularity in React by creating a small application that utilizes both default and named exports/imports.

---

## 🧱 Project Structure


src/
├── components/
│ ├── Header.js (default export)
│ ├── Footer.js (default export)
│ ├── ContentA.js (named export)
│ ├── ContentB.js (named export)
│ └── SharedComponents.js (named export: Button)
│
├── App.js
├── App.test.js
└── setupTests.js


---

## ⚙️ Features

### ✅ Default Exports
- Header component
- Footer component

### ✅ Named Exports
- ContentA component
- ContentB component
- Shared Button component

### ✅ Shared Component
A reusable Button component used across multiple components.

### ✅ Test Cases
The project includes automated tests covering:

- Normal behavior
- Edge cases
- Component interaction

Total tests:
- 3 normal cases
- 3 edge cases

---

## 🚀 How to Run the Project

### Install dependencies
```bash
npm install
Start development server
npm start

App runs at:

http://localhost:3000
🧪 Running Tests
npm test

The test suite verifies:

Component rendering

Button behavior

Input handling

Edge cases

📚 Technologies Used

React

JavaScript (ES6)

Create React App

React Testing Library

Jest

🎥 Demonstration

A video demonstration shows:

Application functionality

Component structure

Test execution