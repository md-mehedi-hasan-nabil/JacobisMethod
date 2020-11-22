//const body=document.getElementsByTagName("body").item(0),h1=document.createElement("h1"),node=document.createTextNode("Jacobi's Method");h1.appendChild(node),body.appendChild(h1);const inputId=["b1","b2","b3"],placeHolder=["a11","a12","a13","b1","a12","a22","a23","b2","a31","a32","a33","b3"];let cout=0;for(let e=1;e<=12;e++){const t=document.createElement("input");if(t.type="text",e<4&&(t.id=e),e>4&&e<8&&(t.id=e-1),e>8&&e<12&&(t.id=e-2),t.placeholder=placeHolder[e-1],body.appendChild(t),4==e||8==e||12==e){t.id=inputId[cout],cout++;const e=document.createElement("br");body.appendChild(e)}}const btn=document.createElement("button"),textNode=document.createTextNode("Solve");btn.appendChild(textNode),btn.id="btn",body.appendChild(btn),document.getElementById("btn").addEventListener("click",calculator);let count=0;function calculator(e=0,t=0,d=0){let n=document.getElementById("1").value,o=document.getElementById("2").value,l=document.getElementById("3").value,c=document.getElementById("4").value,a=document.getElementById("5").value,u=document.getElementById("6").value,m=document.getElementById("7").value,b=document.getElementById("8").value,y=document.getElementById("9").value,i=document.getElementById("b1").value,p=document.getElementById("b2").value;d=(document.getElementById("b3").value-m*(e=(i-o*t-l*d)/n)-b*(t=(p-c*e-u*d)/a))/y,console.log(e,t,d),++count<5&&calculator(e,t,d)}



const body = document.getElementsByTagName('body').item(0);
const h1 = document.createElement('h1');
const node = document.createTextNode("Jacobi's Method");
h1.appendChild(node);
body.appendChild(h1);
const inputId = ['b1', 'b2', 'b3'];
const placeHolder = ['a11', 'a12', 'a13', 'b1', 'a21', 'a22', 'a23', 'b2', 'a31', 'a32', 'a33', 'b3'];
let cout = 0;
for (let i = 1; i <= 12; i++) {
const inputBox = document.createElement('input');
    inputBox.type = 'text';
    if (i < 4) {
        inputBox.id = i;
    }
    if (i > 4 && i < 8) {
        inputBox.id = (i - 1);
    }
    if (i > 8 && i < 12) {
        inputBox.id = (i - 2);
    }
    inputBox.placeholder = placeHolder[i-1];
    body.appendChild(inputBox);
    if (i == 4|| i == 8 || i == 12){
        inputBox.id = inputId[cout];
        cout++;
        const br = document.createElement('br');
        body.appendChild(br);
    }
}
const btn = document.createElement('button');
const textNode = document.createTextNode('Solve');
btn.appendChild(textNode);
btn.id = 'btn';
body.appendChild(btn);

document.getElementById('btn').addEventListener('click', calculator);
let count = 0;
function calculator(x1=0, x2 =0, x3=0) {
    let a11 = document.getElementById('1').value;
    let a12 = document.getElementById('2').value;
    let a13 = document.getElementById('3').value;
            
    let a21 = document.getElementById('4').value;
    let a22 = document.getElementById('5').value;
    let a23 = document.getElementById('6').value;

    let a31 = document.getElementById('7').value;
    let a32 = document.getElementById('8').value;
    let a33 = document.getElementById('9').value;

    let b1 = document.getElementById('b1').value;
    let b2 = document.getElementById('b2').value;
    let b3 = document.getElementById('b3').value;
            
    x1 = ((b1 - (a12 * x2) - (a13 * x3))/a11).toFixed(4);
    x2 = ((b2 - (a21 * x1) - (a23 * x3))/a22).toFixed(4);
    x3 = ((b3 - (a31 * x1) - (a32 * x2))/a33).toFixed(4);

    console.log(x1, x2, x3);
    count++;
    if (count < 5) {
        calculator(x1, x2, x3);
    }    
}