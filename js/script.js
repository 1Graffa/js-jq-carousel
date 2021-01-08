$(document).ready(function(){

  $('.next').click(pulsanteNext);
  $(document).keydown(pulsanteNext);
  $('.prev').click(pulsantePrev);


  $('.nav i').click(function(){
    $('.nav i.active').removeClass('active');
    $(this).addClass('active');
    $(imgAttiva).removeClass('active');

  });

});

function pulsanteNext(){

  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.next().addClass('active');

  if(imgAttiva.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}
function pulsantePrev(){

  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.prev().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.prev().addClass('active');

  if(imgAttiva.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }

}
