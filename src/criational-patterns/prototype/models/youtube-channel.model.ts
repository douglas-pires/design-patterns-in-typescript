import { YoutubeChannel as IYoutubeChannel } from "../interfaces/youtube-channel.interface";

abstract class SuperYoutubeChannel implements IYoutubeChannel {
  constructor(source: Pick<IYoutubeChannel, "name" | "subscribers">) {
    Object.assign(this, source);
  }

  abstract name: string;
  abstract subscribers: number;

  addSubscriber(): void {
    this.subscribers++;
  }

  removeSubscriber(): void {
    this.subscribers--;
  }

  toString(): string {
    return `Name: ${this.name} | Subscribers: ${this.subscribers}`;
  }

  abstract clone(): IYoutubeChannel;
}

export class YoutubeChannel extends SuperYoutubeChannel {
  name: string;
  subscribers: number;

  constructor(source: Pick<YoutubeChannel, "name" | "subscribers">) {
    super(source);

    this.name = source.name;
    this.subscribers = source.subscribers;
  }

  private statistics(): string {
    return `Statistics: ${this.subscribers}`;
  }

  override addSubscriber(): void {
    console.log("Logging statistics...");
    console.log(this.statistics());
    this.subscribers++;
    console.log("Logging statistics...");
    console.log(this.statistics());
  }

  public clone(): YoutubeChannel {
    return new YoutubeChannel(this);
  }
}
