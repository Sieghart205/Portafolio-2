const cursor = document.getElementById("cursor");


document.addEventListener("mousemove",e =>{
  cursor.style.setProperty("--cursor-x",e.clientX + "px")
  cursor.style.setProperty("--cursor-y",e.clientY + "px")
})

document.addEventListener("mousedown",()=>{
  cursor.style.opacity = 0.5
})

document.addEventListener("mouseup",()=>{
    cursor.style.opacity = 1
})

document.addEventListener("mouseleave",()=>{
    cursor.style.opacity = 0;
})

document.addEventListener("mouseenter",()=>{
    cursor.style.opacity = 1;
})





const imgProyecto = document.getElementById("img-proyecto");

const height = imgProyecto.clientHeight;
const width = imgProyecto.clientWidth;

imgProyecto.addEventListener("mousemove", (e) => {
  const { layerX, layerY } = e;

  const yRotation = ((layerX - width / 2) / height)*7;

  const xRotation = ((layerY - height / 2) / width)*7;

  const string = `
    perspective(500px) 
    scale(1.1) 
    rotateX(${xRotation}deg) 
    rotateY(${yRotation}deg)
  `;

  imgProyecto.style.transform = string;
});

imgProyecto.addEventListener("mouseout",()=>{
  const string = `
    perspective(500px) 
    scale(1) 
    rotateX(0) 
    rotateY(0)
  `;

  imgProyecto.style.transform = string;
})

