function loaderAnimation(){
    var tl = gsap.timeline()
    tl.from("#line-p1",{
        opacity: 0,
        delay: 0.2,
        onStart: function(){
            var h4count = document.querySelector("#line-p1 h4");
    var count = 0
    setInterval(function(){
        if( count<=100){
            h4count.innerHTML = count++;
        }
        else{
            count
        }
    
    
    },35)
        },
    
    })
    tl.from(".line h1 ,.line h2",{
        y: 200,
        duration: 1,
        stagger: 0.3,
        delay: 0.3,
    })
    tl.to(".line",{
        opacity: 0,
        duration: 0.5,
        delay: 1.5,
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.4,
        delay: 1,
    })
    tl.from("#page1",{
        y:1600,
        duration:0.6,
        opacity: 0,
        ease: Power4,
    })
    tl.to("#loader",{
        display: 0
    })
}
loaderAnimation()