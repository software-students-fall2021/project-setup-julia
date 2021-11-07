# Getting Started with Whendor

Acknowledgements: This project's front end was built on Facebook's [Create React App](https://github.com/facebook/create-react-app).

To run the Whendor front-end on your local machine, you must have have [Node.js](https://nodejs.org/en/) (or more specifically, npm) installed on your machine. From there, simply:

1. Clone the Whendor repository to your local machine.
2. In your local machine's terminal, navigate to `.../front-end/`
3. If you haven't before, run `npm install` to install the necessary dependencies to build the app.
4. Run `npm start` to run the app locally. From here, you can see it at [http://localhost:3000](http://localhost:3000), and make live edits to see the changes reflected in your browser!
    *Note: If you're getting hashing errors, change your start script in package.json to `set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start` instead!*
5. If, conversely, you want to build the app for production, run `npm run build` to have the app built into the `.../front-end/build` folder. *This is not recommended yet, as the app is not finished!*

Good luck, and have fun!
