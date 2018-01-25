# sb-dev-fix-seo
1part.( missing alt attributes in <img> tags)  
DOCUMENTATION:-(1part)
 INPUT PARAMETERS:- let l
 OUTPUT PARAMETER:-console.log(l );
SCRIPT:-
let l=document.querySelectorAll("img[alt]");      // this will put list of all image objects(nodelist) into l variable,querySelectorAll selects the all image elements from webpage.
console.log(l);      //this will output the array list which contains info about ,which image contains ‘alt’ attribute which image not.
OUTPUT:- NodeList(8) [img.img, img.img, img, img, img, img, img, img]  //TROUGH OUTPUT WE CAN CHECK WHICH IMAGE HAS ‘ALT’ ATTRIBUTE WHICH             IMAGE HAS NOT CONTAINS ALT ATTRIBUTE
( A webpage contains iplt20.com contains total 8 images)
1.	0:img.img
2.	1:img.img        
3.	2:img
4.	3:img
5.	4:img
6.	5:img
7.	6:img
8.	7:img        //TROUGH OUTPUT WE CAN CHECK WHICH IMAGE HAS ‘ALT’ ATTRIBUTE WHICH             IMAGE HAS NOT CONTAINS ALT ATTRIBUTE


2part.(Missing <meta> tag in a webpage)  
INPUT PARAMETERS:- webpage(meta)
OUTPUT PARAMETER:-console.log(meta present),
 OUTPUT PARAMETER:- console.log("meta tag not present”)
Program:-
if(document.querySelectorAll("meta"))    //this will check is the Webpage has meta tag.The method querySelectorAll selects meta tag from webpage it it exists in webpage  
 {
 console.log("meta tag present");    // if meta is present then print message on console
} 
else
{ 
console.log("meta tag not present");   //if meta is not present
}


3part.(Multiple h1 tags in a webpage)  
INPUT PARAMETERS:- let m
OUTPUT PARAMETER:-console.log(“webpage contains Multiple h1 tags”),
OUTPUT PARAMETER:-console.log("Webpage not contains Multiple h1 tags")
Program:-                                                                                          
let m=document.querySelectorAll("h1").length; // querySelectorAll will select all h1 elements from webpage and put into lf variable,length property returns the number of h1 tags in webpage
console.log(m); // it will output total number of h1 tags in Webpage 
if(lf>1) //this condition checks, is the value of variable  greater than 1
{
console.log("Webpage contains Mutiple h1 tags") //if webpage has multiple h1 tags
}
else
{
console.log("Webpage not contains Multiple h1 tags") //print on console
}
