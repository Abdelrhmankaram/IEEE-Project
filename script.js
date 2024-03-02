$(document).ready(function(){
  var isDragging = false;
  var startPosition = 0;
  var startScrollLeft = 0;

  $('.board-members').on('mousedown', function(event) {
    isDragging = true;
    startPosition = event.clientX;
    startScrollLeft = $(this).scrollLeft();
  });

  $(document).on('mouseup', function() {
    isDragging = false;
  });

  $('.board-members').on('mousemove', function(event) {
    if (!isDragging) return;
    var delta = event.clientX - startPosition;
    $(this).scrollLeft(startScrollLeft - delta);
  });
});