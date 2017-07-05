//lazy loader
$("img.lazy").lazyload({
    effect : "fadeIn"
});
// Add slideDown animation to Bootstrap dropdown when expanding.
 $('.dropdown').on('show.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
 });

 // Add slideUp animation to Bootstrap dropdown when collapsing.
 $('.dropdown').on('hide.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
 });


 //stop iframe video, when modal video cancel
 $(document).ready(function() {
   $('#intro-modal-video').on('hidden.bs.modal', function() {
     var $this = $(this).find('iframe'),
       tempSrc = $this.attr('src');
     $this.attr('src', "");
     $this.attr('src', tempSrc);
   });

 //stop html5 video, when modal video cancel
   $('#html5Video').on('hidden.bs.modal', function() {
     var html5Video = document.getElementById("htmlVideo");
     if (html5Video != null) {
       html5Video.pause();
       html5Video.currentTime = 0;
     }
   });
 });




 /**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});


/* ===============
Testimonial carousel
+++++++++++++++++++++*/
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: 10000,

  });
});

/*===================
FAQ's
++++++++++++++++++*/
//hide answer first
$(".answer").hide();
//click answer open
$(".question").click(function(){
  //$(this).next().toggle();
   $(this).next().slideToggle(400,"swing");
    $(this).find("i").toggleClass("fa-chevron-right fa-minus");
});

/* ===============
About Page Profile Hover
+++++++++++++++++++++*/

jQuery(document).ready(function() {
    $('.profile-details').hide();
    jQuery('.profile-column').hover(function() {
        jQuery(this).find('div:first').show("200")
    }, function() {
        jQuery(this).find('div:first').hide();
    });
});









/**/
