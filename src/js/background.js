var controller = new ScrollMagic.Controller();

var tween = TweenMax.fromTo(
  '.section--about',
  2,
  { y: 30, opacity: 0 },
  { ease: Power4.easeOut, y: 0, opacity: 1 }
);
var scene = new ScrollMagic.Scene({
  triggerElement: '.section--about',
  triggerHook: 'onEnter',
  offset: 200,
  reverse: true
})
  .setTween(tween)
  .addTo(controller);
