package kr.co.cyj.board.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.cyj.PageInfo;
import kr.co.cyj.board.model.vo.Board;
import kr.co.cyj.board.model.vo.BoardFile;

@Mapper
public interface BoardDao {

	int totalCount();

	List selectBoardList(PageInfo pi);

	int insertBoard(Board b);

	int insertBoardFile(BoardFile boardFile);


}
