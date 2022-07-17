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