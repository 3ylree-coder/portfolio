export type Project = {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  category: string;
  location: string;
  role: string;
  award?: string;
  summary: string;
  points: string[];
  tags: string[];
  team: string[];
  tools: string[];
  links?: { label: string; href: string }[];
  images?: string[];
};

export const projects: Project[] = [
  {
    id: "duru",
    year: "2026",
    title: "DURU",
    subtitle: "관점을 넓혀주는 피지컬 멀티 에이전트 인터페이스",
    category: "Interaction Design · AI",
    location: "KAIST ID 졸업 프로젝트 · 진행 중",
    role: "개인 프로젝트",
    summary:
      "질문을 말하고 정육면체를 굴리면, 위로 올라온 면의 AI 페르소나가 자신의 관점으로 답하는 오브젝트. 한 가지 정답 대신 서로 다른 다섯 관점을 들려주어 사용자의 시야를 넓히는 것을 목표로 합니다.",
    points: [
      "85mm 정육면체의 다섯 면은 각각 다른 AI 페르소나, 파란 면 하나는 사용자의 몫",
      "질문 유형을 분류하고 관점(lens)을 배정한 뒤 다섯 페르소나를 캐스팅해 음성으로 말하는 6단계 파이프라인 설계",
      "2026년 가을 전시를 목표로 하드웨어·인클로저·발화 로직을 제작 중",
    ],
    tags: ["Physical AI", "Multi-agent", "Tangible Interaction"],
    team: ["Individual Project"],
    tools: ["Claude API", "TTS", "2-inch LCD", "3D Printing"],
    images: ["/images/duru/ui-characters.jpg", "/images/duru/personas.jpg", "/images/duru/pipeline.jpg", "/images/duru/exhibition.jpg"],
  },
  {
    id: "travel-wallet",
    year: "2026",
    title: "Travel Wallet × NH",
    subtitle: "트래블월렛 제휴 여행자산 서비스 기획",
    category: "Product Design",
    location: "KAIST NextInterface Lab, 산학협력",
    role: "UX 리서치, 설문 분석, 시안 디자인",
    summary:
      "트래블월렛에 충전된 외화를 NH투자증권의 RP 상품으로 운용해 여행 전까지 이자를 받을 수 있게 하는 제휴 서비스 '여행자금 모으기'의 사용 경험을 다시 설계한 산학협력 프로젝트",
    points: [
      "기존 서비스의 문제를 두 가지로 정의 — 전체 자산을 한눈에 볼 수 있는 통합 인터페이스가 없고, 트래블월렛과 NH의 화면이 디자인만 같을 뿐 실제로는 분리되어 '가져오기/보내기' 외에는 연결되지 않음",
      "95명 대상 여행자산 설문 — 환율 고려 성향에 따라 편의형(46.4%)·계획형(34%)·전략형(15.5%)으로 분류, 환전 시점은 '출국 1주 이내'가 44명으로 가장 많음",
      "여행 후 남은 외화는 68%가 원화로 바꾸지 않고 그대로 두며, 남은 외화를 투자 상품으로 옮길 의향은 64%(78명 중 50명) — 걸림돌은 '복잡한 절차'",
      "LLM 가상 유저로 설문 전 니즈를 예측하고 실제 응답과 비교(예측: 분할 환전 / 실제: 46.4%가 여행 직전 환전), 설문 데이터를 LLM으로 1차 분류한 뒤 직접 재검토",
      "설문 기반으로 3명의 가상 페르소나를 만들고, 시안을 고칠 때마다 페르소나 대상 사용자 테스트로 방향을 검증",
      "최종 시안 — 여행 D-day를 중심으로 한 메인 화면, 환율 위치를 보여주는 '환율 파도 타기', 여행지 사진 배경의 일정 화면, 투자 타임라인과 통합 잔고 화면",
    ],
    tags: ["Fintech", "Survey", "AI Persona", "Mobile UI"],
    team: ["4인 팀"],
    tools: ["Figma", "ChatGPT"],
    images: ["/images/travel-wallet/hero.jpg", "/images/travel-wallet/accounts.jpg", "/images/travel-wallet/trip-state.jpg", "/images/travel-wallet/timeline.jpg"],
  },
  {
    id: "insider",
    year: "2026",
    title: "IN-Sider",
    subtitle: "인간관계를 대행하는 AI 에이전트 웨어러블 오브젝트 숍",
    category: "Speculative Design",
    location: "Side Project",
    role: "기획 및 비주얼 브랜딩",
    summary:
      "AI 에이전트가 인간관계를 대신 관리해 주는 미래를 가정하고, 그 에이전트를 담은 웨어러블 오브젝트를 파는 가상의 브랜드를 만든 사변적 디자인 프로젝트",
    points: [
      "10–20대를 겨냥한 톤으로 네온 컬러·하이패션 구도·세련된 힙함을 일관된 키워드로 고정하고, 생성형 AI로 오브젝트 디자인 시안을 생성",
      "생성된 이미지 중 브랜드 톤에 맞는 컷만 선별해 가공",
      "오브젝트 숍 웹사이트, 인스타그램, 릴스, 브랜드 영상까지 하나의 비주얼 톤으로 세계관을 완성",
      "'에이전트가 인간관계를 대행한다'는 사변적 설정을 드러내면서도, 실제로 사고 싶게 만드는 비주얼을 목표로 설계",
    ],
    tags: ["Speculative Design", "Branding", "Generative AI"],
    team: ["4인 팀"],
    tools: ["Figma", "Nano Banana", "Midjourney"],
    links: [
      { label: "Website", href: "https://clink14.github.io/IN-Sider/" },
      { label: "Video", href: "https://youtube.com/shorts/zWieB_dqNEE" },
    ],
    images: ["/images/insider/hero.jpg", "/images/insider/pages.jpg", "/images/insider/campaign.jpg", "/images/insider/reels.jpg"],
  },
  {
    id: "pet-share",
    year: "2025",
    title: "PetShare",
    subtitle: "이웃과 반려동물 돌봄을 나누는 커뮤니티",
    category: "UX Design",
    location: "DTU, Denmark",
    role: "UX Researcher & Wireframe Designer",
    summary:
      "지역 사회 내 반려동물 소유주와 도움을 주고 싶은 이웃을 연결하는 비상업적 마이크로 인터랙션 플랫폼",
    points: [
      "Rover, Wag! 같은 유료·거래 중심 서비스와 달리 비금전적 교환과 커뮤니티 지원을 지향 — 짧은 인터뷰를 바탕으로 Lean Canvas와 helper·owner 각각의 User Story Map 작성",
      "초기 AI 기반 펫케어 컨셉이 고유 가치 제안이 약하다는 피드백을 받고, 커뮤니티 중심의 자발적 공유 모델로 피벗",
      "Iteration #2 담당 — Figma 인터랙티브 프로토타입으로 DTU 학생 10명(반려인 6명)에게 4개 과제의 Thinking-Aloud 테스트와 사후 설문 진행",
      "10명 중 6명이 화면의 상호작용 요소가 너무 많다고 느꼈고, 4명은 캘린더가 두 개라 하단 내비게이션에서 혼란 — 게시물 작성 기능이 여러 하위 페이지 뒤에 숨어 있는 문제도 발견",
      "Iteration #3에서 요소 그룹핑과 내비게이션 단순화로 내비게이션 관련 불만을 크게 줄임",
    ],
    tags: ["Community UX", "User Story Mapping", "Usability Test"],
    team: ["Kaitlyn Wu Brooks", "Zhentao Wei", "Laibah Choudhary", "Kang Yu Chen", "Samrat Ojha"],
    tools: ["Figma", "Lean Canvas", "User Story Map", "Thinking Aloud"],
    images: ["/images/petshare/app-entry.jpg", "/images/petshare/app-match.jpg", "/images/petshare/app-care.jpg", "/images/petshare/landing.jpg"],
  },
  {
    id: "heartlens",
    year: "2025",
    title: "HeartLens",
    subtitle: "의료진과 환자를 위한 심전도 이벤트 리뷰 앱",
    category: "UX Design · Health",
    location: "DTU, Denmark",
    role: "",
    summary:
      "웨어러블 심전도 기록에서 감지된 이벤트를 의료진이 빠르게 검토하고 주석을 남기며, 환자는 음성으로 그때의 증상을 기록해 진료를 준비하는 앱",
    points: [
      "의료진 플로우 — 주의가 필요한 환자를 먼저 보여주는 대시보드, 이벤트별 심박·상태·AI 신뢰도를 묶은 Event Review, 확대해 보는 ECG 화면, 자동 표시에 대한 AI 근거 설명과 의사 주석",
      "환자 플로우 — 이벤트 시점에 '어떤 느낌이었는지'를 마이크로 말해 남기는 음성 주석과 요약 리포트",
      "Iteration 3 — 첫 화면을 로그인/회원가입에서 환자/의료진 선택으로 바꾸고, 환자 섹션을 의료진 섹션과 분리",
    ],
    tags: ["Health", "Human-AI Interaction", "Mobile UI"],
    team: ["Team Project"],
    tools: ["Figma", "Prototyping"],
    images: ["/images/heartlens/staff.jpg", "/images/heartlens/review.jpg", "/images/heartlens/voice.jpg"],
  },
  {
    id: "friends-in-a-widget",
    year: "2025",
    title: "Friends in a Widget",
    subtitle: "위젯 기반 SNS의 Z세대 사용 경험 연구",
    category: "UX Research",
    location: "KAIST CIxD Lab",
    role: "연구 설계, 다이어리 스터디·심층 인터뷰, 데이터 분석",
    summary:
      "폐쇄형 SNS인 Locket Widget에서 Z세대 사용자가 느끼는 관계성(Relatedness)의 형성 및 유지 과정을 분석한 HCI 연구",
    points: [
      "20대 20명 참여 — 신규 사용자는 7일, 기존 사용자는 3일간 매일 다이어리 문항에 응답한 뒤 1시간 내외 심층 인터뷰",
      "20명의 데이터를 LLM으로 1차 테마 도출 후, 원본 맥락과 대조하며 축코딩·테마코딩",
      "Ambient Co-presence — 보려는 의지 없이도 폰을 켤 때마다 친구의 일상에 노출되고, 이 비자발적 노출이 기존 SNS보다 강한 연결감을 만듦 (\"24시간 영상통화하는 기분\")",
      "Inhabiting Other's Screen — 내 사진이 상대 홈 화면 한 칸을 계속 차지한다는 인식이 업로드 전 상대를 배려하게 만듦",
      "Less Expectation of Explicit Reaction — 다음 사진이 오면 사라지는 구조가 명시적 반응에 대한 기대를 낮추고, 보기만 해도 교류한 것처럼 느끼게 함",
      "디자인 제안 — 감정 상태에 따라 위젯 노출을 잠시 조절하는 기능, 온보딩에서 '내 사진이 상대 홈 화면에 뜬다'는 구조를 명확히 알리기, 콘텐츠가 사라지는 방식을 보여주는 마이크로 인터랙션",
    ],
    tags: ["HCI", "Diary Study", "Qualitative Coding"],
    team: ["Prof. Youn-kyung Lim", "Sehee Son"],
    tools: ["Diary Study", "In-depth Interview", "Figma", "ChatGPT"],
    images: ["/images/widget/hero.jpg", "/images/widget/implications.jpg"],
  },
  {
    id: "ghosty",
    year: "2025",
    title: "Ghosty",
    subtitle: "아이의 아침 기상을 돕는 투사형 숨바꼭질",
    category: "Interaction Design",
    location: "KAIST, Korea",
    role: "Lead Designer & Developer",
    summary:
      "아이들의 자발적이고 즐거운 아침 기상을 유도하는 투사 기반의 대화형 숨바꼭질 게임",
    points: [
      "따분한 알람 대신 호기심과 놀이를 결합하여 방 안 곳곳에 숨은 유령을 찾는 과정을 통해 아이들의 기상을 유도",
      "OpenCV 라이브러리와 Raspberry Pi, Arduino를 연동하여 아이가 유령을 잡는 동작을 실시간으로 감지하고 반응하는 시스템 구축",
      "스크린을 배제한 공간적 상호작용을 통해 몰입감을 높이고, 아침 루틴을 정서적 교감의 시간으로 재설계",
    ],
    tags: ["Play-based Interaction", "Computer Vision", "Projection"],
    team: ["Individual Project"],
    tools: ["Raspberry Pi", "Arduino", "OpenCV", "Python", "Figma"],
    images: ["/images/ghosty/hero.jpg", "/images/ghosty/character.jpg", "/images/ghosty/prototype.jpg"],
  },
  {
    id: "generations-link",
    year: "2025",
    title: "Generations Link",
    subtitle: "3세대 가족을 잇는 정서적 소통 시스템",
    category: "Universal Design",
    location: "KAIST, Korea",
    role: "Lead UI/UX Designer",
    summary:
      "할아버지, 아버지, 손자 3세대를 아날로그적 감성으로 연결하여 가족 내 정서적 고립을 해소하고 유대감을 강화하는 소통 플랫폼",
    points: [
      "디지털 기기 사용 숙련도가 다른 3세대를 모두 포용하기 위해, 캘린더 알림을 메시지 형태로 전환하거나 챗봇을 도입하는 등 유니버설 디자인 관점의 인터랙션 설계",
      "'그땐 그랬지'와 같이 과거의 기억과 현재의 감정을 공유할 수 있는 투박하고 따뜻한 커뮤니케이션 채널 구축",
    ],
    tags: ["Interactive Design", "Universal Design", "Physical Computing"],
    team: ["Individual Project"],
    // TODO: 기존 데이터의 tools가 SoomSoomi와 동일해서 비워둠 — 실제 사용 도구로 채우기
    tools: [],
  },
  {
    id: "eunyoung-store",
    year: "2024",
    title: "Eunyoung Store",
    subtitle: "대학가 제로웨이스트 숍의 공간·그래픽 리디자인",
    category: "Service Design",
    location: "KAIST ID201",
    role: "",
    summary:
      "KAIST와 충남대 사이, 대학 동아리에서 시작된 제작소가 운영하는 제로웨이스트 숍을 위해 공간 배치와 그래픽을 다시 설계한 프로젝트",
    points: [
      "점주 인터뷰, PEST, 페르소나, SWOT 분석으로 매장의 현재 상황과 방문자를 정리",
      "책은 벌집 모양의 분홍 책장에, 상품은 기울어진 초록 선반에 배치하는 공간 재구성 제안",
      "SNS 홍보, 시민 참여 캠페인, 원데이 클래스 등 매장이 이어갈 수 있는 활동 방향 제안",
    ],
    tags: ["Service Design", "Spatial", "Sustainability"],
    team: ["Kim Woojae", "Kim Taekyong"],
    tools: ["Interview", "PEST", "Persona", "SWOT"],
  },
  {
    id: "soomsoomi",
    year: "2024",
    title: "SoomSoomi",
    subtitle: "호흡 안정을 돕는 테라리움 디바이스",
    category: "Interactive Device",
    location: "KAIST, Korea",
    role: "Lead Designer & Developer",
    summary:
      "사용자의 심박수를 실시간으로 감지하여 과호흡 상황에서 호흡 안정을 돕는 테라리움 컨셉의 인터랙티브 기기",
    points: [
      "MAX30102 심박수 센서와 터치 센서를 활용해 사용자의 상태를 실시간으로 분석하고, LED와 스피커를 통해 안정적인 호흡 리듬을 시청각적으로 유도",
      "테라리움 생태계의 '숨'과 사용자의 호흡을 감각적으로 연결하여 심리적인 안정감과 평온함을 제공하는 정서적 디자인 구현",
      "Arduino를 활용해 다양한 감각 요소(빛, 소리)를 동기화하고 생태계 내부를 관찰할 수 있는 투명 케이스로 자연과의 연결성을 강화",
    ],
    tags: ["Bio-feedback", "Physical Computing"],
    team: ["Individual Project"],
    tools: ["Arduino", "Heart Rate Sensor", "RGB LEDs", "Speaker"],
  },
  {
    id: "fortune-dragon",
    year: "2024",
    title: "Fortune Dragon",
    subtitle: "청룡의 해 디지털 운세 뽑기",
    category: "Interactive Installation",
    location: "KAIST, Korea",
    role: "Lead Designer & Developer",
    summary:
      "청룡의 해를 모티프로 전통적 요소와 인터랙티브 기술을 결합한 디지털 운세 뽑기 시스템",
    points: [
      "사용자가 신비로운 여의주를 터치하면 용이 노래를 부르며 운세 룰렛을 돌리는 인터랙션 구현",
      "룰렛이 멈추면 용이 승천하며 불을 뿜어 오늘의 운세를 알려주는 스토리텔링형 시청각 피드백 설계",
      "매일 아침의 루틴을 신비롭고 즐거운 경험으로 전환하기 위해 독창적인 연출 시도",
    ],
    tags: ["Interactive Storytelling", "Physical Computing"],
    team: ["Individual Project"],
    tools: ["Raspberry Pi Pico", "IR Sensor", "DC Motor", "Python"],
  },
  {
    id: "my-little-ghost",
    year: "2024",
    title: "My Little Ghost",
    subtitle: "아이를 위한 3-in-1 모듈형 청소기",
    category: "Product Design",
    location: "KAIST, Korea",
    role: "Lead Designer",
    summary:
      "아이가 청소의 즐거움을 느낄 수 있도록 캐릭터와 청소기를 결합한 3-in-1 다목적 스마트 디바이스",
    points: [
      "출발점 — 2인실에서 쓰던 미니 청소기가 3인실로 옮긴 뒤 불편해진 경험에서 시작해, 기존 미니 청소기를 3D로 똑같이 모델링(Digital Copy)하며 구조를 먼저 분석",
      "사용 환경에 따라 젤리피쉬 오브제 모드, 책상 먼지 청소용 브러쉬 모드, 일반 바닥 청소용 브러쉬 모드로 전환 가능한 3-way 모듈형 시스템 설계",
      "모든 부품의 분해가 가능한 조립형 구조와 별도의 충전 없이 즉시 사용 가능한 배터리 구동 방식을 사용하여 편의성 극대화",
      "언제든 세척이 가능한 워셔블 더블 필터 시스템을 적용하여 실용성과 유지 관리의 용이성을 동시에 확보",
    ],
    tags: ["Modular Design", "User-Centered Design"],
    team: ["Individual Project"],
    tools: ["Rhino", "CAD", "Technical Drawing"],
    images: ["/images/my-little-ghost/hero.jpg", "/images/my-little-ghost/modes.jpg", "/images/my-little-ghost/exploded.jpg", "/images/my-little-ghost/filter.jpg", "/images/my-little-ghost/drawing.jpg", "/images/my-little-ghost/origin.jpg", "/images/my-little-ghost/origin-parts.jpg"],
  },
  {
    id: "audio-description-ai",
    year: "2023",
    title: "AI Audio Description",
    subtitle: "시각장애인을 위한 AI 영상 해설 자동 생성",
    category: "UX Research",
    location: "KAIST",
    role: "Research Assistant",
    summary:
      "시각장애인을 위한 AI 기반 영상 해설 자동 생성 기술의 사용자 요구사항 도출 및 디자인 가이드라인 제안",
    points: [
      "대전·부산·울산 3개 지역의 시각장애인 20명을 대상으로 세션당 1시간–1시간 30분의 Focus Group Interview(FGI) 수행",
      "현재 영상 해설 서비스 만족도는 평균 78점(최하 30점, 최상 90점)이었지만, 그 이유는 '해설이 없을 때보다 낫기 때문' — 서비스 자체에 대한 만족도는 낮음",
      "해설이 아닌 '해석'을 하는 경향, 해설 음성과 영화 음성을 따로 조절할 수 없는 문제, 여러 역할을 같은 음성으로 해설하는 문제 등 페인 포인트 도출",
      "사용자마다 관심 요소가 달라 단계별 해설과 개인화 옵션을 제안하고, 용어 통일·장면별 해설 요소 분류·불필요한 해설 제거를 개선 방향으로 정리",
    ],
    tags: ["FGI", "Human-AI Interaction", "Accessibility"],
    team: ["Prof. Hyeon-wook Ka"],
    tools: ["FGI", "User Interview", "Qualitative Analysis"],
  },
  {
    id: "bubble-cone",
    year: "2023",
    title: "Bubble Cone",
    subtitle: "마이크로버블로 녹조를 줄이는 필터",
    category: "Product Design",
    location: "KAIST",
    role: "",
    summary:
      "마이크로버블과 소용돌이 흐름으로 녹조(algal bloom)에 대응하는, 어디에나 연결할 수 있는 콘 형태의 장치",
    points: [
      "녹조는 독소로 건강을 위협하고 햇빛과 산소를 막아 생물이 살 수 없는 수역을 만듦 — 2003–2020년 전 세계 녹조는 크기 13%, 빈도 59% 증가했고 한국 4대강에서도 매년 발생",
      "floating wetlands, 수차, 폭기, 초음파 등 기존 해법과 4가지 마이크로버블 발생 방식(spiral flow, venturi, ejector, 가압-감압)을 비교 분석",
      "초기 모델의 장단점을 분석해, 소용돌이의 시작점을 만들고 바깥 표면까지 활용하는 최종 모델로 발전 — 평행사변형 구조로 전단 면적과 유속을 높임",
      "오리연못 물로 실험한 결과 수질 지표가 6 → 8(1차) → 10(2차)으로 개선",
      "후속 연구로 자전거 동력의 시민 참여형 버전과 풍력 동력 버전, 유입 차단 필터 시스템 제안",
    ],
    tags: ["Product Design", "Environment", "Prototyping"],
    team: ["Haeseul Cha", "Jiwoo Kang", "Hyun A Kim", "Minsu Kim"],
    tools: ["3D Modeling", "Prototyping"],
    images: ["/images/bubble-cone/hero.jpg", "/images/bubble-cone/process.jpg", "/images/bubble-cone/experiment.jpg", "/images/bubble-cone/result.jpg"],
  },
  {
    id: "dorm",
    year: "2023",
    title: "Roommate Divider",
    subtitle: "기숙사 룸메이트를 위한 분리형 가구",
    category: "Product Design",
    location: "KAIST",
    role: "",
    summary:
      "2인실 기숙사에서 룸메이트와 생활할 때 생기는 사생활·공간 문제를 해결하는 분리형 수납 가구",
    points: [
      "문제 정의 — 룸메이트와 생활할 때 소음과 불빛 문제가 생기고 사생활을 지키기 어려우며, 개인 공간과 수납 공간이 부족함",
      "축소 프로토타입으로 구조를 검토한 뒤 도면과 모델링, 3D 프린팅·레이저 커팅으로 연결 부품과 판재를 제작",
      "실제 크기로 조립해 공간에 배치하고, 침대 위 공간을 나누는 사용 장면까지 검증",
    ],
    tags: ["Furniture", "Prototyping", "Fabrication"],
    team: ["Course Project"],
    tools: ["CAD", "3D Printing", "Laser Cutting"],
    images: ["/images/dorm/hero.jpg", "/images/dorm/problem.jpg", "/images/dorm/process.jpg", "/images/dorm/assembly.jpg"],
  },
  {
    id: "sewol",
    year: "2022",
    title: "Remember 0416",
    subtitle: "오늘, 내가 세월호를 기억하는 방법",
    category: "Web / Interactive Archive",
    location: "KAIST STP110",
    role: "",
    summary:
      "자가 테스트 형식을 활용해 세월호 참사를 기억하는 방법을 제안하는 인터랙티브 아카이빙 웹사이트",
    points: [
      "정보만 나열하는 아카이브는 사용자가 원하는 정보만 골라 본다는 한계 — MZ세대에게 익숙한 테스트 형식으로 관심을 끌고, 유형별로 정확한 정보와 기억 방안을 제안",
      "강의 키워드를 바탕으로 9개의 질문을 설계하고, 응답에 따라 '명예 잠수부', '시민 해양과학자' 등 8가지 기억 유형으로 연결",
      "인트로·테스트·결과·'더 톺아보기' 화면을 구성하고 메인·결과 일러스트를 직접 디자인",
      "HTML·CSS·JS와 Node.js로 구현해 Heroku에 배포",
    ],
    tags: ["Interactive Web", "Archive", "Illustration"],
    team: ["유지현"],
    tools: ["HTML/CSS/JS", "Node.js", "Heroku"],
    images: ["/images/sewol/intro.jpg", "/images/sewol/results.jpg"],
  },
  {
    id: "dadareuda",
    year: "2022",
    title: "다다르다",
    subtitle: "장애인 대중교통 이용 도우미 서비스",
    category: "Service Design",
    location: "장애인 분야 해커톤 「장애 플러스 기술」",
    role: "",
    summary:
      "한 가지 장애 유형에 한정하지 않고, 여러 장애 유형이 대중교통을 안전하고 편하게 이용하도록 돕는 앱 서비스 제안",
    points: [
      "장애인은 대중교통 이용 시 안전성과 편리성의 제약으로 이용 자체를 꺼리게 되고, 이동권이 보장되지 않음 — Unfear, 버스스로 등 기존 서비스와 비교해 기회 영역 도출",
      "정차역 정보 전달 — 청각장애인·자폐 스펙트럼 장애인을 위해 시각 정보와 진동으로 정차역을 알리고, 실시간 열차 위치와 혼잡도 데이터로 덜 붐비는 칸을 안내",
      "버스 예약 — 지체·시각장애인이 승차할 버스를 미리 예약하고, 기사와 양방향으로 소통하며 발판·하차 요청",
      "SOS 예방 — 긴급 제스처를 CCTV 지능형 영상분석으로 인식해 담당자·보호자와 가까운 앱 사용자에게 알림",
    ],
    tags: ["Accessibility", "Service Design", "Public Transit"],
    team: ["Team AX"],
    tools: ["Tmap API", "BIS · TAGO API", "Public Data"],
  },
  {
    id: "v-nav",
    year: "2020",
    title: "V-Nav",
    subtitle: "시각장애인 사회적 거리두기 보행 보조 시스템",
    category: "Mobile App",
    location: "제2회 한국코드페어",
    award: "대상 (국무총리상)",
    role: "Lead Designer & Developer",
    summary:
      "인공지능 카메라 분석을 통해 마스크 미착용자를 감지하고 시각장애인에게 안전한 우회 보행 경로를 안내하는 플랫폼",
    points: [
      "시각장애인은 코로나19 사회적 거리두기를 스스로 지키기 어렵다는 문제에서 출발 — 스마트폰 카메라가 거리두기를 대신 판단하도록 설계",
      "Android 카메라 영상을 Chaquopy로 Python 모듈과 연동하고, 얼굴 검출 후 마스크 착용 여부를 실시간 판별",
      "감지된 사람의 위치를 전방·왼쪽·오른쪽으로 나눠 \"전방에 마스크 미착용자가 있습니다\"처럼 음성으로 안내",
      "Tmap API를 연동한 우회 경로 재설정과, 시각장애인을 고려한 제스처 인터랙션·음성 안내(STT/TTS) 중심의 배리어 프리 UI 설계",
    ],
    tags: ["Accessibility", "Computer Vision", "Social Good"],
    team: ["권영태", "정동윤"],
    tools: ["Android (Java)", "OpenCV", "PyTorch", "Chaquopy", "Tmap API"],
  },
  {
    id: "camp",
    year: "2019",
    title: "CAMP",
    subtitle: "환자와 의사를 위한 통증 정량화 시스템",
    category: "Digital Healthcare",
    location: "제1회 한국코드페어",
    award: "금상 (과학기술정보통신부장관상)",
    role: "Lead Designer & Developer",
    summary:
      "환자가 느끼는 주관적인 통증을 객관적인 수치로 정량화하여 의료진과의 정확한 의사소통을 돕는 디지털 헬스케어 플랫폼",
    points: [
      "원격 진료 상황에서 환자와 의사가 정확하게 소통하려면 환자 중심의 개인화된 통증 기록이 필요하다는 문제의식에서 출발",
      "신체 이미지 위를 클릭해 통증 위치를 표시하고, 통증 크기에 따라 색이 달라지는 인터페이스를 HTML5 Canvas로 구현",
      "입력한 통증 기록을 표로 누적해, 의사가 진료 전에 증상의 위치와 강도를 한눈에 파악하도록 설계",
      "진료 기록과 처방을 누적해 회복 정도를 그래프로 보여주는 기능, 병원 예약과 연동하는 기능을 확장안으로 제안 — 100개 팀 중 금상 수상",
    ],
    tags: ["Health Tech", "Data Visualization"],
    team: ["박성민", "양혜연"],
    tools: ["HTML5 Canvas", "JavaScript", "Bootstrap", "jQuery"],
  },
];

// 상세 페이지 없이 홈 하단 Archive 목록에만 표시되는 프로젝트
export const archive = [
  { year: "2024", title: "미로 그래픽 포스터", note: "강의 프로젝트 · Graphic Design" },
  { year: "2022", title: "드라이기", note: "강의 프로젝트 · Product Design" },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}

// GitHub Pages serves the site under /<repo>, so static paths need the prefix.
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
