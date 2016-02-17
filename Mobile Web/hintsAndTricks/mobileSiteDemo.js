$(window).resize(function(){ //Update dimensions on resize
  sw = document.documentElement.clientWidth;
  sh = document.documentElement.clientHeight;
  checkMobile();
});
  
//Check if Mobile
function checkMobile() {
  var $breakpoint = 640;
  mobile = (sw > breakpoint) ? false : true;

  if (!mobile) { //If Not Mobile
    $('[role="tabpanel"],#nav,#search').show(); //Show full navigation and search
  } else { //Hide 
    if(!$('#nav-anchors a').hasClass('active')) {
      $('#nav,#search').hide(); //Hide full navigation and search
    }
  }
}

// Building the image Carousel
function buildGallery() {
  container.html('<div id="img-list"><ul /></div>');
  imgList = $('#img-list');
  nav.find('a:first').addClass('active');
  
  //For Each Navigation Link
  nav.find('a').each(function() {
    var $this = $(this);
    var href = $this.attr('href');
      
    //Prepare list item with image source in data attribute
    arr += '<li data-imgsrc="'+href+'"></li>';
  });
  
  //Append to #img-list
  imgList.find('ul').append(arr);
      
  //Nav Thumbnail Click
  nav.on('click', 'a', function(e) {
    var pos = $(this).parent().index();
    e.preventDefault();
    loadImg(pos);
    if(swipeEnabled) {
      mySwipe.slide(index, 300);
    }
    updateNav(pos);
  });
}

// If the device allows touch events or CSS transitions, let them have it!
Modernizr.load({
  test: Modernizr.touch && Modernizr.csstransitions,
  yep: 'js/swipe.js',
  complete: function() {
    if (Modernizr.touch && Modernizr.csstransitions) {
      swipeEnabled = true;
      buildSwipe();
    }
  }
});

//Build Swipe Carousel
function buildSwipe() {
  //Initialize Swipe.js
  w.mySwipe = new Swipe(document.getElementById('img-list'), {
    callback: function(event, index, elem) {
      updateNav(index);
      loadImg(index + 1);
    } 
  });
}

// load the AUX content if there's enough size
//Check if Mobile
function checkMobile() {
  var breakpoint = 640;
  if(sw > breakpoint) {
    mobile = false; //Not Mobile
  } else {
    mobile = true; //Mobile
  }
  
  if (!mobile) { //If Not Mobile
    loadAux(); //Load auxiliary content
  }
}

//Set up Auxiliary content
function loadAux() {
  var $aux = $('.aux');
  $aux.each(function(index) {
    var $this = $(this);
    var auxLink = $this.find('a');
    var auxFragment = auxLink.attr('href');
    var auxContent = $this.find('[role=tabpanel]');
    if (auxContent.size()===0 && $this.hasClass('loaded')===false) {
      loadContent(auxFragment,$this);
    }
  });
}

function loadContent(src,container) { // Load Tab Content
  container.addClass('loaded');
  $('<div role="tabpanel" />').load(src +' #content > div',function() {
    $(this).appendTo(container);
  });
}