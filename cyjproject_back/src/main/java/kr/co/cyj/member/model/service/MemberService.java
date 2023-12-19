package kr.co.cyj.member.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.cyj.member.model.dao.MemberDao;
import kr.co.cyj.member.model.vo.Member;
@Service
public class MemberService {
	@Autowired
	private MemberDao memberDao;
	

	public List login(Member member) {
		Member m = memberDao.selectOneMember(member.getMemberId());
		
		return null;
	}
	// 회원가입
		@Transactional
		public int insertMember(Member member) {
			System.out.println(member);
			return memberDao.insertMember(member);
		}
		public Member selectOneMember(String memberId) {
			
			return memberDao.selectOneMember(memberId);
		}

}
