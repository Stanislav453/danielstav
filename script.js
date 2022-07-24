// === HEADER-FOTOGALLERY ==========================

let foto = document.querySelectorAll(".slide");

foto.forEach(function (e) {
    e.addEventListener("click", function(){
        //Odoberá active
        deleteActive()

        //pridáva active
        e.classList.add("active");
    })
    
});

function deleteActive() {
    foto.forEach(function(e){
        e.classList.remove("active");
    })
}

// ===== FOTOGALERIA ================================

let fotogalleryImg = document.querySelectorAll(".fotogaleria img");
let body             = document.querySelector("body");


for(let i = 0; fotogalleryImg.length > i; i++) {
    fotogalleryImg[i].addEventListener("click", function(e) {

        console.log( fotogalleryImg[i] )

        //modal
        var modal = document.createElement("div");
        modal.classList.add("modal");

        // img
        let imger = document.createElement("img");
            imger.setAttribute("src", this.src);
            imger.classList.add("imger");

        // Pridanie img a modalu
        body.appendChild(modal);
        modal.appendChild(imger);

            //Vynazaie modalu
        document.addEventListener("keyup", function(e){
        if(e.code === "Escape"){
          modal.remove();
        }
     });

     modal.addEventListener("click", function(e){
        modal.remove()
     });

    });
};

// == BACK TO HOME BUTTON ===================================

let backToHome  = document.querySelector(".back_to_home");
let backToHomeI = document.querySelector(".back_to_home i");


window.addEventListener("scroll", function (e) {
  let scroll = this.window.scrollY;

  if (Math.ceil(scroll) > 400) {
    backToHome.style.display = "block";
  } else {
    backToHome.style.display = "none";
  }



  });