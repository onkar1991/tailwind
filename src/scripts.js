
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

        var root = document.getElementsByTagName( 'html' )[0]; 
        var switcher = document.getElementById("switcher");
            if(localStorage.getItem("mode") == "dark"){
                root.classList.add("dark");
                switcher.classList.add("dark-selected");
                document.getElementById("model").checked = true;
            }
            else{
                root.classList.remove("dark");
                switcher.classList.remove("dark-selected");
            }

            let tl = gsap.timeline({delay:1,
           default:{opacity:0}
            });

            function loaderLeave(){
          
            console.log("hey");
            tl.to(".loader",{autoAlpha:1,scaleX:1,transformOrigin:"left",duration:1,ease: Power4.easeOut});
            tl.to(".loader",{autoAlpha:1,scaleX:0,transformOrigin:"right",duration:1, ease:Power4.easeOut,});
          
            }

            //setTimeout(loaderEnter, 3000);
            function loaderEnter(){
             
              console.log("hey");
             // tl.to(".loader",{autoAlpha:1,scaleX:1,transformOrigin:"left",duration:1,ease: Power4.easeOut});
              tl.to(".loader",{autoAlpha:1,scaleX:0,transformOrigin:"right",duration:1, ease:Power4.easeOut,});
              }
              
            barba.init({
              transitions: [{
               // name: 'default-transition',
                //sync: true,
                  async leave() {
                        loaderLeave();
                  },
                  enter() {
                   // loaderEnter();
                  }
              }]
            });
            