# MERN Stack

# React Frontend (Client)

This React app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and lives in the `client` directory of the MERN project.

## Available Scripts

In the `client` directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page reloads automatically when you make edits.  
You may also see lint errors in the console.

---

### `npm test`

Launches the test runner in interactive watch mode.  
See the [running tests documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more info.

---

### `npm run build`

Builds the app for production into the `build` folder inside the `client` directory.  
It correctly bundles React in production mode and optimizes the build for best performance.

The build is minified, and filenames include content hashes.  
Your app is ready to be deployed!

See the [deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for details.

---

### `npm run eject`

**Note: this is a one-way operation. Once you eject, you can’t go back!**

This command copies all configuration files and dependencies (webpack, Babel, ESLint, etc.) into your project so you have full control over them.

All commands except `eject` will continue to work but point to the copied scripts. Use with caution.

---

## Connecting to the Backend API

- During development, your frontend likely makes API requests to your backend at `http://localhost:<server-port>`.
- In production, update your environment variable `REACT_APP_API_URL` to point to your deployed backend URL, pulled from backend service,
- This one uses render for backend calls. Vercel for frontend.
- Edit your url in env file of server directory.  
