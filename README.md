# jQuery Authentication and Product Display Project

## About

This project demonstrates a practical implementation of user authentication and dynamic product display using jQuery, Bootstrap, and the DummyJSON API for mock data. It showcases client-side scripting to manage user sessions, perform secure logins, and dynamically render product data fetched from an API.

## Features

- **User Authentication:** Implements a login mechanism, storing session tokens and user information in `localStorage`.
- **Dynamic Product Display:** Fetches and displays products from an API, including details like title, image, category, brand, price, and rating.
- **Responsive Design:** Utilizes Bootstrap for styling, ensuring the application is mobile-responsive and user-friendly.

## Dependencies

- **jQuery:** Utilized for DOM manipulation and AJAX requests.
- **Bootstrap:** For UI components and responsiveness. Ensure you include both Bootstrap's CSS and JS in your project.
- **FontAwesome:** Used for displaying star ratings in the product cards.

## How to Use

### Setting Up

1. **Include Dependencies:** Ensure jQuery, Bootstrap, and FontAwesome are included in your project. You can link them in your HTML head or install them via NPM/Yarn.

2. **Project Structure:** Organize your project files, including HTML, CSS, and JavaScript files, in a clear directory structure. This example assumes your main application logic resides in a JavaScript file linked to your HTML.

### Implementation Details

1. **Authentication:** The login form submission is handled by preventing the default form submission process, validating the form inputs, and then making a POST request to the DummyJSON authentication endpoint. On success, it redirects to the products page; on failure, it displays an error.

2. **Session Management:** Upon successful login, session tokens and user names are stored in `localStorage`. These are used to maintain user sessions and are checked on the products page to ensure the user is authenticated.

3. **Fetching and Displaying Products:** Once authenticated, the products page fetches product data from the DummyJSON products endpoint, using the stored token for authorization. Products are dynamically rendered on the page as cards.

4. **Logout Functionality:** A logout function clears the session from `localStorage` and redirects the user to the login page.

### Running the Project

- **Local Development Server:** Start your project on a local development server. If your project is purely static, simple servers like `http-server` in Node.js or Python's HTTP server module can be used.

- **Accessing Pages:** Navigate to the login page (`index.html`). After successful login, you will be redirected to the products page where product data is displayed.

- **Logging Out:** Use the logout button to end the session and return to the login page.

## Additional Notes

- Ensure your project is served over `http` or `https` to avoid issues with API requests due to protocol mismatches.
- Customize the UI and functionality as needed, adhering to the project requirements or personal preferences.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request with your proposed changes or enhancements.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.

![Screenshot 2024-03-31 141719](https://github.com/jameswhitaker007/jQuery-project/assets/138829204/f7b8ea70-d86e-4795-88ae-b62a38696b95)

![Screenshot 2024-03-31 141903](https://github.com/jameswhitaker007/jQuery-project/assets/138829204/8d736cc7-f7a3-433b-a663-fdf66a0d7434)
