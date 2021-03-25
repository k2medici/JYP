// ▼▼▼▼▼ HEADER Scroll-Top script ▼▼▼▼▼
// $(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop()>837){
//             $('.header').css("position","fixed");
//         } else{
//             $('.header').css("position","absolute");
//         }
//     });
// });
// ▲▲▲▲▲ HEADER Scroll-Top script ▲▲▲▲▲





// ▼▼▼▼▼ GhostBox Scroll-Top script ▼▼▼▼▼
// $(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop()>100){
//             $('.ghostbox').css("display","block");
//         } else{
//             $('.ghostbox').css("display","none");
//         }
//     });
// });
// ▲▲▲▲▲ GhostBox Scroll-Top script ▲▲▲▲▲





// ▼▼▼▼▼ MainBox Scroll-Top script ▼▼▼▼▼
// $(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop()>200){
//             $('.mainbox').css("display","none");
//         } else{
//             $('.mainbox').css("display","block");
//         }
//     });
// });
// ▲▲▲▲▲ MainBox Scroll-Top script ▲▲▲▲▲





// ▼▼▼▼▼ GhostBox on/off button script ▼▼▼▼▼
// $(function(){
//     $(".ghost-off").click(function(){
//         $(".ghost-on").css("display","block");
//         $(".ghost-off").css("display","none");
//     });
//     $(".ghost-on").click(function(){
//         $(".ghost-on").css("display","none");
//         $(".ghost-off").css("display","block");
//     });
// });
// ▲▲▲▲▲ GhostBox on/off button script ▲▲▲▲▲





// ▼▼▼▼▼ GhostBox on/off button script ▼▼▼▼▼
const menu = document.querySelector(".sidemenu");
const btn = menu.querySelector(".nav-tgl");
      btn.addEventListener("click", (evt) => {
        menu.classList.toggle("active");
      });
// ▲▲▲▲▲ GhostBox on/off button script ▲▲▲▲▲





// ▼▼▼▼▼ Vertical Tabs script ▼▼▼▼▼
function openAbout(aboutName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    // Show the specific tab content
    document.getElementById(aboutName).style.display = "block";
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
// ▲▲▲▲▲ Vertical Tabs script ▲▲▲▲▲





// ▼▼▼▼▼ script ▼▼▼▼▼
// ▲▲▲▲▲ script ▲▲▲▲▲





// ▼▼▼▼▼ NEWS AREA script ▼▼▼▼▼
//slideshow style interval
var autoSwap = setInterval(swap,5000);

//pause slideshow and reinstantiate on mouseout
$('.news-slide, .news-slidebtn').hover(
  function () {
    clearInterval(autoSwap);
}, 
  function () {
   autoSwap = setInterval(swap,5000);
});

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.news-slide li.news-items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('.news-items').each(function(index) {
    items[index] = $(this).text();
});

//swap images function
function swap(action) {
  var direction = action;
  
  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.left-pos').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemCount;
    }
    
    $('.right-pos').removeClass('right-pos').addClass('back-pos');
    $('.main-pos').removeClass('main-pos').addClass('right-pos');
    $('.left-pos').removeClass('left-pos').addClass('main-pos');
    $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
    
    startItem--;
    if(startItem < 1) {
      startItem = itemCount;
    }
  }
  
  //moving carousel forward
  if(direction == 'clockwise' || direction == '' || direction == null ) {
    function pos(positionvalue) {
      if(positionvalue != 'leftposition') {
        //increment image list id
        position++;
        
        //if final result is greater than image count, reset position.
        if((startItem+position) > resetCount) {
          position = 1-startItem;
        }
      }
    
      //setting the left positioned item
      if(positionvalue == 'leftposition') {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;
      
        //reset last image in list to left position if first image is in main position
        if(position < 1) {
          position = itemCount;
        }
      }
   
      return position;
    }  
  
   $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
   $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
   $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
   $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

    startItem++;
    position=0;
    if(startItem > itemCount) {
      startItem = 1;
    }
  }
}

//next button click function
$('#NewsNext').click(function() {
  swap('clockwise');
});

//prev button click function
$('#NewsPrev').click(function() {
  swap('counter-clockwise');
});

//if any visible items are clicked
$('.news-items').click(function() {
  if($(this).attr('class') == 'news-items left-pos') {
     swap('counter-clockwise'); 
  }
  else {
    swap('clockwise'); 
  }
});
// ▲▲▲▲▲ NEWS AREA script ▲▲▲▲▲





// ▼▼▼▼▼ script ▼▼▼▼▼
// ▲▲▲▲▲ script ▲▲▲▲▲