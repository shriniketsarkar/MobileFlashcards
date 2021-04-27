# MobileFlashcards
An application to take quizzes and create your own cards deck build using react native.
The app allows the user to create their own Decks and add Question Cards to them providing a Question/Answer.
The app also provides the user with the ability to take a quiz where Question Cards are displayed to the user and they can reveal the Answer by click of a button and mark correct/incorrect based on their guessed answer. At the end of the quiz a score card is presented to the user with their Quiz score.

## Authors
[Shriniket Sarkar](https://github.com/shriniketsarkar)

## Installation and Launch Instructions
To get started developing right away:

* Install all project dependencies with `npm install` and `npx pod-install` to setup npm packages and cocoa pods.
* Start the metro environment using `npx react-native run-ios`
* If your iOS simulator does not launch automatically you will have to launch it manually and re-try the above steps.
* The app should load successfully in your simulator.
* NOTE: For testing my iOS Simulator was : iPhone 12 - 14.4

## Project Structure for better understanding
```bash
├── README.md - This file.
├── App.js # This file handles the initial load of the application and wraps it with necessary redux store and notifications.
├── package.json # npm package manager file used to build and run the application.
├── ios - #This folder holds all the iOS code for the app.
├── index.js - #This file loads the App.
├── screenshots - #This folder contains screenshots of the app showing its notifcations and functionality.
└── src
    ├── actions # These are redux actions that the app uses to manage state for decks and cards.
    │   ├── # Files : cards, decks, shared.
    ├── assets # Static assets such as logos used in the app.
    │   ├── # Files : logo.png and your-vote.png
    ├── components # React components used in the site.
    │   ├── # These handle Quiz, AddCard, AddDeck, DeckDetails, Error, Quiz Results etc functionality.
    ├── middlewares # Middlewares used in the app with React-Redux
    │   ├── logger # Middleware to handle console logging of Redux actions.
    ├── reducers # These are redux reducers that the app uses to manage state
    │   ├── # Files : cards, decks.
    └── utils # This folder includes all the DATA api needed for the site
        └── helper.js # This file handles randomUUID generator and notifciations specific code.
```