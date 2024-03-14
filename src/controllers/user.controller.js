import { client } from "../db/index.js"
import { getAllUsers, addNewUser } from "../queries/user.queries.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const getUser = (req, res) => {
    client.query(getAllUsers, (error, results) => {
        if (error) throw error
        return res
        .status(200)
        .json(new ApiResponse(200, results.rows, "All Users fetched successfully"))
    })
}

const addUser = (req, res) => {
    const {
        name,
        age,
        gender,
        address,
        additional_info
    } = req.body;

    try {
        // check if user exists
        client.query(addNewUser, [name, gender, age, address, additional_info] , (error, results) => {
            if (error) throw error
            return res
            .status(201)
            .json(new ApiResponse(200, {}, "User added successfully"))
        })
    } catch (error) {
        throw error
    }
}

export {
    getUser,
    addUser
}