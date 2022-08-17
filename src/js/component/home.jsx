import React from "react";

import Tareas from "./Tareas.jsx"

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1 className="text-center">ToDos</h1>
			<Tareas />
		</div>
	);
};

export default Home;
