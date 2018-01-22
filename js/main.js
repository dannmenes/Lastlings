$(document).ready(function(){
  //Hide elements on page load
  //Urges Tour Page Hidden Elements
  //$(".upcomingDates").css('opacity', 0);

  //Urges Tour Page Fadein Elements when scroll down
  $(".hidden-anim").fadeIn('slow');

});

function playYouTubeModal(){
  var src = 'http://www.youtube.com/embed/0ZF5nsTB4N8?enablejsapi=1&autoplay=1&origin=http://www.dannmenes.com';
  document.getElementById('videoPlayer').src = src;
}

function closeVideo(){
  document.getElementById('videoPlayer').src = '';
}

function displayDates(clicked_id){
  if(clicked_id == 'upcoming'){
    document.getElementsByClassName('upcomingDates')[0].style.display = 'block';
    document.getElementById('upcoming').classList.add('date-active');
    document.getElementsByClassName('pastDates')[0].style.display = 'none';
    document.getElementById('past').classList.remove('date-active');
  }
  else if (clicked_id == 'past') {
    document.getElementsByClassName('pastDates')[0].style.display = 'block';
    document.getElementsByClassName('upcomingDates')[0].style.display = 'none';
    document.getElementById('upcoming').classList.remove('date-active');
    document.getElementById('past').classList.add('date-active');
  }
}


function displayModalInfo(clicked_id){
  var productList = document.getElementsByClassName('product');
  var products_id = ['faces-cap', 'embroidery-tee-black', 'embroidery-tee-tan', 'embroidery-tee-white', 'embroided-hoodie', 'enamel-pin'];
  var pos = products_id.indexOf(clicked_id);

  /*Get Attribute info to place in modal*/
  var name = productList[pos].getElementsByClassName('product-name')[0].innerHTML;
  var img = productList[pos].getElementsByClassName('product-img')[0].getElementsByTagName('img')[0].getAttribute('src');
  var price = productList[pos].getElementsByClassName('product-price')[0].innerHTML;


  if(pos == 0 || pos == 5){
    document.getElementsByClassName('size-dropdown')[0].style.display = 'none';
  }
  else {
    document.getElementsByClassName('size-dropdown')[0].style.display = 'block';
  }
  document.getElementById('shopModalLabel').innerHTML = name;
  document.getElementById('shopModalPrice').innerHTML = price;
  document.getElementById('shopModalImg').src = img;


}
