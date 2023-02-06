$("#test").click(function(){

});

$("#test").click(function(){
    $(".box-img").toggleClass('rotate');
//     $(".box-img").attr("src", "box-1.jpg");

    let length  = Number(document.getElementById("length").value);
    let width  = Number(document.getElementById("width").value);
    let height  = Number(document.getElementById("height").value);
    let pcs  = Number(document.getElementById("pcs").value);

    let insideLength  = document.getElementById("insideLength");
    let insideWidth  = document.getElementById("insideWidth");
    let insideHeight  = document.getElementById("insideHeight");
    
    insideLength.innerText = length+ " Cms";
    insideWidth.innerText = width+ " Cms";
    insideHeight.innerText = height+ " Cms";

    if ((insideHeight = "") || (insideLength = "") || (insideWidth = "") ) {
        alert("Please Enter All Details.");
    }
    let cbm  = document.getElementById("cbm");
    let cuft  = document.getElementById("cuft");
    let feet20  = document.getElementById("feet20");
    let feet40  = document.getElementById("feet40");
    let cube40  = document.getElementById("cube40");
  
   let cbmResult = ((height*length*width)/10**6).toFixed(3);

    cbm.innerText = cbmResult;
    cuft.innerText = ((height*length*width)/28316.85).toFixed(3);
    feet20.innerText = (Math.floor(28/(cbmResult)))*pcs;
    feet40.innerText = (Math.floor(56/(cbmResult)))*pcs;
    cube40.innerText = (Math.floor(65/(cbmResult)))*pcs;
  
    


});

