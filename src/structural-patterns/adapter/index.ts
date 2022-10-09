import { Client } from "./client";

class Application {
  public async start(): Promise<void> {
    const client = new Client();

    const parsedData1 = await client.getDataFromApiReturningSoapService();
    const parsedData2 = await client.getDataFromApiReturningXmlService();

    console.log("Application started");

    console.log("parsedData1", parsedData1);
    console.log("parsedData2", parsedData2);
  }
}

new Application().start();
