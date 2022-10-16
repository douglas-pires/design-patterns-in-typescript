export interface Handler {
  next(handler: Handler): Handler;
  handle(request: string): string | null;
}
