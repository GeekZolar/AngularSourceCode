$(document).ready(function () {

   // Open the sidebar
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

   // if dismiss or overlay was clicked
   $('#dismiss').on('click', function () {
    // hide the sidebar
    $('#sidebar').removeClass('active');
    // fade out the overlay
    $('.overlay').fadeOut();
  });

});