const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger: .2,
    y: 15,
    opacity:0,
    
})

Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",

  });

  gsap.from(".anim2",{
    y:30,
    opacity:0,
    duration:2,
    ease: Expo,
    delay:0.2,
    stagger:0.3,
  })
  


// Shery.imageEffect("#elem1  #image1wrapper img",{
//     style:3,
//     debug:true,
//     config:{"uColor":{"value":true},"uSpeed":{"value":0.71,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.69,"range":[0,5]},"uFrequency":{"value":2.31,"range":[0,10]},"geoVertex":{"range":[1,64],"value":21.31},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":0.5459149673463948},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
// })