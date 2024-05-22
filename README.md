# MERN Estate

## Project Overview

**MERN Estate** is a web application designed for renting houses with ease. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this application allows users to browse, search, and view rental properties.
**Live Demo: https://mern-rentify.onrender.com/** [MERN Estate](https://mern-rentify.onrender.com/)


## Project Structure

- **api**: Contains the backend code using Node.js and Express.js.
- **client**: Contains the frontend code using React.js.

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Step-by-Step Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/mern-estate.git
    cd mern-estate
    ```

2. **Install server dependencies:**

    ```bash
    npm install
    ```

3. **Navigate to the client directory and install client dependencies:**

    ```bash
    cd client
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory of the project and add the following environment variables:

    ```env
    MONGO=<Your_MongoDB_connection_String>
    JWT_SECRET=<any_string>
    ```

5. **Build the project:**

    Navigate back to the root directory and run the build script:

    ```bash
    cd ..
    npm run build
    ```

### Running the Application

- **Development Mode:**

    To start the application in development mode, use the following command. This will run the server with `nodemon` for auto-restarts on file changes:

    ```bash
    npm run dev
    ```

- **Production Mode:**

    To start the application in production mode, use the following command:

    ```bash
    npm start
    ```

## Scripts

- **`npm run dev`**: Starts the backend server in development mode using nodemon.
- **`npm start`**: Starts the backend server in production mode.
- **`npm run build`**: Installs all dependencies for both server and client, and builds the client project.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Happy coding! If you have any questions or need further assistance, feel free to open an issue or contact the repository owner.
