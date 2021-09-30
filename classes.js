// const buttonEl = document.querySelector('#unmuteButton');

// buttonEl.addEventListener('click', unmuteVideo);
// let muted = true;

// function showMuteButton () {
//   if (document.activeElement.id == 'video') {
//     buttonEl.classList.toggle('hidden');
//     window.removeEventListener('blur', showMuteButton);
//   }
// }

// function unmuteVideo () {
//   const videoEl = document.querySelector('#video');
//   const player = new Vimeo.Player(videoEl);
//   player.setMuted(!muted);
//   muted = !muted;
// }

// // There are some limitations to what we can do with autoplay videos
// // https://developer.chrome.com/blog/autoplay/ - specifically that the user
// // must interact with the video before we can unmute it
// // we can't technically detect a click on an iframe (because it's a whole other site!)
// // so we have to do a little bit of witchcraft to get this working. check out
// // this question & answer on stack overflow for more details
// // https://stackoverflow.com/a/30904449
// window.focus();




const menuController = document.getElementById('menu-hamburger');
menuController.addEventListener('click', function() {
  

  document.querySelector('.menu').classList.toggle('menu-open');
});

document.getElementById('menu-close').addEventListener('click', function() {
  console.log('close anonymous function was clicked');
  document.querySelector('.menu').classList.remove('menu-open');
});