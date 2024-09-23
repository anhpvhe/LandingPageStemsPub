const carousel = document.getElementById("carousel_review");
const carouselNews = document.getElementById("carousel_news");

const slides = carousel.querySelectorAll(".flex-shrink-0");
const slidesNews = carouselNews.querySelectorAll(".flex-shrink-0");

const totalSlides = slides.length;
const totalSlidesNews = slidesNews.length;

const slidesToShow = 3;
const gap = 16; // Total gap between images
const slideWidth = (100 / slidesToShow) - (gap / (3 * (100 / slidesToShow))); // Adjust for padding
let currentIndex = 0;
let currentIndexNews = 0;

// Clone the first few slides for infinite scroll
const firstThreeSlides = Array.from(slides).slice(0, slidesToShow).map(slide => slide.cloneNode(true));
firstThreeSlides.forEach(slide => carousel.querySelector('.flex').appendChild(slide));

const firstThreeSlidesNews = Array.from(slidesNews).slice(0, slidesToShow).map(slide => slide.cloneNode(true));
firstThreeSlidesNews.forEach(slide => carouselNews.querySelector('.flex').appendChild(slide));

document.getElementById("next_review").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= Math.ceil((totalSlides + slidesToShow) / slidesToShow)) {
        currentIndex = 0;
        carousel.querySelector(".flex").style.transition = "none"; // Disable transition for instant jump
        carousel.querySelector(".flex").style.transform = `translateX(0%)`;
        setTimeout(() => {
            carousel.querySelector(".flex").style.transition = "transform 0.3s"; // Re-enable transition
        }, 20);
    }
    updateCarousel();
});

document.getElementById("prev_review").addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = Math.ceil((totalSlides + slidesToShow) / slidesToShow) - 1;
        carousel.querySelector(".flex").style.transition = "none"; // Disable transition for instant jump
        carousel.querySelector(".flex").style.transform = `translateX(-${(currentIndex * slideWidth)}%)`;
        setTimeout(() => {
            carousel.querySelector(".flex").style.transition = "transform 0.3s"; // Re-enable transition
        }, 20);
    }
    updateCarousel();
});

document.getElementById("next_news").addEventListener("click", () => {
    currentIndexNews++;
    if (currentIndexNews >= Math.ceil((totalSlidesNews + slidesToShow) / slidesToShow)) {
        currentIndexNews = 0;
        carouselNews.querySelector(".flex").style.transition = "none"; // Disable transition for instant jump
        carouselNews.querySelector(".flex").style.transform = `translateX(0%)`;
        setTimeout(() => {
            carouselNews.querySelector(".flex").style.transition = "transform 0.3s"; // Re-enable transition
        }, 20);
    }
    updateCarouselNews();
});

function updateCarousel() {
    const offset = -currentIndex * slideWidth; // Adjusted for three slides and gaps
    carousel.querySelector(".flex").style.transform = `translateX(${offset}%)`;
}

function updateCarouselNews() {
    const offset = -currentIndexNews * slideWidth; // Adjusted for three slides and gaps
    carouselNews.querySelector(".flex").style.transform = `translateX(${offset}%)`;
}
