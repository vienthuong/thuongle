export function createIscroll () {
return  new IScroll('#wrapper',{
      scrollbars: true,
      mouseWheel: true,
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale',
      fadeScrollbars: true,
      useTransition:true,
      bounce:true,
      mouseWheelSpeed:10,
      bounceEasing: {
        style: 'cubic-bezier(0,0,1,1)',
        fn: function (k) { return k; }
      }
    });
}
