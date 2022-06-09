const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'api',
    port: '5432'
});

//get users
const getUsers = async(req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.json(response.rows);
}

const getUserById = async(req, res) => {
    const { id } = req.params;
    const response = await pool.query('SELECT * FROM users WHERE id = $1 ', [id]);
    const { rows } = response;
    console.log(response);
    console.log(response.rows);
    console.log(typeof(response.rows));

    if (rows == []) {
        res.json({
            message: "user ID " + id + "not Exist on db ",
            body: {
                resp: rows
            }
        });
    } else {
        res.json({
            message: "user ID " + id + " " + "Exist on db ",
            body: {
                resp: rows
            }
        });
    }

}

const createUsers = async(req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: "User Added Succesfully",
        body: {
            user: { name, email }
        }
    });
}

const deleteUser = async(req, res) => {
    const { id } = req.params;
    const response = await pool.query('DELETE FROM users WHERE id = $1 ', [id]);
    const { rows } = response;

    res.json({
        message: "Deleted succesfully with id: " + id,
    });
}

const updateUser = async(req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    const { rows } = response;

    console.log(id, name, email);

    res.json({
        message: "User Updated Succesfully"
    });
}

module.exports = {
    getUsers,
    getUserById,
    createUsers,
    deleteUser,
    updateUser
};