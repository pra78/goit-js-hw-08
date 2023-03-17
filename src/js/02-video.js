import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle(() => {
    const currentTime = iframePlayer.getCurrentTime().then(function (seconds) {
        // seconds = the current playback position
        localStorage.setItem("videoplayer-current-time", seconds);
    }).catch(function (error) {
        // an error occurred
        console.log(error);
    })
}, 1000));

const savedTime = localStorage.getItem("videoplayer-current-time");

if (savedTime) {
    iframePlayer.setCurrentTime(savedTime);
}