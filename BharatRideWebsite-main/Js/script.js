var ele1, sh1 = true, sh2 = true, ele2;
function show() {
    if (sh1) {
        ele1 = document.getElementById("form-css1");
        ele1.classList.add("active");
        sh1 = false;
    } else {
        ele1.classList.remove("active");
        sh1 = true;
    }

    sh2 = true;
    ele2 = document.getElementById("contact-container");
    ele2.classList.remove("active");
}

function removeactive() {
    sh1 = true;
    ele1 = document.getElementById("form-css1");
    ele1.classList.remove("active");

    sh2 = true;
    ele2 = document.getElementById("contact-container");
    ele2.classList.remove("active");
}


function contactdetails() {
    if (sh2) {
        ele2 = document.getElementById("contact-container");
        ele2.classList.add("active");
        sh2 = false;
    } else {
        ele2.classList.remove("active");
        sh2 = true;
    }


    sh1 = true;
    ele1 = document.getElementById("form-css1");
    ele1.classList.remove("active");

}

function facebook() {
    window.open('https://www.facebook.com/profile.php?id=100089296910251', '_blank');
}

function instagram() {
    window.open('https://www.instagram.com/bharatrideapp/', '_blank');
}

function whatsapp() {
    window.open('https://wa.me/9105446086/?text=urlencodedtext', '_blank');
}

function twitter() {
    window.open('https://twitter.com/BharatRide ', '_blank');
}

function gmail() {
    window.open('mailto:admin@bharatride.com', '_blank');
}