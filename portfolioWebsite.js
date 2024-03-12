let menuItem = document.querySelectorAll(".menu-item");
let section = document.querySelectorAll(".section");
let aboutMe = document.getElementById('about-me')

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    menuItem.forEach((item) => {
      item.classList.remove("menu-item-active");
    });
    item.classList.add("menu-item-active");
    aboutMe.style.transform = 'translateY(-100%)';
    aboutMe.style.display = 'none';
    
    section[0].classList.add('section-active');

  });
});
