<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!-- 사용하니까 js 충돌?이 나서 휠 애니메이션이 제대로 작동하지 않음 -->
<!-- <%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>  -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	
	<%@ include file="../common/common-file.jsp" %>
	<link rel="stylesheet" href="resources/css/community/shortsContent.css"/>
    <script src="resources/js/community/shorts/shortsContentInit.js"></script>
    <script src="resources/js/community/shorts/shortsContent.js"></script>
    <script src="resources/js/community/ajax/shortAjax.js"></script>
</head>
<body onload="init('${contextPath}', '${list[0].shortsNo}')">
	<%@ include file="../common/header.jsp"%>

    <div class="main shorts-main">
        <c:forEach var="i" begin="1" end="${listCount}">
            <div class="shorts-wrapper first-wrapper" data-page="${i}">
                <input type="text" name="shortsNo" value="${list[i-1].shortsNo}" style="display: none;">
                <div class="shorts-content shorts-box-style">
                    
                    <video controls autoplay loop muted style="display: none;">
                        <source src="" type="video/mp4">
                        해당 브라우저에서 지원하지 않는 영상입니다.
                    </video>

                    <c:choose>
                        <c:when test="${empty list[i-1].shortsThumb}">
                            <img src="resources/img/default/default_location_img.png" alt="">
                        </c:when>
                        <c:otherwise>
                            <img src="${list[i-1].shortsThumb.filePath}${list[i-1].shortsThumb.changeName}" alt="">
                        </c:otherwise>
                    </c:choose>

                    <div class="shorts-info">
                        <!-- 유저, 쇼츠 설명 -->
                        <div class="shorts-info-writer">
                            <div class="shorts-info-user">
                                <div><img src="" alt=""></div>
                                <div class="shorts-info-profile">
                                    <div class="shorts-info-nickname"></div>
                                    <div class="shorts-info-date"></div>
                                </div>
                            </div>
                            <div class="shorts-info-text">

                            </div>
                        </div>
    
                        <!-- 찜, 댓글수 -->
                        <div class="shorts-info-count">
                            <!-- 찜 -->
                            <div class="shorts-like-count">
                                <div>♥</div>
                                <span>좋아요</span>
                            </div>
                            <!-- 댓글 -->
                            <div class="shorts-reply-count" onclick="showReplyBox(this)" data-check="N" data-page="${i}">
                                <img src="resources/img/community/reply.png" alt="">
                                <span>댓글</span>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div class="shorts-reply-box shorts-box-style" data-page="${i}">
                    <div class="reply-title-box">
                        <span class="reply-title-text">댓글</span>
                        <span class="reply-title-count font-color-gray">0</span>
                    </div>
    
                    <div class="reply-box">
                        
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
                </div>
            </div>
        </c:forEach>
    </div>
</body>
</html>

