import { ApiReturningXmlService } from "../services/api-returning-xml.service";
import { DataAdapter, ParsedData } from "./interfaces/adapter.interface";

export class ApiReturningXmlServiceAdapter implements DataAdapter {
  constructor(private apiReturningXmlService: ApiReturningXmlService) {}

  async getData(): Promise<ParsedData> {
    const data = await this.apiReturningXmlService.getXMLDocument();

    return this.parseXMLToJSON(data);
  }

  parseXMLToJSON(_xmlDocument: XMLDocument): ParsedData {
    /**
     * Any algorithm to parse XML to JSON
     * */
    return {
      name: "John Doe",
      age: 30,
    };
  }

  parseJSONToXML(_parsedData: ParsedData): XMLDocument {
    /**
     * Any algorithm to parse JSON to XML
     * */
    return new DOMParser().parseFromString(
      `
      <data>
        <name>John Doe</name>
        <age>30</age>
      </data>
    `,
      "text/xml"
    );
  }
}
