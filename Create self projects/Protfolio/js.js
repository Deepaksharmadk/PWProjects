let icon=document.querySelector(".Logo");
console.log(icon);
let sidebar=document.querySelector('.sidebar');
icon.onclick=function(){
sidebar.classList.toggle('small-sidebar')
}