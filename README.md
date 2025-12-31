# Book Review Platform

A backend-focused **Book Review web application** built with **Node.js, Express, MySQL, and EJS**.

This project was completed to demonstrate **core backend fundamentals**, relational database design, and clean Express architecture, aligned strictly with the project rubric.

---

## Purpose of This Project

This application exists to demonstrate:

- Relational database modeling with MySQL
- Proper use of foreign keys and cascade deletes
- Clean separation of routes and controllers in Express
- Server-rendered application flow using EJS
- Defensive input validation and user-safe error handling
- CRUD operations across multiple related tables

This is **not** a frontend showcase. UI is intentionally minimal and functional.

---

## What I Implemented (Rubric-Aligned)

### Backend & Architecture
- Express app with clear **route → controller → database → view** flow
- No database logic inside route definitions
- Modular controllers per domain (books, ratings, reviews)

### Database Design
- Normalized MySQL schema (`book`, `rating`, `review`)
- Foreign key relationships
- **ON DELETE CASCADE** to maintain data integrity
- Average rating computed from stored ratings (no hardcoded values)

### Core Features
- Create, read, and delete books
- Prevent duplicate book entries
- Rate books (1–5 stars) and compute average rating
- Add and display textual reviews per book
- Graceful handling of empty states (no ratings, no reviews)

### Error Handling & Validation
- Server-side input validation (including whitespace handling)
- User-safe error responses (no raw JSON in UI flows)
- Custom 404 and 500 error pages
- App does not crash on invalid input or routes

### Testing & Verification
- Manual, rubric-driven test checklist executed
- All major user flows verified (PASS)
- Sample data present for UI and portfolio screenshots

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- EJS
- mysql2
- dotenv

---

## Key Learning Outcomes

- Designing and querying relational data correctly
- Enforcing data integrity with foreign keys and cascading deletes
- Structuring Express apps for maintainability
- Writing defensive backend logic instead of relying on frontend validation
- Translating rubric requirements into concrete, testable features

---

## Project Positioning

This project should be viewed as:

> **A clean, rubric-driven Express + MySQL CRUD application demonstrating backend fundamentals and relational data handling — built for correctness, not aesthetics.**

<img width="1250" height="707" alt="image" src="https://github.com/user-attachments/assets/5c881857-ccba-408e-b613-a76bae0ff6ec" />
<img width="1123" height="1023" alt="image" src="https://github.com/user-attachments/assets/d2e46d13-f415-4583-82e3-a8921ce993ec" />
<img width="706" height="739" alt="image" src="https://github.com/user-attachments/assets/ac9e77e9-7d68-40ac-82f7-4936f1bb2d61" />


