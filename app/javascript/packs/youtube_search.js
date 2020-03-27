const form = document.querySelector('.salut');
console.log("bonjour");
console.log(form);
console.log("salut");
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log("salut");
// })


const searchVideo = () =>{
  const querry = "squeezie"
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${querry}&type=video&key=${process.env.YOUTUBE_API_KEY}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
}

export { searchVideo };
