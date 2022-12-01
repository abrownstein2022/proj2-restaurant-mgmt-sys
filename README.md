# Restaurant Management System (Interactive Full-Stack Project)

[DEMO](proj2-restaurant-mgmt-sys.herokuapp.com)

![license](https://img.shields.io/badge/license-MIT-black)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#test-instructions)
- [Questions](#questions)

## Description

<!-- this is `inline-code` here -->


```md
This interactive full-stack project is a restaurant management system called Restaurant_Mgr. 
The application can be used by restaurants to manage their food items and orders, and allow customers to log in and place orders.

The following technologies and instructions were used:
• Node.js and Express.js to create a RESTful API.
• Handlebars.js as the template engine.
• MySQL and the Sequelize ORM for the database.
• Both GET and POST routes for retrieving and adding new data.
• At least one new library, package, or technology that we haven’t discussed in class.  This project is using dates-fns to format dates. (https://date-fns.org/)
• Have a folder structure that meets the MVC paradigm.
• Include authentication (express-session and cookies).  This project includes a login page for customers to place online orders from Group Five's Burgers and Fries.
• Protect API keys and sensitive information with environment variables.
• Be deployed using Heroku (with data).
• Have a polished UI.
• Be responsive.
• Be interactive (in other words, accept and respond to user input).
• Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, and so on).
• Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

*******************
Create our own user story??
User Story  (from challenge 6 as an example)  ******
AS A traveler ******
I WANT to see the weather outlook for multiple cities ******
SO THAT I can plan a trip accordingly ******

Acceptance Criteria
GIVEN a weather dashboard with form inputs ******
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history ******
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city  ******
*****************************************

```


## Installation

To use this application, please read the following steps:

Clone this GitHub repo XXXXXXXXXXXXX link to github repo.
<!-- Check out the gh cli tool from github -->
```bash
$ gh repo clone /username/reponame
```
From the terminal, run 

```bash
$ npm install
```

In package.json, peer dependencies already exist for dotenv, mysql2 and
sequelize so you do not have to install these packages. 

Log into mysql:
```
$ mysql –u[user name] -p[password] -h[hostname] 
```
Create the mysql database on your local machine:
```sql
 mysql> --source './db/schema.sql'
```
[] implies user input
 mysql> *database name* < C:\[filename].sql

5.  Create the tables and seed with data:
    $ npm run './seeds/seed.js


Start the server and watch for file changes to automatically restart server
```bash
$ npm run watch 
```


```

## Usage

```md
After following the installation steps above, please proceed below.

For the purposes of this exercise:
1. This application is used by one restaurant called "Group Five's Burgers and Fries".
2. This restaurant only accepts online orders.
3. A customer called "employee" can view all customer and order information(**to be discussed if we have time).

To use this application, go to the Terminal and type 'npm start' and press enter.

A login screen appears for the customer to enter their login and password, or sign up.  
If a customer forgets their password, they click on the "Forgot my password" link to 
reset it.

Once logged in, the customer lands on the main website page with 3 buttons: "Place Order",
"Update/Delete My Info" and "View My Orders".  

"Place Order' button
1. Customer see a page to select item types, and select an item based on the item type selected. 
2. The item price is then displayed next to the selected item.    
3. Customers can enter as many order lines as they want by clicking on the "Order additional 
items" button.  
4. Customers can also change that line item to something else before confirming the order. 
5. Customers must also enter the item quanity for each item ordered. 
6. When customers are done creating their order, they click the "I'm done" button.  Then, 
their order number, order date, and all their order lines are displayed.  Order lines contain
line item total cost and the order total cost at the bottom.
7. Customers press the "Return To Homepage" button to close this screen and return to the prevous screen.

"Update/Delete My Info" button
1. Customers can change their their first name, last name, business name (optional), phone number,
login and password.
2. All fields are required except for the business name.  Phone number is validated to be 10 numbers.
3. Customers press the "Save My Changes" button to submit the updates to the database.  They see a
message stating that their account info has been updated.
4. Customers may also delete their account by clicking on the "Delete My Account" button.  They see a
message stating that their account has been deleted.
5. Customers press the "Return To Homepage" button to close this screen and return to the prevous screen.

"View My Orders" button
1. Customers see only their past order information.
2. Customers press the "Return To Homepage" button to close this screen and return to the prevous screen.


```

![example image1](./assets/images/proj2-screen1.png)

![example image2](./assets/images/proj2-screen2.png)

![example image3](./assets/images/proj2-screen3.png)

![example image4](./assets/images/proj2-screen4.png)

![example image5](./assets/images/proj2-screen5.png)

![demo video](./assets/video/proj2-restaurant-mgr-demo.gif)

## Credits

```md
Group 5 team members: Kweku Adarkwa, Justin Anderson, Alexis Brownstein, Ryan Dong, Luana Paredes, bootcamp instructor, TAs and tutor 
```

## License

 ```md
 MIT 
```

Link to license text:
https://opensource.org/licenses/mit-license


![badge](https://img.shields.io/badge/license-mit-black)


## Features

```md
The main features in this project are:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## How-to-Contribute

```md
N/A
```

## Test Instructions

```md
N/A
```

## Questions

```md
Feel free to contact us with any questions.

We can be reached at alexis@drdatabase.com.
```

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/proj2-restaurant-mgmt-sys
 
