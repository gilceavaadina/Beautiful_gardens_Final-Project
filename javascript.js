//! TOGGLE-BUTTON
const toggleButton = document.getElementsByClassName('toggle-button')[0]

const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  
  navbarLinks.classList.toggle('active')
})

//! POP-UP IMAGE GALLERY
 document.querySelectorAll('.home-images img').forEach(image => {
  image.onclick=()=>{
    document.querySelector('.pop-up').style.display='block';
    document.querySelector('.pop-up img').src=image.getAttribute('src');
  }
});
  document.querySelector('.pop-up span').onclick= () => {
    document.querySelector('.pop-up').style.display='none';
  }

//! SUBSCRIBE BTN
const subscribeForm = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email-input");
const successMessage = document.getElementById("success-message");
// Add event listener to the form submission
subscribeForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  // Prevent the default form submission behavior
  //prevent the page not to refresh

  // Get the entered email address
  const emailAddress = emailInput.value;

  // Display the success message
  successMessage.style.display = "block";
  //the success message element's display is set to 'block' to make it visible
  successMessage.innerHTML = `<i class="fa fa-check"></i>You have been successfully subscribed!`;

  // Clear the email input field
  emailInput.value = "";
}); 

//! Testimonial home zone
function showReview(event) {
  const userTexts = document.querySelectorAll(".user-text");
  const userPics = document.querySelectorAll(".user-pic");

  userPics.forEach((pic) => pic.classList.remove("active-pic"));
  userTexts.forEach((text) => text.classList.remove("active-text"));
  const clickedIndex = Array.from(userPics).indexOf(event.target);
  userPics[clickedIndex].classList.add("active-pic");
  userTexts[clickedIndex].classList.add("active-text");
}
const userPics = document.getElementsByClassName("user-pic");

// Add event listeners to userPics elements
Array.from(userPics).forEach((pic) => {
  pic.addEventListener("click", showReview);
});

//! Gallery zone
function showPhotos() {
  document.getElementById('photo-gallery').classList.add('active');
  document.getElementById('photos-btn').classList.add('active');
  document.getElementById('video-gallery').classList.remove('active');
  document.getElementById('videos-btn').classList.remove('active');
}
function showVideos() {
  document.getElementById('photo-gallery').classList.remove('active');
  document.getElementById('video-gallery').classList.add('active');
  document.getElementById('photos-btn').classList.remove('active');
  document.getElementById('videos-btn').classList.add('active');
}


