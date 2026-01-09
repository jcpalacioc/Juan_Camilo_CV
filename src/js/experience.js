  document.addEventListener('DOMContentLoaded',function(){
  
    let parentCanva=document.querySelectorAll(".contenido-exp")[0];
    let canvas = document.querySelectorAll(".barra-lateral")[0];
    canvas.height=parentCanva.clientHeight
    let ctx = canvas.getContext("2d");
    // Set dot properties
    const dotX = 15; // X-coordinate
    const dotY = 20; // Y-coordinate
    const dotRadius = 8; // Dot radius
    let dotColor = "green"; // Dot color

    // Draw the green dot
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotRadius, 0, 2 * Math.PI);
    ctx.fillStyle = dotColor;
    ctx.fill();

    ctx.strokeStyle = "black";


    ctx.moveTo(15, 28);
    ctx.lineTo(15, parentCanva.clientHeight);
    ctx.stroke();

    //Segundo canva sobre la experiencia freelance
    parentCanva=document.querySelectorAll(".contenido-exp")[1];
    canvas = document.querySelectorAll(".barra-lateral")[1];
    canvas.height=parentCanva.clientHeight
    ctx = canvas.getContext("2d");

    dotColor = "orange"; // Dot color

    // Draw the green dot
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotRadius, 0, 2 * Math.PI);
    ctx.fillStyle = dotColor;
    ctx.fill();

    ctx.strokeStyle = "black";


    ctx.moveTo(15, 28);
    ctx.lineTo(15, parentCanva.clientHeight);
    ctx.stroke();
  })