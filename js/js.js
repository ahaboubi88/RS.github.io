(function () {

    // Bouton retour au menu

    document.addEventListener('DOMContentLoaded', function() {
        window.onscroll = function(ev) {
            document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
        };
    });


    // Animation au scroll

    const animatedL = document.querySelectorAll(".animatedL")

    const callbackL = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInLeft")
            }
        })
    }
    const options ={
        }

    const myObserverL = new IntersectionObserver(callbackL, options)
    animatedL.forEach(element => {
        myObserverL.observe(element)
    })

//    ********************************

const animatedR = document.querySelectorAll(".animatedR")

    const callbackR = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInRight")
            }
        })
    }

    const myObserverR = new IntersectionObserver(callbackR, options)
    animatedR.forEach(element => {
        myObserverR.observe(element)
    })

//    ********************************

    const animatedT = document.querySelectorAll(".animatedT")

    const callbackT = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInTop")
            }
        })
    }

    const myObserverT = new IntersectionObserver(callbackT, options)
    animatedT.forEach(element => {
        myObserverT.observe(element)
    })
//    ********************************

    const animatedB = document.querySelectorAll(".animatedB")

    const callbackB = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInBottom")
            }
        })
    }

    const myObserverB = new IntersectionObserver(callbackB, options)
    animatedB.forEach(element => {
        myObserverB.observe(element)
    })








}) ()