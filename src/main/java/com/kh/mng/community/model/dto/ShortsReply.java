package com.kh.mng.community.model.dto;

import java.sql.Date;
import java.util.ArrayList;

import com.kh.mng.common.model.vo.ProfileImg;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShortsReply {
	private int replyNo;
	private String replyContent;
	private Date createDate;
	private int userNo;
	private String userNickname;
	private ProfileImg userProfile;
	private int shortsNo;
	private ArrayList<ShortsReply> reReplyList;
	
}
