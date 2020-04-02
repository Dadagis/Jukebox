const usernameListener = () => {
  const form = document.querySelector('#nickname-form');
  const button = document.querySelector('#name-button');
  const input = document.querySelector('#name-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    usernameGetter();
    button.classList.remove("bg-teal-500", "hover:bg-teal-700", "border-teal-500", "hover:border-teal-700", )
    button.classList.add("cursor-not-allowed", "bg-gray-400", "border-gray-400");
    button.disabled = true;
    input.disabled = true;
    button.value = "Envoyé !";
  })
}

const usernameGetter = () => {
  const username = document.querySelector('#name-form').value
  postUsername(username);
}

const postUsername = (name) => {
  const params = location.href.split('/musics')[0]
  let roomId = location.href.split('/musics')[0].split('rooms/')[1];
  roomId = parseInt(roomId, 10);
  console.log(roomId);
  console.log(`${params}/users`)

  fetch(`${params}/users`, {
    method: 'POST',
    headers: {
      "Accept": "text/html",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name , room_id: roomId})
  })
}

export { usernameListener };
