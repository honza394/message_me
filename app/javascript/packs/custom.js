scroll_bottom = function() {
  if($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  };
};

submit_message = function() {
  $('#message_body').on('keydown', function(e) {
    if(e.keyCode == 13) {
      $('button').click();
      e.target.value = "";
    };
  });
};

$(document).on('turbolinks:load', function() {
  $('.message.close').on('click', function() {
    $(this).closest('.message').transition('fade').remove();
  });
  submit_message();
  scroll_bottom();
});
