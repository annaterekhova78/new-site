let title = document.title;
let img = document.createElement('img');
let p = document.createElement('p');
document.title = "Website";
let body = document.body;
let header = document.createElement('header');
header.classList.add('wrapper');
header.style.display = "flex";
header.style.flexDirection = "row";
header.style.justifyContent = "space-around";
header.style.border = "2px solid black"; 
header.style.borderRadius = "35px"; 
header.style.backgroundColor = "Silver"; 
body.appendChild(header);
img.src = "img/photo.jpg";
img.style.width = "200px";
img.style.height = "200px";
header.appendChild(img);
p.classList.add('buttom');
p.innerText = "Регистрация";
p.style.fontFamily = "Times, Times New Roman, Georgia, serif";
p.style.fontSize = "28px";
p.style.padding = "50px";
p.style.border = "2px solid black";
p.style.borderRadius = "35px";
p.style.backgroundColor = "blue";
p.style.color = "white";
header.appendChild(p);