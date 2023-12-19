package kr.co.cyj.board.model.vo;

import java.util.List;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Alias(value="board")
public class Board {
	
	private int boardNo;	
	private String boardTitle;
	private String boardImg;
	private String boardDetail;
	private int boardWriter;
	private String memberId;	
	private String boardDate;
	private List fileList;
	private String delFileNo;
	private int boardType;
}
