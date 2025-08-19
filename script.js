// ===================================================================
// AGGRESSIVE DEVTOOLS BLOCKING SCRIPT
// This section runs immediately to deter F12 / DevTools access.
// ===================================================================

// --- 1. Block Right-Click (Silently) ---
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// --- 2. Block all common DevTools shortcuts ---
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" || // F12
    (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I
    (e.ctrlKey && e.shiftKey && e.key === "J") || // Ctrl+Shift+J
    (e.ctrlKey && e.shiftKey && e.key === "C") || // Ctrl+Shift+C
    (e.ctrlKey && e.key === "U") // Ctrl+U (View Source)
  ) {
    e.preventDefault();
  }
});

// --- 3. Extremely aggressive "debugger" loop to freeze DevTools ---
(function () {
  setInterval(function () {
    try {
      debugger;
    } catch (err) {}
  }, 50);
})();

// --- 4. Add a warning message in the console ---
const style =
  "font-size: 20px; font-weight: bold; color: red; background: yellow; padding: 10px; border-radius: 5px;";
console.log("%cWARNING!", style);
console.log(
  "This browser feature is intended for developers. Tampering with the code here can compromise your security or break the site."
);

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
