export class ApiReturningXmlService {
  getXMLDocument(): Promise<XMLDocument> {
    return Promise.resolve(
      new DOMParser().parseFromString(
        `
      <data>
        <name>Playstation 5</name>
        <age>499</age>
      </data>
    `,
        "text/xml"
      )
    );
  }
}
