let slideIndex = 0;
const intervalTime = 1500; // Slide interval in milliseconds
let slideInterval;

function startSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

function nextSlide() {
    const carouselInner = document.querySelector('.carousel-inner');
    const screenshots = document.querySelectorAll('.screenshot');
    const totalScreenshots = screenshots.length;

    slideIndex++;
    if (slideIndex >= totalScreenshots - 1  ) {
        slideIndex = 0;
    }

    const moveAmount = -slideIndex * screenshots[0].offsetWidth;
    carouselInner.style.transform = `translateX(${moveAmount}px)`;
}

function moveCarousel(n) {
    clearInterval(slideInterval);
    const carouselInner = document.querySelector('.carousel-inner');
    const screenshots = document.querySelectorAll('.screenshot');
    const totalScreenshots = screenshots.length;

    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = totalScreenshots - 5;
    }
    if (slideIndex >= totalScreenshots) {
        slideIndex = 0;
    }

    const moveAmount = -slideIndex * screenshots[0].offsetWidth;
    carouselInner.style.transform = `translateX(${moveAmount}px)`;

    // Restart slide interval
    startSlide();
}

// Start carousel
startSlide();

function openModal() {
    document.getElementById('downloadModal').style.display = 'flex';
}

// Close Modal
function closeModal() {
    document.getElementById('downloadModal').style.display = 'none';
}

function startDownload() {
    // Assuming you have a file like `bookie.apk` for Android
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://github.com/kripo16/Bookie/releases/download/Bookie-1.0.0/Bookie-1.0.0.apk'; // Replace with the actual APK file path
    downloadLink.download = 'Bookie.apk'; // This will prompt the download
    downloadLink.click();
    
    // Close the modal after initiating download
    closeModal();
}
function openPolicy() {
    window.open("https://www.termsfeed.com/live/206ee623-eeeb-4c5e-bfb4-2cdbc750cb2d")
}
function openTerms() {
    window.location.href = 'terms.html'
}
