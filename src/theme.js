const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
	small: calcRem(14),
	base: calcRem(16),
	normal: calcRem(21),
	h3: calcRem(28),
	h2: calcRem(36),
	h1: calcRem(42),
	titleSize: calcRem(50),
};

const paddings = {
	small: calcRem(8),
	base: calcRem(10),
	lg: calcRem(12),
	xl: calcRem(14),
	xxl: calcRem(16),
	xxxl: calcRem(18),
};

const margins = {
	small: calcRem(8),
	base: calcRem(10),
	lg: calcRem(12),
	xl: calcRem(14),
	xxl: calcRem(16),
	xxxl: calcRem(18),
};

const interval = {
	base: calcRem(50),
	lg: calcRem(100),
	xl: calcRem(150),
	xxl: calcRem(200),
};

const verticalInterval = {
	base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "450px",
	tablet: "768px",
	tabletL: "1024px",
};

const colors = {
	main: "#3d69fa",
	background : "#f0f4f8",
	black: "#000000",
	white: "#FFFFFF",
	gray_1: "#222222",
	gray_2: "#767676",
	green_1: "#3cb46e",
};

const device = {
	mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
	mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
	mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
	tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
	tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
	fontSizes,
	colors,
	deviceSizes,
	device,
	paddings,
	margins,
	interval,
	verticalInterval,
};

export default theme;