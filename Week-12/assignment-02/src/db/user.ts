import { client } from "..";
/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */

export async function createUser(
    username: string,
    password: string,
    name: string
  ) {
    const query = "INSERT INTO USERS (username, password, name) VALUES ($1, $2, $3) RETURNING *"
    const result = await client.query(query, [username, password, name])
    return (result.rows[0])
  }

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */


export async function getUser(userId: number) {
  const query = "SELECT * FROM USERS WHERE id = $1"
  const id = [userId];
  const result = await client.query(query, id);
  return result.rows[0];
}

