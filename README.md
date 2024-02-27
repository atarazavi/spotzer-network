# Spotzer-Network Application Documentation

## Project Overview

### Application Name:

Spotzer-Network

### Description:

Spotzer-Network is a simple portal designed to enable freelance users to log in and manage tasks within their own task lists. Each task is characterized by a task name, description, status, and an amount indicating the price for completing it. Freelancers can view available tasks from the Spotzer systems, assign tasks to themselves, mark them as complete, view their history, and track earnings from completed tasks.

### Intended Audience:

The application is hypothetically aimed at freelancers as part of an interview assignment.

## Technologies Used

Spotzer-Network is built using:

- Angular version 16.2.0
- TypeScript version 5.1.3
- SCSS for styling
- Firebase for authentication
- RxJS for state management with BehaviorSubjects
- Jasmine and Karma for unit testing

## Design Choices

The application is structured into 'Features' and 'Shared' folders, promoting a modular architecture with lazy loading. Each component has its own module and routing module. RxJS and Observables are used for state management, emphasizing the avoidance of overengineering by not incorporating NGRX, which is deemed unnecessary for the project's complexity.

## Setup and Running Instructions

### Prerequisites:

- Node.js (compatible version based on Angular 16.2.0 requirements)
- Angular CLI version 17.2.0

### Setup:

1. Clone the repository from the provided source.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Configure Firebase authentication with your project credentials.

## Demo Credentials

To explore the Spotzer Network portal with a demo account, use the following credentials:

**Username:** demo@spotzer.digital
**Password:** 123456

### Running the Application:

1. Run `ng serve` to start the development server.
2. Open a web browser and navigate to `http://localhost:4200/`.

## Automated Tests

Testing is facilitated by Jasmine and Karma frameworks.

### Running Tests:

Execute `ng test` in the terminal to run the automated unit tests.

## Maintainability and Extensibility

The codebase adheres to the Angular Style Guide, TypeScript Style Guide, and integrates TSLint, ESLint, and Prettier for code quality. Inline comments are present throughout the code and tests, with the notion that unit tests serve as the best form of documentation.

### Extensibility:

Future extensions can leverage the modular and service-oriented architecture, along with the existing patterns of Observables and Dependency Injection.

## Challenges and Limitations

The application features Firebase authentication to showcase expertise, despite the static nature of the assignment's requirements. No external APIs or asynchronous backend calls are made, as the data is intended to be hardcoded.

## Notes:

- The use of BehaviorSubjects from RxJS instead of NGRX was a conscious choice to prevent overengineering.
- The application's codebase is organized following best practices, with a strong emphasis on unit testing as both a development and documentation tool.
  """
