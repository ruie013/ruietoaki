
const no = document.getElementById("button2");
const yes = document.getElementById("button1");

const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');
const bt4 = document.getElementById('bt4');
const bt5 = document.getElementById('bt5');
const bt6 = document.getElementById('bt6');
const bt7 = document.getElementById('bt7');
const bt8 = document.getElementById('bt8');
const bt9 = document.getElementById('bt9');
const bt10 = document.getElementById('bt10');
const bt11 = document.getElementById('bt11');
const bt12 = document.getElementById('bt12');

const bbt1 = document.getElementById('bbt1');
const bbt2 = document.getElementById('bbt2');
const bbt3 = document.getElementById('bbt3');
const bbt4 = document.getElementById('bbt4');
const bbt5 = document.getElementById('bbt5');
const bbt6 = document.getElementById('bbt6'); 
const bbt7 = document.getElementById('bbt7');
const bbt8 = document.getElementById('bbt8');
const bbt9 = document.getElementById('bbt9');
const bbt10 = document.getElementById('bbt10');
const bbt11 = document.getElementById('bbt11');
const bbt12 = document.getElementById('bbt12');

no.addEventListener("click", function() {
  bt12.style.opacity = "1";
  no.style.opacity = "0";
  heart.style.opacity = "0";
  please.style.opacity = "1";
});

bt12.addEventListener("click", function() {
  bt12.style.opacity = "0";
  bt1.style.opacity = "1";
});

bt1.addEventListener("click", function (){
  bt1.style.opacity= "0";
  bt4.style.opacity= "1";  
  please.style.opacity = "0";
  sad.style.opacity = "1";      
});

bt4.addEventListener("click", function (){
  bt2.style.opacity= "1";
  bt4.style.opacity= "0";				
});

bt2.addEventListener("click", function (){
  bt2.style.opacity= "0";
  bbt1.style.opacity= "1";
  sad.style.opacity = "0";  	
  flowers.style.opacity ="1";	 
});

bbt1.addEventListener("click", function (){
  bbt8.style.opacity= "1";
  bbt1.style.opacity= "0";			
});

bbt8.addEventListener("click", function (){
  bbt8.style.opacity= "0";
  bt6.style.opacity= "1";	
  flowers.style.opacity ="0";
  good.style.opacity ="1";		
});

bt6.addEventListener("click", function (){
  bt6.style.opacity= "0";
  bt5.style.opacity= "1";
  		     
});

bt5.addEventListener("click", function (){
  bbt9.style.opacity= "1";
  bt5.style.opacity= "0";	
  burn.style.opacity ="1";
  good.style.opacity ="0";     
});

bbt9.addEventListener("click", function (){
  bbt9.style.opacity= "0";
  bbt2.style.opacity= "1";
  burn.style.opacity ="0";
  joke.style.opacity ="1"; 	     
});

bbt2.addEventListener("click", function (){
  bbt2.style.opacity= "0";
  bbt4.style.opacity= "1";
  joke.style.opacity ="0"; 	 
  withu.style.opacity ="1"; 	 	     
});

bbt4.addEventListener("click", function (){
  bbt4.style.opacity= "0";
  bt3.style.opacity= "1";	
  withu.style.opacity ="0"; 
  love.style.opacity ="1";    
});

bt3.addEventListener("click", function (){
  bt3.style.opacity= "0";	  
  yes.style.fontSize= "69px";	
  arrow.style.opacity = "1";   
  love.style.opacity ="0"; 
  sayyes.style.opacity ="1";    
});

