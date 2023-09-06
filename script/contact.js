
function contact(){
    let contacts = $("#first").val()
    
    alert("Thanks " + contacts + " for signing up for our newsletter.")
  }


  function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }

   function news() {

    let emailAdd = $("#email1").val()
    alert("Thank you " + emailAdd + " for your submission!")
  }

  function contactUs(){
    let contactMe = $("#firstLast").val()
    
    alert("Thanks " + contactMe + " for your information someone will contact you shortly")
  }

  var modal = document.getElementById('subscribe')


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}