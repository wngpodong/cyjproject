package kr.co.cyj.member.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kr.co.cyj.member.model.service.MemberService;
import kr.co.cyj.member.model.vo.Member;


@RestController
@RequestMapping(value="/member")
public class MemberController {
	@Autowired
	private MemberService memberService;
	
	
		
		
		
		// 로그인
		@PostMapping(value="/login")
		public List login(@RequestBody Member member) {
			List list = memberService.login(member);
			return list;
		}
		
		
		
		@GetMapping(value="/checkId/{memberId}")
		public int checkId(@PathVariable String memberId) {
			Member m = memberService.selectOneMember(memberId);
			if(m == null) {
				return 0;
			}else {
				return 1;
			}
		}
		@PostMapping(value="/join")
		public int join(@ModelAttribute Member member) {
			
			
			int result = memberService.insertMember(member);
			return result;
		}
	

}
