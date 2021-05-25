"use strict";

function init(){
    bcolor1();
}

function bcolor1(){
    document.getElementById('color-b-1').style.background = `rgb(${document.getElementById('rrr').value}, ${document.getElementById('ggg').value}, ${document.getElementById('bbb').value})`
}