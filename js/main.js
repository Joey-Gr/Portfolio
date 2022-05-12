function imageSelectionE4(imgs) {
    var expandImg = document.getElementById("expandedImgE4");
    var imgText = document.getElementById("imgtextE4");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }

function imageSelectionE5(imgs) {
    var expandImg = document.getElementById("expandedImgE5");
    var imgText = document.getElementById("imgtextE5");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}