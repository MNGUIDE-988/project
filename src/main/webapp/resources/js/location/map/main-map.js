   // (function(){
    //      onload랑 같은 함수
    //})

function getAddress(data,callback){

    $.ajax({
        url:contextPath+"/getAddress",
        data:data,
        success:function(response){
            callback(response);

        },error:function(){
           console.log("지도 로딩 실패")
        }
    })

}


//addresses
function drawMap(addresses){
    // let address=document.getElementById('address');
    // let locationName=document.getElementById('locationName');

    let mapContainer = document.getElementById('mainpage-map-map'), // 지도를 표시할 div 
    mapOption = {
     center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
     level: 3 // 지도의 확대 레벨
    };  
    
    // 지도를 생성합니다    
    let map = new kakao.maps.Map(mapContainer, mapOption); 
    
    // 주소-좌표 변환 객체를 생성합니다
    let geocoder = new kakao.maps.services.Geocoder();

  


    
    addresses.forEach(address => {
        
          // 주소로 좌표를 검색합니다
            geocoder.addressSearch(address.address , function(result, status) {
            
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
            
                let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            
                // 결과값으로 받은 위치를 마커로 표시합니다
                let marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
            
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                let infowindow = new kakao.maps.InfoWindow({zIndex:1});

                infowindow.setContent('<div style="padding:5px;font-size:12px; border-style:none; border-radius:50px;">' +address.locationName+ '</div>')
                infowindow.open(map, marker);
            
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);


                kakao.maps.event.addListener(marker,'click',function(){
                    location.href="https://map.kakao.com/link/search/"+address.address
                })
                
            } 
            });    

    });

}


function displayMarker(place){
      
    let marker=new kakao.maps.Marker({
        map:map,
        position:new kakao.maps.LatLng(place.y,place.x)
    });
 
    let infowindow = new kakao.maps.InfoWindow({zIndex:1});
    infowindow.setContent('<div style="padding:5px;font-size:12px; border-radius:50px;">' + place.place_name + '</div>')
    infowindow.open(map, marker);
    
    kakao.maps.event.addListener(marker,'click',function(){
       
        location.href="https://map.kakao.com/link/search/"+place.address_name
    })
}
 




