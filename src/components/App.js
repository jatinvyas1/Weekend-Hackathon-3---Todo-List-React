import React from "react";
import "./../styles/App.css";

function App() 
{
	return (
	<div id="main">
	//Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component.
	<textarea id = "task"></textarea>
	<button id = "btn" onClick={handleClick}></button>
	</div>
	);
}


export default App;
