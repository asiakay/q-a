![Image](https://user-images.githubusercontent.com/66960776/241687832-3f4c26e8-3c38-429b-aabb-e3459a2744e0.jpg)



![Image](https://user-images.githubusercontent.com/66960776/241687866-67581238-85d5-4682-ac7b-6e2715337f54.jpg)

# Triviologyie v3

This is a React application called Triviologyie v3. It is a trivia quiz game where users can answer multiple-choice questions. The application fetches questions from the Open Trivia Database API and presents them to the user.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

`npm install`

4. Start the application with the following command:

5. Open your web browser and visit `http://localhost:3000` to see the application.

## Dependencies

The application uses the following dependencies:

- `bootstrap`: Version 5.2.3. Bootstrap is a popular CSS framework used for styling the application.
- `html-entities`: Version 2.3.3. This package is used to decode HTML entities in the questions fetched from the API.
- `nanoid`: Version 4.0.0. Nanoid is used to generate unique identifiers for each question.
- `react`: Version 18.2.0. React is a JavaScript library for building user interfaces.
- `react-bootstrap`: Version 2.6.0. React Bootstrap provides pre-built Bootstrap components that can be used in the application.
- `react-dom`: Version 18.2.0. React DOM is a package for rendering React components in the browser.
- `react-router-dom`: Version 6.4.4. React Router is used for handling routing in the application.
- `react-scripts`: Version 5.0.1. React Scripts provides scripts for creating and running React applications.
- `uuid`: Version 9.0.0. UUID is used for generating unique identifiers.
- `web-vitals`: Version 2.1.4. Web Vitals is a library for measuring web performance metrics.

## Components

The application consists of the following components:

- `App.js`: The main component that renders the application. It handles the state for whether the quiz has started or not and renders the `Start` and `Quiz` components accordingly.
- `Start.js`: A component that displays a start button for the user to begin the quiz.
- `Quiz.js`: The main quiz component that fetches questions from the API, manages the state of the quiz, handles user answers, and calculates the score.
- `Question.js`: A component that renders an individual question and its options. It allows the user to select an answer and highlights the correct answer after checking.

## Features and TODOs

The code includes some comments with features and TODOs for future improvements. Here are some of them:

1. Install Bootstrap for React and apply a custom theme to the application.
2. Pass questions and randomized option choices as props to the modal dialog.
3. Study the `useRef` hook for potential usage in the application.
4. Highlight the correct answer differently from incorrect answers.
5. Add checkboxes to select answers instead of single choice.
6. Add buttons to submit the answer form and calculate the score of correct answers.

Feel free to contribute to the project and implement these features or any other improvements you see fit.

Please note that this README file is based on the provided code and may not include all the details or additional files related to the project.

