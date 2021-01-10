$(document).ready(function(){

  $('.next').click(pulsanteNext);
  $(document).keydown(function(e){
    // se clicco la freccia destra
    if (e.keyCode === 39) {
      pulsanteNext()
    // se clicco la freccia sinistra
    } else if (e.keyCode === 37) {
      pulsantePrev()
    }
});
  $('.prev').click(pulsantePrev);

//questa sposta solo i pallini senza le immagini , quella sotto invece (la non commentata) fa corrispondere i pallini alle immagini

  // $('.nav i').click(function(){
  //   $('.nav i.active').removeClass('active');
  //   $(this).addClass('active');
  //   $(imgAttiva).removeClass('active');
  // });
  $(".nav i").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $("img").eq($(this).index()).addClass("active");
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
