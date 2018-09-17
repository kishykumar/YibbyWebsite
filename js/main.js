$(document).ready(function() {
  
  //------------------------------------//
  //Navbar//
  //------------------------------------//
	var menu = $('.navbar');
	$(window).bind('scroll', function(e){
		if($(window).scrollTop() > 140){
			if(!menu.hasClass('open')){
				menu.addClass('open');
			}
		}else{
			if(menu.hasClass('open')){
				menu.removeClass('open');
			}
		}
	});
  
  
  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  	
  });
  
  // Contact us form click and validation
  $("#contact-form").validate({
    submitHandler: function(form) {

      $("#contact-form").find("#contact-form-button").hide();
      $('#contact-form-spinner').show();

      $.ajax({
        url: "//api.yibbyapp.com/email/support", 
        method: "POST",
        data: {
          name: $(form).find("input[name='name']").val(),
          _replyto: $(form).find("input[name='email']").val(),
          message: $(form).find("textarea[name='message']").val()
        },
        success: function() {
          $('#contact-form-spinner').hide();
          $("#submit-success").fadeIn();
        },
        error: function(xhr, status, error) {
          console.log("Error in sending email: " + error)
          $('#contact-form-spinner').hide();
          $("#contact-form").find("#contact-form-button").show();
          $("#submit-error").fadeIn();
        }
      });
    }
  });

});

