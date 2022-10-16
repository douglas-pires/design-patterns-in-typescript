import { Notifier } from "../base-notifier";

export class TelegramNotifierDecorator extends Notifier {
  override send(message: string): void {
    super.send(message);

    console.log(`Sending message through Telegram: ${message}`);
  }
}
