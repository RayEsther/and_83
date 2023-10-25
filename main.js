
var lastPositionOfX, lastPositionOfY;/
color = "black";
widthOfLine = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;
//1. Defina a variável newWidth e adicione o código abaixo:


//2. Defina a variável newHeight e adicione o código abaixo:


//3 Escreva a condição if para verificar o tamanho da tela e ajustar newWidth e newHeight.
     if(width < 992)

	{
	     document.
       document.
       document.
  }

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) //
{
  //4. Atualize myTouchStart():
   console.log("    ");
  
  //Atividade Adicional
  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("widthOfLine").value;
  //Fim da Atividade Adicional
        /
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) 
{

	console.log("my_touchMove");

    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    //mesma coisa do app web paint antigo
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    console.log("Ultima posicao das coordenadas x e y = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);
  
   //5. Atualize os códigos abaixo:------------------------------------
   //- Todas currentPositionOfMouseX para currentPositionOfTouchX
  //- Todas currentPositionOfMouseY para currentPositionOfTouchY
    console.log("Posicao atual das coordenadas x e y = ");
   console.log("x  = " +              + "y = " + currentPositionOfTouchY);
  
    ctx.lineTo(currentPositionOfTouchX,             );
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
    
    //mesma coisa do app web paint antigo
}

   
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    //mesma coisa do app web paint antigo
