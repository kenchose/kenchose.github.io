const images = document.querySelectorAll("[data-src]");

const preloadImage = (img) => {
	const src = img.getAttribute("data-src");
	if (!src) {
		return;
	}
	img.src = src;
};

const imgOptions = {
	root: null,
	threshold: 0,
	rootMargin: "0px 0px 200px 0px",
};

const lazyLoadImg = new IntersectionObserver((entries, lazyLoadImg) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			preloadImage(entry.target);
			lazyLoadImg.unobserve(entry.target);
		}
	});
}, imgOptions);

images.forEach((image) => {
	lazyLoadImg.observe(image);
});