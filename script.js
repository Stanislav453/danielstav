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

console.log( fotogalleryImg )

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