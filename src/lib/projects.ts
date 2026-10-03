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
  images?: string[];
};

export const projects: Project[] = [
  {
    id: "friends-in-a-widget",
    year: "2026",
    title: "Friends in a Widget",
    subtitle: "폐쇄형 소셜 위젯과 Z세대의 관계성",
    category: "UX Research",
    location: "KAIST CIxD Lab, Korea",
    role: "Lead Researcher",
    summary:
      "폐쇄형 SNS인 Locket Widget에서 Z세대 사용자가 느끼는 관계성(Relatedness)의 형성 및 유지 과정을 분석한 HCI 연구",
    points: [
      "개방형 SNS의 정서적 피로감을 해소하는 대안으로서 폐쇄형 소셜 위젯의 심리적 메커니즘을 분석",
      "신규 사용자(7일)와 장기 사용자(3일)를 구분한 이중 샘플 연구(다이어리 스터디 및 심층 인터뷰)를 수행하여, 도구적 사용이 무의식적 루틴으로 전이되는 사용자 경험의 변화 양상을 규명",
    ],
    tags: ["UX", "HCI", "Social Media"],
    team: ["Prof. Youn-kyung Lim", "Sehee Son"],
    tools: ["Diary Study", "Interviews"],
    images: ["/images/locket.png", "/images/locket2.avif", "/images/locket3.webp"],
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
      "초기 AI 기반 서비스에서 커뮤니티 중심의 자발적 공유 모델로 피벗하여 서비스의 고유 가치 제안(UVP) 강화",
      "Iteration #2를 주도하여 반려동물 대리 돌봄이 사용자 관계성에 미치는 영향 검증",
      "10명의 사용자를 대상으로 Thinking-Aloud 프로토콜을 수행하여 복잡한 UI 요소를 식별하고 구조적 단순화 제안",
    ],
    tags: ["Community UX", "User Story Mapping", "Validation"],
    team: ["Kaityln Wu Brooks", "Zhentao Wei", "Laibah Choudhary", "Kang Yu Chen", "Samraty Ojha"],
    tools: ["Figma", "User Story Map", "Thinking Aloud", "Wireframing"],
    images: ["/images/petshare.png"],
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
    images: ["/images/ghosty.png"],
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
    id: "audio-description-ai",
    year: "2024",
    title: "AI Audio Description",
    subtitle: "시각장애인을 위한 AI 영상 해설 자동 생성",
    category: "UX Research",
    location: "KAIST, Korea",
    role: "Research Assistant",
    summary:
      "시각장애인을 위한 AI 기반 영상 해설 자동 생성 기술의 사용자 요구사항 도출 및 디자인 가이드라인 제안",
    points: [
      "대전, 부산, 울산 3개 지역의 시각장애인 20명을 대상으로 Focus Group Interview(FGI)를 수행하여 기존 영상 해설 서비스의 한계점과 미디어 감상 경험 분석",
      "해설 음성과 배경음의 간섭, 주관적 해석으로 인한 감상 방해 등 현재 서비스의 페인 포인트를 도출하여 AI 자동 생성 모델의 7가지 개선 지표 정립",
      "사용자의 관심도에 따른 단계별 해설 및 개인화된 설정 등 시각장애인 맞춤형 AI 인터랙션 디자인 임플리케이션 제시",
    ],
    tags: ["FGI", "Human-AI Interaction", "Accessibility"],
    team: ["Prof. Hyeon-wook Ka"],
    tools: ["FGI", "User Interview", "Qualitative Analysis"],
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
      "사용 환경에 따라 젤리피쉬 오브제 모드, 책상 먼지 청소용 브러쉬 모드, 일반 바닥 청소용 브러쉬 모드로 전환 가능한 3-way 모듈형 시스템 설계",
      "모든 부품의 분해가 가능한 조립형 구조와 별도의 충전 없이 즉시 사용 가능한 배터리 구동 방식을 사용하여 편의성 극대화",
      "언제든 세척이 가능한 워셔블 더블 필터 시스템을 적용하여 실용성과 유지 관리의 용이성을 동시에 확보",
    ],
    tags: ["Modular Design", "User-Centered Design"],
    team: ["Individual Project"],
    tools: ["Rhino", "CAD", "Technical Drawing"],
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
      "OpenCV를 활용한 실시간 마스크 착용 여부 판별 알고리즘과 Tmap API를 연동한 동적 우회 경로 재설정 시스템 구축",
      "시각장애인의 특수성을 고려하여 풍부한 제스처 인터랙션 및 음성 안내(STT/TTS)를 적용한 배리어 프리 UI 설계",
    ],
    tags: ["Accessibility", "Computer Vision", "Social Good"],
    team: ["권영태", "정동윤"],
    tools: ["Java", "OpenCV", "PyTorch", "Tmap API"],
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
      "환자가 자신의 통증 강도와 양상을 체계적으로 기록하고 데이터화하여, 진료 시 의료진에게 정확한 정보를 전달",
      "환자의 주관적인 감각을 시각적 리포트로 변환하여 의사가 증상을 즉각적으로 파악하도록 돕는 유저 인터페이스를 설계",
    ],
    tags: ["Health Tech", "Data Visualization"],
    team: ["박성민", "양혜연"],
    tools: ["Web Development", "UI Design", "Data Analysis"],
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}

// GitHub Pages serves the site under /<repo>, so static paths need the prefix.
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
