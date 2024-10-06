<<<<<<< HEAD
=======
const closeBtn = document.getElementById("close-btn");

// Add event listener for closing the modal via the close button
closeBtn.addEventListener("click", () => {
  navModal.classList.remove("nav__modal--active");
  overlay.classList.remove("nav__overlay--active");
  burgerBtn.classList.remove("active"); // Reset the burger button state as well
});


const burgerBtn = document.getElementById("burger-btn");
const navModal = document.getElementById("nav-modal");
const overlay = document.querySelector(".nav__overlay");
>>>>>>> 955f44b3b7d774f6f7beedc9639a064c0d95dc50

