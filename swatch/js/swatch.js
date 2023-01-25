// window 높이 변수
let winh = window.innerHeight;
// menu라는 id 안에 있는 li
const lis = document.querySelectorAll("#menu li");
let sections = document.querySelectorAll("section");

lis.forEach((li, index) => {
    li.addEventListener("click", function(e){
        // preventDefault() : 기존이벤트 제거
        e.preventDefault();
        window.scrollTo({top : index * winh, behavior : "smooth"});
    })
})
lis[0].classList.add("on");
// 스크롤 이벤트 발생했을 때
document.addEventListener("scroll", function(){
    // 스크롤 값
    let sct = document.documentElement.scrollTop;
    console.log(sct);
    // 스크롤 값이 0 ~ 1 * winh 까지면
    // 첫 번째 li에 클래스 on 지정
    // 스크롤 값이 1 * winh ~ 2 * winh
    // 두 번째 li에 크래스 on을 지정 ..... (4번째까지 만들어줌)
    if (sct >= 0 && sct < 1 * winh) {
        lis[0].classList.add("on");
        lis[1].classList.remove("on");
        lis[2].classList.remove("on");
        lis[3].classList.remove("on");
    }
    if (sct >= 1 * winh && sct < 2 * winh) {
        lis[1].classList.add("on");
        lis[0].classList.remove("on");
        lis[2].classList.remove("on");
        lis[3].classList.remove("on");
    }
    if (sct >= 2 && sct < 3 * winh) {
        lis[2].classList.add("on");
        lis[0].classList.remove("on");
        lis[1].classList.remove("on");
        lis[3].classList.remove("on");
    }
    if (sct >= 3 && sct < 4 * winh) {
        lis[3].classList.add("on");
        lis[0].classList.remove("on");
        lis[1].classList.remove("on");
        lis[2].classList.remove("on");
    }
})

// 마우스 무브 이벤트
sections[0].addEventListener("mousemove", function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img11").style.right = 20 + (x / 30) + "px";
    document.querySelector(".img12").style.right = 20 - (x / 30) + "px";
})
sections[1].addEventListener("mousemove", function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img21").style.right = 20 + (x / 30) + "px";
    document.querySelector(".img22").style.right = 20 - (x / 30) + "px";
})
sections[2].addEventListener("mousemove", function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img32").style.right = 20 + (x / 30) + "px";
    document.querySelector(".img33").style.right = 20 - (x / 30) + "px";
})
sections[3].addEventListener("mousemove", function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img41").style.right = 20 + (x / 30) + "px";
    document.querySelector(".img42").style.right = 20 - (x / 30) + "px";
})
