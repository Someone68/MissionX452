window.addEventListener("load", () => {
	setTimeout(() => {
		typeEffect(s("#title"), "Round Trip", 50, () => {
			s("#title").classList.add("done");
		});
	}, 1000);
});
