// alert("hello")
let itemService = [
    {
        id: 1,
        image: "../images/serviceImg01.png",
        text_head: "Software",
        text_sub: "Blockchain & DLT Applications Mobile & Web Applications Solution Architecture Agile Delivery Management"
    },
    {
        id: 2,
        image: "../images/serviceImg02.png",
        text_head: "Product",
        text_sub: "Product OwnerShip & Management Product Discovery & Research Mico & Marco Analysis Data Driven UX Design"
    },
    {
        id: 3,
        image: "../images/serviceImg03.png",
        text_head: "Team",
        text_sub: "Digital Transormation Blockchain Strategy Prototyping & Proof of Concepts "
    },
    {
        id: 4,
        image: "../images/serviceImg04.png",
        text_head: "Hardware",
        text_sub: "Turkey Cloud Infrastructure Devops as a Service Scalabiliry, Reliabilitu, Security"
    },
    {
        id: 5,
        image: "../images/serviceImg05.png",
        text_head: "Blockchain",
        text_sub: "Blockchain & DLT Applications Mobile & Web Applications Solution Architecture Agile Delivery Management"
    },
    {
        id: 6,
        image: "../images/serviceImg06.png",
        text_head: "Economic",
        text_sub: "Digital Transormation Blockchain Strategy Prototyping & Proof of Concepts TEchnology & Product Roadmaps "
    },
]

let viewItemService = "";
for(let i  = 0; i < itemService.length; i++){
    let eachItem = itemService[i];
    let row = `<div class="col">
                    <div class="col__img animate__animated animate__fadeInUp wow">
                        <img src="${eachItem.image}" alt="imgService" class="serviceImg">
                    </div>
                    <div class="col__text animate__animated animate__slideInLeft wow">
                        <p class="text-color ">${eachItem.text_head}</p>
                        <p class="text-color">${eachItem.text_sub}</p>
                    </div>
                </div>`
    viewItemService += row; 
}
$('.services__row').html(viewItemService);


// Menu
// let menuResponsive = `<div class="header-top__nav">
//                             <ul class="d-flex justify-between align-center " >
//                                 <li><a href="">Why choose us</a></li>
//                                 <li><a href="">Industries</a></li>
//                                 <li><a href="">Works</a></li>
//                                 <li><a href="">Our team</a></li>
//                                 <li><a href="../html/contact.html">Contact</a></li>
//                                 <li><a class="languages" href="">Eng/Vn</a></li>
//                             </ul>
//                         </div>`;

// $(document).on('click','.menu-area',function(){
//     $('.header-top__nav').show();
//     $('.menu-area-exit').show();
//     $('.menu-area').hide();
// })
// $(document).on('click','.menu-area-exit',function(){
//     $('.header-top__nav').hide();
//     $('.menu-area').show();
//     $('.menu-area-exit').hide();


// })
//Click Menu 
$('.menu-area').click(function(){
    //Show Nav
    $('.header-top__nav').show(1);
    
    // Show biểu tượng Exit
    $('.menu-area-exit').show(1)
    $('.menu-area').hide(100);
    // $('#body').css("filter", "brightness(53%)");
    // $('.header-top__nav').css("filter", "brightness(100%)");
    //Hide biểu tượng Menu
})

// Click Exit
$(document).ready(function(){
    $('.menu-area-exit').click(function(){
        // $('ul').animate({
        //     right: '250px',
        //     opacity: '1',
            
        // });
        document.getElementsByClassName('.menu-area-exit').srcollLeft = 0;
    $('.header-top__nav').hide(500);


        $('.menu-area').show(800);
        // $('.menu-area-exit').hide();
    })
});

// When click Menu, Body has change color:






 $('.aaa').slick({
    slidesToShow: 2,
    dots: true,
 });
// Slick
$('.introduce-bottom').slick({
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ],
    slidesToShow: 3,
    dots: true,
    
});


//Định nghĩa 2 hàm
// Scroll to Top
        // Function() - Function này để thực thi sự kiện Onclick vào thì nó sẽ chạy hoạt động scrollTop = 0
        function scrollToTop(){
            document.documentElement.scrollTop = 0;
        }
//Btn To Join
        function btnToJoin(){
            // document.documentElement.scrollTop = 0;
            $('#joinForm').show(500);

            // $('section').css("filter","brightness(50%)");
        }

// Lấy nút BTN
        // Lấy nút BTN, để biết vị trí của nó
        let myBtnToTop = document.getElementById("btnToTop");
        let myBtnToJoin = document.getElementById("btnToJoin");
        let myBtnToProfile = document.getElementById("btnToProfile");
        myBtnToProfile.style.display = "block"

        

//Định nghĩa hàm khi kéo xuống 200px thì hiện 2 nút.
        //sd window.oncroll ( hành động croll ở window )
        window.onscroll = function scrollFunction() {
            // Khi SCroll xuống dưới 20px thì hiện btn  
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    myBtnToTop.style.display = "block";
                    myBtnToJoin.style.display = "block"



                } else {
                    myBtnToTop.style.display = "none";
                    myBtnToJoin.style.display = "none"

                }
        };

//Click Open REGISTER
$('.joinNowBtn').click(function(){
    $('#joinForm').show(500);
});

$('.joinForm-exit').click(function(){
    $('#joinForm').hide(500);
    
});

    //Click Resgis in REG
    $('.choice__reg').click(function(){
        $('.form-bottom-reg').show();
        $('.form-bottom-view').hide();
        $('.choice__reg').css("background", "linear-gradient(to right,#9fc7fc, #013c8b)");
        $('.choice__viewMem').css("background","#ccc")

    

    })
    //Click VIewMem in REG
    $('.choice__viewMem').click(function(){
        $('.form-bottom-reg').hide();
        $('.form-bottom-view').show();
        $('.choice__viewMem').css("background", "linear-gradient(to right,#2db83f, #f9ea46)");
        $('.choice__reg').css("background","#ccc")
    })

// Validate form
//showData
function showData(){
    
    let x = document.forms["regForm"].value;
    if( x = ""){
        console.log("Please enter full field!");
    }
    else{
            let em = document.getElementById("email").value;
            let re = document.getElementById("reason").value;
            document.getElementById("nameMem").innerHTML = em;
            document.getElementById("reasonMem").innerHTML = re;

    }

}


