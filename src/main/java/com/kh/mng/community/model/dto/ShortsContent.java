package com.kh.mng.community.model.dto;

import java.sql.Date;

import com.kh.mng.common.model.vo.ProfileImg;
import com.kh.mng.common.model.vo.Video;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShortsContent {
	private Video video;
	private int shortsNo;
	private String shortsContent;
	private int count;
	private Date enrollDate;
	private int userNo;
	private String userNickname;
	private ProfileImg userProfile;
	private int likeCount;
	private int replyCount;
	
	
//	SHORTS VIDEO INFO, SHORTS_NO
//	유저 닉네임, 유저 프로필
//	쇼츠 설명
//	쇼츠 찜 개수, 쇼츠 댓글 수, 유저의 찜 여부
//	댓글 목록 - 댓글 수, 유저 프로필, 유저 닉네임, 댓글 내용, 댓글 등록 날짜, 대댓글 여부
}
