function show() {
	 var n,r,sum=0,temp;    
   
   n=document.getElementById("num").value;
temp=n;

while(n>0)    
{    
r=n%10; 
n=parseInt(n/10);   
sum=sum+(r*r*r);    
    
}    
if(temp==sum)  {  
 document.getElementById("answer").value="it is armstrong number";
  }
 
else{
document.getElementById("answer").value="not a armstrong number";
  
	    }
	
}