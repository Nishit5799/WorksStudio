const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function loading() {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    display: "none",
  });
}
loading();

document.querySelector("#footer .up").addEventListener("click", () => {
  scroll.scrollTo(0);
});

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");
elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgimg = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`;
  });
});
var revert = true;
var plus = document.querySelector(".ri-add-line");

function navPlus() {
  plus.addEventListener("click", function () {
    if (revert) {
      plus.style.transform = "rotate(0deg)";
      revert = false;
    } else {
      plus.style.transform = "rotate(45deg)";
      revert = true;
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Get the icon element
    const addIcon = document.querySelector(".ri-add-line");

    // Get the parent element containing h2 elements
    const parentContainer = document.getElementById("right");

    // Add a click event listener to the icon
    addIcon.addEventListener("click", function () {
      // Get all the h2 elements under the same parent
      const h2Elements = parentContainer.querySelectorAll("h2");

      // Toggle the visibility of each h2 element with smooth transition
      h2Elements.forEach(function (h2) {
        const isVisible = gsap.getProperty(h2, "x") === 0;
        gsap.to(h2, {
          x: isVisible ? "80%" : 0,
          opacity: isVisible ? 0 : 1,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  });
}
navPlus();

document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    direction: "vertical",
  });

  // Get the h2 elements under the #right parent
  const h2Elements = document.querySelectorAll("#right h2");

  // Add a scroll event listener
  scroll.on("scroll", function (args) {
    // Check if the scroll position is greater than or equal to 100vh
    if (args.scroll.y >= window.innerHeight) {
      // Hide the h2 elements with a transition towards right
      h2Elements.forEach(function (h2) {
        gsap.to(h2, {
          x: "100%",
          duration: 0.5,
          ease: "power2.out",
          opacity: 0,
        });
      });
    } else {
      // Show the h2 elements
      h2Elements.forEach(function (h2) {
        gsap.to(h2, { x: 0, duration: 0.5, ease: "power2.out", opacity: 1 });
      });
    }
  });
});
