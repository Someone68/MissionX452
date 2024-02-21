window.addEventListener("load", () => {
  s("#title").classList.add("typing");
  typeEffect(s("#title"), "Mission X452", 50, () => {
    s("#start").style.top =
      s("#startplaceholder").getBoundingClientRect().top + "px";
  });
});
