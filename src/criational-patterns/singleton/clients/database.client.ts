import { User } from "../interfaces/user.interface";

export class DatabaseSingletonClient {
  private static instance: DatabaseSingletonClient;

  static getInstance(): DatabaseSingletonClient {
    if (!DatabaseSingletonClient.instance) {
      DatabaseSingletonClient.instance = new DatabaseSingletonClient();
    }

    return DatabaseSingletonClient.instance;
  }

  public query(_query: string): Promise<User> {
    return Promise.resolve({ name: "John Doe", age: 30 });
  }
}
