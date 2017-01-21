;(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90607985-1', 'auto');
  ga('send', 'pageview');

window.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.menu') || document.querySelector('.menu--post');
  menu.addEventListener('click', function() {
    document.querySelector('.menu__content')
      .classList.toggle('active')
  }, false)
}, false)
