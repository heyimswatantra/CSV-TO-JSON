import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import csvToJson from "../utils/csvToJson.js";
import insertJsonData from "../utils/insertJsonData.js";
import fs from "fs"

const filePath = process.env.CSV_FILE_PATH;
let csvFile = fs.readFileSync(filePath, 'utf8');

try {
    if (!csvFile) {
        console.log("CSV File not found");
    }
    console.log("CSV File imported successfully ");
} catch (error) {
    throw new ApiError(500, "Something went wrong while importing file")
}

const processCsv = async (req, res) => {
    try {
      // Read CSV file and convert to JSON
      const jsonData = csvToJson(csvFile);

      // Insert JSON data into the database
      await insertJsonData(jsonData);
      return res
      .status(200)
      .json(new ApiResponse(200, {}, "Data processed successfully"))

    } catch (error) {
        throw new ApiError(500, error?.message || "Internal Server Error")
    }
}


export {
    processCsv
}