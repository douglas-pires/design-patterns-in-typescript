import { Notifier } from "../base-notifier";

export class SMSNotifierDecorator extends Notifier {
  override send(message: string): void {
    super.send(message);

    console.log(`Sending message through SMS: ${message}`);
  }
}
