# Full-Stack-Vue-and-Typescript-Developer
Overview

This project aims to showcase your skills as a Full Stack Vue and TypeScript Developer. The objective is to create a single-page application (SPA) that consumes and parses data from an intentionally inconsistent API endpoint. You will need to handle various error scenarios, implement pagination, and demonstrate session timeout handling. Here's a brief description of the tasks and objectives:
Tasks


1 Create the Main Page: Build the main page using Vue.js and TypeScript. This page will display user data fetched from a challenging API endpoint.

2 Fetch the User List: Retrieve user data from the provided endpoint. Be prepared to handle error codes 401 and 500, as well as randomly nested data.

3 Parse and Unscramble: Implement the necessary logic to unscramble the randomly nested data returned from the endpoint.

4 Display in a Table: Utilize Tailwind CSS to create a visually appealing table for displaying the unscrambled user data.

5 Pagination: Implement pagination for the table, displaying 10 users per page.

6 Individual User Page: Create dynamic routes for displaying user details when a row is clicked in the table. Prioritize performance over aesthetics.

7 Error Handling for 401: When the endpoint returns an error code 401, redirect the user to a fake login page with a fake login button. Clicking the button should return the user to the table. No real authentication is required.

8 Error Handling for 500: If the endpoint returns an error code 500, develop logic to resend the request and reload the data.

9 Code Organization & Quality: Follow Vue best practices for organizing your codebase. Implement error handling, data validation, and maintain clear naming schemes.

10  Repository and Deployment: Create a new GitHub repository for the project and deploy the application using services like Vercel or Netlify. Ensure a clear commit history that documents your thought process.
