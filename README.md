# Counter App

A simple yet elegant counter application built with React and Material-UI. This app allows users to increment, decrement, and reset a counter with a clean, centered interface.

## Features

- **Increment Button**: Increases the counter value
- **Decrement Button**: Decreases the counter value
- **Reset Button**: Resets the counter to 0
- **Material-UI Components**: Built with Material-UI for a modern look and feel
- **Responsive Design**: Centered layout with flexbox styling
- **Material Icons**: Uses Material-UI icons library

## Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Material-UI (MUI)](https://mui.com/) - React component library with Material Design
- [Create React App](https://github.com/facebook/create-react-app) - Project scaffolding

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Material-UI components and icons:
```bash
npm install @mui/material @mui/icons-material
```

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the [testing documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


```

## How It Works

The app uses React's `useState` hook to manage the counter state. Three functions handle the counter operations:
- `inc()` - Increments the counter
- `dec()` - Decrements the counter
- `reset()` - Resets the counter to 0

The UI is built entirely with Material-UI Box and Button components for a polished appearance.
