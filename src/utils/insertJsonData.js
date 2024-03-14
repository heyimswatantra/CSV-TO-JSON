import { client } from "../db/index.js"
import { ApiError } from "./ApiError.js";

// Function to insert JSON data into the "users" table
const insertJsonData = async (jsonData) => {
    for (const record of jsonData) {
        const name = `${record.name.firstName} ${record.name.lastName}`;
        const age = record.age;
        const address = JSON.stringify(record.address);
        const additionalInfo = JSON.stringify(record.additional_info);
    
        // Check if any required fields are null or undefined
        if (!name || !age) {
            continue; // Skip this record 
        }

        const query = {
            text: 'INSERT INTO users (name, age, address, additional_info) VALUES ($1, $2, $3, $4)',
            values: [name, age, address, additionalInfo],
        };
    
        try {
            await client.query(query);
            console.log(`Inserted record for ${name}`);
        } catch (error) {
            throw new ApiError(500, `Error inserting record for ${name}:`, error)
        }
    }
};
  
export default insertJsonData;
