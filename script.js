TweenMax.set('svg',{transformOrigin:"50% 50%",left:"50%",top:"50%",xPercent:"-50%",yPercent:"-50%",opacity:1});

function finalloop(){
  TweenMax.fromTo('svg',0.4,{opacity:0},{opacity:1});
  tlfinal = new TimelineMax({repeat:1});
  tlfinal
    .to('#dressfront1',3,{morphSVG:{shape:'#dressfront1',shapeIndex:1},ease: Power0.easeInOut},"0")
    .to('#dressback1',3,{morphSVG:{shape:'#dressback1',shapeIndex:1},ease: Power0.easeInOut},"0")
    .to('#spacehairs1',3,{morphSVG:{shape:'#spacehairs1',shapeIndex:1},ease: Power0.easeInOut},"0")
   .to('#cloud1',3,{morphSVG:{shape:'#cloud1',shapeIndex:1},ease: Power0.easeInOut},"0")
  .to('#cloud2',3,{morphSVG:{shape:'#cloud2',shapeIndex:1},ease: Power0.easeInOut},"0")
  .to('#cloud3',3,{morphSVG:{shape:'#cloud3',shapeIndex:1},ease: Power0.easeInOut},"0")
  .to('#cloud4',3,{morphSVG:{shape:'#cloud4',shapeIndex:1},ease: Power0.easeInOut},"0")
    .to('#spacehairs1',3,{morphSVG:{shape:'#spacehairs1',shapeIndex:1},ease: Power0.easeInOut},"0")
  .to('#boyhair1',3,{morphSVG:{shape:'#boyhair1',shapeIndex:1},ease: Power0.easeInOut},"0")
  .to('#memory',3,{morphSVG:{shape:'#memory',shapeIndex:1},ease: Power0.easeInOut},"0")
  .to('#memoryclip',3,{morphSVG:{shape:'#memoryclip',shapeIndex:1},ease: Power0.easeInOut},"0")
  ;
  
    tlhearts = new TimelineMax({repeat:-1});
  
  tlhearts
    .staggerFromTo('.cls-40',2,{scale:0},{scale:1,ease: Elastic.easeOut.config(1, 0.3)},0.2,"0")
  .staggerTo('.cls-40',0.4,{scale:0},0.2,"2");
  
      tlstars = new TimelineMax({repeat:-1});
  
  tlstars
    .staggerFromTo('.cls-41',2,{scale:0},{scale:1,ease: Elastic.easeOut.config(1, 0.3)},0.2,"0")
  .staggerTo('.cls-41',0.4,{scale:0},0.2,"2");
  
  tlboy = new TimelineMax({repeat:-1,yoyo:true});
  
  tlboy
.to('#Boy_With_A_Star',3,{x:5,y:3,rotation:2},"0");
  
};

finalloop();