import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
type program = {
  id: number;
  name: string;
};

class programRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(`SELECT *
            FROM program`);
    return rows as program[];
  }
}
export default new programRepository();
