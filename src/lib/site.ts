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
  intro:
    "사람을 오래 관찰하고, 직접 만들어 검증하는 프로덕트 디자이너입니다. 다이어리 스터디와 인터뷰로 문제를 정의하고, Figma 프로토타입부터 피지컬 컴퓨팅까지 손으로 확인하며 답을 찾습니다.",
  currently: "B.S. Industrial Design, KAIST",
  focus: "UX Research, Interaction Design",
};

export const about = {
  bio: [
    "KAIST 산업디자인학과에서 사용자 경험을 공부하고 있습니다. 관계, 접근성, 일상의 루틴처럼 눈에 잘 띄지 않는 경험에 관심이 많습니다.",
    "리서치에서 끝나지 않고 프로토타입으로 이어지는 과정을 좋아합니다. 정성 연구로 발견한 인사이트를 인터페이스와 제품으로 옮기고, 다시 사용자와 검증합니다.",
  ],
  education: [
    // TODO: 기간 채우기
    { title: "B.S. Industrial Design", place: "KAIST", period: "" },
  ],
  experience: [
    { title: "Researcher", place: "KAIST CIxD Lab", period: "2026" },
    { title: "Research Assistant", place: "KAIST, Prof. Hyeon-wook Ka", period: "2024" },
  ],
  awards: [
    { title: "대상 (국무총리상)", place: "제2회 한국코드페어 — V-Nav", period: "2020" },
    { title: "금상 (과학기술정보통신부장관상)", place: "제1회 한국코드페어 — CAMP", period: "2019" },
  ],
  skills: [
    "UX Research",
    "Diary Study",
    "In-depth Interview",
    "Focus Group Interview",
    "Think-Aloud Usability Test",
    "User Story Mapping",
    "Wireframing & Prototyping",
    "Interaction Design",
    "Universal Design",
  ],
  tools: ["Figma", "Rhino", "Python", "OpenCV", "Arduino", "Raspberry Pi", "Java"],
};
