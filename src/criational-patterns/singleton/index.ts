import { DatabaseSingletonClient } from "./clients/database.client";
import { User } from "./interfaces/user.interface";

class Application {
  constructor(private readonly databaseClient: DatabaseSingletonClient) {}

  getData(): Promise<User> {
    return this.databaseClient.query("SELECT * FROM users");
  }
}

const app = new Application(DatabaseSingletonClient.getInstance());

app.getData().then((user) => console.log(user));
