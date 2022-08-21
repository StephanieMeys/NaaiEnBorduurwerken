// Dropdown menu bij clicking the hamburg
function menuOnClick() {
    document.getElementById("hamburg").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
}

// Dropdown extra tools bij clicking the arrow
function dropdownOnClick() {
    document.getElementById("openDrop").classList.toggle("change");
}

// Carousel
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel_item");
    const dottHtml = Array.from(items, () => {
        return '<span class="carousel-dott"></span>';
    });

    carousel.insertAdjacentHTML(
        "beforeend",
    `
		<div class="carousel_nav">
			${dottHtml.join("")}
		</div>
	`
    );

    const dotts = carousel.querySelectorAll("carousel-dott");

    dotts.forEach((dott, i) => {
        dott.addEventListener("click", () => {

            items.forEach((item) => 
            item.classList.remove("carousel-item-selected")
            );
            dotts.forEach((dott) => 
            dott.classList.remove("carousel-dott-selected"));

            items[i].classList.add("carousel-item--selected");
            dott.classList.add("carousel-dott--selected")
        });
    });
    items[0].classList.add("carousel-item--selected");
  dotts[0].classList.add("carousel-button--selected");
});
