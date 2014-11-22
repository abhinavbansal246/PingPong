
// ****************************Variables declare ********************************
var ball = null, paddle = null, p = null, ycor = null, score_display = null;
var dx = 10 , dy =10;
var fy = 1, fx = 1;
speed = 10;
var sx,sy;
var counter = 0, interval = 30, score = 0;
var bally = null, top_edge = null, bottom_edge = null;
var initial_pos = 0;
//var y = ball.style.top;


// **************************** Initialise ********************************
function init(){
   ball = document.getElementById('ball');
   ball.style.position= 'relative'; 
   initial_pos = (50*(Math.floor(Math.random()*11)));
   ball.style.left = '0px'; 
   ball.style.top = initial_pos + 'px';
  // counter = 0;
 // fx = 1;
  resetCounter();
} 

// **************************** New Game ******************************** // -- Abhinav Bansal -- 1/2/2014
function newGame(){
score = 0;
updateScore();
init();
}
// ****************************Reset the flag ********************************
function resetCounter(){
counter = 0;
 clearTimeout(sx);
clearTimeout(sy);

}


// ****************************Start the game ********************************
	// handles speed uniformity and function recursion

function startGame(interval) {

if (counter < 1)
{
	sx = setInterval(moveX,interval);
	
	sy = setInterval(moveY,interval);
	counter = counter + 1;
	//ycor.innerHTML = this.interval;

}
}

// ****************************speed handling ******************************** //Abhinav Bansal -- 3/2/2014
	// handles speed 
	
	function setSpeed(s) {
			if (s==0)
			{
			 interval = 25;
			}
	
			else if (s==1)
			{
			 interval = 10;
			}
			
			else 
			{
			interval = 5;
			}
			
		//	p.innerHTML = "interval=" + interval + "   s=" + s;
			resetCounter();
		 alert("the speed is changed.  Click anywhere on the box to continue");
	}

// ****************************X axis motion ********************************
	// handles bounce on walls and speed control

function moveX()
{
	if (ball.style.left == '1000px' && fx == 1)
		{
			
		bally = parseInt(ball.style.top);
		top_edge  = parseInt(paddle.style.top)+ 30;
		bottom_edge = parseInt(top_edge) - 110;
		
		if( bally < top_edge && bally > bottom_edge)
			{
			dx = (-1)*(speed);
			fx = fx+1;
			//p.innerHTML = "ball" + ball.style.top + " -- pad " + paddle.style.top + "    top  " + fx + "    " + bottom_edge ;
			}
			
			else {
			//p.innerHTML =  bottom_edge + "  --- " + (parseInt(bottom_edge) - 50) ;
			score = score + 1;
			updateScore();
			init();
			}
			
			
		}
	
	else 
	{
	if (ball.style.left == '0px' && fx == 2) {
	dx = (-1)*(dx);
	fx = 1;
	} }
	
	
	
	//dx=speed;
		ball.style.left = parseInt(ball.style.left) + (dx) + 'px';
		setSpeed(s);
}
   
   
// ****************************Y axis motion ********************************
	// handles bounce on walls and speed control
   
   function moveY(){
   if (ball.style.top == '500px' && fy == 1)
		{
			dy = (-1)*(speed);
			fy = fy+1;
		}
	else if (ball.style.top == '-50px' && fy == 2)
	{
	dy = (-1)*(dy);
	fy = 1;
	}

   ball.style.top = parseInt(ball.style.top) + (dy) + 'px';

   }
   
   // ****************************Paddle move ********************************
   function movePaddle(e) {
		paddle = document.getElementById("paddle"); 
		ycor = document.getElementById("ycor");
		//ycor.innerHTML =e.clientY + "x cor" + paddle.style.left; // displaying y coordinate of mouse
		
		if ( parseInt(e.clientY) < 498 ) // keeping the ball inside the box
		{
		paddle.style.top = parseInt(e.clientY) + 'px';
		}
   }
   
   // ****************************update score ******************************** // Abhinav bansal -- 3/2/2014
   function updateScore()
		{
			score_display = document.getElementById("message");
			score_display.innerHTML = score;
			//alert("click anywhere in box to continue");
		}

window.onload =init;
