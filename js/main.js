//
let more_button = document.querySelector('#more');

more_button.addEventListener('click', function(){
  window.scrollTo({top: 680, behavior: 'smooth'});
});

//activity button to "activity" page
let act_btn = document.querySelector('#activity');

act_btn.addEventListener('click', function (){
  location.href="./activity.html";
})