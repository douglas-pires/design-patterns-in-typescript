import { ApiReturningSoapServiceAdapter } from "./adapters/api-returning-soap.adapter";
import { ApiReturningXmlServiceAdapter } from "./adapters/api-returning-xml.adapter";
import { ParsedData } from "./adapters/interfaces/adapter.interface";
import { ApiReturningSoapService } from "./services/api-returning-soap.service";
import { ApiReturningXmlService } from "./services/api-returning-xml.service";

const apiReturningSoapService = new ApiReturningSoapService();
const apiReturningXmlService = new ApiReturningXmlService();

const apiReturningSoapServiceAdapter = new ApiReturningSoapServiceAdapter(
  apiReturningSoapService
);

const apiReturningXmlServiceAdapter = new ApiReturningXmlServiceAdapter(
  apiReturningXmlService
);

export class Client {
  constructor(
    private apiReturningSoapServiceAdapter: ApiReturningSoapServiceAdapter,
    private apiReturningXmlServiceAdapter: ApiReturningXmlServiceAdapter
  ) {}

  async getDataFromApiReturningSoapService(): Promise<ParsedData> {
    return await this.apiReturningSoapServiceAdapter.getData();
  }

  async getDataFromApiReturningXmlService(): Promise<ParsedData> {
    return await this.apiReturningXmlServiceAdapter.getData();
  }
}

const client = new Client(
  apiReturningSoapServiceAdapter,
  apiReturningXmlServiceAdapter
);

client.getDataFromApiReturningSoapService();
client.getDataFromApiReturningXmlService();
