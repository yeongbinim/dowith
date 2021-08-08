import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
	${reset};
	a{
		text-decoration:none;
		color:inherit;
	}
	*{
		box-sizing:border-box;
	}
	body{
		background-color:#f3f7fa;
		font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	#root{
		font-size:16px;
	}
	@media(max-width:900px){
		html{font-size:10px};
	}
`;

export default globalStyles;