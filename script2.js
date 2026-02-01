let products = [
{name:"Phone", price:15000, category:"electronics"},
{name:"Laptop", price:55000, category:"electronics"},
{name:"Shirt", price:1200, category:"fashion"},
{name:"Shoes", price:2500, category:"fashion"}
];


let filtered = [...products];


function display(data){
const box = document.getElementById("products");
box.innerHTML = "";


data.forEach(p=>{
box.innerHTML += `
<div class="card">
<h4>${p.name}</h4>
<p>₹${p.price}</p>
<p>${p.category}</p>
</div>`;
})
}


function filterProducts(){
const val =document.getElementById("filter").value;


if(val === "all") filtered = [...products];
else filtered = products.filter(p=>p.category===val);


display(filtered);
}


function sortProducts(){
const val = document.getElementById("sort").value;


if(val === "low") filtered.sort((a,b)=>a.price-b.price);
else filtered.sort((a,b)=>b.price-a.price);


display(filtered);
}


display(filtered);