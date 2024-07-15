

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