let arts = document.querySelectorAll("article"); //노드 리스트 : 유사배열
let lis = document.querySelectorAll(".leftnav li"); //노드 리스트 : 유사배열

// 스크롤 이벤트
document.addEventListener("scroll", function(){
    let sct = document.documentElement.scrollTop;
    arts.forEach((ar,index) => {
        let zoomNum = (index * -5000) + sct;
        ar.style.transform = `translateZ(${zoomNum}px)`;
        if (sct > 1000 + (4000 * index)) {
            ar.classList.add("on");
            arts.forEach((ar,index2) => {
                // 현재 인덱스와 다른 순번의 인덱스는 클래스on을 지움
                if(index != index2) {
                    ar.classList.remove("on");
                }
            })
        }
    // 0번째 아티클은 sct 값이 1000보다 커지면 클래스 on 
    // if (sct >= 1000) {
    //     arts[0].classList.add("on");
    //     arts[1].classList.remove("on");
    //     arts[2].classList.remove("on");
    //     arts[3].classList.remove("on");
    //     arts[4].classList.remove("on");
    // }
    // 1번째 아티클은 sct 값이 6000보다 커지면 클래스 on 
    // if (sct >= 5000) {
    //     arts[1].classList.add("on");
    //     arts[0].classList.remove("on");
    //     arts[2].classList.remove("on");
    //     arts[3].classList.remove("on");
    //     arts[4].classList.remove("on");
    // }
    // 2번째 아티클은 sct 값이 110000보다 커지면 클래스 on 
    // if (sct >= 10000) {
    //     arts[2].classList.add("on");
    //     arts[0].classList.remove("on");
    //     arts[1].classList.remove("on");
    //     arts[3].classList.remove("on");
    //     arts[4].classList.remove("on");
    // }
    // 3번째 아티클은 sct 값이 160000보다 커지면 클래스 on
    // if (sct >= 15000) {
    //     arts[3].classList.add("on");
    //     arts[0].classList.remove("on");
    //     arts[1].classList.remove("on");
    //     arts[2].classList.remove("on");
    //     arts[4].classList.remove("on");
    // }
    // 4번째 아티클은 sct 값이 210000보다 커지면 클래스 on 
    // if (sct >= 20000) {
    //     arts[4].classList.add("on");
    //     arts[0].classList.remove("on");
    //     arts[1].classList.remove("on");
    //     arts[2].classList.remove("on");
    //     arts[3].classList.remove("on");
    // }// 0번째 아티클은 sct 값이 1000보다 커지면 클래스 on 
    // if (sct >= 1000) {
    //     arts[0].classList.add("on");
    //     arts[1].classList.remove("on");
    //     arts[2].classList.remove("on");
    //     arts[3].classList.remove("on");
    //     arts[4].classList.remove("on");
    // }
    // 1번째 아티클은 sct 값이 6000보다 커지면 클래스 on 
    // if (sct >= 5000) {
    //     arts[1].classList.add("on");
    //     arts[0].classList.remove("on");
    //     arts[2].classList.remove("on");
    //     arts[3].classList.remove("on");
    //     arts[4].classList.remove("on");
    // }
    // 2번째 아티클은 sct 값이 110000보다 커지면 클래스 on 
    // if (sct >= 10000) {
    //     arts[2].classList.add("on");
    //     arts[0].classList.remove("on");
    //     arts[1].classList.remove("on");
    //     arts[3].classList.remove("on");
    //     arts[4].classList.remove("on");
    // }
    // 3번째 아티클은 sct 값이 160000보다 커지면 클래스 on
    // if (sct >= 15000) {
    //     arts[3].classList.add("on");
    //     arts[0].classList.remove("on");
    //     arts[1].classList.remove("on");
    //     arts[2].classList.remove("on");
    //     arts[4].classList.remove("on");
    // }
    // 4번째 아티클은 sct 값이 210000보다 커지면 클래스 on 
    // if (sct >= 20000) {
    //     arts[4].classList.add("on");
    //     arts[0].classList.remove("on");
    //     arts[1].classList.remove("on");
    //     arts[2].classList.remove("on");
    //     arts[3].classList.remove("on");
    // }
    })
})

// li를 클릭했을 때 
// 0번째 li = 0
// 1번째 li = 5000
// 2번째 li = 10000
// 3번째 li = 15000
// 4번째 li = 20000
lis.forEach((li,index) => {
    li.addEventListener("click", function(e){
        // preventDefault() : 이벤트 제거 
        e.preventDefault();
        window.scrollTo({top : index * 5000, behavior : "smooth"});
    })
})
