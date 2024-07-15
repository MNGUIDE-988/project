let mHtml = $("html");
let page = 1;
let lastPage = $(".shorts-wrapper").length;

// 문서 로드 시 첫 페이지 시작
mHtml.animate({scrollTop : 0},10);

// window에서 wheel 이벤트 발생 시 적용할 함수 (스크롤 시 한 페이지 씩 이동)
$(window).on("wheel", function(e) {

    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) { // 아래로 스크롤 할 때
        if(page == lastPage) return; // true라면 return을 실행해 함수 종료
        page++;
    } else if(e.originalEvent.deltaY < 0) { // 위로 스크롤 할 때
        if(page == 1) return;
        page--;
    }

    // 이동할 다음 페이지의 위치(높이 수치) 계산
    let posTop = (page-1) * ($(".shorts-wrapper").height() + 20);
    console.log($(".shorts-wrapper").height())
    console.log(posTop)
    mHtml.animate({scrollTop : posTop});

    // 불러올 쇼츠 데이터
    let shortsNo = 0;
    for (let wrapper of document.querySelectorAll('.shorts-wrapper')){
        if (wrapper.dataset.page == page){
            shortsNo = wrapper.querySelector('[name = "shortsNo"]').value;
        }
    }

    selectShortsContent({shortsNo : shortsNo}, drawShortsContent);
})


function drawShortsContent(shortsContent){
    let shortsWrapper;
    for (let wrapper of document.querySelectorAll('.shorts-wrapper')){
        if (wrapper.dataset.page == page){
            shortsWrapper = wrapper;
        }
    }

    // 썸네일 안 보이게 한 후 영상 틀기
    shortsWrapper.querySelector('.shorts-content>img').style.display = 'none';
    let video = shortsWrapper.querySelector('.shorts-content video');
    video.style.display = "block"
    video.src = shortsContent.video.filePath + shortsContent.video.changeName;

    // 프로필 사진 출력
    let profile = shortsWrapper.querySelector('.shorts-info-user img');
    if (shortsContent.userProfile == null){
        profile.src = 'resources/img/default/default_profile.jpg'
    } else {
        profile.src = shortsContent.userProfile.filePath + shortsContent.userProfile.changeName;
    }

    // 쇼츠 등록 유저 닉네임 출력
    let nickname = shortsWrapper.querySelector('.shorts-info-nickname');
    nickname.innerHTML = shortsContent.userNickname;

    // 쇼츠 등록일 출력
    let enrollDate = shortsWrapper.querySelector('.shorts-info-date');
    enrollDate.innerHTML = shortsContent.enrollDate;

    // 쇼츠 설명 출력
    let shortsText = shortsWrapper.querySelector('.shorts-info-text');
    shortsText.innerHTML = shortsContent.shortsContent;

    // 쇼츠 좋아요 수 출력
    let shortsLike = shortsWrapper.querySelector('.shorts-like-count>span');
    shortsLike.innerHTML = shortsContent.likeCount;

    // 쇼츠 댓글수 출력
    let shortsReply = shortsWrapper.querySelector('.shorts-reply-count>span');
    shortsReply.innerHTML = shortsContent.replyCount;

}

// 댓글창 열기
function showReplyBox(ev){
    let replyBoxList = document.querySelectorAll('.shorts-reply-box');
    let replyBox;

    for (let box of replyBoxList){
        if (box.dataset.page == ev.dataset.page){
            replyBox = box;
        }
    }

    if (ev.dataset.check == "N"){
        replyBox.style.display = "block"
        ev.dataset.check = "Y"
    } else if (ev.dataset.check == "Y"){
        replyBox.style.display = "none"
        ev.dataset.check = "N"
    }
}


