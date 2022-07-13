Made By:

## **Omar Metmwah**

as a task for **TSF GRIP**:

## The Sparks Foundation

## Graduate Rotational Internship Program

Link Of The Website:

[https://metmwah-bank-system.herokuapp.com]("https://metmwah-bank-system.herokuapp.com")


Link Of The Internship:

[https://internship.thesparksfoundation.info/#steps-to-apply]("https://internship.thesparksfoundation.info/#steps-to-apply")


## Task Requirements

- Create a simple dynamic website for a Basic Banking System.
- Creating a dummy data in database for upto 10 customers.
- Customers table will have basic fields such as name, email, current balance etc..
- Transfers table will record all transfers
- No Login Page. No User Creation. Only transfer of money between multiple users.
- Host the website at 000webhost, github.io, heroku app or any other free hosting provider.

# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Transactions
- List `/transactions` [GET]
- Make Transaction `/transactions` [POST]
#### Customers
- List `/customers` [GET]
- Create `/customers` [POST] 
- History `/customers/:name` [GET]

## Data Shapes
#### Transactions
Table: *transactions*
- id `SERIAL PRIMARY KEY`
- sender `VARCHAR` NOT NULL REFERENCES customers("name")
- reciever `VARCHAR` NOT NULL REFERENCES customers("name")
- timing `TIMESTAMP`
- amount `INTEGER`



#### User
Table: *users*
- name `VARCHAR` UNIQUE PRIMARY KEY
- email `VARCHAR` UNIQUE
- password `VARCHAR`
- lastTransaction `TIMESTAMP`
- currentBalance INTEGER NOT NULL, constraint balance_nonnegative check (currentBalance >= 0)


## Installation Instructions
This section contains all the packages used in this project and how to install them. However, you can fork this repo and run the following command at the root directory to install all packages.

`npm install`

### Packages

Here are some of the few packages that were installed.

#### express
`npm i express`
`npm i --save-dev @types/express`

#### typescript
`npm i --save-dev typescript`

#### db-migrate
`npm install db-migrate`

#### cors
`npm i cors`
`npm i --save-dev @types/cors`

#### dotenv
`npm i dotenv`
