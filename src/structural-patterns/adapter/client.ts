import { ApiReturningSoapServiceAdapter } from "./adapters/api-returning-soap.adapter";
import { ApiReturningXmlServiceAdapter } from "./adapters/api-returning-xml.adapter";
import { ParsedData } from "./adapters/interfaces/adapter.interface";
import { ApiReturningSoapService } from "./services/api-returning-soap.service";
import { ApiReturningXmlService } from "./services/api-returning-xml.service";

export class Client {
  private apiReturningSoapServiceAdapter: ApiReturningSoapServiceAdapter;
  private apiReturningXmlServiceAdapter: ApiReturningXmlServiceAdapter;

  constructor() {
    const apiReturningSoapService = new ApiReturningSoapService();
    const apiReturningXmlService = new ApiReturningXmlService();

    this.apiReturningSoapServiceAdapter = new ApiReturningSoapServiceAdapter(
      apiReturningSoapService
    );
    this.apiReturningXmlServiceAdapter = new ApiReturningXmlServiceAdapter(
      apiReturningXmlService
    );
  }

  async getDataFromApiReturningSoapService(): Promise<ParsedData> {
    return await this.apiReturningSoapServiceAdapter.getData();
  }

  async getDataFromApiReturningXmlService(): Promise<ParsedData> {
    return await this.apiReturningXmlServiceAdapter.getData();
  }
}
