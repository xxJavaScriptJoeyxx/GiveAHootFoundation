


  function todaysdate(){
    var today = new Date()
    document.write(today.toDateString())
  
  
  }
function onClick(element) {
  document.getElementById("modPic").src = element.src;
  document.getElementById("mainPic").style.display = "block";
  let captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}




let i = 0;
let txt = "Hi thanks for giving a hoot, how can we help you today?";
var speed = 50;

function typeWriter() {
  if(i < txt.length){
    document.getElementById("livechat").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const closeForm = () => 
  document.getElementById("myForm").style.display = "none";

  // Get the modal
var modal = document.getElementById('chat');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



  