let menuItem = document.querySelectorAll(".menu-item");
let section = document.querySelectorAll(".section");
let aboutMe = document.getElementById("about-me");
let navBtn = document.querySelectorAll(".btn");

let contacts = document.querySelector(".contacts");
let contactsButton = document.querySelector("#contacts-btn");
let socialsButton = document.querySelector("#socials-btn");
let portfolioButton = document.querySelector("#portfolio-btn");
let contactsInfo = document.querySelectorAll('.contacts p');

let socials = document.querySelector(".socials");
let socialsInfo = document.querySelectorAll('.socials p');


/*SWITCHING BETWEEN MENU SECTIONS*/
menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    menuItem.forEach((item) => {
      item.classList.remove("menu-item-active");
    });
    item.classList.add("menu-item-active");
    aboutMe.style.transform = "translateY(-100%)";
    aboutMe.style.display = "none";

    section.forEach((section) => {
      section.classList.remove("section-active");
    });
    let id = item.getAttribute("data-id");
    let activeSection = Array.from(section).filter((section) => {
      return section.dataset.id === id;
    });
    activeSection.forEach((section) => {
      section.classList.add("section-active");
    });
  });
});

/*SWITCHING BETWEEN NAVBAR BUTTONS*/
navBtn.forEach((element) => {
  element.addEventListener("click", () => {
    navBtn.forEach((element) => {
      element.classList.remove("btn-active");
    });
    element.classList.add("btn-active");
  });
});

/*DISPLAYING AND HIDDING CONTACT INFORMATIONS*/
contactsButton.addEventListener("click", () => {
  socials.classList.remove('contacts-active');
  contacts.classList.add("contacts-active");
});
contacts.addEventListener("click", () => {
  setTimeout(() => {
    contacts.classList.remove("contacts-active");
    contactsButton.classList.remove("btn-active");
    portfolioButton.classList.add("btn-active");
  }, 3000);
});

/*COPYING CONTACT INFOS TO CLIPBOARD*/
contactsInfo.forEach(element => {
  element.addEventListener('click', () => {
    const elementContent = element.textContent;
    element.textContent = 'Copied!'
    element.classList.add('content-copied');
    setTimeout(() => {
      element.textContent = elementContent;
    }, 1000);
    setTimeout(() => {
      element.classList.remove('content-copied');
    }, 1500);
  })
})

socialsButton.addEventListener("click", () => {
  contacts.classList.remove('contacts-active');
  socials.classList.add("contacts-active");
});
socials.addEventListener("click", () => {
  setTimeout(() => {
    socials.classList.remove("contacts-active");
    socialsButton.classList.remove("btn-active");
    portfolioButton.classList.add("btn-active");
  }, 3000);
});

socials.addEventListener('mouseout', () => {
  setTimeout(() => {
      socials.classList.remove("contacts-active");
      socialsButton.classList.remove("btn-active");
      portfolioButton.classList.add("btn-active");
  }, 5000);
})
contacts.addEventListener('mouseout', () => {
  setTimeout(() => {
      contacts.classList.remove("contacts-active");
      contactsButton.classList.remove("btn-active");
      portfolioButton.classList.add("btn-active");
  }, 5000);
})