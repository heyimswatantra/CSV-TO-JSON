import { client } from "../db/index.js"
import getAgeDistribution  from "../queries/age_distribution.queries.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const getAgeDist = (req, res) => {
    client.query(getAgeDistribution, (error, results) => {
        if (error) throw error
        return res
        .status(200)
        .json (
            new ApiResponse(200, results.rows, "Age distribution fetched successfully")
        )
    })
}

export {
    getAgeDist
}