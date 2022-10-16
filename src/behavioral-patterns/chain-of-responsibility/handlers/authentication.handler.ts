import { AbstractHandler } from "./abstract-handler.handler";

export class AuthenticationHandler extends AbstractHandler {
  override handle(request: string): string | null {
    if (!request) {
      throw new Error("AuthenticationHandler: Unauthorized!");
    }

    if (request === "admin") {
      return `AuthenticationHandler: Hello, ${request}!`;
    }

    if (request === "user") {
      return `AuthenticationHandler: Hello, ${request}!`;
    }

    if (request === "guest") {
      return `AuthenticationHandler: Hello, ${request}!`;
    }

    return super.handle(request);
  }
}
