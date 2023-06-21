// 단어 목록
var words = [
    
    "견인지역",
   "게르마늄",
   "공기놀이",
   "제기차기",
   "강강술래",
   "술래잡기",
   "어린이집",
   "차량운행",
   "안전운전",
   "안전제일",
   "퀵서비스",
   "바른생활",
   "게슴츠레",
   "고슴도치",
   "헬리콥터",
   "오토바이",
   "바이올린",
   "카멜레온",
   "오토바이",
   "파인애플",
   "프로그램",
   "바로가기",
   "탱크로리",
   "사자성어",
   "비밀번호",
   "가상계좌",
   "계좌번호",
   "홈페이지",
   "만사형통",
   "레이아웃",
   "신문사설",
   "영재교육",
   "우리은행",
   "국민은행",
   "기업은행",
   "일본뇌염",
   "폐렴구균",
   "예방주사",
   "생년월일",
   "특별활동",
   "고객센터",
   "샌드위치",
   "유통기한",
   "알레르기",
   "담임교사",
   "현장학습",
   "뭉게구름",
   "호랑나비",
   "종이접기",
   "휴대전화",
   "프리미엄",
   "협동조합",
   "주의사항",
   "사용방법",
   "제품설명",
   "직사광선",
   "분리수거",
   "폼클렝징",
   "세숫비누",
   "빨랫비누",
   "총각김치",
   "배추김치",
   "두루치기",
   "벼룩시장",
   "해바라기",
   "코스모스",
   "수면장애",
   "고지혈증",
   "학습효과",
   "비선실세",
   "초등학생",
   "고등학생",
   "밀폐용기",
   "후라이팬",
   "카놀라유",
   "톱니바퀴",
   "어린이날",
   "생활용품",
   "즐겨찾기",
   "일기예보",
   "무념무상",
   "공지사항",
   "비즈공예",
   "헤드라인",
   "이용약관",
   "황금어장",
   "다사다난",
   "잠금모드",
   "카카오톡",
   "대표전화",
   "신혼여행",
   "칠순잔치",
   "백일잔치",
   "영어사전",
   "코스프레",
   "곤충채집",
   "공중전화",
   "박테리아",
   "다이어트",
   "애벌빨래",
   "비트코인",
   "방방곡곡",
   "도원결의",
   "스파게티",
   "대한민국",
   "누네띠네",
   "어장관리",
   "버터구이",
   "업데이트",
   "카페베네",
   "붉은노을",
   "소녀시대",
   "스타워즈",
   "백설공주",
   "요구르트",
   "오토바이",
   "파인애플",
   "스타필드",
   "스타벅스",
   "사자성어",
   "비밀번호",
   "계좌번호",
   "우리나라",
   "생년월일",
   "고객센터",
   "알레르기",
   "현장학습",
   "뭉게구름",
   "호랑나비",
   "종이접기",
   "주의사항",
   "탄수화물",
   "삼각김밥",
   "비트박스",
   "소녀시대",
   "미끄럼틀",
   "원두커피",
   "하모니카",
   "신용카드",
   "타임오버",
   "하드캐리",
   "아카시아",
   "샌드위치",
   "롯데리아",
   "와이파이",
   "플라스틱",
   "맘스터치",
   "텔레비전",
   "물은셀프",
   "허리케인",
   "스테이크",
   "연지곤지",
   "카페라떼",
   "업데이트",
   "인어공주",
   "마요네즈",
   "스마트폰",
   "다이어트",
   "아이패드",
   "김치찌개",
   "오버워치",
   "오토바이",
   "파인애플",
   "사자성어",
   "비밀번호",
   "계좌번호",
   "우리나라",
   "생년월일",
   "고객센터",
   "알레르기",
   "현장학습",
   "뭉게구름",
   "호랑나비",
   "종이접기",
   "주의사항",
   "뉴발란스",
   "인생네컷",
   "도시어부",
   "브로콜리",
   "비타오백",
   "낄끼빠빠",
   "겨울왕국",
   "국민청원",
   "어린왕자",
   "안전제일",
   "바른생활",
   "고슴도치",
   "제품설명",
   "총각김치",
   "두루치기",
   "후라이팬",
   "카놀라유",
   "영웅호걸",
   "어벤져스",
   "모래시계",
   "비트코인",
   "방방곡곡",
   "도원결의",
   "스파게티",
   "대한민국",
   "누네띠네",
   "피라미드",
   "일편단심",
   "손목시계",
   "공중전화",
   "다이어트",
   "고슴도치",
   "국어사전",
   "계좌번호",
   "롯데마트",
   "돼지고기",
   "포르투칼",
   "닭가슴살",
   "데스노트",
   "우루과이",
   "된장찌개",
   "촛불집회",
   "포스트잇",
   "코카콜라",
   "영어학원",
   "동서남북",
   "홈플러스",
   "여자친구",
   "네덜란드",
   "남자친구",
   "파인애플",
   "모나리자",
   "리락쿠마",
   "고등학교",
   "태권브이",
   "계란말이",
   "초등학교",
   "신데렐라",
   "전통민요",
   "전라남도",
   "신사임당",
   "김치찌개",
   "동그랑땡",
   "어장관리",
   "버터구이",
   "황금어장",
   "카카오톡",
   "신혼여행",
   "공중전화",
   "박테리아",
   "페이스톡",
   "신혼여행",
   "허리케인",
   "양념치킨",
   "페이스북",
   "드래곤볼",
   "십중팔구",
   "타임머신",
   "쇠똥구리",
   "경상남도",
   "경상북도",
   "전라남도",
   "전라북도",
   "충청북도",
   "충청남도",
   "아이언맨",
   "나폴레옹",
   "자일리톨",
   "하이패스",
   "블랙핑크",
   "아디다스",
   "스파게티",
   "즐겨찾기",
   "일기예보",
   "공지사항",
   "헤드라인",
   "저승사자",
   "나무늘보",
   "삼각김밥",
   "다다익선",
   "설왕설래",
   "페브리즈",
   "인공지능",
   "무념무상",
   "웰시코기",
   "개과천선",
   "일기예보",
   "생활용품",
   "즐겨찾기",
   "어린이날",
   "동문서답",
   "국가대표",
   "햇님달님",
   "국민연금",
   "삼각김밥",
   "직사광선",
   "크레파스",
   "프로그램",
   "국회의원",
   "직권남용",
   "그린벨트",
   "블루벨트",
   "아기용품",
   "고속도로",
   "홈페이지",
   "다이어리",
   "바이올린",
   "트와이즈",
   "오토바이",
   "비밀번호",
   "카사노바",
   "아프리카",
   "고슴도치",
   "갈팡질팡",
   "주의사항",
   "멜로디언",
   "세숫비누",
   "양념치킨",
   "간장치킨",
   "파닭치킨",
   "골드미스",
   "핸드크림",
   "금상첨화",
   "호랑나비",
   "비타오백",
   "고객센터",
   "생년월일",
   "보노보노",
   "사용방법",
   "두루치기",
   "후라이팬",
   "밀폐용기",
   "과유불급",
   "해바라기",
   "학생회장",
   "배추김치",
   "장화홍련",
   "예방주사",
   "금시초문",
   "속도위반",
   "성형외과",
   "알레르기",
   "다다익선",
   "유통기한",
   "뭉게구름",
   "카멜레온",
   "종이접기",
   "유니클로",
   "이용약관",
   "신혼여행",
   "칠순잔치",
   "영어사전",
   "중고나라",
   "불가리아",
   "닭볶음탕",
   "발레파킹",
   "허수아비",
   "강강술래",
   "천지창조",
   "안전운전",
   "나무늘보",
   "퀵서비스",
   "직사광선",
   "드래곤볼",
   "십중팔구",
   "고진감래",
   "두부김치",
   "타임머신",
   "생로병사",
   "쇠똥구리",
   "블랙핑크",
   "저승사자",
   "모차르트",
   "바이올린",
   "사주팔자",
   "어린이집",
   "술래잡기",
   "오버워치",
   "젝스키스",
   "마요네즈",
   "송이버섯",
   "롯데리아",
   "바른생활",
   "헬리콥터",
   "설왕설래",
   "된장찌개",
   "프로젝트",
   "바디로션",
   "백과사전",
   "알람시계",
   "올리브영",
   "선글라스",
   "스승의날",
   "치과의사",
   "쓰레기통",
   "카페베네",
   "붉은노을",
   "요구르트",
   "청소도구",
   "브라우니",
   "삼시세끼",
   "코카콜라",
   "흔들의자",
   "삼성전자",
   "신서유기",
   
   
   
    // 추가적인 단어들...
  ];
  
  var currentWord = ""; // 현재 단어
  var correctGuesses = 0; // 정답 개수
  var timer; // 타이머 변수
  
  var timeLimit = 3; // 기본 제한 시간 (초)
  
