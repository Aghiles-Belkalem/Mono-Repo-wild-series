import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type category = {
  id: number;
  name: string;
};

class categoryRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(`SELECT *
            FROM category`);
    return rows as category[];
  }
}

export default new categoryRepository();
