function init(){
    bp();
}

let htmlbp;
function bp(){
htmlbp='';
htmlbp += `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`

    if(document.getElementById('html-meta-des').checked == true){
        htmlbp+=`
    <meta name="description" content="The HTML5 Herald">`
    }

if(document.getElementById('html-no-cache').checked == true){
    htmlbp += `
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">`
}

if(document.getElementById('html-bootstrap').checked == true){
    htmlbp+=`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>`
}

if(document.getElementById('html-font').checked == true){
    htmlbp+=`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css">`
}

if(document.getElementById('html-stylesheet').checked == true){
    document.getElementById('htmlcsspath').style.display = "inline-block";
    if(document.getElementById('htmlcsspath').value != ""){
        htmlbp += `
    <link href="${document.getElementById('htmlcsspath').value}" rel="stylesheet">`
    }else{
    htmlbp += `
    <link href="style.css" rel="stylesheet">`
    }
}
if(document.getElementById('html-stylesheet').checked == false){
    document.getElementById('htmlcsspath').style.display = "none";
}

if(document.getElementById('html-script').checked == true){
    document.getElementById('htmljspath').style.display = "inline-block";
    if(document.getElementById('htmljspath').value != ""){
        htmlbp+=`
    <script href="${document.getElementById('htmljspath').value}"></script>` 
    }else{
    htmlbp+=`
    <script href="index.js"></script>`
    }
}
if(document.getElementById('html-script').checked == false){
    document.getElementById('htmljspath').style.display = "none";
}

if(document.getElementById("htmldoctitle").value != ""){
    htmlbp += `
    <title>${document.getElementById("htmldoctitle").value}</title>`
}else{
    htmlbp += `
    <title>Document</title>`
}  

htmlbp +=`
</head>
<body>
    
</body>
</html>`;
   
document.getElementById("htmlbp").value= htmlbp;
}

function htmlbpcopy(){
        var copyText = document.getElementById("htmlbp");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        copyText.blur();
        document.getElementById("htmlbp").value= "copied";
        setTimeout(function(){document.getElementById("htmlbp").value= htmlbp;}, 1000);
}