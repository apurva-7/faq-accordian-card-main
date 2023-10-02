const button = document.querySelectorAll(".accordion-item");
const collapse = document.querySelectorAll(".accordian-content");
const blank = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => {
		collapse[i].classList.toggle("hidden");
		button[i].classList.toggle("bold");
	});
}
