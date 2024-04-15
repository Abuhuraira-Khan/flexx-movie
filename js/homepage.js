//---- start gsap animation ----//
//---- start gsap animation ----//
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// let smooth = ScrollSmoother.create({
//     wrapper:"#movie-section",
//     content:"#movie-container",
// });



const headerG = gsap.to("#nav-header",{
    position:"fixed",
    top:0,
    backgroundColor:"rgb(0,0,0,90%)",
    scrollTrigger:{
        trigger:"#nav-header",
        scroller:"body",
        scrub:true,
        // markers:true,
        start:"top -10%",
    }
});
const menuG = gsap.to("#menu div",{
    x:50,
    stagger:0.1,
    duration:0.1,
});

const mainSliderG = gsap.from("#slider-container",{
    scale:0,
    duration:0.5,
});

const popularSecTitleG = gsap.from("#popular-title",{
    opacity:0,
    y:-30,
});

const popularSecSliderG = gsap.from("#top-liked-movie, #top-watched-movie, #coming-soon-movie",{
    delay:1,
    x:500,
    stagger:.5,
});

// const movieShowG = gsap.from("#movie-section #movie-container .vdo",{
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#movie-section .movie-container .vdo",
//         scroller:"body",
//         scrub:true,
//         markers:true,
//     }
// })


const mc = document.querySelectorAll("#movie-section .movie-container").forEach((movieC)=>{
    const vdo = movieC.querySelectorAll(".vdo");
    gsap.from(vdo,{
            y:300,
            opacity:0,
            scrollTrigger:{
                trigger:vdo,
                scroller:"body",
                start:"-90% 90%",
                end:"-85% 90%",
                scrub:2,
                // markers:true,
            }
        })

})



//------ start website loader ------//
// window.addEventListener("load", function () {
//     // Hide the preloader when the DOM content is fully loaded
//     var preloader = document.getElementById("preloader");
//     preloader.style.display = "none";
// });

//------ start header ------//
const membershipBtn = document.querySelector("#membership-btn");

membershipBtn.addEventListener("click", ()=> {
    let membershipPackage = document.querySelector("#membership-package");
    membershipPackage.style.top = "0px";
    membershipPackage.style.transition = ".3s";
    document.querySelector("#main").addEventListener("click", () => {
        if(membershipPackage.style.top == "0px"){
            membershipPackage.style.top = "-1000%"
        };
    })
})

// search bar functionality
 document.querySelector("#search-inp  svg").addEventListener("click", () => {
    let searchBar = document.querySelector("#search-inp  input");
    gsap.to(searchBar,{
        duration: .5,
                    visibility: "visible",
                    x: 50,
    })
    document.querySelector("#main").addEventListener("click", () => {
        if(searchBar.style.visibility == "visible"){
            searchBar.style.visibility = "hidden"
        };
    })
});


//----- start main section ------//


//----- start main section > main slider -----//


const slideLeftBtn = document.querySelector("#slide-left-btn");
const slideRightBtn = document.querySelector("#slide-right-btn");
const sliderContent = document.querySelector("#slider-content");
const slides = document.querySelectorAll(".slider-big img");
let currentIndex = 0;
let sliderWidth = sliderContent.offsetWidth;

slideLeftBtn.addEventListener("click", slideLeft);
slideRightBtn.addEventListener("click", slideRight);
updateSlider();

function slideLeft() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function slideRight() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const newPosition = -currentIndex * sliderWidth;
    sliderContent.style.transform = `translateX(${newPosition}px)`;
    sliderContent.style.transition = ".5s"
}

// Auto slide
setInterval(() => {
    slideRight();
}, 3000);


// start movie slide
const movieContainers = document.querySelectorAll(".movie-container");

movieContainers.forEach((container) => {
  const movieSlideRight = container.querySelector(".movie-right-arrow");
  const movieSlideLeft = container.querySelector(".movie-left-arrow");
  const videos = container.querySelectorAll(".vdo");
  let currentSlide = 0;
  let slideWidth = videos[0].offsetWidth;
  let slidesLength = videos.length;

  movieSlideRight.addEventListener("click", () => {
    if (currentSlide < slidesLength - 4) {
      currentSlide++;
      translateSlides();
    }
  });

  movieSlideLeft.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      translateSlides();
    }
  });

  function translateSlides() {
    videos.forEach((video) => {
      video.style.transform = `translateX(-${currentSlide * (slideWidth + 15)}px)`;
      video.style.transition =".5s"
    });
  }
});
// console.log(movieContainer);





//------ start footer -----//
function footerYear(){
    document.getElementById("last-footer-year").innerHTML = new Date().getFullYear();
}
footerYear();

