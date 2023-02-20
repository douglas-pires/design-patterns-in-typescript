export interface YoutubeChannel {
  name: string;
  subscribers: number;
  addSubscriber(): void;
  removeSubscriber(): void;
  clone(): YoutubeChannel;
}
