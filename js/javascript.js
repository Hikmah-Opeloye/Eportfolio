

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  
}
/* ********************** Modal 2 working**************************/
//get portfolio container
const container = document.getElementById('MYWORK')

//add event listener
container.addEventListener('click', e => {
  //prevent default submit action
  e.preventDefault()
// get first open buttons
  const modalToggle = e.target.closest('.open-btn')
 //check if item is not a modal and stop
  if(! modalToggle) return
// select the modal
  const modal = modalToggle.parentNode.previousSibling.parentNode.nextElementSibling
  //select close button
  const closeButton = modal.querySelector('.close-btn')
// open modal
  modal.classList.add('is-open')
//add event listener
  closeButton.addEventListener('click', _ => {
    //close modal
    modal.classList.remove('is-open')
  })
})
/* ********************** Modal *************************** */
/* ********************** getting elements *************************** */
/*
//get modal element
var modal = document.getElementsByClassName('modal');
//get image open button
var openbtn = document.getElementsByClassName('open-btn');
//get close button
var closebtn = document.getElementsByClassName('close-btn');
/* ********************** loops and event listeners *************************** 


//listen for click
for (var i = 0; i < openbtn.length; i++) {
  openbtn[i].addEventListener('click',openModal);
  } 

//listen for close click
for (var i = 0; i < closebtn.length; i++){
  closebtn[i].addEventListener('click',closeModal);
  }

/* ********************** functions *************************** 

//function to open modal
function openModal(){
  for (var i = 0; i < modal.length; i++){
   modal[i].style.display = 'block';
    }
  }
function closeModal(){
  for (var i = 0; i < modal.length; i++){
  modal[i].style.display = 'none';
    }
  }
*/
/* ********************** smoothscroll *************************** */
const scroll = new SmoothScroll('navbar a[href*="#"]',{speed: 800});
/* ********************** mobile menu *************************** */



var nav = document.getElementById('nav-icon');
var control = document.getElementById('minimal');
var myList = document.getElementsByClassName('myList');


function resize(x){
  if(x.matches){
    for(var q = 0; q < myList.length; q++)
  myList[q].addEventListener('click',open);
  nav.addEventListener('click',open);
  }
}

function open(){ 
  if(control.style.display === 'grid'){
    control.style.display = 'none';  
  }else{
   control.style.display = 'grid';
  }
  
}
var x = window.matchMedia("(max-width: 768px)");
resize(x)
x.addListener(resize)
/* ********************** sticky nav *************************** */
window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* ********************** animated nav *************************** */
