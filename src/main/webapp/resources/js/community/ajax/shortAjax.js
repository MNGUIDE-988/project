

// function pagIngShorts(currentPage){

//     $.ajax({
//         url:contextPath+"/shorts",
//         data:{
//             shortsPageNo:currentPage
//         },
//         success:function(response){
//             drawShorts(response.shorts)
//             drawShortsPage(response.page)
//         },
//         error:function(){
//             console.log("에러")
//         }



//     })

// }
// function selectShortsList(data, callback){
//     $.ajax({
//         url: contextPath + "/selectShortsContentList.sh",
//         data: data,
//         success: function (result) {
//             callback(result)
//         },
//         error: function () {
//             console.log("정보를 불러오는데 실패 했습니다.");
//         }
//     })
// }

// 쇼츠 컨텐츠 하나의 데이터 가져오기
function selectShortsContent(data, callback){
    $.ajax({
        url: contextPath + "/selectShortsContent.sh",
        data: data,
        success: function (result) {
            callback(result)
        },
        error: function () {
            console.log("정보를 불러오는데 실패 했습니다.");
        }
    })
}

// 쇼츠 댓글 가져오기
function selectShortsReplyList(data, callback){
    console.log(data)
    $.ajax({
        url: contextPath + "/selectShortsReplyList.sh",
        data: data,
        success: function (result) {
            callback(result)
        },
        error: function () {
            console.log("정보를 불러오는데 실패 했습니다.");
        }
    })
}