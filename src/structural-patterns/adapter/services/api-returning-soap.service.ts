export class ApiReturningSoapService {
  getSoapDocument(): Promise<Document> {
    return Promise.resolve(
      new DOMParser().parseFromString(
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
      )
    );
  }
}
