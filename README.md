# E-commerce Back End

![license](https://img.shields.io/badge/License-MIT-blue)

<a name='description'></a>

## Description

A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts.

## Table of Contents

-   [Description](#Description)
-   [Prerequisites](#Prerequisites)
-   [Installation](#Installation)
-   [Usage](#Usage)
-   [License](#License)
-   [Contributing](#Contributing)
-   [Tests](#Tests)
-   [Questions](#Questions)
-   [Credits](#Credits)

<a name='Prerequisites'></a>

## Prerequisites:

-   [Node](https://nodejs.org/en/)
-   [MySQL](https://www.mysql.com/)

<a name='installation'></a>

## Installation:

1. Clone the repository.
2. Navigate to the repository in the terminal and run `npm i`.
3. Enter the database name and your mysql user and password in the `.env` file. If no .env file exists, create it in the root of the repository and enter the following information:

```
DB_NAME='ecommerce_db'
DB_USER='yourMySQLuser'
DB_PW='yourMySQLpassword'
SESS_SECRET='random secret'
```

4. To create the database, run `npm run schema` in the terminal and enter the password for your MySQL user 'root' (user can be changed in package.json scripts).
5. (Optional) Populate the database with test data with the command `npm run seed`.
6. (Optional) In the MySQL Shell, create a new mysql user with permissions on the database, and update the `.env` file:

    ```
    mysql> CREATE USER 'user'@'localhost' IDENTIFIED BY 'some_pass';
    mysql> GRANT ALL PRIVILEGES ON ecommerce_db.* TO 'user'@'localhost';
    ```

7. Run `npm start` in the terminal to run the server.

<a name='usage'></a>

## Usage

1. Click the login link in the nav bar to navigate to the login page.
2. Login with your username and password or click the 'sign up instead' button to create a new account.
3. In the dashboard, click the 'new post' button to navigate to the new post form.
4. To create a post, enter a title and content for post and click the create button to save it.
5. Click on a listed post in your dashboard to edit or delete it.
6. In the home menu, click on a post title to see and add comments.
7. Click the logout button in the navigation to logout of your account.

<a name='license'></a>

## License

Licensed under the [MIT](./LICENSE) license.

<a name='questions'></a>

## Questions

Reach me at my github or email!

[GitHub](https://github.com/ZQWhiting)

<zach.whiting@icloud.com>

<a name='credits'></a>

## Credits

Developed by Zachary Q. Whiting (ZQWhiting).
Mock-up and criteria provided by the University of Utah Online Coding Bootcamp.
