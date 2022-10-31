import { cubicOut } from 'svelte/easing';

export function horizontalSlide(
	node: HTMLElement,
	{ delay = 0, duration = 400, easing = cubicOut, axis = 'y' }
) {
	const style = getComputedStyle(node);
	const opacity = +style.opacity;
	const primaryDimension = axis === 'y' ? 'height' : 'width';
	const primaryDimensionValue = parseFloat(style[primaryDimension]);
	const secondaryDimensions = axis === 'y' ? ['Top', 'Bottom'] : ['Left', 'Right'];
	const paddingStartValue = parseFloat(style.padding + secondaryDimensions[0]);
	const paddingEndValue = parseFloat(style.padding + secondaryDimensions[1]);
	const marginStartValue = parseFloat(style.margin + secondaryDimensions[0]);
	const marginEndValue = parseFloat(style.margin + secondaryDimensions[1]);
	// @ts-ignore
	const borderWidthStartValue = parseFloat(style[`border${secondaryDimensions[0]}Width`]);
	// @ts-ignore
	const borderWidthEndValue = parseFloat(style[`border${secondaryDimensions[1]}Width`]);
	return {
		delay,
		duration,
		easing,
		// @ts-ignore
		css: (t) =>
			'overflow: hidden;' +
			`opacity: ${Math.min(t * 20, 1) * opacity};` +
			`${primaryDimension}: ${t * primaryDimensionValue}px;` +
			`padding-${secondaryDimensions[0].toLowerCase()}: ${t * paddingStartValue}px;` +
			`padding-${secondaryDimensions[1].toLowerCase()}: ${t * paddingEndValue}px;` +
			`margin-${secondaryDimensions[0].toLowerCase()}: ${t * marginStartValue}px;` +
			`margin-${secondaryDimensions[1].toLowerCase()}: ${t * marginEndValue}px;` +
			`border-${secondaryDimensions[0].toLowerCase()}-width: ${t * borderWidthStartValue}px;` +
			`border-${secondaryDimensions[1].toLowerCase()}-width: ${t * borderWidthEndValue}px;`
	};
}
