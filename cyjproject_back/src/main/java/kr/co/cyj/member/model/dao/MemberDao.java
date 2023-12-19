package kr.co.cyj.member.model.dao;

import kr.co.cyj.member.model.vo.Member;
import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface MemberDao {

	Member selectOneMember(String memberId);

	int insertMember(Member member);
	
}
