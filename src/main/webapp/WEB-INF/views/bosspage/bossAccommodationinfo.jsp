<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>Insert title here</title>

        <%@ include file="../common/common-file.jsp" %>
        <link rel="stylesheet" href="resources\css\bosspage\bossAccommodationinfo.css" />
        <link rel="stylesheet" href="resources/css/bosspage/bosspage.css" />
        <link rel="stylesheet" href="resources/css/bosspage/locationinfo.css" />
        <link rel="stylesheet" href="resources/css/common/common.css" />
        <script src="resources/js/bosspage/bosslocation.js"></script>
        <script src="resources\js\bosspage\bossAccommodationinfo.js"></script>
        <script>
            var contextPath = "<%= request.getContextPath() %>";
        </script>
    </head>

    <body onload="bosspageInit()">
        <%@ include file="../common/header.jsp" %>
        <div id="bossmainpage-wrap" class="wrapper">
            <div class="bossmainpage">
                <div>
                    <%@ include file="../bosspage/bossmanubar.jsp" %>
                </div>
                <div class="privacy-page">
                    <div class="privacy-top">${loginUser.userName} 대표님의 장소정보</div>
                    <div id="location-details">
                        <p>업종</p>
                        <p class="location-category" id="location-category">${location.locationCategoryNo}</p>
                        <div>
                            <p>상호명</p>
                            <p class="locationName">${location.locationName}</p>
                        </div>
                            <div>
                                <p>가게 전화번호(*필수*)</p>
                                <input type="tel" name="가게전화번호" id="store-phone" style="background: white;"
                                    placeholder="(ex.지역번호)-0000-0000">
                            </div>
                            <div id="checkin_out_hours">
                                <p>체크인 / 아웃 시간</p>
                                <div id="in-out-hours"></div>
                            </div>
                            
                            <div id="storeinfo">
                                <p>상세 설명</p>
                                <textarea id="store-description" style="border-radius: 15px;" placeholder="*장소에 대한 설명과 반려동물 출입 시 도움이 될 만한 정보를 적어주세요. (ex)테이블 밀집도, 케이지 필요 여부 등."></textarea>
                            </div>
                            <div>
                                <p>반려동물 종류 및 크기(*필수*)</p>
                                <div id="animal-check">
                                    <p>소형견</p>
                                    <input type="checkbox" name="animal-type" value="소형견">
                                    <p>중형견</p>
                                    <input type="checkbox" name="animal-type" value="중형견">
                                    <p>대형견</p>
                                    <input type="checkbox" name="animal-type" value="대형견">
                                    <p>고양이</p>
                                    <input type="checkbox" name="animal-type" value="고양이">
                                </div>
                            </div>
                            <div id="reservation-link">
                                <p>외부 예약링크(선택)</p>
                                <input type="text" id="reservation-link-input" placeholder="ex)www.mnguide.com">
                            </div>
                            <div>
                                <p>업체 사진등록(*필수*)</p>
                                <div id="photo-registration">
                                    <label for="file7" class="registration-upload" data-target="file7">
                                        <img src="resources/img/myPage/+.png">
                                    </label>
                                    <input type="file" accept="image/*" name="file" id="file7" class="company-file"
                                        style="display: none;">
                                    <label for="file8" class="registration-upload" data-target="file8">
                                        <img src="resources/img/myPage/+.png">
                                    </label>
                                    <input type="file" accept="image/*" name="file" id="file8" class="company-file"
                                        style="display: none;">
                                    <label for="file9" class="registration-upload" data-target="file9">
                                        <img src="resources/img/myPage/+.png">
                                    </label>
                                    <input type="file" accept="image/*" name="file" id="file9" class="company-file"
                                        style="display: none;">
                                </div>
                            </div>
                            <div>
                                <p>객실등록</p>
                                <div style="border-top: 1px solid #BABABA; margin-top: 10px; margin-bottom: 10px;">
                                </div>
                                <div>
                                    <table id="room-information">
                                        <tr>
                                            <td>객실1</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>객실 이름</td>
                                            <td colspan="3">김땡땡</td>
                                        </tr>
                                        <tr>
                                            <td>가격</td>
                                            <td colspan="3">68000</td>
                                        </tr>
                                        <tr>
                                            <td style="vertical-align: top;">기본 정보</td>
                                            <td colspan="3">
                                                7평, 퀸 침대 1개<br>
                                                2인 기준 / 인원 추가 불가<br>
                                                커피포트, 다리미, 와이파이, 욕조, 비데, 욕실용품,<br>
                                                잔디 마당, 바베큐, 헤어 드라이기, 냉장고
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>수용 인원</td>
                                            <td colspan="3">2</td>
                                        </tr>
                                        <tr>
                                            <td>체크인/체크아웃</td>
                                            <td colspan="3">15:00~11:00</td>
                                        </tr>
                                        <tr>
                                            <td class="img-box"><img src="<%=contextPath%>/resources/img/공간2.png" alt="">
                                            </td>
                                            <td class="img-box"><img src="<%=contextPath%>/resources/img/공간2.png" alt="">
                                            </td>
                                            <td class="img-box"><img src="<%=contextPath%>/resources/img/공간2.png" alt="">
                                            </td>
                                            <td style="width: 25%;"></td>
                                        </tr>
                                    </table>
                                </div>
                                <div style="border-top: 1px solid #BABABA; margin-top: 40px; margin-bottom: 10px;">
                                </div>
                                <div id="product-registration" style="margin-top: 40px;">
                                    <p>객실등록</p>
                                    <button class="roomOpen-modal">
                                        <img class="room-productimg" src="<%=contextPath%>/resources/img/myPage/+.png">
                                    </button>
                                </div>
                            </div>
                            <div id="upload-location">
                                <button class="upload-bt" onclick="saveLocationInfo()">장소정보 등록 & 업데이트</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rooms-modal">
                <div class="roomUpload-modal">
                    <div class="roomModal-header">
                        객실 등록
                    </div>
                    <div class="roomName-modal">
                        <div>
                            <p>객실이름</p>
                            <input type="text" placeholder="객실 이름을 입력하세요.">
                        </div>
                        <div>
                            <p>가격</p>
                            <input type="text" placeholder="가격을 입력하세요.">
                        </div>
                        <div>
                            <p>기본정보</p>
                            <textarea style="padding: 20px;" id=""
                                placeholder="*장소에 대한 설명과 반려동물 출입 시 도움이 될 만한 정보를 적어주세요.(ex) 테이블 밀집도, 케이지 필요 여부 등"></textarea>
                        </div>
                        <div>
                            <p>수용인원</p>
                            <input type="text" placeholder="최대 수용 인원을 입력하세요.">
                        </div>
                        <div>
                            <table>
                                <div id="checkin_out_hours">
                                    <p>체크인 / 아웃 시간</p>
                                    <div class="in-out-hours">
                                        <p style="margin-left:0px">체크인</p>
                                        <select class="check-in-time" style="margin-left: 0px; margin-top: 13px;">
                                            <option value="">00:00</option>
                                            <option value="">01:00</option>
                                            <option value="">02:00</option>
                                            <option value="">03:00</option>
                                            <option value="">04:00</option>
                                            <option value="">05:00</option>
                                            <option value="">06:00</option>
                                            <option value="">07:00</option>
                                            <option value="">08:00</option>
                                            <option value="">09:00</option>
                                            <option value="">10:00</option>
                                            <option value="">11:00</option>
                                            <option value="">12:00</option>
                                            <option value="">13:00</option>
                                            <option value="">14:00</option>
                                            <option value="">15:00</option>
                                            <option value="">16:00</option>
                                            <option value="">17:00</option>
                                            <option value="">18:00</option>
                                            <option value="">19:00</option>
                                            <option value="">20:00</option>
                                            <option value="">21:00</option>
                                            <option value="">22:00</option>
                                            <option value="">23:00</option>
                                        </select>
                                        <p style="margin-left: auto;">체크아웃</p>
                                        <select class="check-out-time" style="margin-left: 0px; margin-top: 13px;">
                                            <option value="">00:00</option>
                                            <option value="">01:00</option>
                                            <option value="">02:00</option>
                                            <option value="">03:00</option>
                                            <option value="">04:00</option>
                                            <option value="">05:00</option>
                                            <option value="">06:00</option>
                                            <option value="">07:00</option>
                                            <option value="">08:00</option>
                                            <option value="">09:00</option>
                                            <option value="">10:00</option>
                                            <option value="">11:00</option>
                                            <option value="">12:00</option>
                                            <option value="">13:00</option>
                                            <option value="">14:00</option>
                                            <option value="">15:00</option>
                                            <option value="">16:00</option>
                                            <option value="">17:00</option>
                                            <option value="">18:00</option>
                                            <option value="">19:00</option>
                                            <option value="">20:00</option>
                                            <option value="">21:00</option>
                                            <option value="">22:00</option>
                                            <option value="">23:00</option>
                                        </select>
                                    </div>
                                </div>
                            </table>
                        </div>
                        <div>
                            <p>사진등록</p>
                            <div id="photo-registration">
                                <label for="file4">
                                    <div class="registration-upload" data-target="file4">
                                        <img src="<%=contextPath%>/resources/img/myPage/+.png">
                                    </div>
                                </label>
                                <input type="file" accept="image/*" name="file" id="file4" class="company-file">
                                <label for="file5">
                                    <div class="registration-upload" data-target="file5">
                                        <img src="<%=contextPath%>/resources/img/myPage/+.png">
                                    </div>
                                </label>
                                <input type="file" accept="image/*" name="file" id="file5" class="company-file">
                                <label for="file6">
                                    <div class="registration-upload" data-target="file6">
                                        <img src="<%=contextPath%>/resources/img/myPage/+.png">
                                    </div>
                                </label>
                                <input type="file" accept="image/*" name="file" id="file6" class="company-file">
                            </div>
                        </div>
                        <div id="upload-location">
                            <button class="upload-bt">등록</button>
                        </div>
                        <div id="close-location">
                            <button class="closeModal-bt">닫기</button>
                        </div>
                    </div>

                </div>
            </div>
            </div>


            <%@ include file="../common/footer.jsp" %>

    </body>

    </html>