// 게임 시작
function startGame() {
    
    let inputElement = document.getElementById('guessInput');
    inputElement.focus();

    // 타이머 초기화
    clearInterval(timer);
    
    document.getElementById("resultMessage").innerText = "";

    // 시작 버튼과 다시 시작 버튼 처리
    document.getElementById("startButton").style.display = "none";
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("guessInput").style.display = "inline-block";
    
    // 랜덤한 단어 선택
    currentWord = getRandomWord();
    
    // 앞의 2글자 표시
    var displayWord = currentWord.substring(0, 2);
    document.getElementById("wordContainer").innerText = displayWord + extractChosung(currentWord.substring(2, 4));
    
    // 타이머 시작
    timer = setTimeout(handleTimeout, 1000 * timeLimit);
    
    
    // 결과 메시지 초기화
    // document.getElementById("resultMessage").innerText = "";
  }
  
  // 단어 목록에서 랜덤한 단어 선택
  function getRandomWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  // 사용자의 입력과 정답 비교
  function checkGuess() {
    var guess = document.getElementById("guessInput").value;
    
    if (guess.toLowerCase() === currentWord.substring(2).toLowerCase()) {
        // 정답인 경우
        correctGuesses++;
        document.getElementById("resultMessage").innerText = "정답입니다!";
        document.getElementById("restartButton").style.display = "inline-block";
        document.getElementById("score").innerText = "점수:"+correctGuesses;
        startGame();

      } else {
        // 오답인 경우
        document.getElementById("resultMessage").innerText = "틀렸습니다. 정답은 " + currentWord + " 입니다.";
        document.getElementById("restartButton").style.display = "inline-block"; 
        // document.getElementById("resultMessage").innerText = "";
        alert("최종점수: " + correctGuesses);
        correctGuesses = 0
        document.getElementById("score").innerText = "";
        clearTimeout(timer)
        document.getElementById("guessInput").style.display = "none";
      }
    
    // 입력 필드 초기화
    document.getElementById("guessInput").value = "";
    
    // 다시 시작 버튼 표시
    // document.getElementById("restartButton").style.display = "inline-block";
  }
  
  // 제한 시간 초과 처리
  function handleTimeout() {
    document.getElementById("resultMessage").innerText = "시간 초과입니다. 정답은 " + currentWord + " 입니다.";
    document.getElementById("restartButton").style.display = "inline-block";
    alert("최종점수: " + correctGuesses);
    correctGuesses = 0
    document.getElementById("score").innerText = "";
    document.getElementById("guessInput").style.display = "none";
    
  }
  
  
  // 제한 시간 선택
  function selectTimeLimit() {
    var timeOption = document.getElementById("timeLimit").value;
    
    if (timeOption === "3") {
      timeLimit = 3;
    } else if (timeOption === "6") {
      timeLimit = 6;
    }
    
    // 게임 재시작
    // startGame();
  }


  function extractChosung(word) {
    const chosung = [
      'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
      'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];
  
    let extracted = '';
  
    for (let i = 0; i < word.length; i++) {
      const charCode = word.charCodeAt(i);
      if (charCode >= 44032 && charCode <= 55203) { // Check if character is a Hangul syllable
        const syllableIndex = charCode - 44032;
        const chosungIndex = Math.floor(syllableIndex / 588);
        extracted += chosung[chosungIndex];
      }
    }
  
    return extracted;
  }
  

  function focusInput() {
    const inputElement = document.getElementById('input');
    inputElement.focus();
  }