// =====================================================
// ★ 홈페이지 내용을 수정하는 곳입니다.
// 이름(name)과 주소(url)만 바꾸면 됩니다.
// url에 "#"을 넣으면 아직 연결하지 않은 항목입니다.
// 새 항목을 추가하려면 { name: "...", url: "..." }를 복사하세요.
// =====================================================

const PORTAL = {
  title: "2026. 봉원초 교직원 교육정보 포털",
  footer: "© 2026 Bongwon Elementary School Staff Portal",

  categories: [
    {
      name: "교육과정 운영",
      color: "blue",
      items: [
        { name: "학사일정 및 교육과정 자료", url: "https://docs.google.com/spreadsheets/d/1myE45NG1iVSf_fqiYAyB-u1Jgr83wTs5/edit?usp=sharing&ouid=114965997215962237212&rtpof=true&sd=true" },
        { name: "월중 교육활동 계획\n(2025-참고용)", url: "https://docs.google.com/spreadsheets/d/1b9fUjTBP21vUZ1aNLALdo64PDRQAawcrFX8qIWupimU/edit?usp=sharing" },
        { name: "2026학년도월중\n교육활동 계획", url: "https://docs.google.com/spreadsheets/d/1XacwFcdjuUubjuD3yTgMrD21L4H9Zc-B4Ini8RgzRRk/edit?usp=sharing" },
        { name: "기초시간표(전학년 및 전담)", url: "https://docs.google.com/spreadsheets/d/1uefsbbf5-NC8-GRLQ8Gwnczf1Fq6hER_2Fi1cJlU7Us/edit?usp=sharing" },
        { name: "학생 현황", url: "https://docs.google.com/spreadsheets/d/12KFQwaIF91TTEjcb0hMtgfQ3NdyhIPUIbz6bWzy9dck/edit?usp=sharing" },
        { name: "양궁체험활동운영 계획", url: "https://docs.google.com/spreadsheets/d/1ymCaHhN9ykoN8KOTNPt1-RhfY8KW7e9KjFxmUg0DYVA/edit?usp=sharing" }
      ]
    },

    {
      name: "교직원 안내",
      color: "purple",
      items: [
        { name: "위임전결규정(25.03.25.)", url: "https://docs.google.com/spreadsheets/d/13Qf8H7-G9dLRL8mq45Vhtgipcu0DfKY6TRNLcI_VCsU/edit?usp=sharing" },
        { name: "결재라인", url: "https://docs.google.com/spreadsheets/d/11yF_7q8h-nFE5BRHWenOA6oyD_mowzU_aYEby31Yhc8/edit?usp=sharing" },
        { name: "출결 관리 안내 및\n학급별 출석서류 제출 현황", url: "https://docs.google.com/spreadsheets/d/1BPZ9E6E6y8Ls1u4NC13grFmytWOW8Oq-q4oigVOCdig/edit?usp=sharing" },
        { name: "결보강 계획서", url: "https://drive.google.com/drive/folders/10Sp6LXki2a-skw_7ou1VLU3W4ISrEtnV?usp=drive_link" },
        { name: "진주교육지원청\n배차 신청 안내", url: "https://docs.google.com/spreadsheets/d/1gC6p2s9JbXP1XPqSbwfAY1aatFuyEQnoiHIl3lQIGpE/edit?usp=sharing" },
        { name: "학급 담임 및 업무분장표", url: "https://docs.google.com/spreadsheets/d/12KNGhMXvGBQfwH1XQvh_TLGregKl4doUQ1TSaH4TZcU/edit?usp=sharing", password: "2151" },
        { name: "봉원 각종 위원회 현황", url: "https://docs.google.com/spreadsheets/d/1gouckupfvTsiawB9_1bOaJl09R7IQjbI/edit?usp=drive_link&ouid=114965997215962237212&rtpof=true&sd=true" },
        { name: "학생생활규정(26.9.1.시행)", url: "https://bongwon-p.gne.go.kr/bongwon-p/na/ntt/selectNttInfo.do?nttSn=100444656&mi=52340" },
        { name: "학교 규칙(25.10.1.개정)", url: "https://bongwon-p.gne.go.kr/bongwon-p/na/ntt/selectNttInfo.do?nttSn=90787155&mi=52340" },
        { name: "2026. 학업성적관리규정", url: "https://bongwon-p.gne.go.kr/bongwon-p/na/ntt/selectNttInfo.do?nttSn=100089544&mi=52340" }
      ]
    },

    {
      name: "공유문서",
      color: "green",
      items: [
        { name: "부장회의 전달사항", url: "https://docs.google.com/spreadsheets/d/12hhOSmnJX1SBo0FQJDgqN2dr2Ze_uKYqPMwLASIKPqo/edit?usp=sharing" },
        { name: "현장체험학습", url: "https://docs.google.com/spreadsheets/d/11E7ees4vx2ekFeZC71gxpaHe3JFNJcYx1puh7cGSSvQ/edit?usp=sharing" },
        { name: "교직원 다모임 안건 제안", url: "https://docs.google.com/spreadsheets/d/1ZCglk2Tcwbvpdk4su-WoQrnyCIoUNlrXb54hyNaPEl0/edit?usp=sharing" },
        { name: "경남교육청 학교업무 도움자료", url: "https://hryoon0.github.io/helppage/" },
        { name: "2026. 교직원 필수 교육 이수", url: "https://docs.google.com/spreadsheets/d/1iY5OEe3v9Q1AosclGoP7KuLXHHYAUF_l4wAqCtRFWz4/edit?usp=sharing" },
        { name: "학교 협의회 등록부 및\n협의록 양식", url: "https://drive.google.com/drive/folders/1z3jAsJR6FrrKKK69O1xFiupiB_dOPZzw?usp=sharing" },
        { name: "여비정산서 서식(관외)", url: "https://drive.google.com/file/d/1wcB1GytU-yO71G7V6gDPhISI_Mf2c5PT/view?usp=sharing" },
        { name: "여름방학 중 교육과정 운영 및\n교직원 연수 일정표", url: "https://docs.google.com/spreadsheets/d/1K0bpPnC6pmZj6XGsz3BT0W18yBGw_J-KggjrXXluazQ/edit?usp=sharing" },
        { name: "여름방학 중 근무계획(교원)", url: "https://docs.google.com/spreadsheets/d/1cQX_Go7iPijnXL6bTVmwAa5vV_uuZdfUsYcGt7C1j68/edit?usp=sharing" }
      ]
    },

    {
      name: "기타",
      color: "pink",
      items: [
        { name: "학교 배치도", url: "https://docs.google.com/spreadsheets/d/12gkXr55sq_SyHo7E4PcdCyepBvllZuvVzS2mzmjCm2g/edit?usp=sharing" },
        { name: "학교내선번호", url: "https://docs.google.com/spreadsheets/d/1YpqKjvCq2CV_OCpeKdBwJdWThXw9P6-l/edit?usp=sharing&ouid=114965997215962237212&rtpof=true&sd=true" },
        { name: "학교계정 안내", url: "https://docs.google.com/spreadsheets/d/1jALItGfmAY5FqKaeoU7lkzC4yHWzukq-vE5CZjSaIc8/edit?usp=sharing" },
        { name: "교과용 도서 출판사", url: "https://docs.google.com/spreadsheets/d/1gsTlgNGjpoDdfdbXuP-26cvyHgpoPSTGgXysxN7R1A8/edit?usp=sharing" },
        { name: "2026 양궁부 연간 대회 일정", url: "https://docs.google.com/spreadsheets/d/1Ty4B9GClp3pmEeKr1yxdAdmRlt8HLYZbNMr_wAX2JjI/edit?usp=sharing" },
        { name: "체험학습 보조인력\n자격취득 현황", url: "https://docs.google.com/spreadsheets/d/11oLHibQ328ECoqvIw4YtOJejjjHhIsa48lwPLgZFdOs/edit?usp=sharing" }
      ]
    },

    {
      name: "각종 사이트",
      color: "yellow",
      items: [
        { name: "업무포털", url: "https://gne.eduptl.kr/bpm_lgn_lg00_001.do" },
        { name: "EVPN 바로가기", url: "https://evpn.gne.go.kr/custom/index.html" },
        { name: "봉원초 누리집", url: "https://bongwon-p.gne.go.kr/bongwon-p/main.do" },
        { name: "학교종이", url: "https://schoolbell-e.com/ko/main/home" },
        { name: "중앙교육연수원", url: "https://www.neti.go.kr/main.do" },
        { name: "경남교육연수원", url: "https://www.gneti.or.kr/" },
        { name: "경남교육청 온라인 전달연수", url: "https://www.gnlec.kr/main/index.jsp" },
        { name: "학교안전공제회\n학교안전사고보상 지원시스템", url: "https://www.schoolsafe.or.kr/school/login.do" }
      ]
    }
  ]
};
