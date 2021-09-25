$(document).ready( () =>{
    $('#cart').on('click',() => {
      $('#cartMenu').show();
    });
      $('#account').on('click',() => {
        $('#accountMenu').show();
    });
      $('#help').on('click',() => {
        $('#help').show();
    });
  $('.dropdown-menu').on('mouseleave', () => {
    $('.dropdown-menu').hide();
  });
  
  })