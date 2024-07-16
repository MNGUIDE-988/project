function uploadProfileImage(contextPath) {
    var fileInput = document.getElementById('fileInput');
    var upfile = fileInput.files[0];
    var formData = new FormData();
    formData.append('profileImage', upfile);

    $.ajax({
        url: contextPath + '/insertProfileImg.mp',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            if (response === "NNNNY") {
                alert('프로필 이미지 업로드 성공');
                location.href = contextPath + '/myPageMain.mp';
            } else {
                alert('프로필 이미지 업로드 실패');
                location.href = contextPath + '/myPageMain.mp';
            }
        },
        error: function () {
            alert('프로필 이미지 업로드 실패');
            location.href = contextPath + '/myPageMain.mp';
        }
    });
}

var petNames = ["반려동물1", "반려동물2", "반려동물3"]; // 실제로는 해당 데이터를 서버로부터 받아와야 합니다.

// 반려동물 이름을 표시할 요소
var petNamesElement = document.getElementById("petNames");

// 각 반려동물의 이름을 동적으로 생성하여 요소에 추가
for (var i = 0; i < petNames.length; i++) {
    var petNameElement = document.createElement("p");
    petNameElement.textContent = petNames[i];
}

function deleteReview(reviewNo, contextPath) {
    $.ajax({
        url: contextPath + "/deleteReview.mp",
        type: 'POST',
        data: { reviewNo: reviewNo },

        success: function (response) {
            console.log(response);
            if (response === 'NNNNY') {
                alert('리뷰 삭제에 성공하였습니다.');
            } else {
                alert('실패');
            }
            // 리다이렉트는 success 또는 error 핸들러 내에서 처리
            location.href = contextPath + '/myPageMain.mp';
        },
        error: function (error) {
            console.log(error);
            alert('실패');
            // 에러 발생 시도 리다이렉트 처리
            location.href = contextPath + '/myPageMain.mp';
        }
    });
}

function ShowUpdateForm(element) {
    // 해당 span 태그를 클릭했을 때 그 부모의 div에서 updateForm을 찾는다.
    var updateForm = element.closest('#right2').querySelector('#updateForm');
    // updateForm의 hidden 속성을 제거하여 보이게 한다.
    updateForm.removeAttribute('hidden');
}

function HideUpdateForm(element) {
    var updateForm = element.closest('#right2').querySelector('#updateForm');
    updateForm.setAttribute('hidden', true);
}

function updateReview(reviewNo, contextPath, inputId, selectId) {
    // 리뷰 콘텐츠 값을 가져옴
    var reviewContent = document.getElementById(inputId).value;
    var reviewStarCount = document.getElementById(selectId).value;

    // FormData 객체 생성
    var formData = new FormData();
    formData.append('reviewNo', reviewNo);
    formData.append('reviewContent', reviewContent);
    formData.append('reviewStarCount', reviewStarCount);

    console.log("FormData Entries:");
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    $.ajax({
        url: contextPath + "/updateReview.mp",
        type: 'POST',
        data: formData,
        processData: false, // 데이터 처리 방법을 지정하지 않음
        contentType: false, // 컨텐츠 타입을 false로 지정하여 jQuery가 기본적으로 설정하는 application/x-www-form-urlencoded를 사용하지 않도록 함
        success: function (response) {
            console.log(response);
            if (response === 'NNNNY') {
                alert('리뷰 수정에 성공하였습니다.');
            } else {
                alert('실패');
            }
            // 리다이렉트는 success 또는 error 핸들러 내에서 처리
            location.href = contextPath + '/myPageMain.mp';
        },
        error: function (error) {
            console.log(error);
            alert('실패');
            // 에러 발생 시도 리다이렉트 처리
            location.href = contextPath + '/myPageMain.mp';
        }
    });
}

// function uploadReviewImg(reviewNo, picNo, contextPath) {
//     var fileInput = document.getElementById('reviewImg');
//     var upfile = fileInput.files[0];
//     var formData = new FormData();
//     formData.append('reviewImg', upfile);
//     formData.append('reviewNo', reviewNo);
//     formData.append('picNo', picNo);

//     $.ajax({
//         url: contextPath + '/updateReviewImg.mp',
//         type: 'POST',
//         data: formData,
//         processData: false,
//         contentType: false,
//         success: function(response) {
//             if(response === "NNNNY") {
//                 alert('리뷰 이미지 업로드 성공');
//                 location.href = contextPath + '/myPageMain.mp';
//             } else {
//                 alert('리뷰 이미지 업로드 실패');
//                 location.href = contextPath + '/myPageMain.mp';
//             }
//         },
//         error: function() {
//             alert('리뷰 이미지 업로드 실패');
//             location.href = contextPath + '/myPageMain.mp';
//         }
//     });
// }

function openFileUploader(picNo) {
    // 클릭 시 파일 업로드(input 태그)를 트리거합니다.
    document.getElementById('reviewImg').click();

    // 클릭된 이미지의 picNo를 저장하거나 사용할 수 있습니다.
    console.log('Clicked image picNo:', picNo);

    // 파일 업로드(input 태그)의 onchange 이벤트에서 처리할 수 있도록 picNo를 전달합니다.
    document.getElementById('reviewImg').setAttribute('data-picNo', picNo);
}

function uploadReviewImg(reviewNo, contextPath) {
    var fileInput = document.getElementById('reviewImg');
    var upfile = fileInput.files[0];
    var formData = new FormData();
    formData.append('reviewImg', upfile);
    formData.append('reviewNo', reviewNo);

    // 파일 업로드(input 태그)에서 가져온 picNo 값을 사용합니다.
    var picNo = fileInput.getAttribute('data-picNo');
    formData.append('picNo', picNo);

    $.ajax({
        url: contextPath + '/updateReviewImg.mp',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            if (response === "NNNNY") {
                alert('리뷰 이미지 업로드 성공');
                location.href = contextPath + '/myPageMain.mp';
            } else {
                alert('리뷰 이미지 업로드 실패');
                location.href = contextPath + '/myPageMain.mp';
            }
        },
        error: function() {
            alert('리뷰 이미지 업로드 실패');
            location.href = contextPath + '/myPageMain.mp';
        }
    });
}