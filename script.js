//function to bloat up like a pufferfish when poked and provoked
bigg = false;
function poke() {
    if(bigg == false) {
        myPic.setAttribute("src", "images/cardBig.jpg");
        bigg = true;
        myPic.className = "wheel";
    } else {
        myPic.setAttribute("src", "images/cardNormal.jpg");
        bigg = false;
        myPic.className = "";
    }
}

//fucnction to look left or right with eyes that stare and glare everywhere
function look(stare) {
    if(stare == "left") {
        myPic.setAttribute("src", "images/lookLeft.jpg");
    } else if(stare == "right") {
        myPic.setAttribute("src", "images/lookRight.jpg");
    } else if(stare == "off") {
        if(bigg == true) {
            myPic.setAttribute("src", "images/cardBig.jpg");
        } else { 
            myPic.setAttribute("src", "images/cardNormal.jpg");
        }
    }
}