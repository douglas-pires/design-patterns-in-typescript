export class ApiReturningSoapService {
  getSoapDocument(): Promise<Document> {
    return Promise.resolve(
      new DOMParser().parseFromString(
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
      )
    );
  }
}
