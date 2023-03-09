$('.menu-area').click(function(){
    $('.header-top__nav').show(1);
    
    // Show biểu tượng Exit
    $('.menu-area-exit').show(1)
    $('.menu-area').hide(100);
    //Hide biểu tượng Menu
})

// Click Exit
$('.menu-area-exit').click(function(){
    $('.header-top__nav').hide(500);
    $('.menu-area').show(100);
    $('.menu-area-exit').hide(500);
})


// Scroll to Top
// Function() - Function này để thực thi sự kiện Onclick vào thì nó sẽ chạy hoạt động scrollTop = 0
function scrollToTop(){
    document.documentElement.scrollTop = 0;
}

// Lấy nút BTN, để biết vị trí của nó
let myBtnToTop = document.getElementById("btnToTop");

//sd window.oncroll ( hành động croll ở window )
window.onscroll = function scrollFunction() {
    // Khi SCroll xuống dưới 20px thì hiện btn  
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            myBtnToTop.style.display = "block";
          } else {
            myBtnToTop.style.display = "none";
          }
};