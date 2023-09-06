$("#hideit").hide()
$("#like").hide()
$("#like2").hide()
$("#like3").hide()
$("#hoot1").hide()
$("#posthoot1").hide()
$(".hidehoot1").hide()
$("#hoot2").hide()
$("#posthoot2").hide()
$(".hidehoot2").hide()

$("#hoot3").hide()
$("#posthoot3").hide()
$(".hidehoot3").hide()

// $("#welcome").hide()

 

//click for groups, events and friends
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else {
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

//nav on small screens
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");

  }
}



// closes signup modal
var modal1 = document.getElementById('signup');
var modal2 = document.getElementById('login');
var modal3 = document.getElementById('winnerbox')
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }

  if (event.target == modal2) {
modal2.style.display = "none";
}
if(event.target == modal3){
  modal3.style.display = "none";
}
}

function newPost(){
  document.getElementById("status").innerHTML = document.getElementById("new").value
            $("#hideit").show()
  

  
}

function newHoot(){
    document.getElementById("hoot1").innerHTML = document.getElementById("hootbutt1").value
              $("#hoot1").show()
              $("#posthoot1").show()
            
    
  
    
  }

  function postHoot(){
    document.getElementById("newhoot1").innerHTML = document.getElementById("hoot1").value
      $(".hidehoot1").show()
      $(".hideafter").hide()
     
  
  }

  function newHoot2(){
    document.getElementById("hoot1").innerHTML = document.getElementById("hoot2").value
              $("#hoot2").show()
              $("#posthoot2").show()
            
    
  
    
  }

  function postHoot2(){
    document.getElementById("newhoot2").innerHTML = document.getElementById("hoot2").value
      $(".hidehoot2").show()
      $(".hideafter2").hide()
     
  
  }

  function newHoot3(){
    document.getElementById("hoot3").innerHTML = document.getElementById("hoot3").value
              $("#hoot3").show()
              $("#posthoot3").show()
            
    
  
    
  }

  function postHoot3(){
    document.getElementById("newhoot3").innerHTML = document.getElementById("hoot3").value
      $(".hidehoot3").show()
      $(".hideafter3").hide()
     
  
  }
  


$("#shows").click(function(){
    $("#like").show();
  });
  
$("#shows2").click(function(){
    $("#like2").show();
  });
  
$("#shows3").click(function(){
    $("#like3").show();
  });



var i = 0;
var txt = "Congratulations choose your prize!";
var speed = 50;

function typeWriter2() {
  if(i < txt.length){
    document.getElementById("winchat").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  }
}

function welcome(){
  let user = prompt("Hoo are you?")
  document.write(user)
  $("#welcome").show()

}