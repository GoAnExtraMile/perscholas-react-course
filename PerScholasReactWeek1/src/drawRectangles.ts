//let name: string = "Priti";
//export {}
let myName = "Priti";
console.log(myName + " DrawSnack!");

// <HTMLCanvasElement>
// var canvas = <HTMLCanvasElement> document.getElementById("canvas");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



function drawRect(){
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    console.log("In DrawRect");
    let num = document.getElementById('numofrect').value;
    console.log(document.getElementById('numofrect').value);
  
    for (var i=0; i<num; i++){

        const red = Math.floor((Math.random() * 256));
        const green = Math.floor((Math.random() * 256));
        const blue = Math.floor((Math.random() * 256));

        const x = Math.floor((Math.random() * canvas.width)) ;
        const y = Math.floor((Math.random() * canvas.height));

        //Math.random() * (max - min) + min;


        const width = Math.floor((Math.random() * 19+1))*10;
        const height = Math.floor((Math.random() * 19+1))*10;

        //console.log ("Red : " +red +"Green : " + green + "Blue : " + blue);
        
        ctx.fillStyle = `rgb(${red},${green},${blue})`;
        ctx.fillRect(x, y, width, width);
    }
    
}

