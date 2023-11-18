import { connectMysql } from '../db.js'

export const index = (req, res) => res.json({ message: "welcome to my api" });

export const ping = async (req, res) => {
    const [result] = await connectMysql.query('SELECT "pong" as result');
    res.json(result[0]);
}

