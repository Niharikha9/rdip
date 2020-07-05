//function for calculator
function add(){
	var x=parseInt(calculate.one.value);
	var y=parseInt(calculate.two.value);
	answer=x+y;
   calculate.answer.value=answer;
   return answer;
}
function sub(){
	var x=parseInt(calculate.one.value);
	var y=parseInt(calculate.two.value);
	answer=x-y;
    calculate.answer.value=answer;
    return answer;
}
function mul(){
	var x=parseInt(calculate.one.value);
	var y=parseInt(calculate.two.value);
	answer=x*y;
    calculate.answer.value=answer;
    return answer;
}
function div(){
	var x=parseInt(calculate.one.value);
	var y=parseInt(calculate.two.value);
	answer=x/y;
    calculate.answer.value=answer;
    return answer;
}
function percent(){
	var x=parseInt(calculate.one.value);
	var y=parseInt(calculate.two.value);
	answer=(y/100)*x;
    calculate.answer.value=answer;
    return answer;
}
function absolute(){
    var x=parseInt(calculate.one.value);
    answer=Math.abs(x);
    calculate.answer.value=answer;
    return answer;
}
function root(){
    var x=parseInt(calculate.one.value);
    answer=Math.sqrt(Math.round(x));
    calculate.answer.value=answer;
    return answer;
}
//function for palindrome
function pali(){
    var str=document.getElementById("pali").value;
    var len=str.length;
      for(var i=0;i<len/2;i++){
       if (str[i]!=str[len-i-1]){
    alert("String is not a palindrome");
    return false;
   } 
}
alert("String is a palindrome");
return true;
}
//function for anagram
function anagram(){
   var str1=document.getElementById("first").value;
   var str2=document.getElementById("second").value;
   str1=str1.replace(/[^\w]/g,'').toLowerCase();
   str2=str2.replace(/[^\w]/g,'').toLowerCase();
   var str3=str1.split('').sort().join('');
   var str4=str2.split('').sort().join('');
   if (str3==str4){
      alert("It is Anagram");
      return true;
   } else {
      alert("Not an Anagram");
      return false;
   }
}

//Game
function game(){  
var x=Math.floor(Math.random()*1000)+1; 
var y=Math.floor(Math.random()*1000)+1;
document.getElementById("demo").innerHTML=x;
document.getElementById("demo1").innerHTML=y;
var p="Object 1 is Coackroach";
var q="Object 1 is human";
var r="Object 1 is Nuclear bomb";
var s="Object 2 is Coackroach";
var t="Object 2 is human";
var u="Object 2 is Nuclear bomb";
var a="Human survives";
var b="Coackroach survives";
var d="TIE";
var c="Human dies";
if(x%3==0){
  document.getElementById("demo6").innerHTML=p;
}
if(x%3==1){
  document.getElementById("demo7").innerHTML=q;
}
if(x%3==2){
  document.getElementById("demo3").innerHTML=r;
}
if(y%3==0){
  document.getElementById("demo8").innerHTML=s;
}
if(y%3==1){
  document.getElementById("demo9").innerHTML=t;
}
if(y%3==2){
  document.getElementById("demo10").innerHTML=u;
}
if(x%3==0 && y%3==1){
       document.getElementById("demo11").innerHTML=a;
}
 else if(x%3==0 && y%3==2){
       document.getElementById("demo12").innerHTML=b;
} else if(x%3==0 && y%3==0){
       document.getElementById("demo13").innerHTML=d;
} else if(x%3==1 && y%3==1){
       document.getElementById("demo14").innerHTML=d;
}else if(x%3==1 && y%3==2){
       document.getElementById("demo15").innerHTML=c;
}else if(x%3==1 && y%3==0){
       document.getElementById("demo16").innerHTML=a;
}else if(x%3==2 && y%3==0){
       document.getElementById("demo17").innerHTML=b;
}else if(x%3==2 && y%3==1){
       document.getElementById("demo18").innerHTML=c;
}else if(x%3==2 && y%3==2){
       document.getElementById("demo19").innerHTML=d;
}
}

//function for form validation

    function myfun(){
    var x=document.forms["basicForm"]["fname"].value;
    var y=document.forms["basicForm"]["mobile"].value;
    var z=document.forms["basicForm"]["mail"].value;
    var at=z.indexOf("@");
        var dot=z.indexOf(".");
   if (x == "" || y=="" || z==""){
    alert("Everything must be filled");
    return false;
} else if(isNaN(y)){
  alert("Only numbers are allowed");
  return false;
}else if(y.length!=10){
  alert("length of mobile number is incorrect");
  return false;
}else if(at<1 || (dot-at<2)){
   alert("Invalid email ID");
   return false;
  }else{
    return true;
  }
}