function drawShortsPage(list){
    // let wrapper = document.querySelector('.shorts-wrapper');

    // for (let shorts of list){
    //     let shortsContent = document.createElement('div');
    //     shortsContent.classList.add('shorts-content', 'shorts-box-style');
        
    // }

    // wrapper.innerHTML = content;

    // `<div class="shorts-content shorts-box-style">
    //             <video controls autoplay loop muted>
    //                 <source src="resources/video/test.mp4" type="video/mp4">
    //             </video>
    //             <div class="shorts-info">
    //                 <!-- 유저, 쇼츠 설명 -->
    //                 <div class="shorts-info-writer">
    //                     <div class="shorts-info-user">
    //                         <div><img src="resources/img/main/dog2.jpg" alt=""></div>
    //                         <div class="shorts-info-profile">
    //                             <div class="shorts-info-nickname">쿠키언니</div>
    //                             <div class="shorts-info-date">2024.05.13</div>
    //                         </div>
    //                     </div>
    //                     <div class="shorts-info-text">
    //                         쿠키 데리고 캠프 파이어 불멍했다 너무 귀여워 쿠키 최고
    //                     </div>
    //                 </div>

    //                 <!-- 찜, 댓글수 -->
    //                 <div class="shorts-info-count">
    //                     <!-- 찜 -->
    //                     <div class="shorts-like-count">
    //                         <div>♥</div>
    //                         <span>23</span>
    //                     </div>
    //                     <!-- 댓글 -->
    //                     <div class="shorts-reply-count" onclick="showReplyBox(this)" data-check="N">
    //                         <img src="resources/img/community/reply.png" alt="">
    //                         <span>45</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         <div class="shorts-reply-box shorts-box-style">
                // <div class="reply-title-box">
                //     <span class="reply-title-text">댓글</span>
                //     <span class="reply-title-count font-color-gray">34</span>
                // </div>

                // <div class="reply-box">

                //     <div class="reply-content-box" style="border: none">
                //         <img src="resources/img/main/dog2.jpg" class="user-profile" alt="">
                //         <div class="reply-content-wrap">
                //             <div class="reply-content-info">
                //                 <div>
                //                     <span class="reply-user">토리형</span>
                //                     <span class="reply-date font-color-gray">2024.05.13</span>
                //                 </div>
                //                 <!-- 본인이 쓴 댓글일 경우 삭제하기로 변경 -->
                //                 <span class="reply-regist-re font-color-gray">답글 달기</span>
                //             </div>
                //             <div class="reply-content-text">
                //                 너무 귀여워ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
                //             </div>
                //         </div>
                //     </div>

                //     <div class="reply-content-box">
                //         <img src="resources/img/main/dog2.jpg" class="user-profile" alt="">
                //         <div class="reply-content-wrap">
                //             <div class="reply-content-info">
                //                 <div>
                //                     <span class="reply-user">토리형</span>
                //                     <span class="reply-date font-color-gray">2024.05.13</span>
                //                 </div>
                //                 <span class="reply-regist-re font-color-gray">답글 달기</span>
                //             </div>
                //             <div class="reply-content-text">
                //                 캠핑 가고 싶다
                //             </div>
                //         </div>
                //     </div>

                //     <div class="reply-content-box re-reply">
                //         <img src="resources/img/main/dog2.jpg" class="user-profile" alt="">
                //         <div class="reply-content-wrap">
                //             <div class="reply-content-info">
                //                 <div>
                //                     <span class="reply-user">토리형</span>
                //                     <span class="reply-date font-color-gray">2024.05.13</span>
                //                 </div>
                                
                //             </div>
                //             <div class="reply-content-text">
                //                 저도요
                //             </div>
                //         </div>
                //     </div>
                // </div>

                // <div class="reply-regist-wrap">
                //     <div class="reply-regist-box">
                //         <c:choose>
                //         <c:when test="${empty loginUser.userProfile}">
                //             <img src="resources/img/default/default_profile.jpg" alt="Profile Image" class="user-profile">
                            
                //         </c:when>
                //         <c:otherwise>
                //             <img src="${loginUser.userProfile.filePath}${loginUser.userProfile.changeName}" alt="Profile Image" class="user-profile">
                //         </c:otherwise>
                //     </c:choose>
                //         <textarea name="" id=""></textarea>
                //         <div><img src="resources/img/community/upload.png" alt=""></div>
                //     </div>
                // </div>

    //         </div>`
}







