
// Google Maps
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scroll - JQuery
  $('#navbar a, #showcase a').on('click',function(event){
    if(this.hash != ''){
      //console.log(this);
      event.preventDefault();
  
      const hash = this.hash;
      $('html,body').animate({scrollTop: $(hash).offset().top - 100},800)
    }
  })
 
// Reduce Opacity on scroll - JS
window.addEventListener('scroll',function(){
  if(window.scrollY > 150 && window.innerWidth > 344 ){
    document.querySelector('#navbar').style.opacity = 0.9;
  }else{
    document.querySelector('#navbar').style.opacity = 1;
  }
})