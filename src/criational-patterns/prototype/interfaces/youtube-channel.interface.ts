export interface YoutubeChannel {
  name: string;
  subscribers: number;
  addSubscriber(): void;
  removeSubscriber(): void;
  toString(): string;
  clone(): YoutubeChannel;
}
