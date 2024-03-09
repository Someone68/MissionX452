window.addEventListener("load", () => {
  s("#title").classList.add("typing");
  typeEffect(
    s("#title"),
    "Mission X452",
    80,
    () => {
      s("#title").classList.add("done");
      s("#start").style.top =
        s("#startplaceholder").getBoundingClientRect().top + "px";
    },
    false
  );
});
