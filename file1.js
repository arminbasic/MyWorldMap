
 


function change() {

if (!e) {
var e = window.event;
}

var target = e.target
var stateID=e.target.id;

document.getElementById('modal-wrapper').style.display='block';
document.getElementById('modal-wrapper').style.width='600px';
document.getElementById('modal-wrapper').style.height='600px';
document.getElementById('modal-wrapper').style.marginTop='100px';
document.getElementById('modal-wrapper').style.marginLeft='160px';
document.getElementById('modal-wrapper').style.marginBottom='190px';
document.getElementById('modal-wrapper').style.marginRight='160px';

var x = document.getElementById(stateID).getAttribute('title');
document.getElementById("countryNameinPopup").innerHTML = x;  

var i = document.getElementById(stateID).getAttribute('id');
document.getElementById("countryIDinPopup").innerHTML = i; 





} 


function fillBlue() {

    var idofc = document.getElementById("countryIDinPopup").textContent;
    document.getElementById(idofc).style.fill='blue';
    document.getElementById('modal-wrapper').style.display='none'
    var div = document.getElementById('markedBlue');
    div.innerHTML += document.getElementById("countryNameinPopup").textContent  + "<br />";
}

function fillRed() {

    var idofc = document.getElementById("countryIDinPopup").textContent;
    document.getElementById(idofc).style.fill='red';
    document.getElementById('modal-wrapper').style.display='none'
    var div = document.getElementById('markedRed');
    div.innerHTML += document.getElementById("countryNameinPopup").textContent  + "<br />";
    
}

function fillOrange() {

    var idofc = document.getElementById("countryIDinPopup").textContent;
    document.getElementById(idofc).style.fill='orange';
    document.getElementById('modal-wrapper').style.display='none'
    var div = document.getElementById('markedOrange');
    div.innerHTML += document.getElementById("countryNameinPopup").textContent  + "<br />";
   
}

function fillPurple() {

    var idofc = document.getElementById("countryIDinPopup").textContent;
    document.getElementById(idofc).style.fill='purple';
    document.getElementById('modal-wrapper').style.display='none'
    var div = document.getElementById('markedPurple');
    div.innerHTML += document.getElementById("countryNameinPopup").textContent + "<br />";
}
function fillGreen() {

    var idofc = document.getElementById("countryIDinPopup").textContent;
    document.getElementById(idofc).style.fill='green';
    document.getElementById('modal-wrapper').style.display='none'
    var div = document.getElementById('markedGreen');
    div.innerHTML +=  document.getElementById("countryNameinPopup").textContent  + "<br />";
}

function fillBack() {

    var idofc = document.getElementById("countryIDinPopup").textContent;
    document.getElementById(idofc).style.fill='';
    document.getElementById('modal-wrapper').style.display='none'
}


function checkBos() {

    document.getElementById('modal-wrapper').style.display='block';
    document.getElementById('modal-wrapper').style.width='600px';
    document.getElementById('modal-wrapper').style.height='600px';
    document.getElementById('modal-wrapper').style.marginTop='100px';
    document.getElementById('modal-wrapper').style.marginLeft='160px';
    document.getElementById('modal-wrapper').style.marginBottom='190px';
    document.getElementById('modal-wrapper').style.marginRight='160px';


document.getElementById("countryNameinPopup").innerHTML = "Bosnia and Herzegovina";  
document.getElementById("countryIDinPopup").innerHTML = "BA"; 

}

function checkCro() {

    document.getElementById('modal-wrapper').style.display='block';
    document.getElementById('modal-wrapper').style.width='600px';
    document.getElementById('modal-wrapper').style.height='600px';
    document.getElementById('modal-wrapper').style.marginTop='100px';
    document.getElementById('modal-wrapper').style.marginLeft='160px';
    document.getElementById('modal-wrapper').style.marginBottom='190px';
    document.getElementById('modal-wrapper').style.marginRight='160px';


document.getElementById("countryNameinPopup").innerHTML = "Croatia";  
document.getElementById("countryIDinPopup").innerHTML = "HR"; 

}

