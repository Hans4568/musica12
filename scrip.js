const image = document.getElementById("image")
const play_btn = document.getElementById("play")
const pause_btn = document.getElementById("pause")
const replay_btn = document.getElementById("stop")
const tiempo = document.getElementById("tiempo")
const audio = document.getElementById("audio")
const volume_up_btn = document.getElementById("volume-up")
const volume_down_btn = document.getElementById("volume-down")
let isplaying = false;

play_btn.addEventListener('click',()=>{
    audio.play();
    image.style.animationPlayState = "running"
})

pause_btn.addEventListener('click',()=>{
    audio.pause();
    image.style.animationPlayState = "paused"
})

replay_btn.addEventListener('click',()=>{
    audio.load();
    image.style.animationPlayState = "paused"
})

window.addEventListener("load", () => {
    tiempo.max = audio.duration;
    setInterval(() => {
        tiempo.value = audio.currentTime;
    }, 1000);
});

tiempo.addEventListener("change", () => {
    audio.currentTime = tiempo.value;
});

audio.addEventListener("ended", () => {
    image.style.animationPlayState = "paused";
    play_pause_icon.classList.add("fa-play");
    play_pause_icon.classList.remove("fa-pause");
    isplaying = false;
});

volume_up_btn.addEventListener("click", () => {
    audio.volume += 0.2;
});
volume_down_btn.addEventListener("click", ()=> {
    audio.volume -= 0.2;
});
document.addEventListener("keyup", (event) =>{
    if(event.key == "ArrowUp"){
        audio.volume = audio.volume + 0.1;
    }
    else if(event.key == "ArrowDown"){
        audio.volume = audio.volume - 0.1;
    }
})
document.addEventListener("keyup", (event)=> {
    if(event.keyCode == 1){
        if(isplaying){
            audio.pause();
            img.style.animationPlayState = "paused"
            isplaying = false;
        }
        else{
            audio.play();
            img.style.animationPlayState = "running"
            isplaying = true;
        }
    }


})