/**
 * Created by SRUJAN on 5/5/2017.
 */


var var1;
var var2;

/*document.getElementById("rshift").addEventListener("click", func1);
 document.getElementById("lshift").addEventListener("click", func2);
 document.getElementById("pause").addEventListener("click", func3);*/

function funforward(){
    console.log("executed");
    clearInterval(var2);
    var1 = setInterval(rshift,1000);


}
function rshift(){

    var text1 = document.getElementById("box1").value;
    var len = text1.length;
    var char = text1.charAt(len-1);
    var text2 = document.getElementById("box2").value;
    var updtext2 = char.concat(text2);
    var updtext1 = text1.substring(0,len-1);
    document.getElementById("box1").value = updtext1;
    document.getElementById("box2").value = updtext2;

}

function funbackward(){
    clearInterval(var1);
    var2 = setInterval(lshift,1000);


}

function lshift(){

    var text2 = document.getElementById("box2").value;

    var char = text2.charAt(0);
    var text1 = document.getElementById("box1").value;
    var updtext1 = text1.concat(char);
    document.getElementById("box1").value = updtext1;
    var updtext2 = text2.substring(1);
    document.getElementById("box2").value = updtext2;


}
function funpause(){
    console.log("executing");
    clearInterval(var1);
    clearInterval(var2);
}
