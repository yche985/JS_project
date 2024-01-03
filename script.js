
function upDate(previewPic){
    var element = document.getElementById('image');
    element.innerHTML = previewPic.alt;
    element.style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById('image').style.width = previewPic.var1;
    document.getElementById('image').style.height = previewPic.var2;
    document.getElementById('image').style.lineHeight = previewPic.var2;
	}

function unDo(){
    document.getElementById('image').innerHTML='Hover over an image';
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').style.width = "575px";
    document.getElementById('image').style.height = "575px";

}

function setImages(){
    currentImages = document.querySelectorAll('img')
    for (var i = 0; i < currentImages.length; i++){
        console.log("Image " + i)
        currentImages[i].setAttribute("tabindex","0")
    }
}
    