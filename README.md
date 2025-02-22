# Task Chaser API

This module provides functionality for managing an e-commerce platform. It includes features for handling products, customers, orders, and payments.

## Features

- **Product Management**: Add, update, delete, and retrieve product information.
- **Customer Management**: Register, update, delete, and retrieve customer details.
- **Order Management**: Create, update, delete, and retrieve order information.
- **Payment Processing**: Handle payment transactions and manage payment statuses.

## Database

- **Database Creation**: `task_chaser_api` based on the configuration in `config/config.json`.
- **Table Migration**: Uncomment the `Sequelize.sync()` method in the user model to create all tables in the database.

```javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE
  }
});

// Uncomment the following lines to create the table
// sequelize.sync({ alter: true }).then(() => {
//   console.log('table created');
// }).catch((error) => {
//   console.error('Unable to create table : ', error);
// });
```

## API Documentation

Refer to the `docs.http` file for API endpoint documentation and usage examples.