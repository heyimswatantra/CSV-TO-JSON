# CSV-TO-JSON

CSV-TO-JSON is a Node.js application that converts CSV files into JSON format and stores the data in a PostgreSQL database.

## Table of Contents

- [Installation](#1-installation)
- [Usage](#2-usage)
- [Features](#3-features)
-  [API Documentation](#4-api-documentation)

---


### 1. Installation

To install and run CSV-TO-JSON, follow these steps:

1. Clone the repository:
```bash
   git clone https://github.com/your-username/csv-to-json.git
```
2. Navigate into the project directory:
```bash
   cd csv-to-json
```
3. Install dependencies:
```bash
   npm install
```
4. Set up your PostgreSQL database and configure the connection details in thea new .env file (use .env.sample file as reference)

5. Run the application:
```bash
   npm run dev
```
---


### 2. Usage

1. **Create Table:**
   - First, make a `POST` request to `http://localhost:8000/api/v1/create_table`.

2. **Process CSV:**
   - After creating the table, make a `POST` request to `http://localhost:8000/api/v1/process_csv`.

3. **View Age Distribution:**
   - Once the CSV is processed and data is inserted into the database, you can view the age distribution by making a `GET` request to `http://localhost:8000/api/v1/age_distribution`.

5. **View All Users:**
   - Similarly, you can view all users in the database by making a `GET` request to `http://localhost:8000/api/v1/users`.

- Once the conversion is complete, the JSON data will be stored in your PostgreSQL database.

---

### 3. Features

- Converts CSV file to JSON format.
- Stores converted JSON data in a PostgreSQL database.
- Easily configurable connection to the PostgreSQL database.

---

### 4. API Documentation

#### Create Table
 Creates a table in the PostgreSQL database based on the provided schema.

- **URL** : /api/v1/create-table
- Method: POST

- Example response: 
```json
{
  "statusCode": 200,
  "data": {
    
  },
  "message": "Table `Users` created successfully",
  "success": true
}
```

#### Process CSV
Processes a CSV file and inserts its data into the specified PostgreSQL table.

- URL: /api/v1/process-csv
- Method: POST
- Example Response:
```json
{
  "statusCode": 200,
  "data": {
    
  },
  "message": "Data processed successfully",
  "success": true
}
```



#### Get All Users
Retrieves all users from the PostgreSQL database.

- URL: /api/v1/users
- Method: GET
- Example Response:
```json
{
  "statusCode": 200,
  "data": [
    {
      "id": 2,
      "name": "Rohit Prasad",
      "age": 35,
      "address": "{\"line1\":\"A-563 Rakshak Society\",\"line2\":\"New Pune Road\",\"city\":\"Pune\",\"state\":\"Maharashtra\"}",
      "additional_info": "{\"additional_info\":\"hobbies\\r\"}"
    },
    {
      "id": 3,
      "name": "John Doe",
      "age": 25,
      "address": "{\"line1\":\"123 Main Street\",\"line2\":\"Apartment 2A\",\"city\":\"New York\",\"state\":\"NY\"}",
      "additional_info": "{\"additional_info\":\"reading\\r\"}"
    },
  ],
  "message": "All Users fetched successfully",
  "success": true
}
```

#### Age Distribution
Calculates and retrieves the age distribution of users from the PostgreSQL database.

- URL: /api/v1/age-distribution
- Method: GET
- Example Response:
```json
{
  "statusCode": 200,
  "data": [
    {
      "age_group_1": {
        "Age-Group": "< 20",
        "% Distribution": 0
      },
      "age_group_2": {
        "Age-Group": "20 to 40",
        "% Distribution": 93.64
      },
      "age_group_3": {
        "Age-Group": "40 to 60",
        "% Distribution": 6.36
      },
      "age_group_4": {
        "Age-Group": "> 60",
        "% Distribution": 0
      }
    }
  ],
  "message": "Age distribution fetched successfully",
  "success": true
}
```
