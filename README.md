# Event Registration System

This project is an event registration system. It allows users to check their registration status by entering their ID. If the ID is found in the database, the system displays the user's details; otherwise, it shows a "Not Found" message.

## Features

1. **Check Registration Status**: Users can enter their ID to check their registration status. If the ID is found in the database, the system displays the user's details.

2. **Update Registration Status**: If the user's registration status is found, they have the option to update their status.

## Technologies Used

- JavaScript
- PHP
- HTML
- CSS

## How It Works

1. The user enters their ID on the main page.
2. The system sends a request to the server with the entered ID.
3. The server checks the database for the entered ID.
4. If the ID is found, the server sends back the user's details, and the system displays them on the page.
5. If the ID is not found, the system displays a "Not Found" message.
6. If the user's details are displayed, the user has the option to update their registration status. If they choose to do so, the system sends a request to the server to update the status in the database.

## Setup

To run this project, you need to set up a local server environment (like XAMPP or WAMP) and a MySQL database. The database connection details should be updated in the PHP file that connects to the database. The database should have a table named `event_tickets` with the following columns: `Id`, `Ref_Number`, `Buyer_Name`, `Buyer_Email`, `Buyer_Mobile`, and `Status`.

## Usage

1. Start your local server environment.
2. Open the main page in your web browser.
3. Enter your ID and click "Check" to check your registration status.
4. If your details are displayed, you can click "Register" to update your registration status.

## Note

This project is for educational purposes only and is not intended for use in a production environment. It does not implement security measures such as input validation and sanitization, error handling, or user authentication and authorization. Please use it responsibly.
