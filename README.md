# npm Course

Welcome to the npm Course! This project is designed to help you learn how to use npm, create web applications with HTML and JavaScript, and test your code effectively. Below are the details on how to set up and run the course.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Advanced Testing: API & React](#advanced-testing-api--react)
- [Required Plugins & Tools](#required-plugins--tools)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/npm-course.git
   ```

2. Navigate to the project directory:

   ```
   cd npm-course
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Running the Application

To start the application, you can open the `public/index.html` file in your web browser. Alternatively, you can set up a local server using a tool like `live-server` or `http-server`:

```
npm install -g live-server
live-server public
```

## Testing

To run the tests for the features implemented in this course, use the following command:

```
npm test
```

This will execute the test cases defined in the `src/tests/feature-example.test.js` file.

## Advanced Testing: API & React

### API Testing
- Use tools like [supertest](https://www.npmjs.com/package/supertest) or [axios](https://www.npmjs.com/package/axios) to test API endpoints.
- Example setup:
  ```
  npm install --save-dev supertest
  ```
- In your Jest test files, import supertest and write tests for your API endpoints.
- See the [supertest documentation](https://www.npmjs.com/package/supertest) for more details.

### React Testing
- Install React and testing libraries:
  ```
  npm install react react-dom @testing-library/react @testing-library/jest-dom @testing-library/user-event --save-dev
  npm install eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-testing-library eslint-plugin-jest-dom --save-dev
  ```
- Create React components in `src/components/` and tests in `src/components/__tests__/`.
- Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for writing tests.
- Run React tests with:
  ```
  npm test -- src/components/
  ```
- Generate a coverage report:
  ```
  npm test -- --coverage --collectCoverageFrom=src/components/**/*.{js,jsx}
  ```
- Lint React code:
  ```
  npx eslint src/components/ --ext .js,.jsx
  ```

## Required Plugins & Tools

To try all the tests and features in this course, you may need to install the following plugins and tools:

- **Jest** (for JavaScript/React testing)
  ```
  npm install --save-dev jest
  ```
- **ESLint** (for code linting)
  ```
  npm install --save-dev eslint
  ```
- **Prettier** (for code formatting)
  ```
  npm install --save-dev prettier
  ```
- **Live Server** (for running a local dev server)
  ```
  npm install --save-dev live-server
  ```
- **HTML Validator CLI** (for HTML validation)
  ```
  npm install --save-dev html-validator-cli
  ```
- **React & Testing Libraries**
  ```
  npm install --save-dev react react-dom @testing-library/react @testing-library/jest-dom @testing-library/user-event
  npm install --save-dev eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-testing-library eslint-plugin-jest-dom
  ```
- **Supertest** (for API endpoint testing)
  ```
  npm install --save-dev supertest
  ```
- **Axios** (for API requests in tests or app)
  ```
  npm install --save-dev axios
  ```

> **Tip:** You can install all dev dependencies at once by running `npm install` if you have cloned the repo, as they are listed in `package.json`.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.



To Activate: CLick on index.html.
