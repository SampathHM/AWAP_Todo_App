import { pool } from '../helpers/db.js';

const selectAllTasks = async () => {
    return await pool.query('SELECT * FROM task');
}

const insertTask = async (description) => {
    return await pool.query('INSERT INTO task (description) VALUES ($1) RETURNING *', [description]);
}

const removeTask = async(id) => {
    return await pool.query('delete from task where id = $1', [id])
}


export { selectAllTasks, insertTask , removeTask };