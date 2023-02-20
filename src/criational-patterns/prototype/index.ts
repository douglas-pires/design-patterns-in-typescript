import { YoutubeChannel } from "./models/youtube-channel.model";

class Application {
  start() {
    const arrayOfYoutubeChannels: YoutubeChannel[] = new Array(100).fill(0).map(
      (_, index) =>
        new YoutubeChannel({
          name: `Channel ${index}`,
          subscribers: 0,
        })
    );

    for (const channel of arrayOfYoutubeChannels) {
      channel.addSubscriber();

      const clonedYoutubeChannel = channel.clone();

      clonedYoutubeChannel.addSubscriber();

      console.log(channel.subscribers);
      console.log(clonedYoutubeChannel.subscribers);
    }
  }
}

const app = new Application();

app.start();
