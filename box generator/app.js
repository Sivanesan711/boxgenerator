let button = document.getElementById("theBoxes");
button.addEventListener("click", myFunction);

//create function()
var oldvalue = 0;
var i = 1;

function myFunction() {
    let n = document.getElementById('number').Value;

    for (i = 1; i < n; i++) {
        n = parseInt(oldvalue + n);
        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById(box).appendChild(box);
        box.innerHTML = i;
        oldvalue = document.getElementById('box').lastElementChild.innerHTML;
        console.log(oldvalue);
    }
}