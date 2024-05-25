const password1 = document.querySelector(".form__input2");
const password2 = document.querySelector(".form__input3");
password2.addEventListener("input", () => {
  if (password1.value === password2.value) {
    password1.style.border = "2px solid green";
    password2.style.border = "2px solid green";
  } else {
    password1.style.border = "2px solid red";
    password2.style.border = "2px solid red";
  }
});

const stars = document.querySelectorAll(".star");
function setRating(value) {
  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = parseInt(star.getAttribute("data-value"));
    setRating(value);
  });
});