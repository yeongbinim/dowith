import React from "react";
import Presenter from "./Presenter";
// import { moviesApi } from "api";

const Container = () => {
	return (
		<Presenter result={{}} error={"Can't find anything."} loading={false}/>
	);
}

export default Container;