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
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${process.env.YOUTUBE_API_KEY}`)
  .then(response => response.json())
  .then((data) => {
    data.items.forEach((item) => {
      let insertInfos = `<li class="video-card">
      <%= link_to room_musics_path(@room), method: :post do %>
      <div class="flex justify-center col-span-1 transform hover:scale-110 duration-300 ease-in-out mb-4">
      <div class="flex w-1/2">
      <img class="w-56" src="${item.snippet.thumbnails.medium.url}" alt="thumbnail">
      <div class="border border-gray-400 bg-white p-4 flex flex-col justify-center w-full">
      <div class="text-gray-900 font-bold text-base mb-2">${item.snippet.title}</div>
      </div>
      </div>
      </div>
      </div>
      <% end %>
      </li>`;
      results.insertAdjacentHTML("afterbegin", insertInfos);
    })
  });
}

export { eventListener };
