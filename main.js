// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
const heartBtns = document.querySelectorAll('.like-glyph')
const errorModal = document.getElementById('modal')
// Your JavaScript code goes here!

heartBtns.forEach(btn => btn.addEventListener('click',()=>{
  mimicServerCall().then(data => {
    let serverMsg = data
    if (serverMsg === "Pretend remote server notified of action!"){
      if (btn.innerText === EMPTY_HEART){
        btn.innerText = FULL_HEART;
        btn.setAttribute("class","activated-heart");
      } else if (btn.innerText === FULL_HEART){
      btn.innerText = EMPTY_HEART;
      btn.setAttribute("class","like-glyph");
    }}
  } 
  ).catch((error)=>{
    errorModal.setAttribute('class','');
    errorModal.innerText = error;
  })
}))




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
