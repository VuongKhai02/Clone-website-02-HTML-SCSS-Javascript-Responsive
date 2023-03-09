// Reasons
let reasonItems = [
    {
        id: 1,
        background: "linear-gradient(195deg,#9fc7fc, #013c8b)",
        image: "../images/why_icon1.png" ,
        text_head: "Process inneffiency",
        sub_text: "English texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written English will "
    },
    {
        id: 1,
        image: "../images/why_icon02.png" ,
        background: "linear-gradient(195deg,#b1d75f, #55bf75)",
        text_head: "Lack of loo - Through",
        sub_text: "Prepared by experienced English teachers, the texts, articles and conversations are brief and appropriate to your level of proficiency. "
    },
    {
        id: 1,
        image: "../images/why_icon03.png" ,
        background: "linear-gradient(195deg,#fa8d6e, #fd4b68)",
        text_head: "Competitive Relevance",
        sub_text: "You will feel both challenged and accomplished! You can even download (as PDF) and print the texts and exercises. It's enjoyable"
    },
]

let viewReasonItems = '';
for(let i = 0; i < reasonItems.length; i++){
    let eachItem = reasonItems[i];
    let row = `<div class="col">
                    <div class="col-img d-flex 
                    animate__animated animate__fadeInUp wow" style="background: ${eachItem.background}" >
                        <img src="${eachItem.image}" alt="" class="reasonsImg">
                    </div>
                    <div class="col-text 
                    animate__animated animate__slideInLeft wow">
                        <p class="text-weight
                        animate__animated animate__pulse wow">${eachItem.text_head}</p>
                        <p>${eachItem.sub_text}</p>
                    </div>
                </div>`
    viewReasonItems += row;
}
$('.reasons__row').html(viewReasonItems)

// 


let benefitItems = [
    {
        id: 1,
        image: "../images/why_benefit01.png" ,
        text_head: "Cost Efficiency",
        sub_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo consequuntur dolore adipisci reiciendis, id saepe. Itaque odio expedita"
    },
    {
        id: 2,
        image: "../images/why_benefit02.png" ,
        text_head: "Risk Reduction",
        sub_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo consequuntur dolore adipisci reiciendis, id saepe. Itaque odio expedita"
    },
    {
        id: 1,
        image: "../images/why_benefit03.png" ,
        text_head: "Socus on core business",
        sub_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo consequuntur dolore adipisci reiciendis, id saepe. Itaque odio expedita"
    },
    {
        id: 1,
        image: "../images/why_benefit01.png" ,
        text_head: "Reduce time to market",
        sub_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo consequuntur dolore adipisci reiciendis, id saepe. Itaque odio expedita"
    },
    {
        id: 1,
        image: "../images/why_benefit01.png" ,
        text_head: "Staffing flexibility",
        sub_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo consequuntur dolore adipisci reiciendis, id saepe. Itaque odio expedita"
    },
    {
        id: 1,
        image: "../images/why_benefit01.png" ,
        text_head: "Cost Efficiency",
        sub_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo consequuntur dolore adipisci reiciendis, id saepe. Itaque odio expedita"
    },
]

let viewBenefitItems = '';
for(let i = 0; i < benefitItems.length; i++){
    let eachItem = benefitItems[i];
    let row = `<div class="col d-flex" >
                    <div class="col-img 
                    animate__animated animate__fadeInUp wow">
                        <img src="${eachItem.image}" alt="" class="servicesImg">
                    </div>
                    <div class="col-text 
                    ">
                        <p class="text-heading
                        animate__animated animate__pulse wow">${eachItem.text_head}</p>
                        <p class="text-desc
                        animate__animated animate__slideInLeft wow">${eachItem.sub_text} </p>
                    </div>
                </div>`
    viewBenefitItems += row;
}
$('.services__row').html(viewBenefitItems)

// Projects
let projectItems = [
    {
        id: 3,
        bg_image: "../images/why_projectImg3.jpg" ,
        text_head: "Abcxyz",
        sub_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda"
    },
    {
        id: 2,
        bg_image: "../images/why_projectImg2.jpg" ,
        text_head: "Abcxyz",
        sub_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda"
    },
    {
        id: 1,
        bg_image: "../images/why_projectImg1.jpg" ,
        text_head: "Abcxyz",
        sub_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda"
    },
]

let viewprojectItems = '';
for(let i = 0; i < projectItems.length; i++){
    let eachItem = projectItems[i];
    let row = `<div class="col">
                    <div class="col-img 
                    animate__animated animate__fadeInUp wow" style = "background-image: url(${eachItem.bg_image}">
                        <div class="col-content">
                            <div class="content-icon
                            animate__animated animate__pulse wow">
                                <img src="../images/partnerImg.png" alt="" class="projectIconImg">
                            </div>
                            <div class="content-text">
                                <p>${eachItem.text_head}</p>
                                <p>${eachItem.sub_text} </p>
                            </div>
                        </div>
                    </div>
                </div>`
    viewprojectItems += row;
}
$('.projects__row').html(viewprojectItems)

// Click Menu
$('.menu-area').click(function(){
    //Show Nav
    $('.header-top__nav').show(1);
    
    // Show biểu tượng Exit
    $('.menu-area-exit').show(1)
    $('.menu-area').hide(100);
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


