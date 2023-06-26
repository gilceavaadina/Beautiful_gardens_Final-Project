//! TOGGLE-BUTTON
const toggleButton = document.getElementsByClassName('toggle-button')[0]
// we use document getElementsByClassName to select all elements in the doc with the class name "toggle-button"
// [0] access the first element in the colection
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  // this add a event listener to the toggle-button , especially for the click event. when the button is clicked, the code inside the callback function will be executed.
  //the classlist property provides methods to add, remove or toggle CSS classes on an elmement.  HERE it toggles the presence of active classs on the navbarLinks
  navbarLinks.classList.toggle('active')
  //  the code sets up an event listener for a toggle button. When the button is clicked, it toggles the presence of the 'active' class on the navbarLinks element
})
  //! POP-UP IMAGE GALLERY
  //A thumbnail is a small image that represents a larger image (when clicked on), and is often recognized with a border around it:
  //? EXPLAIN

  // document.querySelectorAll() selecteaza toate elementele tag <img> care sunt descendente ale elementelor cu clasa home-image. Returneaza  o lista cu aceste elemente.
  // forEach ( image =>{}), the forEach method is called on the NodeList allowing you to iterate over each image element individually.
  
 document.querySelectorAll('.home-images img').forEach(image => {
  image.onclick=()=>{
    //image.onclick =() =>{}. Atribuie un eveniment onclick to each image. When an image is clicked, the code inside the arrow function will be executed.
    
    document.querySelector('.pop-up').style.display='block';
    //this sets the CSS display property of the element with the class "pop-up " to "block"  , making it visible. it shows the pop-up container.

    document.querySelector('.pop-up img').src=image.getAttribute('src');
    //  this above sets the 'src' attribute of the <img> element within the pop-up container to the same sources as the clicked image. It displays the clicked image in the pop-up.
  }
});
  document.querySelector('.pop-up span').onclick= () => {
    // this above selects the span element within the pop-up container
    //onclick assign an event handle onclick to the span. When span is clicked , the code inside the arrow function will be executed.
    document.querySelector('.pop-up').style.display='none';
    //it closes the pop-up( a window over the principal window)
  }


  //! SUBSCRIBE BTN
  // Get the necessary elements
const subscribeForm = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email-input");
const successMessage = document.getElementById("success-message");

// Add event listener to the form submission
subscribeForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
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



// Testimonial home zone
function showReview(event) {
  const userTexts = document.querySelectorAll(".user-text");
  const userPics = document.querySelectorAll(".user-pic");

  userPics.forEach((pic) => pic.classList.remove("active-pic"));
  //this removes the active-pic class from all the user picture elements. It ensures that no user picture is highlighted as the active one initially
  userTexts.forEach((text) => text.classList.remove("active-text"));
//this removes all the active-text classes  from all the user text elements. It ensures that no testimonials text is displayed as active initially.
  const clickedIndex = Array.from(userPics).indexOf(event.target);
// this determines  the index of the clicked user picture by converting the 'userPic' collection to an array and finding the index of the event target eithin the array
  userPics[clickedIndex].classList.add("active-pic");
  // this adds the 'active-pic'  class to the user picture element at the 'clickedIndex' , making it visually distinguishable as the active picture
  userTexts[clickedIndex].classList.add("active-text");
  //this ddds the' active-text' class to the user text  element at the 'clickedIndex', making the corresponding testimonial text visible.
}

const userPics = document.getElementsByClassName("user-pic");
// this selects all the elements  with the class 'user-pic' and assigns them to the 'userPics' variable.


// Add event listeners to userPics elements
Array.from(userPics).forEach((pic) => {
  //this converts the 'userPics' collection to an array and iterates over each element using the forEach method.
  pic.addEventListener("click", showReview);
  // this adds a 'click' event listener to each user picture element. When a user picture is clicked, the 'showReview' function will be executed to handle the event
});


//  Gallery zone
function showPhotos() {
  document.getElementById('photo-gallery').classList.add('active');
  document.getElementById('photos-btn').classList.add('active');
  document.getElementById('video-gallery').classList.remove('active');
  document.getElementById('videos-btn').classList.remove('active');
}
//function is responsible from displaying the photo gallery and activating the corresponding button while deactivating the video gallery and its button.

function showVideos() {
  document.getElementById('photo-gallery').classList.remove('active');
  document.getElementById('video-gallery').classList.add('active');
  document.getElementById('photos-btn').classList.remove('active');
  document.getElementById('videos-btn').classList.add('active');
}
//When showPhotos() is called, the photo gallery is displayed and its button is activated, while the video gallery and its button are deactivated. Conversely, when showVideos() is called, the video gallery is displayed and its button is activated, while the photo gallery and its button are deactivated. This allows for toggling between photo and video content based on user interaction.


