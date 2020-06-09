//Sidenav Initialization
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: 'right',
    draggable: true,
    preventscrolling: true
  });
});

//Parallax Initialization
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});

//Carousel Initialization
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel.carousel-slider');
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  });
});

//Floating Action Button Initialization
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    hoverEnabled: false
  });
});

//Tool Tip Initialization
document.addEventListener('DOMContentLoaded', function() {
  var toolTiphtml = '<span class="white-text islightlypadded blue-grey">Scroll to Top</span>'
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {
      exitDelay: 100,
      position: 'left',
      html: toolTiphtml
  });
});

//Toast Initialization
function handleClick (){
  var toastHTML = '<span>Success!:)</span>';
  M.toast({
    html: toastHTML,
    classes: 'smooth blue-grey'
  });
}
