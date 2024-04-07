## User Management Backend API

This Node.js backend API offers a robust set of features for managing user data. It's currently deployed on Vercel, providing a scalable and reliable solution.

## Key Features

- **Comprehensive CRUD Operations:** Effortlessly create, read, update, and delete user data.
- **Flexible User Search:** Locate users based on ID, name, or age filters.
- **Random User Fetching:** Easily retrieve information for a random user.
- **User Existence Verification:** Confirm the presence of a specific user in the system.
- **Efficient User Name Extraction:** Obtain a list of user names in an optimized manner.

## Available Routes

The API exposes various endpoints to interact with user data:

- **GET /getAll** - Retrieves a list of all users.
- **POST /create** - Creates a new user.
- **GET /getUser/:id** - Fetches a user by their ID.
- **GET /getUserByName/:name** - Retrieves a user based on their name.
- **PUT /update/:id** - Updates an existing user's information.
- **DELETE /delete/:id** - Deletes a user.
- **GET /random** - Obtains a random user's data.
- **POST /checkUserExistence** - Verifies if a user exists.
- **GET /usersAboveAge** - Retrieves a list of users exceeding a specified age.
- **GET /listUserNames** - Acquires a list of user names.

**Implementation Details:**

- **Express Framework:** Leverages the Express.js framework for efficient routing and request handling.
- **Node.js Environment:** Runs within the Node.js runtime environment, enabling server-side JavaScript execution.
- **Database Integration:** For persistent data storage, integrated with MongoDB.

**## Deployment Information:**

- **Platform:** Vercel
- **Live URL:** https://user-management-phi-jade.vercel.app

**## Getting Started:**

1. **Clone the Repository**
   ```bash
   git clone
2. **Install Dependencies**
   ```bash
   npm install
1. **Run Locally**
   ```bash
   npm install

