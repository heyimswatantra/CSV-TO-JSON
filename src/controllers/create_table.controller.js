import { client } from "../db/index.js"
import { createTableQuery } from "../queries/create_table.queries.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const createTable = (req, res) => {
    client.query(createTableQuery)
    .then(() => {
        console.log('Table "users" created successfully');
        return res
        .status(200)
        .json(new ApiResponse(200, {}, "Table `Users` created successfully"))
    })
    .catch(err => {
        console.error('Error creating table:', err);
        throw new ApiError(500, "Error creating table")
    });
}

export {
    createTable
}