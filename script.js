const svg = document.getElementById("drawingArea");
let drawing = false;
let polyline;


svg.addEventListener("mousedown", startDraw);
svg.addEventListener("mousemove", draw);
svg.addEventListener("mouseup", stopDraw);
svg.addEventListener("mouseleave", stopDraw);


function startDraw(e){
drawing = true;
polyline = document.createElementNS("http://www.w3.org/2000/svg","polyline");
polyline.setAttribute("fill","none");
polyline.setAttribute("stroke","black");
polyline.setAttribute("stroke-width","2");
polyline.setAttribute("points", "");
svg.appendChild(polyline);
}


function draw(e){
    if(!drawing) return;


const rect = svg.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;


let points = polyline.getAttribute("points");
points += `${x},${y} `;
polyline.setAttribute("points", points);
}


function stopDraw(){
drawing = false;
}


function clearCanvas(){
svg.innerHTML = "";
}