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
  testPlan?: { method: string; hypothesis: string; metrics: string[] }; // 아직 하지 않은 검증 — 화면에 '가설'로 표시
  images?: string[];
};

export const projects: Project[] = [
  {
    id: "duru",
    year: "2026",
    title: "DURU",
    subtitle: "한 AI의 생각에 갇히지 않도록 다섯 관점을 굴려서 듣는 큐브",
    category: "Interaction Design · AI",
    location: "KAIST URP 창의과제 선정 · 진행 중",
    role: "개인 프로젝트",
    summary:
      "질문을 말하고 큐브를 굴리면 위로 올라온 면의 AI가 자기 관점으로 답합니다. 정답을 하나로 좁히지 않고 다섯 관점을 들려주는 물리적 멀티 에이전트 인터페이스이며 KAIST URP 창의과제로 만들고 있습니다.",
    points: [
      "85mm 정육면체의 다섯 면은 각기 다른 AI 페르소나, 파란 면 하나는 사용자의 몫",
      "질문 유형을 나누고 관점(lens)을 배정해 다섯 페르소나가 음성으로 답하는 6단계 파이프라인 설계",
      "2026 여름·가을학기 KAIST URP 창의과제 선정, 하드웨어·인클로저·발화 로직 제작 중",
    ],
    tags: ["Physical AI", "Multi-agent", "Tangible Interaction"],
    team: ["Individual Project"],
    tools: ["Claude API", "TTS", "Three.js", "3D Printing"],
    images: ["/images/duru/ui-characters.jpg", "/images/duru/personas.jpg", "/images/duru/pipeline.jpg", "/images/duru/exhibition.jpg"],
  },
  {
    id: "sports-highlights",
    year: "2026",
    title: "AI 시청 해외 확장",
    subtitle: "AI 스포츠 시청 기능의 해외 시장 적용",
    category: "Product · Business Development",
    location: "세븐미닛 프로덕트팀 · 인턴 → 프리랜서",
    role: "프로덕트팀 UX 디자이너 (인턴 2026.07~08, 프리랜서 2026.09~)",
    summary:
      "웨이브에 상용화된 세븐미닛의 자연어 기반 'AI 시청' 기능을 해외 고객사 서비스에 맞춰 확장했습니다. 고객사 5곳의 프로토타입을 만들며 UI는 고객사에 맞추고 구조와 인터랙션은 같게 유지하는 컴포넌트를 설계·문서화하고, 개발 가이드로 넘겼습니다.",
    points: [
      "배경: 보고 싶은 장면을 말로 요청하면 AI가 경기 영상에서 찾아 하나의 영상으로 엮어 주는 기능입니다. 2026년 10월 웨이브 골프 중계에서 국내 OTT 최초로 상용화되었습니다.",
      "해외 대상 기업을 분석해 우선순위대로 리스트업하고 직접 컨택했습니다.",
      "바꿀 것과 지킬 것을 나눴습니다: 전체 레이아웃·모서리 둥글기·색·글꼴은 고객사에 맞추고, 화면 구조와 인터랙션은 어느 고객사에서나 같게 유지했습니다.",
      "고객사 5곳의 프로토타입마다 버튼·카드·입력창 등 컴포넌트 20여 종을 설계하고 문서로 남겼습니다.",
      "AI 기능이 처음 쓰는 사용자에게 거부감을 주지 않도록, AI를 드러내는 시점과 요청 방식을 사용자에게 익숙한 형태로 설계했습니다.",
      "프로토타입과 컴포넌트 사용법을 노션 가이드로 정리해 개발자 5명에게 전달했고, 이후 화면에 대한 질문이 눈에 띄게 줄어 업무를 나눠 맡기 쉬워졌습니다.",
      "기업명과 화면 등 세부 내용은 비공개입니다.",
    ],
    tags: ["AI Product", "Global B2B", "Component Documentation"],
    team: ["세븐미닛 프로덕트팀"],
    tools: ["Figma", "Vibe Coding"],
    links: [
      { label: "웨이브 AI 시청 도입 기사 (ZDNet)", href: "https://zdnet.co.kr/view/?no=20261001174043" },
      { label: "머니투데이 기사", href: "https://www.mt.co.kr/tech/2026/10/01/2026100108341768833" },
    ],
  },
  {
    id: "gap",
    year: "2026",
    title: "{GAP}",
    subtitle: "공개와 비공개 사이의 틈을 걷는 몰입형 설치",
    category: "Immersive Installation",
    location: "KAIST ID430 Immersive Space",
    role: "개인 작업 (컨셉 · 영상 · 사운드 · 공간 연출)",
    summary:
      "SNS에 드러내고 싶은 마음과 노출이 두려운 마음 사이에는 '틈'이 있습니다. 그 틈을 공간으로 만든 몰입형 설치로, 관객은 반쯤 잘린 반투명 커튼 안으로 걸어 들어가 영상과 사운드로 그 틈을 겪습니다.",
    points: [
      "갤러리 중앙에 절반만 잘린 반투명 커튼과 의자 하나. 커튼 아래로 앉은 사람의 다리만 보여 관객이 앞의 '보는 사람'과 뒤의 '보여지는 사람'을 오가도록 연출",
      "천장 프로젝터 영상이 커튼의 절개 부분을 지나 뒤쪽 벽에 맺히도록 배치. 여러 도형이 하나로 잘려 나가는 자기검열 장면이 버블 안에서 반복",
      "사운드는 거의 무음에서 알림음과 목소리가 쌓여 절정에 이른 뒤 끊기고 버블 안에서는 먹먹하게 들리도록 조정",
      "위젯 SNS 연구에서 붙잡은 질문을 공간으로 옮긴 작업. 마지막 문장은 'how much of yourself do you let through?'",
    ],
    tags: ["Immersive Space", "Installation", "Video & Sound"],
    testPlan: {
      method: "전시 중 관객 동선 관찰 + 체험 직후 2~3문항 짧은 인터뷰",
      hypothesis: "커튼 뒤 의자에 앉아 본 관객은 앞에서만 본 관객보다 '보여지는 불편함'을 더 구체적인 말로 표현할 것이다",
      metrics: ["커튼 뒤로 들어간 관객 비율", "의자에 머문 시간", "'보는 쪽'과 '보여지는 쪽' 중 더 불편했던 쪽 응답"],
    },
    team: ["Individual Project"],
    tools: ["Cinema 4D", "After Effects", "Projection"],
    images: ["/images/gap/hero.jpg", "/images/gap/inside.jpg", "/images/gap/front.jpg"],
  },
  {
    id: "travel-wallet",
    year: "2026",
    title: "Travel Wallet × NH",
    subtitle: "여행 D-day를 화면 가운데 둔 여행자금 서비스",
    category: "Product Design",
    location: "KAIST-NH투자증권 UX디자인연구센터",
    role: "설문 설계·분석 · D-day와 환율 파도 아이디어 · UI",
    summary:
      "트래블월렛 × NH투자증권 '여행자금 모으기'를 개편했습니다. 상품이 RP에서 주식으로 넓어지는 데 맞춰 화면의 중심을 수익률에서 여행 D-day로 옮겼습니다. NH투자증권이 서비스 반영을 결정해 개발이 진행 중입니다.",
    points: [],
    tags: ["Fintech", "Survey", "Mobile UI"],
    team: ["5인 팀"],
    tools: ["Figma"],
    images: ["/images/travel-wallet/hero.jpg", "/images/travel-wallet/accounts.jpg", "/images/travel-wallet/trip-state.jpg", "/images/travel-wallet/timeline.jpg"],
  },
  {
    id: "insider",
    year: "2026",
    title: "IN-Sider",
    subtitle: "인간관계를 대행하는 AI 에이전트 웨어러블 오브젝트 숍",
    category: "Speculative Design",
    location: "Side Project",
    role: "기획 · 비주얼 브랜딩 · 인스타그램과 뉴스 릴스",
    summary:
      "AI 에이전트가 인간관계를 대신 관리해 주는 미래를 가정한 사변적 디자인입니다. 그 에이전트를 담은 웨어러블 오브젝트를 파는 가상의 브랜드를 만들었습니다.",
    points: [
      "10~20대를 겨냥해 네온 컬러·하이패션 구도·세련된 힙함을 키워드로 고정하고 생성형 AI로 오브젝트 시안 생성",
      "생성한 이미지 중 브랜드 톤에 맞는 컷만 골라 가공",
      "오브젝트 숍 웹사이트, 인스타그램, 릴스, 브랜드 영상을 하나의 비주얼 톤으로 묶어 세계관 완성",
      "감정 신용점수(블랙 미러와 겹침), 관계 주식 포트폴리오, 휴먼 ETF 같은 설정을 버리고 몸에 지니는 에이전트를 파는 숍으로 좁힘",
      "'에이전트가 인간관계를 대행한다'는 설정은 드러내되 비주얼은 실제로 사고 싶어지게 다듬음",
    ],
    tags: ["Speculative Design", "Branding", "Generative AI"],
    team: ["4인 팀"],
    tools: ["Figma", "Nano Banana", "Midjourney"],
    links: [
      { label: "Website", href: "https://clink14.github.io/IN-Sider/" },
      { label: "Video", href: "https://youtube.com/shorts/zWieB_dqNEE" },
    ],
    images: ["/images/insider/hero.jpg", "/images/insider/pages.jpg", "/images/insider/campaign.jpg", "/images/insider/reels.jpg"],
    testPlan: {
      method: "브랜드 웹사이트와 릴스를 20~30대 10명에게 보여주고 인터뷰 · 설문",
      hypothesis: "사고 싶게 만든 비주얼이 오히려 '인간관계를 대행한다'는 설정의 불편함을 더 또렷하게 느끼게 할 것이다",
      metrics: ["'사고 싶다'와 '불편하다'를 동시에 고른 응답 비율", "브랜드 설정을 정확히 이해한 비율", "릴스 시청 완료율"],
    },
  },
  {
    id: "festival-sponsorship",
    year: "2024",
    title: "Local Sponsorship",
    subtitle: "학교 앞 상권을 설득해 지금까지 이어지는 후원 구조를 만들다",
    category: "Marketing · Partnership",
    location: "KAIST 행사준비위원회 상상효과",
    role: "17대 부위원장 · 2024 태울석림제 기획부단장 (예산 책임)",
    summary:
      "예산이 줄어든 해, 기업 대신 학교 앞 가게를 설득해 20여 곳의 후원을 모았습니다. 이때 만든 상권 후원은 지금도 학생회 행사에서 이어지고 있습니다.",
    points: [
      "예산은 전년보다 줄었고 기업 후원은 제안을 보내도 답이 거의 없던 상황",
      "학생 덕분에 장사가 되는 학교 앞 상권을 새 타깃으로 잡고 대기업·중소기업 / 대전 대표 가게 / 학교 앞 상권별로 제안 금액과 예우를 따로 정함",
      "후원 제안서를 리디자인하고 25만·50만·75만·100만원 이상 4단계 예우표(현판, 인스타그램, 현수막, 배너, 무대 광고, 책자)를 새로 구성",
      "학교 앞 가게 20여 곳에서 가게당 10만~100만원씩 후원 유치. 이후 학생회와 행사준비위원회 행사에서도 상권 후원이 계속 이어지는 중",
    ],
    tags: ["B2B Marketing", "Partnership", "Proposal Design"],
    team: ["KAIST 행사준비위원회 상상효과"],
    tools: ["타깃 세분화", "제안서 디자인", "가격·예우 설계", "직접 컨택"],
    images: ["/images/sponsorship/cover.jpg", "/images/sponsorship/tiers.jpg", "/images/sponsorship/pages.jpg"],
  },
  {
    id: "pet-share",
    year: "2025",
    title: "PetShare",
    subtitle: "AI 펫케어 앱으로 시작해 피드백 한 번에 이웃 간 돌봄 공유로 바꾼 방향",
    category: "UX Design",
    location: "DTU, Denmark",
    role: "UX Researcher & Wireframe Designer",
    summary:
      "피칭 피드백을 듣고 건강관리 앱을 이웃 간 돌봄 공유 서비스로 바꿨습니다. 10명 사용성 테스트에서 길을 잃는 지점을 찾아 내비게이션을 단순화했습니다.",
    points: [
      "유료 거래 중심인 Rover, Wag!과 달리 비금전적 교환과 이웃 간 지원을 지향. 짧은 인터뷰로 Lean Canvas와 helper·owner별 User Story Map 작성",
      "초기 AI 펫케어 컨셉은 고유한 가치 제안이 약하다는 피드백을 받고 이웃끼리 자발적으로 나누는 커뮤니티 모델로 피벗",
      "Iteration #2 공동 담당: Figma 인터랙티브 프로토타입으로 DTU 학생 10명(반려인 6명)에게 4개 과제 Thinking-Aloud 테스트와 사후 설문",
      "10명 중 6명은 한 화면의 요소가 너무 많다고 느꼈고 4명은 캘린더가 두 개라 하단 내비게이션에서 혼란. 게시물 작성 기능이 여러 하위 페이지 뒤에 숨은 문제도 발견",
      "Iteration #3에서 요소를 묶고 내비게이션을 단순화해 내비게이션 불만을 크게 줄임",
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
    subtitle: "의료진은 더 빨리 읽고 환자는 말로 남기는 심전도 리뷰 앱",
    category: "UX Design · Health",
    location: "DTU, Denmark",
    role: "",
    summary:
      "의료진이 심전도 이벤트를 빠르게 검토하고 환자도 그때의 증상을 말로 남길 수 있는 앱입니다. 12명 사용성 테스트로 여섯 가지 개선안을 찾았습니다.",
    points: [
      "의료진 플로우: 주의가 필요한 환자를 먼저 보여 주는 대시보드, 이벤트별 심박·상태·AI 신뢰도를 묶은 Event Review, 확대해 보는 ECG, 자동 표시의 AI 근거 설명과 의사 주석",
      "환자 플로우: 이벤트 시점에 '어떤 느낌이었는지'를 말로 남기는 음성 주석과 요약 리포트",
      "Iteration 3: 첫 화면을 로그인/회원가입에서 환자/의료진 선택으로 바꾸고 환자 섹션을 의료진 섹션과 분리",
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
    subtitle: "아무것도 안 해도 가까워지는 위젯 SNS, 20명의 일주일",
    category: "UX Research",
    location: "KAIST CIxD Lab",
    role: "연구 설계, 다이어리 스터디·심층 인터뷰, 데이터 분석",
    summary:
      "20명의 다이어리와 인터뷰로, 애쓰지 않아도 되는 위젯 SNS에서 사람들이 어떻게 가까워지는지 밝힌 HCI 연구입니다. 지금 논문으로 정리하고 있습니다.",
    points: [
      "만 19~30세 20명 참여. 신규 사용자는 7일, 기존 사용자는 3일 동안 매일 다이어리를 쓰고 30~60분 1:1 심층 인터뷰",
      "Braun & Clarke의 주제 분석으로 메모 → 코드 → 범주 → 주제 순으로 추상화",
      "보려 하지 않아도 폰을 켤 때마다 친구의 일상이 보임. 참여자들은 이 비자발적 노출에서 기존 SNS보다 강한 연결감을 느낌 (Ambient Co-presence, \"24시간 영상통화하는 기분\")",
      "내 사진이 상대 홈 화면 한 칸을 계속 차지한다고 인식하기 때문에 올리기 전에 상대를 배려함 (Inhabiting Others' Screen)",
      "다음 사진이 오면 사라지는 구조라 명시적 반응을 덜 기대하고 보기만 해도 교류한 것처럼 느낌 (Less Expectation of Explicit Reaction)",
      "디자인 제안: 감정 상태에 따라 위젯 노출을 잠시 줄이는 기능, 온보딩에서 '내 사진이 상대 홈 화면에 뜬다'는 구조 알리기, 콘텐츠가 사라지는 방식을 보여 주는 마이크로 인터랙션",
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
    subtitle: "숨바꼭질로 아이가 스스로 일어나는 아침",
    category: "Interaction Design",
    location: "KAIST, Korea",
    role: "Lead Designer & Developer",
    summary:
      "방 안에 투사된 유령을 찾아 잡아야 아침이 시작되는 숨바꼭질 알람입니다. 프로젝터 회전과 손 인식으로 작동하는 데모를 만들었습니다.",
    points: [
      "따분한 알람 소리 대신, 방 안 곳곳에 숨은 유령을 찾는 놀이로 아이를 깨움",
      "Raspberry Pi와 Arduino에 OpenCV를 연동해 아이가 유령을 잡는 동작을 실시간으로 감지하고 반응하도록 구현",
      "스크린 없이 방 전체를 놀이 공간으로 써서 아침 루틴을 교감의 시간으로 바꿈",
    ],
    tags: ["Play-based Interaction", "Computer Vision", "Projection"],
    team: ["Individual Project"],
    tools: ["Raspberry Pi", "Arduino", "OpenCV", "Python", "Figma"],
    images: ["/images/ghosty/hero.jpg", "/images/ghosty/character.jpg", "/images/ghosty/prototype.jpg"],
    links: [{ label: "Demo video", href: "https://youtu.be/7pImmM4H0e0" }],
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
      "할아버지, 아버지, 손자 3세대를 아날로그 감성으로 잇는 소통 플랫폼으로, 가족 안의 정서적 고립을 줄이고 유대감을 키웁니다.",
    points: [
      "디지털 숙련도가 다른 세 세대가 모두 쓸 수 있도록 캘린더 알림을 메시지로 바꾸고 챗봇을 두는 유니버설 디자인 인터랙션 설계",
      "'그땐 그랬지'처럼 지난 기억과 지금의 감정을 나누는, 투박하고 따뜻한 대화 채널을 만듦",
    ],
    tags: ["Interactive Design", "Universal Design", "Physical Computing"],
    team: ["Individual Project"],
    // TODO: 기존 데이터의 tools가 SoomSoomi와 동일해서 비워둠 — 실제 사용 도구로 채우기
    tools: [],
    testPlan: {
      method: "조부모 · 부모 · 자녀 세 세대가 각각 같은 과제(메시지 보내기, 추억 공유 열기)를 수행하는 세대별 사용성 테스트",
      hypothesis: "알림을 메시지 형태로 바꾸고 챗봇을 두면, 디지털 숙련도가 낮은 세대도 다른 세대와 비슷한 과업 성공률을 보일 것이다",
      metrics: ["세대별 과업 성공률과 소요 시간", "세대별 SUS 점수 차이", "일주일 동안 주고받은 메시지 수"],
    },
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
      "KAIST와 충남대 사이에 있는 제로웨이스트 숍의 공간 배치와 그래픽을 다시 짰습니다. 대학 동아리에서 시작된 제작소가 운영하는 곳입니다.",
    points: [
      "점주 인터뷰, PEST, 페르소나, SWOT으로 매장의 현재 상황과 방문자를 정리",
      "책은 벌집 모양의 분홍 책장에, 상품은 기울어진 초록 선반에 두는 공간 재구성 제안",
      "SNS 홍보, 시민 참여 캠페인, 원데이 클래스처럼 매장이 이어 갈 수 있는 활동 제안",
    ],
    tags: ["Service Design", "Spatial", "Sustainability"],
    team: ["Kim Woojae", "Kim Taekyung"],
    tools: ["Interview", "PEST", "Persona", "SWOT"],
    images: ["/images/eunyoung/logo.jpg", "/images/eunyoung/shelves.jpg", "/images/eunyoung/workshop.jpg"],
  },
  {
    id: "soomsoomi",
    year: "2024",
    title: "SoomSoomi",
    subtitle: "호흡 안정을 돕는 테라리움 디바이스",
    category: "Interactive Device",
    location: "KAIST · Physical Computing (IPFU)",
    role: "개인 작업 (컨셉 · 회로 · 코드 · 제작)",
    summary:
      "스트레스로 과호흡을 겪은 친구에게서 출발한 테라리움 기기입니다. 심박을 읽고 빛과 소리로 호흡을 이끌다가 심박이 안정되면 차분한 빛으로 알려 줍니다.",
    points: [
      "MAX30102 심박 센서와 터치 센서로 사용자 상태를 실시간으로 읽고 LED 빛과 스피커 소리로 안정적인 호흡 리듬을 유도",
      "테라리움 속 생태계의 '숨'과 사용자의 호흡을 하나로 이어 마음이 가라앉도록 연출",
      "바람(팬 모터)과 안개(미스트 모듈)도 실험했지만 팬은 존재감이 너무 컸고 미스트는 스위치 제어가 불안정해 최종안에서 뺌. MAX30102의 측정 정확도를 잡는 일이 가장 어려웠음",
    ],
    tags: ["Bio-feedback", "Physical Computing"],
    team: ["Individual Project"],
    tools: ["Raspberry Pi Pico", "MicroPython", "MAX30102", "Touch · RGB LED · Speaker"],
    links: [{ label: "Demo video", href: "https://youtu.be/KmeaMTPRAwk" }],
    images: ["/images/soomsoomi/hero.jpg", "/images/soomsoomi/wiring.jpg"],
    testPlan: {
      method: "긴장 상황(발표 직전 등)을 가정한 참여자 8명에게 3분간 호흡 유도를 체험하게 한 뒤 전후를 비교",
      hypothesis: "빛과 소리로 호흡 리듬을 따라가면 체험 후 심박수와 주관적 긴장도가 함께 낮아질 것이다",
      metrics: ["체험 전후 심박수 변화 (기기 센서 기록)", "주관적 안정감 5점 척도 전후 차이", "체험 후 '다시 쓰고 싶다' 응답"],
    },
  },
  {
    id: "fortune-dragon",
    year: "2024",
    title: "Fortune Dragon",
    subtitle: "청룡의 해 디지털 운세 뽑기",
    category: "Interactive Installation",
    location: "KAIST ID220 · IKPF",
    role: "개인 작업 (컨셉 · 회로 · 코드 · 제작)",
    summary:
      "청룡의 해 운세 뽑기 오브제로, 매일 운세를 챙겨 보는 룸메이트에게서 출발했습니다. 여의주를 만지면 용이 노래하며 룰렛을 돌리고 멈춘 자리로 오늘의 운세를 알려 줍니다.",
    points: [
      "여의주를 터치하면 용이 노래하며 운세 룰렛을 돌리는 인터랙션 제작",
      "룰렛이 멈추면 용이 승천하며 불을 뿜고 오늘의 운세를 알려 주도록 시청각 피드백을 이야기 순서로 엮음",
      "처음엔 TTS로 운세를 읽어 주려 했지만 맞는 라이브러리를 찾지 못해 용이 버저로 노래하는 이야기로 바꿈. 매일 다시 뽑고 싶은 마음이 들도록 노림",
      "IR 센서 · 버저 · 서보 모터 · LED 3개를 Raspberry Pi Pico(MicroPython)로 제어하고 아크릴 케이스 안에 회로를 정리",
    ],
    tags: ["Interactive Storytelling", "Physical Computing"],
    team: ["Individual Project"],
    tools: ["Raspberry Pi Pico", "MicroPython", "IR Sensor", "Servo"],
    links: [{ label: "Demo video", href: "https://www.youtube.com/watch?v=eA6hdSDwZVc" }],
    images: ["/images/fortune-dragon/idle.jpg", "/images/fortune-dragon/spin.jpg", "/images/fortune-dragon/breadboard.jpg"],
    testPlan: {
      method: "설치물 앞을 지나는 관람객을 2시간 동안 관찰하고 체험한 사람에게 한 문항 설문",
      hypothesis: "용이 노래하고 승천하는 연출이 있으면 운세를 끝까지 확인하는 비율과 다시 해보는 비율이 높을 것이다",
      metrics: ["다가온 사람 중 체험을 시작한 비율", "여의주 터치 → 운세 확인까지 완료율", "같은 사람이 다시 체험한 횟수"],
    },
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
      "아이가 청소를 즐겁게 느끼도록 캐릭터와 청소기를 합쳤습니다. 3-in-1 다목적 스마트 디바이스입니다.",
    points: [
      "출발점: 2인실에서 쓰던 미니 청소기가 3인실로 옮긴 뒤 불편해진 경험. 기존 미니 청소기를 3D로 똑같이 모델링(Digital Copy)하며 구조부터 분석",
      "젤리피쉬 오브제 모드, 책상 먼지용 브러쉬 모드, 바닥 청소용 브러쉬 모드로 바꿔 쓰는 3-way 모듈 구성",
      "모든 부품을 분해할 수 있는 조립형 구조, 충전 없이 바로 쓰는 배터리 구동",
      "언제든 씻을 수 있는 워셔블 더블 필터로 관리 부담을 줄임",
    ],
    tags: ["Modular Design", "User-Centered Design"],
    team: ["Individual Project"],
    tools: ["Rhino", "CAD", "Technical Drawing"],
    images: ["/images/my-little-ghost/hero.jpg", "/images/my-little-ghost/modes.jpg", "/images/my-little-ghost/exploded.jpg", "/images/my-little-ghost/filter.jpg", "/images/my-little-ghost/drawing.jpg", "/images/my-little-ghost/origin.jpg", "/images/my-little-ghost/origin-parts.jpg"],
    testPlan: {
      method: "아이 5명에게 세 가지 모드(오브제 · 책상 · 바닥)를 직접 바꿔 끼우며 청소해 보게 하고 관찰",
      hypothesis: "캐릭터 오브제 모드가 청소를 시작하는 계기가 되어 일반 미니 청소기보다 아이가 먼저 손을 뻗는 경우가 많을 것이다",
      metrics: ["도움 없이 모드를 바꾼 비율", "청소에 자발적으로 참여한 시간", "'또 쓰고 싶다' 응답 비율"],
    },
  },
  {
    id: "audio-description-ai",
    year: "2023",
    title: "AI Audio Description",
    subtitle: "시각장애인을 위한 AI 영상 해설 자동 생성",
    category: "UX Research",
    location: "KAIST Assistive AI Lab",
    role: "Research Assistant (FGI 진행 · 녹취 · 분석)",
    summary:
      "AI 영상 해설 자동 생성 기술을 위해 시각장애인 20명과 FGI를 진행했습니다. 만족도 78점의 진짜 이유는 '해설이 없을 때보다 나아서'였고 여기서 개선 방향을 정리했습니다.",
    points: [
      "부산(2023.10) · 울산(11월) · 대전(12월) 3개 지역의 시각장애인 20명(30대 2 · 40대 7 · 50대 10 · 60대 1, 점자 사용 17명)을 대상으로 세션당 1시간~1시간 30분의 FGI를 직접 진행하고 녹취록 작성과 분석까지 담당",
      "현재 영상 해설 서비스 만족도는 평균 78점(최하 30점, 최상 90점). 그렇게 답한 이유로는 '해설이 없을 때보다 낫기 때문'을 들었고 서비스 자체에 대한 만족도는 낮음",
      "해설 대신 '해석'을 하는 경향, 해설 음성과 영화 음성을 따로 조절할 수 없는 문제, 여러 역할을 한 음성으로 해설하는 문제를 페인 포인트로 추림",
      "사람마다 관심 요소가 달라 단계별 해설과 개인화 옵션을 제안하고 용어 통일·장면별 해설 요소 분류·불필요한 해설 제거를 개선 방향으로 정리",
      "개인화로는 패션·자동차·날씨·음악 제목처럼 화면에만 있는 정보를 원함. 해설이 더 필요한 분야로는 TV 광고·건물 구조·스포츠를 꼽음",
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
    location: "KAIST ID213",
    role: "",
    summary:
      "마이크로버블과 소용돌이 흐름으로 녹조(algal bloom)에 대응하는 콘 형태 장치로, 어디에나 연결할 수 있습니다.",
    points: [
      "녹조는 독소로 건강을 위협하고 햇빛과 산소를 막아 생물이 살 수 없는 수역을 만듦. 2003~2020년 전 세계 녹조는 크기 13%, 빈도 59% 늘었고 한국 4대강에서도 매년 발생",
      "floating wetlands, 수차, 폭기, 초음파 등 기존 해법과 4가지 마이크로버블 발생 방식(spiral flow, venturi, ejector, 가압-감압)을 비교",
      "초기 모델의 장단점을 분석해 소용돌이의 시작점을 만들고 바깥 표면까지 쓰는 최종 모델로 발전. 평행사변형 구조로 전단 면적과 유속을 높임",
      "오리연못 물로 실험한 결과 수질 지표가 6 → 8(1차) → 10(2차)으로 개선",
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
      "2인실 기숙사에서 룸메이트와 지낼 때 생기는 사생활·공간 문제를 분리형 수납 가구로 풀었습니다.",
    points: [
      "문제: 룸메이트의 소음과 불빛, 지키기 어려운 사생활, 부족한 개인 공간과 수납 공간",
      "축소 프로토타입으로 구조를 검토한 뒤 도면과 모델링을 거쳐 3D 프린팅·레이저 커팅으로 연결 부품과 판재 제작",
      "실제 크기로 조립해 공간에 배치하고 침대 위 공간을 나누는 사용 장면까지 검증",
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
      "인터랙티브 아카이브 웹사이트로, 자가 테스트 형식을 빌려 세월호 참사를 기억하는 방법을 제안합니다.",
    points: [
      "정보만 나열한 아카이브는 원하는 정보만 골라 보게 된다는 한계에서 출발. MZ세대에게 익숙한 테스트 형식으로 관심을 끌고 유형별로 정확한 정보와 기억 방법을 제안",
      "강의 키워드를 바탕으로 9개의 질문을 짜고 응답에 따라 '명예 잠수부', '시민 해양과학자' 등 8가지 기억 유형으로 연결",
      "인트로·테스트·결과·'더 톺아보기' 화면을 구성하고 메인·결과 일러스트를 직접 디자인",
      "HTML·CSS·JS와 Node.js로 구현해 Heroku에 배포",
    ],
    tags: ["Interactive Web", "Archive", "Illustration"],
    team: ["유지현"],
    tools: ["HTML/CSS/JS", "Node.js", "Heroku"],
    images: ["/images/sewol/intro.jpg", "/images/sewol/results.jpg"],
  },
  {
    id: "indoor-guide",
    year: "2022",
    title: "Indoor Guide",
    subtitle: "시각장애인 실내 보행 안내 기기 수요 조사",
    category: "UX Research",
    location: "대전 시민 연구반 5기",
    role: "UX Researcher (설문 조사 · 분석)",
    summary:
      "시각장애인 68명을 대상으로 한 정량 리서치입니다. 병원·관공서·마트·지하철역 같은 실내에서 목적지까지 동행하며 안내하는 기기를 두고 사용 의향과 필요한 기능을 물었습니다.",
    points: [
      "2022.11.10~22에 68명 응답. 남 39 · 여 29, 20대 13 · 30대 18 · 40대 17 · 50대 이상 20. 보행 방식은 독립보행 52.9%, 가족·지인 동행 54.4%, 활동보조인 45.6% (복수 응답)",
      "독립보행에 도움이 될 것 97.1%, 사용 의향 92.6%, 기기가 있으면 혼자 방문하겠다 92.6%, 외출이 늘 것 89.7%",
      "필수 기능은 음성 안내 92.6%, 속도 조절 89.7%, 음성 인식 64.7%. 입력 방식은 물리 버튼 51.5%와 음성 인식 41.2%로 갈렸고 터치스크린은 7.4%에 그침",
      "가장 먼저 설치되었으면 하는 곳은 마트·백화점 26.5%, 지하철역 22.1%, 병원 19.1%. 외형은 사람 형태 44.1%와 얇은 폴대형 42.6%로 비슷하게 나뉨",
      "독립보행을 늘리지 않는 이유로는 효과에 대한 의문 25.0%, 동행자가 있어서 23.5%, 안전 우려 23.5%가 꼽혔고 응답자의 72.1%가 후속 인터뷰에 응하겠다고 답함",
    ],
    tags: ["Survey", "Accessibility", "Quantitative Research"],
    team: [],
    tools: ["Google Forms", "Survey Analysis"],
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
      "한 가지 장애 유형에 한정하지 않고 여러 장애 유형이 대중교통을 안전하고 편하게 이용하도록 돕는 앱 서비스를 제안했습니다.",
    points: [
      "장애인은 안전과 편의의 제약 때문에 대중교통 이용 자체를 꺼리고 이동권이 보장되지 않음. Unfear, 버스스로 등 기존 서비스와 비교해 기회 영역을 찾음",
      "정차역 정보 전달: 청각장애인·자폐 스펙트럼 장애인을 위해 시각 정보와 진동으로 정차역을 알리고 실시간 열차 위치와 혼잡도로 덜 붐비는 칸 안내",
      "버스 예약: 지체·시각장애인이 탈 버스를 미리 예약하고 기사와 양방향으로 소통하며 발판·하차 요청",
      "SOS 예방: 긴급 제스처를 CCTV 지능형 영상분석으로 인식해 담당자·보호자와 가까운 앱 사용자에게 알림",
    ],
    tags: ["Accessibility", "Service Design", "Public Transit"],
    team: ["Team AX · 3인"],
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
    role: "PM · Android·OpenCV 개발",
    summary:
      "AI 카메라 분석으로 마스크 미착용자를 감지해 시각장애인에게 안전한 우회 보행 경로를 안내하는 플랫폼입니다.",
    points: [
      "시각장애인은 코로나19 사회적 거리두기를 스스로 지키기 어렵다는 문제에서 출발해 거리두기 판단을 스마트폰 카메라에 맡김",
      "Android 카메라 영상을 Chaquopy로 Python 모듈과 연동하고 얼굴 검출 후 마스크 착용 여부를 실시간 판별",
      "감지된 사람의 위치를 전방·왼쪽·오른쪽으로 나눠 \"전방에 마스크 미착용자가 있습니다\"처럼 음성으로 안내",
      "Tmap API로 우회 경로를 다시 잡고 배리어 프리 UI는 제스처 인터랙션과 음성 안내(STT/TTS) 중심으로 구성",
      "화면을 두 번 두드리면 좌우 음량 차이로 방향을 알려 줌. 마스크 미착용자를 마주친 위치와 시간도 기록해 통계와 지도로 보여 주는 기능 구현",
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
    role: "PM · 화면 디자인 · 프론트엔드",
    summary:
      "환자가 느끼는 주관적인 통증을 객관적인 수치로 바꿔 줍니다. 의료진과 정확하게 소통하도록 돕는 디지털 헬스케어 플랫폼입니다.",
    points: [
      "원격 진료에서 환자와 의사가 정확하게 소통하려면 환자 중심의 개인화된 통증 기록이 필요하다는 문제의식에서 출발",
      "신체 이미지 위를 클릭해 통증 위치를 표시하고 통증 크기에 따라 색이 달라지는 인터페이스를 HTML5 Canvas로 만듦",
      "입력한 통증 기록을 표로 누적해 의사가 진료 전에 증상의 위치와 강도를 한눈에 파악할 수 있게 함",
      "진료 기록과 처방을 쌓아 회복 정도를 그래프로 보여 주는 기능, 병원 예약 연동을 확장안으로 제안",
      "코딩 테스트로 선발된 300명이 3인 100팀을 이룬 대회에서 2위로 금상 수상",
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
