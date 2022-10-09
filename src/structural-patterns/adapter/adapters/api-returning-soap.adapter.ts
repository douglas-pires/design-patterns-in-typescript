import { ApiReturningSoapService } from "../services/api-returning-soap.service";
import { DataAdapter, ParsedData } from "./interfaces/adapter.interface";

export class ApiReturningSoapServiceAdapter implements DataAdapter {
  constructor(private apiReturningSoapService: ApiReturningSoapService) {}

  async getData(): Promise<ParsedData> {
    const soapData = await this.apiReturningSoapService.getSoapDocument();

    return this.parseSoapToJSON(soapData);
  }

  parseSoapToJSON(_soapDocument: Document): ParsedData {
    /**
     * Any algorithm to parse SOAP to JSON
     * */
    return {
      name: "John Doe",
      age: 30,
    };
  }

  parseJSONToSoap(_parsedData: ParsedData): Document {
    /**
     * Any algorithm to parse JSON to SOAP
     * */
    return new DOMParser().parseFromString(
      `
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <data>
            <name>John Doe</name>
            <age>30</age>
          </data>
        </soap:Body>
      </soap:Envelope>
    `,
      "text/xml"
    );
  }
}
