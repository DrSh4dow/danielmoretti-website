export function scrollToSection(sectionId: string) {
	const elem = document.querySelector(sectionId);
	if (!elem) return;

	const elemPosition = elem.getBoundingClientRect().top;
	const offSetPosition = elemPosition + window.pageYOffset - 72;

	window.scrollTo({
		top: offSetPosition,
		behavior: 'smooth'
	});
}
