document.addEventListener("DOMContentLoaded", function () {
  // --- Header Logic ---
  const header = document.querySelector(".header");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mainMenu = document.querySelector(".main-menu");
  const mobileNavIcon = mobileNavToggle.querySelector("i");

  // Scroll event for changing header background
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add("scrolledHeader");
    } else {
      header.classList.remove("scrolledHeader");
    }
  }

  // Click event for mobile navigation toggle
  function mobileNavToggleHandler() {
    mainMenu.classList.toggle("mobile-nav-active");
    const isMobileNavOpen = mainMenu.classList.contains("mobile-nav-active");
    if (isMobileNavOpen) {
      mobileNavIcon.classList.remove("bi-list");
      mobileNavIcon.classList.add("bi-x");
    } else {
      mobileNavIcon.classList.remove("bi-x");
      mobileNavIcon.classList.add("bi-list");
    }
  }

  window.addEventListener("scroll", handleScroll);
  mobileNavToggle.addEventListener("click", mobileNavToggleHandler);

  // --- About Us Video Logic ---
  function initializeVideo() {
    const videoWrap = document.querySelector(".video-wrap");
    const playButton = document.querySelector(".play-btn");
    const youtubeVideo = document.getElementById("youtube-video");

    if (videoWrap && playButton && youtubeVideo) {
      playButton.addEventListener("click", function () {
        videoWrap.classList.add("playing");
        const videoSrc = youtubeVideo.src;
        // Add autoplay=1 to the src to start the video
        youtubeVideo.src = videoSrc + "&autoplay=1";
      });
    }
  }

  initializeVideo();
});
