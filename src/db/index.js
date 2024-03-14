import pg from "pg";

const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
}

export const client = new pg.Client(config)

const connectDB = async () => {
    try {
        await client.connect()
        console.log("PostgresDB Connected !!");

    } catch (error) {
        console.log("PostgresDB Connection Error ", error);
        // exit the current process in case of an error
        process.exit(1);
    }
}

export default connectDB;