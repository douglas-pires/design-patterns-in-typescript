import { Notifier } from "../base-notifier";

export class SlackNotifierDecorator extends Notifier {
  override send(message: string): void {
    super.send(message);

    console.log(`Sending message through Slack: ${message}`);
  }
}
