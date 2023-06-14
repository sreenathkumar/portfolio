
//owl carousel

if (window.innerWidth < 800) {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
}
if (window.innerWidth >= 800) {
  ele = document.getElementById('slider');
  ele.classList.remove('owl-carousel');
  ele.classList.add('project_cards');
}

// Like section
var projectNumber = $(".project_item").length;
console.log(projectNumber);

var likes = $(".project_item_1 .like span input");
var likeElement = $(".project_item_1 .like svg");
likeElement.click(function () {
  likes.val(parseInt(likes.val()) + 1);

});




