if(Modernizr.cssanimations) {
     new WOW().init();
}

var today = new Date();
var year = today.getFullYear();

$('.service-ul').columnize({ width: 500 });

$(document).ready(function() {
    $('#equipment').DataTable({
    	paging: false
    });
});

// Job Listings //

var jobListings = new Firebase('https://tdn.firebaseio.com/Jobs');
jobListings.on('child_added', function(snapshot){
    var Jobs = snapshot.val();
    displayJobs(Jobs.title, Jobs.description)

});

function displayJobs(title, description){
    $('<div class="well"/>').text(description).prepend($('<div/>').text(title))
        .appendTo($('#jobsDiv'));
};

// var deferred = displayJobs();

// $.when(deferred).done(function() {
//      if($('#jobsDiv').is(':empty')){
//         $('.no-jobs').show();
//     } else {
//         $('.no-jobs').hide();
//     }
// });

//Contact Form//

$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/liquidtrends@gmail.com",
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#contact-form").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();
      }
    });
  }
});
