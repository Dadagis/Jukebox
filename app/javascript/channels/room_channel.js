import consumer from "./consumer"

const videosContainer = document.getElementById('videos-container');
const id = document.getElementById('room-infos').dataset.roomid;

consumer.subscriptions.create({channel: "RoomChannel", id: id}, {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    // console.log(data);
    videosContainer.insertAdjacentHTML('beforeend', data);
  }
});
