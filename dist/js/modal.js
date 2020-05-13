$(document).ready(function () {
  const button = $('#button');
  const buttonClose = $('#buttonClose');
  const modal = $('#modal');
  button.on('click', function () {
    modal.removeClass('fadeOut');
    modal.addClass('modal_active animated fadeIn');
  });
  buttonClose.on('click', function () {
    modal.removeClass('modal_active fadeIn');

  })
});