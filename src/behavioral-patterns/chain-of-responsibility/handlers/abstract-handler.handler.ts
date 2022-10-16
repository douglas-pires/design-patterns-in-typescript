import { Handler } from "./handler.interface";

export class AbstractHandler implements Handler {
  protected nextHandler: Handler | null = null;
  public next(handler: Handler): Handler {
    this.nextHandler = handler;

    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}
