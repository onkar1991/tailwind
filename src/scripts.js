butter.init({
    wrapperId: 'butter',
    cancelOnTouch: false,
    wrapperDamper: 0.06
  });

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
margin:30,
loop:false,
items:4,
autoplay:false,
smartSpeed:1000,
autoplayTimeout:2000

  });
});


    
    let mode = document.getElementById("model");
        mode.addEventListener("click",function(){
        
            if(document.getElementById('model').checked){
                console.log("hey")
                switcher.classList.add("dark-selected");
                localStorage.setItem("mode", "dark");
                let storage =localStorage.getItem("mode");
                
                if(storage == "dark"){
                    root.classList.add("dark");
                  
                }
        }
        else{          
                //document.body.classList.add("dark");
                root.classList.remove("dark");
                switcher.classList.remove("dark-selected");
                localStorage.setItem("mode", "light");
                let storage =localStorage.getItem("mode");
                if(storage == "light"){
                    root.classList.remove("dark");
                 
               }
        } 
        
        });