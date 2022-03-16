(function ($) {
  $(document).ready(function(){

  // wow js
  new WOW().init();


  // counter  
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

});


$('.nav-link').click(function(){
  $(this).addClass('.d-none')
});

  // <!-- deley do link com ancora -->
  $(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
       'scrollTop': $target.offset().top
     }, 900, 'swing');
    });
  });

})(jQuery);	




// fechar o menu no modo responsivo
function fecharMenu(){
  if ( window.innerWidth <= 480) {
    $('.collapse').collapse('toggle')
  } else{
  }
};



const btnMobile = document.getElementById('btn-mobile');
function toggleMenu (){
  const nav = document.getElementsByClassName('nav-new');
  nav.classList.toggle('active')
  
}
btnMobile.addEventListener('click', toggleMenu)




