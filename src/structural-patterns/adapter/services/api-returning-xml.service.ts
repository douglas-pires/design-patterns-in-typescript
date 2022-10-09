export class ApiReturningXmlService {
  getXMLDocument(): Promise<XMLDocument> {
    return Promise.resolve(
      new DOMParser().parseFromString(
        `
      <data>
        <name>John Doe</name>
        <age>30</age>
      </data>
    `,
        "text/xml"
      )
    );
  }
}
