# Node.js and Python (Flask) Proxy Integration

This project creates a Node.js server using Express and a Python server using Flask. The two servers run concurrently and communicate with each other via HTTP requests, with the Node.js server acting as a proxy to forward requests to the Flask server.

# Features:
- Node.js (Express) Server: Handles API requests and forwards them to the Flask server.
- Python (Flask) Server: Handles Python-specific functionality, including a simple Hello World route.

# Project Setup
- The project automatically installs dependencies for both Node.js and Python when it is created.
- The following command will create a new project, set up both the Node.js and Python servers, and install all dependencies.

```bash
npm run nestpy
```

This will:

- Create the project directory with the name you specify.
- Set up the required folders and files.
- Install necessary Node.js dependencies (express, concurrently, http-proxy-middleware).
- Set up a Python virtual environment and install Flask and Werkzeug.

# Running the Project
To start both the Node.js and Python servers, use the following command:
```bash
npm start
```








