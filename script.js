// JavaScript

const thumbs = document.querySelectorAll('.thumb');
const main = document.querySelector('#main-image');
const text = document.querySelector('#caption');


//loading
const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}
window.addEventListener('load', animation);


const items = document.querySelectorAll('.img-item');


// クリックで切り替え
thumbs.forEach(function(item, index) {
  item.onclick = function() {
     console.log(this.dataset.image);
    main.src = this.dataset.image;
 }
});


// for文
for(let i = 0; i < items.length; i++){

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
    filter: ['blur(100px)', 'blur(0)'],
  };
  
  const options = {
    duration: 600,
    delay: i * 400,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}