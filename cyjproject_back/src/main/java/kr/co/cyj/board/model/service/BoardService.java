package kr.co.cyj.board.model.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.cyj.PageInfo;
import kr.co.cyj.Pagination;
import kr.co.cyj.board.model.dao.BoardDao;
import kr.co.cyj.board.model.vo.Board;
import kr.co.cyj.board.model.vo.BoardFile;
import kr.co.cyj.member.model.dao.MemberDao;
import kr.co.cyj.member.model.vo.Member;



@Service
public class BoardService {
	@Autowired
	private BoardDao boardDao;
	@Autowired
	private Pagination pagination;
	@Autowired
	private MemberDao memberDao;

	public HashMap<String, Object> boardList(int reqPage) {
		//게시물 조회, 페이징에 필요한 데이터를 취합(페이지를 만드는 것은 리액트에서)
		int numPerPage = 12; 	//한페이지당 게시물 수 
		int pageNaviSize = 5;	//페이지 네비게이션 길이
		int totalCount = boardDao.totalCount();//전체 게시물 수
		//페이징조회 및 페이지 네비 제작에 필요한 데이터를 객체로 받아옴		
		PageInfo pi = pagination.getPageInfo(reqPage, numPerPage, pageNaviSize, totalCount);
		List boardList = boardDao.selectBoardList(pi);
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("boardList", boardList);
		map.put("pi", pi);
		return map;
		
		
	}
	@Transactional
	public int insertBoard(Board b, ArrayList<BoardFile> fileList) {
		System.out.println(b);
		System.out.println(fileList);
		
		Member member = memberDao.selectOneMember(b.getMemberId());
		b.setBoardWriter(member.getMemberNo());
		int result = boardDao.insertBoard(b);
		for(BoardFile boardFile : fileList) {
			boardFile.setBoardNo(b.getBoardNo());
			result += boardDao.insertBoardFile(boardFile);
		}
		if(result == 1+fileList.size()) {
			return result;
		}else {
			return 0;			
		}
	}

	
	
	
}
