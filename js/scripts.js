$(document).ready(function() {
  $("#submit").click(function(event){
  event.preventDefault();

    //forminput is a string!
  var formInput = $("input#word").val();
  console.log("maybe this is an array...");

  //use .split to make array from string.


    var newArray = formInput.split("");
    console.log("now, 2nd array!");
      //make new array from old one
    var reverseArr = [];
    for(var index=(newArray.length)-1; index>=0; index -=1){
        reverseArr.push(newArray[index]);
    }
    var reversedString=reverseArr.join("");


  if (formInput === reversedString) {
    alert("Word is palindrome");
  }
  else {
    alert("Word is not a palindrome");
  }


  });
});
