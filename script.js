//your JS code here. If required.

let para = document.getElementById("status")
let button = document.getElementById("enterBtn");

button.addEventListener("click", () => {
let h1 = document.createElement("h1");
	h1.innerText = "Entered Metaverse";
	document.body.insertBefore(h1,para);
     para.remove();
});








