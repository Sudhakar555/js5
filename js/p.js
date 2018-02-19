function palindrome(){
    var str = document.getElementById('str').value;
    revstr = reverseString(str);

    if(str.toLowerCase() === revstr.toLowerCase()){
        document.getElementById("answer").innerHTML = "Given String is a Palindrome";
    } else{
        document.getElementById("answer").innerHTML = "Given String is NOT a Palindrome";
    }
}


function reverseString(str) {
   var splitString = str.split('').reverse().join("");
   
   return splitString; 
}