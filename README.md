# Movie Management System

A full-stack web application built with **Node.js**, **Express**, **MongoDB**, and **EJS** that allows users to organize, view, rate, and manage their personal movie collection.

---

## Github link:
## https://github.com/davidabati1960/Assignment_3
## Features

* **Home Landing Page:** Introduces the application, its purpose, and core features with quick navigation to the movie collection.
* **View Movie Collection (Read):** Displays all saved movies in a structured dark-themed table with Title, Director, Release Year, Genre, and Rating.
* **Add New Movie (Create):** Allows users to add new films with decimal rating support (`0.0` – `10.0`).
* **Edit Movie Details (Update):** Pre-fills existing movie data so users can update information or revise their ratings.
* **Delete Movie (Delete):** Removes unwanted movie entries with a confirmation prompt to prevent accidental deletion.

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose
* **Frontend / Templating:** EJS, HTML5, CSS3, Bootstrap 5, Font Awesome, Bootstrap Icons

---

## Project Structure

```text
Assignment_3/
├── config/
│   ├── app.js          # Express app configuration & middleware
│   ├── db.js           # MongoDB Atlas connection logic
│   └── .env            # Environment variables (MONGODB_URL)
├── models/
│   └── movie.js        # Mongoose schema & Movie model
├── public/
│   ├── Assets/images/  # Local background images
│   ├── Content/app.css # Custom dark theme & layout styles
│   └── Script/app.js   # Client-side JavaScript
├── routes/
│   ├── index.js        # Home route (/)
│   └── movie.js        # CRUD routes (/movies, /add, /edit/:id, /delete/:id)
├── views/
│   ├── Movies/
│   │   ├── list.ejs    # Movie collection table view
│   │   ├── add.ejs     # Add movie form view
│   │   └── edit.ejs    # Edit movie form view
│   ├── partials/
│   │   ├── header.ejs  # HTML head & stylesheets
│   │   ├── main_nav.ejs# Top navigation bar
│   │   └── footer.ejs  # Bottom footer & scripts
│   └── index.ejs       # Home landing page
├── server.js           # Server entry point
└── package.json        # Project dependencies & scripts
```



## Routes Overview

| Method | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Renders the Home landing page |
| `GET` | `/movies` | Displays all movies from MongoDB |
| `GET` | `/movies/add` | Displays the Add Movie form |
| `POST` | `/movies/add` | Saves a new movie to MongoDB |
| `GET` | `/movies/edit/:id` | Displays the Edit Movie form pre-filled with existing data |
| `POST` | `/movies/edit/:id` | Updates the selected movie in MongoDB |
| `GET` | `/movies/delete/:id` | Deletes the selected movie from MongoDB |