function checkUsa() {

    document.getElementById('modal-wrapper').style.display='block';
    document.getElementById('modal-wrapper').style.width='600px';
    document.getElementById('modal-wrapper').style.height='600px';
    document.getElementById('modal-wrapper').style.marginTop='100px';
    document.getElementById('modal-wrapper').style.marginLeft='160px';
    document.getElementById('modal-wrapper').style.marginBottom='190px';
    document.getElementById('modal-wrapper').style.marginRight='160px';


document.getElementById("countryNameinPopup").innerHTML = "United States";  
document.getElementById("countryIDinPopup").innerHTML = "US"; 

}



function checkBox (){

    if (!e) {
        var e = window.event;
        }
        
        var target = e.target
        var state=e.target.id;

       
        console.log(state);
/*
    var input, path,s,d;
    var ar = [];
    var ar2 = [];
    var ar2d = [];

    path = document.getElementsByTagName("path");


    for (i = 0; i < path.length; i++) {
        s=path[i].getAttribute('title');
        ar.push(s);

    }

    for (i = 0; i < path.length; i++) {
        d=path[i].getAttribute('id');
        ar2.push(d);

    }

    var checked = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < checked.length; i++) {
        if (checked[i].checked) {
            console.log(checked[i]);
            txt = txt + checked[i].value + " ";
        }
    }
    console.log(txt);

    console.log(ar[17]);
    console.log(ar2[67]);
*/

document.getElementById('modal-wrapper').style.display='block';
document.getElementById('modal-wrapper').style.width='600px';
document.getElementById('modal-wrapper').style.height='600px';
document.getElementById('modal-wrapper').style.marginTop='100px';
document.getElementById('modal-wrapper').style.marginLeft='160px';
document.getElementById('modal-wrapper').style.marginBottom='190px';
document.getElementById('modal-wrapper').style.marginRight='160px';


document.getElementById("countryNameinPopup").innerHTML = state;  

var i = document.getElementById(state).getAttribute('id');
document.getElementById("countryIDinPopup").innerHTML = i; 
}

function init(evt)
{
if ( window.svgDocument == null )
{
svgDocument = evt.target.ownerDocument;
}
tooltip = svgDocument.getElementById('tooltip');

}



function ShowTooltip(evt)
{
var target = evt.target
var stateID=evt.target.id;
tooltip.firstChild.data = document.getElementById(stateID).getAttribute('title');

tooltip.setAttributeNS(null,"x",evt.clientX+8);
tooltip.setAttributeNS(null,"y",evt.clientY+16);
tooltip.setAttributeNS(null,"visibility","visible");

/*
tooltip.setAttributeNS(null,"x",evt.clientX-8);
tooltip.setAttributeNS(null,"y",evt.clientY-5);
tooltip.setAttributeNS(null,"visibility","visible");

*/

}
function HideTooltip()
{

tooltip.setAttributeNS(null,"visibility","hidden");

}


function search() {
    var input, path,s,d;
    var ar = [];
    var ar2 = [];
    var ar2d = [];

    path = document.getElementsByTagName("path");


    for (i = 0; i < path.length; i++) {
        s=path[i].getAttribute('title');
        ar.push(s);

    }

    for (i = 0; i < path.length; i++) {
        d=path[i].getAttribute('id');
        ar2.push(d);

    }

    input = document.getElementById("myInput");
    filter = input.value.toString();



    var pos = ar.indexOf(filter);
    console.log(ar2[pos]);

var x = document.getElementById(ar2[pos]).getAttribute('title');
document.getElementById("countryNameinPopup").innerHTML = x;  

var i = document.getElementById(ar2[pos]).getAttribute('id');
document.getElementById("countryIDinPopup").innerHTML = i; 







    if (ar.indexOf(filter)!=-1) {

    document.getElementById('modal-wrapper').style.display='block';
    document.getElementById('modal-wrapper').style.width='600px';
    document.getElementById('modal-wrapper').style.height='600px';
    document.getElementById('modal-wrapper').style.marginTop='100px';
    document.getElementById('modal-wrapper').style.marginLeft='160px';
    document.getElementById('modal-wrapper').style.marginBottom='190px';
    document.getElementById('modal-wrapper').style.marginRight='160px';

    }

  }


  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

