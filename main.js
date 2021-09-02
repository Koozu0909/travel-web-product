/********  SHOWBARS  *********/
const navMenu = document.getElementById('nav-menu'),
    navToggle =  document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


//Swiper img
var swiper = new Swiper(".introduce_img-swiper", {
    spaceBetween: 10,
    loop:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
  },
});

// Tabs change
const about = document.querySelector(".describe-part-openlater");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});



////// Adults count
let countAdult = 0;
const valueAdult = document.querySelector("#value1");
const btnAdults = document.querySelectorAll(".btn1");
const valueGuest = document.querySelector("#guest_value");

btnAdults.forEach(function (btnAdult) {
  btnAdult.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      countAdult--;
    } else if (styles.contains("increase")) {
      countAdult++;
    } else {
      countAdult = 0;
    }

    if (countAdult > 4) {
      countAdult =4;
    }
    if (countAdult < 0) {
      countAdult =0;
    }
    if (countAdult === 0) {
      valueAdult.style.color = "#222";
    }
    valueAdult.textContent = countAdult;
  });
});
////// Children count
let countChildren = 0;
const valueChildren = document.querySelector("#value2");
const btnChildrens = document.querySelectorAll(".btn2");


btnChildrens.forEach(function (btnChildren) {
  btnChildren.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease1")) {
      countChildren--;
    } else if (styles.contains("increase1")) {
      countChildren++;
    } else {
      countChildren = 0;
    }

    if (countChildren > 4) {
      countChildren =4;
    }
    if (countChildren < 0) {
      countChildren =0;
    }
    if (countChildren === 0) {
      valueChildren.style.color = "#222";
    }
    valueChildren.textContent = countChildren;
  });
});
//Infants count (Under 2)
let countInfant = 0;
const valueInfant = document.querySelector("#value3");
const btnInfants = document.querySelectorAll(".btn3");


  btnInfants .forEach(function (btnInfant) {
  btnInfant.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease2")) {
      countInfant--;
    } else if (styles.contains("increase2")) {
      countInfant++;
    } else {
      countInfant = 0;
    }

    if (countInfant > 4) {
      countInfant =4;
    }
    if (countInfant < 0) {
      countInfant =0;
    }
    if (countInfant === 0) {
      valueInfant.style.color = "#222";
    }
    valueInfant.textContent = countInfant;
  });
});

////// Block
const blockBtn = document.querySelector(".block-btn");
const block = document.querySelector(".block-overlay");
const closeBtn = document.querySelector(".close-btn");
const blockContainer = document.querySelector(".block-container");

blockBtn.addEventListener("click", function () {
  block.classList.add("open-block");
});
closeBtn.addEventListener("click", function () {
  block.classList.remove("open-block");
});
blockBtn.addEventListener("click", function () {
  blockContainer.classList.add("block-transform");
});
closeBtn.addEventListener("click", function () {
  blockContainer.classList.remove("block-transform");
});


//Swiper place stay
var swiper = new Swiper(".place-stay-res", {
  spaceBetween: 0,
  loop:true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: true,
  },
  breakpoints:{
    400: {
      slidesPerView: 3,
    },
},
});

//Swiper reviews
var swiper = new Swiper(".reviews-swiper", {

});
///// block-responsive-overlay

const openResponsiveBtn = document.querySelector(".block-responsive-btn");
const blockResponsive = document.querySelector(".block-responsive-overlay");
const closeResponsiveBtn = document.querySelector(".close-responsive-btn");

openResponsiveBtn.addEventListener("click", function () {
  blockResponsive.classList.add("open-block-responsive");
});
closeResponsiveBtn.addEventListener("click", function () {
  blockResponsive.classList.remove("open-block-responsive");
});