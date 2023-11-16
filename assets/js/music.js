async function fetchMusicData() {
  const res = await fetch("http://localhost:4000/api/billboardTop100/json?limit=5");
  const json = await res.json();
  console.log(json);

  if(json.length > 0){
    $(".music-list").empty()
    json.map((item, i) => {
        $(".music-list")[0].insertAdjacentHTML(
        "beforeend",
        `
            <li class="music-list-item">
            <div class="music-item-number">${i+1}</div>
            <div class="music-item-image">
                <img src="${item.img}" alt="">
            </div>
            <div class="music-item-name" >
                ${item.song}
            </div>
            <div class="music-item-control" ><i class="fa-solid fa-play"></i></div>
        </li> 
        `
        );
    });
    }
}


fetchMusicData();

//fetch data from http://localhost:4000/api/billboardTop100/json
