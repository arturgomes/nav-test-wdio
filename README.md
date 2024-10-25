# Navigation Tests with WebdriverIO

This repository contains end-to-end (E2E) navigation tests built with [WebdriverIO](https://webdriver.io/). The tests are designed to validate navigation functionality across different pages of a sample web application. 

## Project Overview

The `nav-test-wdio` project focuses on ensuring that navigation links direct users to the correct pages and that key elements on each page are visible and properly displayed. The tests use [WebdriverIO Async API](https://webdriver.io/docs/async-api) and selectors to simulate user interactions and verify expected behavior.

### Key Tests Included

- **Page Navigation Tests**: Verifies navigation to pages like About, Contact, and Services.
- **Element Visibility**: Checks if specific page titles appear when navigation is successful.
- **Return to Home**: Tests the functionality to navigate back to the home page.

## Project Structure

- **`test/specs/navigation.e2e.ts`**: Contains the test scenarios for each navigation path.
- **`wdio.conf.js`**: WebdriverIO configuration file, including setup for base URL and browser capabilities.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) for dependency management

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arturgomes/nav-test-wdio.git
   cd nav-test-wdio
   ```

2. Install dependencies:

     ```bash
   yarn
   ```

3. Start your local development server (ensure it runs on `http://localhost:5173`):

     ```bash
   yarn dev
   ```

### Running the Tests

1. In a new terminal window, ensure the server is running.
2. Run the WebdriverIO tests:

     ```bash
   yarn test
   ```

### Troubleshooting

If you encounter `ERR_CONNECTION_REFUSED`, ensure your server is accessible at `http://localhost:5173` and restart if necessary.

---

Feel free to adjust any part of the description or add any specific project setup instructions you might have.