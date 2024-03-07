//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let time = new Date.getHours();
let greeating = ""
let color = ""

if (time < 12) {
    greeating = "Good Morning"
    color = "red"
} else if (time >= 12 && time < 18) {
    greeating = "Good Afternoon"
    color = "green"
} else {
    greeating = "Good Evening"
    color = "blue"
}

ReactDOM.render(
    <h1>
        {greeating}
    </h1>,
    document.getElementById("root")
);