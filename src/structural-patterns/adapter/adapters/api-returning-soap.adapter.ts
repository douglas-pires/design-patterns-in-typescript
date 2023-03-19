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
      name: "Playstation 5",
      price: 499,
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
            <name>Playstation 5</name>
            <age>499</age>
          </data>
        </soap:Body>
      </soap:Envelope>
    `,
      "text/xml"
    );
  }
}
