
const mainMenu = document.querySelector(".mainMenu")
const closeMenu = document.querySelector(".closeMenu")
const openMenu = document.querySelector(".openMenu")
const menuItems = document.querySelectorAll(".mainMenu li a")

function toggleMenu() {
  if (mainMenu.style.display === "flex") {
    mainMenu.style.display = "none"
    mainMenu.style.top = "-100%"
  } else {
    mainMenu.style.display = "flex"
    mainMenu.style.top = "0"
  }
}

openMenu.addEventListener("click", toggleMenu)
closeMenu.addEventListener("click", toggleMenu)

menuItems.forEach((item) => {
  item.addEventListener("click", toggleMenu)
})

// Adjust menu display on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    mainMenu.style.display = "flex"
    mainMenu.style.top = "0"
  } else {
    mainMenu.style.display = "none"
    mainMenu.style.top = "-100%"
  }
})


//NEWS CONTAINER
const newsSingleAll = document.querySelectorAll(".news-container .news-single");

let currentActive = 0;
let totalNews = newsSingleAll.length;
let duration = 3000;

const removeAllActive = () => {
  newsSingleAll.forEach((n) => {
    n.classList.remove("active");
  });
};

const changeNews = () => {
  if (currentActive >= totalNews - 1) {
    currentActive = 0;
  } else {
    currentActive += 1;
  }

  removeAllActive();
  newsSingleAll[currentActive].classList.add("active");
};

setInterval(changeNews, duration);

