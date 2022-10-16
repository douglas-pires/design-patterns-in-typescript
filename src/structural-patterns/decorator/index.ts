import {
  Notifier,
  SlackNotifierDecorator,
  SMSNotifierDecorator,
  TelegramNotifierDecorator,
} from "./decorators/notifiers";
import { Order } from "./modules/order";

enum NotifierType {
  SLACK = "slack",
  SMS = "sms",
  TELEGRAM = "telegram",
}

interface ApplicationStartOptions {
  notifiers: NotifierType[];
}

class Application {
  setNotifiers(options: ApplicationStartOptions, order: Order) {
    let stack = new Notifier(order);

    if (options.notifiers.includes(NotifierType.SMS)) {
      stack = new SMSNotifierDecorator(stack);
    }

    if (options.notifiers.includes(NotifierType.TELEGRAM)) {
      stack = new TelegramNotifierDecorator(stack);
    }

    if (options.notifiers.includes(NotifierType.SLACK)) {
      stack = new SlackNotifierDecorator(stack);
    }

    return stack;
  }

  start(options: ApplicationStartOptions) {
    const order = new Order();
    const decoratedOrder = this.setNotifiers(options, order);

    decoratedOrder.placeOrder().send("Order placed");
  }
}

const app = new Application();

app.start({
  notifiers: [NotifierType.SMS, NotifierType.TELEGRAM, NotifierType.SLACK],
});
