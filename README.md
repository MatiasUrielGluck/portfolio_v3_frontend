# My Portfolio - Frontend v3

[This is the new version of my portfolio](https://matiasurielgluck.netlify.app/). The main new features of this version is the possibility of managing its content, adding new projects, modifying existing ones and deleting them. Adding tags, skills and education. To do that, you must to be logged in as an administrator, with private credentials stored in a database.



## About the development

This portfolio is now created using React JS with Redux and React Router, Axios and JWT, for the frontend.
The backend is built with Node JS, Express JS and MySQL.

___

## Requirements

- [MySQL Community Server >= 8.0.30](https://dev.mysql.com/downloads/mysql/)
- [Node.js 16.16.0](https://nodejs.org/)
- [Portfolio Client v3](https://github.com/MatiasUrielGluck/portfolio_v3_frontend)
- [Portfolio Server v3](https://github.com/MatiasUrielGluck/portfolio_v3_backend)

## Installation

- Clone both the [client](https://github.com/MatiasUrielGluck/portfolio_v3_frontend) and the [server](https://github.com/MatiasUrielGluck/portfolio_v3_backend). Now you should have two folders, one called "frontend" and another one called "backend".
- Create a new MySQL database called "portfolio".
- Create a Cloudinary account.
- Inside the backend folder, create a .env file with the following:
```
# Basic
PORT=3000
JWT_SECRET_SEED=*8g3^FmjX0i8QZz$3byiQiWIhLr2mRex4UsBl9ZDyHw!geH$PR
FRONTEND_ORIGIN=http://localhost:5173

# CLOUDINARY
CLOUDINARY_CLOUD_NAME=your_cloudinary_info
CLOUDINARY_API_KEY=your_cloudinary_info
CLOUDINARY_API_SECRET=your_cloudinary_info

# MySQL DB
MYSQL_USERNAME=your_mysql_username
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=portfolio
MYSQL_HOST=localhost
MYSQL_DIALECT=mysql
```
- Now run the following command inside both the frontend and the backend folders:
```
npm install && npm run dev
```

Now the application should be running both the client and the server.