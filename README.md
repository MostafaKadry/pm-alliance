# PM Alliance

PM Alliance is a project management platform 

## Features

- **User Authentication**: Secure user sign-up and login.
- **Country based Job search** : you can search for jobs in PM Field in your country
- **Jobs Fetched form 3 difrrend External Apis** 
## Tech Stack

- **Frontend**: React.js, Redux for state management
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) for secure authentication
- **Styling**: CSS/SASS

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB (or MongoDB Atlas for cloud database)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MostafaKadry/pm-alliance.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd pm-alliance
   ```

3. **Install dependencies for both frontend and backend**:

   For the backend:
   
   ```bash
   cd backend
   npm install
   ```

   For the frontend:

   ```bash
   cd frontend
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the root of both the frontend and backend directories and add the necessary environment variables, such as your MongoDB connection string and JWT secret.

5. **Run the project**:

   For the backend:

   ```bash
   cd backend
   npm start
   ```

   For the frontend:

   ```bash
   cd frontend
   npm start
   ```

6. Open the app in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to your fork (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
