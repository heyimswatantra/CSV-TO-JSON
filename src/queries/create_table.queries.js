const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        age INT,
        address TEXT,
        additional_info JSON
    );
`;

export { 
    createTableQuery 
}