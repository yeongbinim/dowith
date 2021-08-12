import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
	${reset};
	a{
		text-decoration:none;
		color:inherit;
		position: relative;
		z-index:1;
	}
	*{
		box-sizing:border-box;
	}
	body{
		overflow-x:hidden;
		font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	#root{
		font-size:16px;
	}
	@media(max-width:1000px){
		html{font-size:10px};
	}
	@media(max-width:380px){
		html{font-size:8px};
	}
`;

export default globalStyles;