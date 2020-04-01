const results = document.querySelector('#results');

const eventListener = () => {
  const form = document.querySelector('#search-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    cleanAndFetch();
  })
}

const cleanAndFetch = () => {
  const query = document.querySelector('#form').value;
  const cards = Array.from(document.querySelectorAll('.video-card'));
  if (cards.length === 0) {
    searchVideo(query);
  } else {
    cards.forEach((card) => {
      card.remove();
    })
    searchVideo(query);
  }
}

const searchVideo = (query) => {
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${process.env.YOUTUBE_API_KEY}&maxResults=5`)
  .then(response => response.json())
  .then((data) => {
    data.items.forEach((item) => {
      let insertInfos = `<li class="video-card">
      <div class="flex justify-center col-span-1 transform hover:scale-110 duration-300 ease-in-out mb-4">
      <div class="flex w-1/2">
      <img id="image" class="w-56" src="${item.snippet.thumbnails.medium.url}" alt="thumbnail">
      <div id="text-div" class="border border-gray-400 bg-white p-4 flex flex-col justify-center w-full">
      <div id="text" class="text-gray-900 font-bold text-base mb-2">${item.snippet.title}</div>
      <div id="video-id" class="hidden">${item.id.videoId}</div>
      </div>
      </div>
      </div>
      </li>`;
      results.insertAdjacentHTML("afterbegin", insertInfos);
    })
  });
}

// fetch(TON_URL_RUBY, { method: 'POST', headers: { 'Accepts': 'text/html', 'Content-Type': 'application/json' }, body: JSON.stringify({ url: url_link}) })
//        .then(response => console.log(response.text()))
let videoId = null
let videoTitle = null
document.addEventListener('click', (element) => {
  if (element.target.id === "image") {
    videoId = element.target.parentNode.childNodes[3].childNodes[3].innerText;
    videoTitle = element.target.parentNode.childNodes[3].childNodes[1].innerText;
  } else if (element.target.id === "text-div") {
    videoId = element.target.childNodes[3].innerText;
    videoTitle = element.target.childNodes[1].innerText;
  } else if (element.target.id === "text") {
    videoId = element.target.parentNode.childNodes[3].innerText;
    videoTitle = element.target.parentNode.childNodes[1].innerText;
  }
  if (videoId && videoTitle != null) {
    saveVideo(videoId, videoTitle);
  }
})

const saveVideo = (videoId, videoTitle) => {
  let roomId = location.href.split('/musics')[0].split('rooms/')[1];
  roomId = parseInt(roomId, 10);
  if (location.pathname.endsWith('/musics/new')) {
    var params = location.href.split('/musics')[0]
  } else {
    var params = location.href;
  }
  // const metaCsrf = document.querySelector("meta[name='csrf-token']");
  // const csrfToken = metaCsrf.getAttribute('content');
  fetch(`${params}/musics`, {
    method: 'POST',
    headers: {
      // 'x-csrf-token': csrfToken,
      "Accept": "text/html",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: videoId, title: videoTitle, room_id: roomId })
  })
  // .then(response => response.json())
  //   .then((data) => {
  //     console.log(data.hits);
  //   });
  const cards = Array.from(document.querySelectorAll('.video-card'));
  cards.forEach((card) => {
      card.remove();
    })
};

export { eventListener };
