
const storedName = localStorage.getItem('userName');
let name = '';
if (storedName) {
	name = storedName;
} else {
	name = 'You';
}
// Poem text
const kiplingPoem = `<p>${name}, you are <span>kind</span>, you are <span>strong</span>,    
A melody that flows like a <span>song</span>; 
The way you <span>shine</span> when times are tough,    
Your <span>heart</span> alone is more than enough.

You are <span>beautiful</span>, inside and out,    
A <span>light</span> that clears the skies of doubt; 
With every <span>word</span>, you lift the air,    
A soul like yours is <span>rare</span>, so rare.

Oh, ${name}, you <span>bring</span> the day,    
Turning the <span>dark</span> to skies of gray; 
You are the <span>hope</span>, the gentle breeze,    
A gift the <span>world</span> is blessed to see.

So let this <span>song</span> remind you now,    
You’re all we <span>dream</span>, you show us how; 
To <span>live</span> with love, to rise above,    
You are the <span>truth</span>, the light of love. <span>${name} ${name} ${name} ${name} ${name} ${name} ${name} ${name} ${name} ${name}</span></p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
