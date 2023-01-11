const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault(); // prevent the form from submitting

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thank you for your message, ${name}! We will get back to you at ${email} as soon as possible. Your message was: ${message}`);
});

const navMenu = document.getElementById("nav-menu");
  const navToggle = document.querySelector("button");

  navToggle.addEventListener("click", function() {
    navMenu.classList.toggle("open");
  });
