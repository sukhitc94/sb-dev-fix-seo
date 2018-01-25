1.QUESTION

1part.( missing alt attributes in <img> tags)  
SCRIPT:-
 
let l=document.querySelectorAll("img[alt]"); //TROUGH OUTPUT WE CAN CHECK WHICH IMAGE HAS contains‘ALT’ ATTRIBUTE and WHICH IMAGE HAS NOT CONTAINS ALT ATTRIBUTE
console.log(l);




2part.(Missing <meta> tag in a webpage)
SCRIPT:-

if(document.querySelectorAll("meta"))

{

 console.log("meta tag present");

} 

else

{ 
console.log("meta tag not present");

}



3part.(Multiple h1 tags in a webpage)
SCRIPT:- 

let m=document.querySelectorAll("h1").length;
console.log(m);
if(m>1)
{
console.log("Webpage contains Mutiple h1 tags");
}
else
{
console.log("Webpage not contains Multiple h1 tags");
}





