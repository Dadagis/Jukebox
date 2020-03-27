const searchVideo = () =>{
  const key = process.env.YOUTUBE_API_KEY;
  console.log(key);
  // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=squeezie&type=video&key=${process.env.YOUTUBE_API_KEY}`)
  // .then(response => response.json())
  // .then((data) => {
  //   console.log(data);
  // });
}

export { searchVideo };
