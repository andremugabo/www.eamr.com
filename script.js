/* ==============================================================================================
                                        VARIABLES START
=============================================================================================== */ 
const btn_responsive = document.querySelector(".btn_responsive");
const navbar_nav = document.querySelector(".navbar-nav");
const btn_responsive_close = document.querySelector(".btn_responsive_close");
const slide = document.querySelector(".slide");
const btn_left = document.querySelector(".btn_left");
const btn_right = document.querySelector(".btn_right");
let background = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
const gallery_pic = document.querySelector(".gallery_pic");
let backgroundPosition = 0;
let activeSlide = background[backgroundPosition];



/* ==============================================================================================
                                         VARIABLES END
=================================================================================================*/ 
/* ==============================================================================================
                                        FUNCTION START
=================================================================================================*/ 
function removeHide(element){
    element.classList.remove("hide");
}

function addHide(element){
    element.classList.add("hide");
}

function display(element){
    element.style.display = "flex";
}

function displayNone(element){
    element.style.display = "none";
}



function nextSlide(){  
    // e.preventDefault();
    backgroundPosition ++;
    if (backgroundPosition > background.length - 1) {
        backgroundPosition = 0;
        activeSlide = background[backgroundPosition];
        activeslide(activeSlide);
    }else{
        activeSlide = background[backgroundPosition];
        activeslide(activeSlide); 
    }    
}

function prevSlide(){
    // e.preventDefault();
    backgroundPosition --;
    if (backgroundPosition < 0 ) {
        backgroundPosition = background.length - 1; 
        activeSlide = background[backgroundPosition]; 
        activeslide(activeSlide);   
    }else{
        activeSlide = background[backgroundPosition];
        activeslide(activeSlide);
    }
    
}

function activeslide(element){
    slide.style.backgroundImage = `url(../images/${element})`;
}
console.log(background.length);
// prevSlide();

setInterval(() => {
    backgroundPosition ++;
    if (backgroundPosition > background.length - 1) {
        backgroundPosition = 0;
        activeSlide = background[backgroundPosition];
        activeslide(activeSlide);
    } else {
        activeSlide = background[backgroundPosition];
        activeslide(activeSlide);
    }
    
}, 3000);

function gallery() {
    for (let i = 1; i <= 30; i++) {
        
        gallery_pic.innerHTML += `
    <div class="gallery">
            <a target="_blank" href="../images/gallery/${i}.jpg">
              <img src="../images/gallery/${i}.jpg" alt="Cinque Terre">
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
    `
    }
    
}
if (gallery_pic) {
    gallery();
}


/* ===============================================================================================
                                        FUNCTION END
==================================================================================================*/ 

/* ===============================================================================================
                                        EVENT START
==================================================================================================*/ 
if (btn_responsive) {
    btn_responsive.addEventListener('click',function(){
        display(navbar_nav);
        removeHide(btn_responsive_close);
        displayNone(btn_responsive);
    })
}

if (btn_responsive_close) {
    btn_responsive_close.addEventListener('click', function(){
        displayNone(navbar_nav);
        addHide(btn_responsive_close);
        display(btn_responsive);
    })
    
}

// if(slide){
    btn_left.addEventListener('click',prevSlide);
// }

    btn_right.addEventListener('click',nextSlide);

/* ===============================================================================================
                                        EVENT END
==================================================================================================*/ 