// function moveShortsInfo(event){
//     if (event.target.matches('.pick-box img')) {
//         if (event.target.parentNode.dataset.locno == locationNo){
//             changePick(loginUserNo, locationNo);
//         }
//     } else if(event.target.matches('.search-content-box *')){ 
//         location.href = contextPath + "/detail?locationNo=" + locationNo;
//     }
// }

// transition: right 0.3s ease;



// window.addEventListener("wheel", function(e){
//     e.preventDefault();
// }, {passive : false}
// )








{/* <div class="shorts-content shorts-box-style">
                <video controls autoplay loop muted>
                    <source src="resources/video/test.mp4" type="video/mp4">
                </video>
                <div class="shorts-info">
                    <!-- 유저, 쇼츠 설명 -->
                    <div class="shorts-info-writer">
                        <div class="shorts-info-user">
                            <div><img src="resources/img/main/dog2.jpg" alt=""></div>
                            <div class="shorts-info-profile">
                                <div class="shorts-info-nickname">쿠키언니</div>
                                <div class="shorts-info-date">2024.05.13</div>
                            </div>
                        </div>
                        <div class="shorts-info-text">
                            쿠키 데리고 캠프 파이어 불멍했다 너무 귀여워 쿠키 최고
                        </div>
                    </div>

                    <!-- 찜, 댓글수 -->
                    <div class="shorts-info-count">
                        <!-- 찜 -->
                        <div class="shorts-like-count">
                            <div>♥</div>
                            <span>23</span>
                        </div>
                        <!-- 댓글 -->
                        <div class="shorts-reply-count" onclick="showReplyBox(this)" data-check="N">
                            <img src="resources/img/community/reply.png" alt="">
                            <span>45</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shorts-reply-box shorts-box-style">
                <div class="reply-title-box">
                    <span class="reply-title-text">댓글</span>
                    <span class="reply-title-count font-color-gray">34</span>
                </div>

                <div class="reply-box">

                    <div class="reply-content-box" style="border: none">
                        <img src="resources/img/main/dog2.jpg" class="user-profile" alt="">
                        <div class="reply-content-wrap">
                            <div class="reply-content-info">
                                <div>
                                    <span class="reply-user">토리형</span>
                                    <span class="reply-date font-color-gray">2024.05.13</span>
                                </div>
                                <!-- 본인이 쓴 댓글일 경우 삭제하기로 변경 -->
                                <span class="reply-regist-re font-color-gray">답글 달기</span>
                            </div>
                            <div class="reply-content-text">
                                너무 귀여워ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
                            </div>
                        </div>
                    </div>

                    <div class="reply-content-box">
                        <img src="resources/img/main/dog2.jpg" class="user-profile" alt="">
                        <div class="reply-content-wrap">
                            <div class="reply-content-info">
                                <div>
                                    <span class="reply-user">토리형</span>
                                    <span class="reply-date font-color-gray">2024.05.13</span>
                                </div>
                                <span class="reply-regist-re font-color-gray">답글 달기</span>
                            </div>
                            <div class="reply-content-text">
                                캠핑 가고 싶다
                            </div>
                        </div>
                    </div>

                    <div class="reply-content-box re-reply">
                        <img src="resources/img/main/dog2.jpg" class="user-profile" alt="">
                        <div class="reply-content-wrap">
                            <div class="reply-content-info">
                                <div>
                                    <span class="reply-user">토리형</span>
                                    <span class="reply-date font-color-gray">2024.05.13</span>
                                </div>
                                
                            </div>
                            <div class="reply-content-text">
                                저도요
                            </div>
                        </div>
                    </div>
                </div>

                <div class="reply-regist-wrap">
                    <div class="reply-regist-box">
                        <c:choose>
                        <c:when test="${empty loginUser.userProfile}">
                            <img src="resources/img/default/default_profile.jpg" alt="Profile Image" class="user-profile">
                            
                        </c:when>
                        <c:otherwise>
                            <img src="${loginUser.userProfile.filePath}${loginUser.userProfile.changeName}" alt="Profile Image" class="user-profile">
                        </c:otherwise>
                    </c:choose>
                        <textarea name="" id=""></textarea>
                        <div><img src="resources/img/community/upload.png" alt=""></div>
                    </div>
                </div>

            </div> */}