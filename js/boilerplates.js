"use strict";

function init() {
    fnhtmlbp();
    fncssbp();
    fnjsbp();
}

let htmlbp, cssbp, jsbp;

function fnhtmlbp() {
    htmlbp = '';
    htmlbp += `<!DOCTYPE html>`

    if (document.getElementById('html-lang').checked == true) {
        htmlbp += `
<html lang="en">`
    }

    htmlbp += `
<head>`
    {/* <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">` */}

    if (document.getElementById('html-charset').checked == true) {
        htmlbp += `
    <meta charset="UTF-8">`
    }

    if (document.getElementById('html-xua').checked == true) {
        htmlbp += `
    <meta http-equiv="X-UA-Compatible" content="IE=edge">`
    }

    if (document.getElementById('html-viewport').checked == true) {
        htmlbp += `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`
    }


    if (document.getElementById('html-meta-des').checked == true) {
        document.getElementById('htmlmeta').style.display = "inline-block";
        if (document.getElementById('htmlmeta').value != "") {
            htmlbp += `
    <meta name="description" content="${document.getElementById('htmlmeta').value}">`
        } else {
            htmlbp += `
    <meta name="description" content="Your desciption here">`
        }
    }

    if (document.getElementById('html-meta-des').checked == false) {
        document.getElementById('htmlmeta').style.display = "none";
    }

    if (document.getElementById('html-no-cache').checked == true) {
        htmlbp += `
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">`
    }

    if (document.getElementById('html-bootstrap').checked == true) {
        htmlbp += `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>`
    }

    if (document.getElementById('html-font').checked == true) {
        htmlbp += `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css">`
    }

    if (document.getElementById('html-stylesheet').checked == true) {
        document.getElementById('htmlcsspath').style.display = "inline-block";
        if (document.getElementById('htmlcsspath').value != "") {
            htmlbp += `
    <link href="${document.getElementById('htmlcsspath').value}" rel="stylesheet">`
        } else {
            htmlbp += `
    <link href="style.css" rel="stylesheet">`
        }
    }
    if (document.getElementById('html-stylesheet').checked == false) {
        document.getElementById('htmlcsspath').style.display = "none";
    }

    if (document.getElementById('html-script').checked == true) {
        document.getElementById('htmljspath').style.display = "inline-block";
        if (document.getElementById('htmljspath').value != "") {
            htmlbp += `
    <script href="${document.getElementById('htmljspath').value}"></script>`
        } else {
            htmlbp += `
    <script href="index.js"></script>`
        }
    }
    if (document.getElementById('html-script').checked == false) {
        document.getElementById('htmljspath').style.display = "none";
    }

    if (document.getElementById("htmldoctitle").value != "") {
        htmlbp += `
    <title>${document.getElementById("htmldoctitle").value}</title>`
    } else {
        htmlbp += `
    <title>Document</title>`
    }

    htmlbp += `
</head>
<body>
    
</body>
</html>`;

    document.getElementById("htmlbp").value = htmlbp;
}

function htmlbpcopy() {
    var copyText = document.getElementById("htmlbp");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyText.blur();
    document.getElementById("htmlbp").value = "copied";
    setTimeout(function () { document.getElementById("htmlbp").value = htmlbp; }, 1000);
}

function fncssbp() {
    cssbp = '';

    if (document.getElementById('css-margin').checked == true || document.getElementById('css-padding').checked == true || document.getElementById('css-box').checked == true || document.getElementById('css-bw').checked == true) {
        cssbp += `*{`
        if (document.getElementById('css-margin').checked == true) {
            cssbp += `
    margin: 0;`
        }
        if (document.getElementById('css-padding').checked == true) {
            cssbp += `
    padding: 0;`
        }
        if (document.getElementById('css-box').checked == true) {
            cssbp += `
    box-sizing: border-box;`
        }
        if (document.getElementById('css-bw').checked == true) {
            cssbp += `
    --primary-color: rgba(0,0,0,1) //black;
    --secondary-color: rgba(255,255,255,1) //white`
        }
        cssbp += `
}
`
    }

    if (document.getElementById('css-fs').checked == true || document.getElementById('css-ff').checked == true || document.getElementById('css-bg').checked == true || document.getElementById('css-color').checked == true) {
        if (document.getElementById('cssbp').value != '') {
            cssbp += `
body{`
        }
        if (document.getElementById('cssbp').value == '') {
            cssbp += `body{`
        }
    }

    if (document.getElementById('css-fs').checked == true) {
        document.getElementById('cssfontsize').style.display = 'inline-block';
        if (document.getElementById('cssfontsize').value != "") {
            cssbp += `
    font-size: ${document.getElementById('cssfontsize').value};`
        } else {
            cssbp += `
    font-size: 16px;`
        }
    }
    if (document.getElementById('css-fs').checked == false) {
        document.getElementById('cssfontsize').style.display = "none";
    }

    if (document.getElementById('css-ff').checked == true) {
        document.getElementById('cssfontfamily').style.display = "inline-block";
        if (document.getElementById('cssfontfamily').value != "") {
            cssbp += `
    font-family: ${document.getElementById('cssfontfamily').value};`
        } else {
            cssbp += `
    font-family: sans-serif;`
        }
    }
    if (document.getElementById('css-ff').checked == false) {
        document.getElementById('cssfontfamily').style.display = "none";
    }

    if (document.getElementById("css-bg").checked == true) {
        document.getElementById('cssbackground').style.display = 'inline-block';
        if (document.getElementById('cssbackground').value != "") {
            cssbp += `
    background: ${document.getElementById('cssbackground').value};`
        } else if (document.getElementById('css-bw').checked == true) {
            cssbp += `
    background: var(--primary-color);`
        }
        else {
            cssbp += `
    background: rgba(255, 255, 255, 1);`
        }

    }
    if (document.getElementById("css-bg").checked == false) {
        document.getElementById('cssbackground').style.display = 'none';
    }

    if (document.getElementById("css-color").checked == true) {
        document.getElementById('csscolor').style.display = 'inline-block';
        if (document.getElementById('csscolor').value != "") {
            cssbp += `
    color: ${document.getElementById('csscolor').value};`
        }

        else {
            if (document.getElementById('css-bw').checked == true) {
                cssbp += `
    color: var(--secondary-color);`
            } else {
                cssbp += `
    color: rgba(0, 0, 0, 1);`
            }
        }
    }
    if (document.getElementById("css-color").checked == false) {
        document.getElementById('csscolor').style.display = 'none';
    }

    if (document.getElementById('css-fs').checked == true || document.getElementById('css-ff').checked == true || document.getElementById('css-bg').checked == true || document.getElementById('css-color').checked == true) {
        cssbp += `
}
`
    }


    document.getElementById('cssbp').value = cssbp;
}

function cssbpcopy() {
    var copyText = document.getElementById("cssbp");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyText.blur();
    document.getElementById("cssbp").value = "copied";
    setTimeout(function () { document.getElementById("cssbp").value = cssbp; }, 1000);
}

function fnjsbp() {
    jsbp = '';

    if (document.getElementById('js-strict').checked === true) {
        jsbp += `"use strict";

`;
    }
    if (document.getElementById('js-inspect').checked === true) {
        jsbp += `document.onkeydown = function(e) {
    if(event.keyCode == 123) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
        return false;
    }
}

`;
    }

    document.getElementById('jsbp').value = jsbp;
}

function jsbpcopy() {
    var copyText = document.getElementById("jsbp");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyText.blur();
    document.getElementById("jsbp").value = "copied";
    setTimeout(function () { document.getElementById("jsbp").value = jsbp; }, 1000);
}