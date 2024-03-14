const getAllUsers = "SELECT * FROM users";


const addNewUser = `
    INSERT INTO users (name, gender, age, address, addition_info) 
    VALUES ($1, $2, $3, $4, $5)
`;

export {
    getAllUsers,
    addNewUser
}