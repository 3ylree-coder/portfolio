// 사이트 전역 텍스트. 빈 문자열인 항목은 화면에 표시되지 않습니다.
export const site = {
  name: "Yuri",
  role: "Product Designer",
  email: "3ylree@kaist.ac.kr",
  links: [
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "Résumé", href: "" },
  ],
  // 홈 첫 화면 슬로건 — 본인 키워드: 땅따먹기 · 간극을 좁히는 사람 · 유연함
  headline: "간극을 좁혀\n함께 서 있을 땅을 넓히는\n프로덕트 디자이너, 유리입니다.",
  headlineEn: "Close the gap, gain ground.",
  intro:
    "팀의 가설과 사람들의 실제 행동, 화면과 손, 기업과 동네처럼 서로 닿지 않던 것 사이를 직접 묻고 만들어 보며 좁힙니다. 좁히면 그만큼 제품이 닿는 사람과 자리가 넓어집니다.",
  currently: "B.S. Industrial Design, KAIST (2027.02 졸업 예정)",
  focus: "Product Design · AI Experience · UX Research",
};


// 홈 'What I bring' — 근거는 모두 사이트의 프로젝트에서 확인 가능한 사실만
export const capabilities = [
  {
    title: "실제 행동으로 확인합니다",
    body: "설문, 다이어리 스터디, FGI, Think-aloud로 사람들이 실제로 무엇을 하는지 확인합니다. 데이터가 가설과 다르면 방향을 바꿉니다.",
    evidence: "설문 97명 · 68명 · 다이어리 스터디 20명 · FGI 20명 · Think-aloud 10명",
  },
  {
    title: "손에 잡히게 만들어 봅니다",
    body: "Figma 화면부터 OpenCV·Arduino·IMU 센서·Node.js로 움직이는 프로토타입까지, 아이디어를 써 볼 수 있는 형태로 빨리 만듭니다.",
    evidence: "DURU · Ghosty · V-Nav · Travel Wallet · PetShare",
  },
  {
    title: "AI로 빨리 만들고 데이터로 판단합니다",
    body: "LLM 가상 유저, 질적 코딩, 생성형 브랜딩, 바이브 코딩 프로토타입에 AI를 씁니다. 무엇을 남기고 버릴지는 실제 사용자 데이터로 정합니다.",
    evidence: "Travel Wallet · Friends in a Widget · IN-Sider · DURU",
  },
  {
    title: "제안까지 설계합니다",
    body: "후원 제안서와 금액별 예우표, 해외 기업별 맞춤 프로토타입처럼, 상대가 바로 판단할 수 있는 형태로 제안을 만듭니다.",
    evidence: "Local Sponsorship · AI 시청 해외 확장 · SUM",
  },
];

export const about = {
  bio: [
    "KAIST 산업디자인학과에서 사용자 경험을 공부하고 덴마크 DTU 교환학기에는 국제 팀과 UX 프로젝트를 했습니다. 2019년 코드페어부터 지금의 졸업 프로젝트까지 관계, 접근성, 일상의 루틴처럼 눈에 잘 띄지 않는 경험을 꾸준히 다뤄 왔습니다.",
    "리서치에서 멈추지 않고 화면과 제품까지 이어 가는 일을 좋아합니다. 금융 산학 프로젝트에서는 수익률이 차지하던 메인 화면 중심에 여행 D-day를 놓았고 개인 프로젝트에서는 OpenCV와 Arduino로 직접 움직이는 프로토타입을 만들었습니다.",
  ],
  education: [
    { title: "B.S. Industrial Design", place: "KAIST", period: "2022 ~" },
    { title: "Exchange Student · Civil and Mechanical Engineering", place: "DTU (Technical University of Denmark)", period: "2025.08 ~ 12" },
    { title: "Discover Universal Design Programme", place: "DTU × Royal Danish Academy", period: "2025" },
  ],
  experience: [
    { title: "UX 디자이너 (프리랜서)", place: "세븐미닛", period: "2026.09 ~ 2027.02" },
    { title: "프로덕트팀 UX 디자이너 인턴 (AI 스포츠 하이라이트)", place: "세븐미닛", period: "2026.07 ~ 08" },
    { title: "Product & UX Designer · DURU", place: "KAIST Visual Instruments Lab", period: "2026.03 ~" },
    { title: "UI & UX Designer · NH투자증권 × 트래블월렛 산학협력", place: "KAIST NextInterface Lab", period: "2026.02 ~ 04" },
    { title: "UI & UX Researcher · 위젯 SNS 다이어리 스터디", place: "KAIST CIxD Lab", period: "2024.12 ~" },
    { title: "UX Research Assistant · 시각장애인 AI 영상 해설", place: "KAIST Assistive AI Lab", period: "2023.07 ~ 12" },
    { title: "UX Researcher · 시각장애인 보행 접근성", place: "대전 시민 연구반 5기", period: "2022.07 ~ 12" },
  ],

  activities: [
    { title: "17대 부위원장 · 태울석림제 기획부단장 (학교 앞 상권 후원 신설)", place: "상상효과", period: "2024" },
    { title: "디자인홍보팀 · 대외협력팀 · 전야제팀 · 캠퍼스디자인팀", place: "상상효과", period: "2022 ~ 2023" },
    { title: "학생회 총무", place: "KAIST 산업디자인학과", period: "2023 ~ 2024" },
    { title: "기획팀장 · 이공계 학부생 50명이 모인 2일 창업 아이디어톤", place: "창업 행사 SUM (ICISTS)", period: "2022" },
    { title: "고등학생 창업 컨설팅", place: "", period: "2021" },
  ],
  awards: [
    { title: "동문학술재단 장학생", place: "", period: "2023 ~ 2025" },
    { title: "대한민국 청소년 강연자 100인", place: "", period: "2021" },
    { title: "대상 (국무총리상)", place: "제2회 한국코드페어 · V-Nav (PM, Android·OpenCV 개발)", period: "2020" },
    { title: "금상 (과학기술정보통신부장관상)", place: "제1회 한국코드페어 · CAMP, 100팀 중 2위 (PM, 화면 디자인, 프론트엔드)", period: "2019" },
  ],
  skills: [
    "UX Research",
    "Survey Design & Analysis",
    "Diary Study",
    "In-depth Interview",
    "Focus Group Interview",
    "Think-Aloud Usability Test",
    "User Story Mapping",
    "Wireframing & Prototyping",
    "LLM-assisted Qualitative Coding",
    "Interaction Design",
    "Universal Design",
    "Speculative Design",
  ],
  tools: ["Figma", "Illustrator", "Photoshop", "After Effects", "Premiere Pro", "Notion", "Rhino", "ChatGPT · Claude API", "Midjourney", "Vibe Coding (HTML/CSS/JS)", "Python", "OpenCV", "Arduino", "Raspberry Pi"],
  languages: ["Korean (Native)", "English (OPIc IH, B2)"],
};

// 홈 첫 줄에서 번갈아 보이는 간극 — 각각 그 간극을 좁힌 프로젝트로 연결
export const gaps = [
  { pair: "서비스와 사용자", id: "travel-wallet" },
  { pair: "AI와 사람", id: "duru" },
  { pair: "새 사용자와 애용자", id: "friends-in-a-widget" },
  { pair: "디자이너와 개발자", id: "v-nav" },
  { pair: "기업과 동네", id: "festival-sponsorship" },
  { pair: "반려인과 비반려인", id: "pet-share" },
  { pair: "보는 사람과 듣는 사람", id: "audio-description-ai" },
  { pair: "의료진과 환자", id: "heartlens" },
  { pair: "부모와 아이", id: "ghosty" },
];
