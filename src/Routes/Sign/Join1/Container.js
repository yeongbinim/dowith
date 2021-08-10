import React from "react";
import Presenter from "./Presenter";

const error = "Cant't find anything.";

const Container = () => {
	return (
		<Presenter result={{}} error={error} loading={false}/>
	);
}

export default Container;