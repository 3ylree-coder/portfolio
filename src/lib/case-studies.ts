// 대표 프로젝트의 케이스 스터디 본문. 여기에 있는 프로젝트는 홈 상단 Case studies에 노출됩니다.
// 섹션은 자유롭게 빼거나 순서를 바꿀 수 있습니다.
export type Img = string | { src: string; caption: string };

export type Section = {
  label: string; // Background, Problem, Research ...
  title: string; // 섹션 한 줄 요약
  body: string[];
  stats?: { value: string; label: string }[]; // 큰 숫자 블록
  options?: { title: string; desc: string; chosen?: boolean }[]; // 비교한 방향들
  flow?: { title: string; note?: string; main?: boolean }[][]; // 열 단위 다이어그램
  quotes?: string[]; // 인용 블록
  images?: Img[];
};

export const caseStudies: Record<string, { cover: string; sections: Section[] }> = {
  duru: {
    cover: "/images/duru/ui-characters.jpg",
    sections: [
      {
        label: "Background",
        title: "하나의 정답 대신, 다섯 개의 관점",
        body: [
          "AI에게 질문하면 보통 하나의 정리된 답이 돌아옵니다. DURU는 그 반대를 시도합니다. 한 변 85mm의 정육면체에서 다섯 면은 각기 다른 AI 페르소나이고, 파란 면 하나는 사용자의 몫입니다. 질문을 말한 뒤 큐브를 굴리면, 위로 올라온 면이 자신의 관점으로 답합니다.",
          "KAIST 산업디자인학과 졸업 프로젝트로 진행 중이며, 2026년 가을 전시를 목표로 하고 있습니다.",
        ],
      },
      {
        label: "Concept",
        title: "경험과 전문성으로 나눈 다섯 개의 목소리",
        body: [
          "페르소나는 전문가/비전문가, 긍정적/부정적 경험의 두 축으로 나눴습니다. 이 방식으로 성공해 본 사람(WHITE), 실패를 직접 본 사람(BLACK), 기대를 가진 일반 사용자(YELLOW), 이유 모를 불안을 느끼는 사람(RED), 그리고 두 축 밖의 전혀 다른 분야 사람(GREEN)입니다.",
          "각 페르소나에는 다섯 영역의 관점(lens)이 학술적 근거와 함께 배정되며, 다섯 목소리가 최소 네 개 영역에 걸치도록 규칙을 정했습니다.",
        ],
        images: [
          { src: "/images/duru/personas.jpg", caption: "Persona Generation Structure — 전문성 × 경험의 2×2와 그 바깥의 GREEN" },
          { src: "/images/duru/example.jpg", caption: "예시 — \"Should I quit my job?\"에 다섯 면이 각자의 관점으로 답하는 방식" },
        ],
      },
      {
        label: "Interaction",
        title: "다가가고, 묻고, 굴리고, 지켜본다",
        body: [
          "큐브는 받침 위에서 천천히 숨 쉬듯 빛나며 기다립니다. 방문자가 큐브를 들어 파란 면을 위로 하고 질문을 말한 뒤 굴리면, 위로 온 면이 말하고 옆의 모니터가 그 면을 비춰 주변 사람도 대화를 따라갈 수 있습니다.",
        ],
        images: [{ src: "/images/duru/scenario.jpg", caption: "Approach → Ask → Roll → Watch" }],
      },
      {
        label: "System",
        title: "질문에서 다섯 목소리가 만들어지기까지",
        body: [
          "질문 → 안전 확인 → 질문 유형 분류 → 관점 배정 → 페르소나 캐스팅 → 발화의 6단계로 설계했습니다. 질문은 결정·지식·성취·경험·창작·놀이의 여섯 유형으로 분류합니다.",
          "의료·법률·자해 관련 주제는 다섯 목소리 대신 차분한 하나의 목소리로 답하고, 수치는 웹 검색 결과에서만 가져옵니다. 기다림을 줄이기 위해 3~5단계는 한 번의 요청으로 처리합니다.",
        ],
        images: [{ src: "/images/duru/pipeline.jpg", caption: "How the Five Are Made — 6단계 파이프라인" }],
      },
      {
        label: "Prototype",
        title: "화면 속 얼굴과 손 안의 큐브",
        body: [
          "각 면에 들어갈 페르소나의 시각 표현을 일러스트 캐릭터, 픽셀아트, 추상적인 빛의 오브(orb) 세 방향으로 탐색하고 있습니다. 하드웨어는 2인치 LCD 모듈 테스트와 함께 링·뚜껑·베젤로 이루어진 3D 프린팅 인클로저를 설계했습니다.",
        ],
        images: [
          { src: "/images/duru/ui-orbs.jpg", caption: "페르소나 표현 탐색 — 빛의 오브 버전" },
          { src: "/images/duru/lcd.jpg", caption: "면마다 들어갈 2인치 LCD 모듈 테스트" },
          { src: "/images/duru/enclosure.jpg", caption: "3D 프린팅 인클로저 부품 — 링, 윗·아랫 뚜껑, 베젤" },
        ],
      },
      {
        label: "Exhibition",
        title: "포디움 위의 큐브, 모두가 보는 모니터",
        body: [
          "높이 1000mm 포디움 위에 큐브를 두고, 말하는 면을 모니터에 비춰 지나가는 관람객도 대화를 함께 볼 수 있게 했습니다. 9월부터 11월까지 10주 일정으로 로직·하드웨어·인클로저·전시를 병행하고 있으며, 9주 차 완성을 목표로 합니다.",
        ],
        images: [{ src: "/images/duru/exhibition.jpg", caption: "전시 셋업 — 포디움, 큐브, 미러링 모니터" }],
      },
    ],
  },

  "travel-wallet": {
    cover: "/images/travel-wallet/hero.jpg",
    sections: [
      {
        label: "Background",
        title: "충전해 둔 여행 외화에 이자를 붙이는 서비스",
        body: [
          "트래블월렛과 NH투자증권의 제휴 서비스 '여행자금 모으기'는 트래블월렛에 충전된 외화를 NH투자증권의 RP 상품으로 운용해, 여행 전까지 이자를 받을 수 있게 합니다.",
          "거래 상품이 RP에서 해외주식까지 확장되면서 기존 시나리오와 화면을 다시 검토하고 재구성해야 하는 상황이었고, NH투자증권 × KAIST UX R&T 산학협력 과제로 4인 팀이 참여했습니다.",
        ],
      },
      {
        label: "Problem",
        title: "두 서비스는 같아 보이지만, 실제로는 이어져 있지 않았다",
        body: [
          "통합 자산 인터페이스 부재 — 화폐 단위별 자산은 볼 수 있지만, 사용자가 전체 자산을 한눈에 파악할 수 없었습니다.",
          "트래블월렛과 NH 사이의 혼선 — 같은 디자인 시스템을 쓰지만 실제 동작은 서비스별로 분리되어 있었고, 워딩에 주어가 생략되어 어느 서비스의 계좌인지 이해하기 어려웠습니다. '가져오기/보내기' 외에는 두 서비스가 연결되지 않았습니다.",
          "정서적 동기 요소 부족 — 수익률만 강조되어 트래블월렛다운 경험이 느껴지지 않았고, 만기일(D-day) 정보는 거의 보이지 않았으며, 여행이 끝난 뒤 투자를 이어갈 동기가 없었습니다.",
        ],
        images: [{ src: "/images/travel-wallet/as-is.jpg", caption: "As-is — 트래블월렛 지갑, 여행자금 모으기, 외화 RP 상품 화면" }],
      },
      {
        label: "Research",
        title: "95명에게 여행 경비를 어떻게 다루는지 물었다",
        body: [
          "기본 정보·투자 성향, 여행 시 외화 환전, 여행 경비 관리, 여행 후 남은 경비 관리의 네 영역으로 설문을 구성했습니다. 응답자의 79%가 20대였습니다.",
          "환율을 대하는 태도에 따라 편의형(46.4%, 필요할 때 즉시 충전), 계획형(34%, 환율은 신경 쓰지만 충전 시점은 환경과 별개), 전략형(15.5%, 환율 차트를 수시로 확인)으로 나뉘었습니다.",
          "여행 후 남은 외화를 투자로 옮길 의향은 높았지만, 걸림돌은 '복잡한 절차'였습니다.",
        ],
        stats: [
          { value: "95명", label: "설문 응답 (79%가 20대)" },
          { value: "46.4%", label: "필요할 때 바로 충전하는 편의형" },
          { value: "44명", label: "출국 1주 이내에 환전" },
          { value: "68%", label: "여행 후 남은 외화를 그대로 보유" },
          { value: "64%", label: "남은 외화를 투자로 옮길 의향 (78명 중 50명)" },
        ],
      },
      {
        label: "Insight",
        title: "돈을 모으는 동기는 수익률이 아니라 '다가오는 여행'에 있다",
        body: [
          "환전이 대부분 여행 직전에 이루어지는 것으로 보아, 오랜 기간 여행 자금을 모으는 서비스는 상대적으로 매력이 덜할 것으로 판단했습니다.",
          "반대로 여행 일정은 모든 유형의 사용자가 가진 공통된 맥락이었습니다. 레퍼런스 조사와 설문으로 도출한 세 가지 방향(차곡차곡 모으기 / 여행 일정 활용 / 수익률 강조) 중, 범용성 관점에서 '여행 일정 활용'이 가장 적합하다고 결론지었습니다.",
          "여행 후 남은 외화를 원화로 바꾸지 않는 사용자가 많다는 점은, 여행 이후 해외주식으로 이어지는 흐름의 근거가 되었습니다.",
        ],
        options: [
          { title: "여행 자금 차곡차곡 모으기", desc: "저축 형식으로 모으는 과정을 지원 — 동기부여는 강하지만 화면이 복잡" },
          { title: "사용자 여행 일정 활용", desc: "여행 D-day를 설정하고 일정에 맞춰 제안 — 모든 유형에 공통된 맥락", chosen: true },
          { title: "금융 상품의 수익률 강조", desc: "여행 맥락 없이 상품 위주로 — 화면은 단순하지만 동기 요소가 부족" },
        ],
      },
      {
        label: "Solution",
        title: "여행 D-day를 중심에 둔 하나의 메인 화면",
        body: [
          "트래블월렛과 RP·주식 거래 웹 사이에 '통합 잔고 + D-day 정보 + 상품 진입'을 담은 메인 화면을 두었습니다. 메인 화면에서는 서비스의 정체성을 세우고, 실제 매수는 웹에서 일어나도록 역할을 분리했습니다.",
          "사용자의 여행 상태를 파악해 여행 전에는 외화 RP를, 여행 후에는 해외주식을 먼저 제안합니다. RP는 짧은 기간만 넣어둬도 무조건 수익이 발생한다는 점을 활용했습니다.",
        ],
        flow: [
          [{ title: "트래블월렛", note: "외화 충전 · 결제" }],
          [{ title: "메인 화면", note: "통합 잔고 + 여행 D-day + 상품 진입", main: true }],
          [{ title: "RP 거래 Web", note: "외화 RP 매수" }, { title: "주식 거래 Web", note: "해외주식 매수" }],
        ],
      },
      {
        label: "Prototype",
        title: "계좌, 환율, 일정이 한 흐름으로 이어지도록",
        body: [
          "카드 지갑 형식의 계좌 UI — '여행 투자 계좌', '채우기' 같은 용어로 NH 계좌와 트래블월렛 계좌를 구분하고, 각 계좌의 잔액을 바로 보고 채우거나 보낼 수 있게 했습니다.",
          "환율 파도 타기 — 최근 저점과 고점 사이에서 현재 환율이 어디쯤인지 보여주어, 환율 차트를 읽지 않아도 지금 환전해도 될지 판단할 수 있습니다.",
          "여행 D-day를 설정하면 여행지 사진을 배경으로 한 일정 화면에서 외화 RP를 자연스럽게 제안하고, 타임라인에서 여행 일정과 RP 만기일을 함께 관리해 여행 전 필요한 경비를 놓치지 않도록 했습니다.",
        ],
        images: [
          { src: "/images/travel-wallet/accounts.jpg", caption: "계좌 카드 — 여행 투자 계좌(NH)와 여행 계좌(트래블월렛)를 한 화면에서 전환" },
          { src: "/images/travel-wallet/wave.jpg", caption: "환율 파도 타기 — 최근 저점·고점 사이에서 지금 환율의 위치" },
          { src: "/images/travel-wallet/trip-state.jpg", caption: "여행 전에는 외화 RP를, 여행 후에는 해외주식을 먼저 제안" },
          { src: "/images/travel-wallet/timeline.jpg", caption: "여행지 배경의 D-day 화면과 RP 만기일을 함께 보는 투자 타임라인" },
          { src: "/images/travel-wallet/components.jpg", caption: "디자이너 핸드오프용으로 정리한 카드 컴포넌트 — D-day, 내 투자, 추천 상품, 환율, 계좌 선택" },
        ],
      },
      {
        label: "Validation",
        title: "AI 페르소나로 시안을 반복 검증했다",
        body: [
          "설문 전, LLM 가상 유저로 니즈를 먼저 예측했습니다. 가상 유저는 환율이 낮아진 시점에 분할 환전할 것이라 답했지만, 실제로는 46.4%가 여행 직전에 환전했습니다.",
          "95명의 응답은 LLM으로 1차 분류한 뒤, 환전 동기가 맥락에 숨어 있는 경우가 많아 직접 재검토하며 분류 기준을 보완했습니다.",
          "설문 데이터를 바탕으로 3명의 가상 페르소나를 설계하고, 시안을 업데이트할 때마다 해당 페르소나로 가상 유저 테스트를 진행해 방향을 검증했습니다.",
        ],
        images: [{ src: "/images/travel-wallet/persona.jpg", caption: "설문에서 도출한 가상 페르소나 — 특성, 페인 포인트, 여행 전후 시나리오" }],
      },
      {
        label: "Result",
        title: "NH투자증권에 8개 영역의 개선안을 제안",
        body: [
          "2026년 4월 최종 보고에서 메인 화면, 계좌 UI, 계좌별 콘텐츠, 환율 정보, 투자 상품 제공 방식, D-day 기반 RP 제안, 여행지 배경 일정 화면, 투자 타임라인까지 8개 영역의 화면을 제안했습니다.",
        ],
      },
    ],
  },

  "friends-in-a-widget": {
    cover: "/images/widget/hero.jpg",
    sections: [
      {
        label: "Background",
        title: "공개 SNS에 지친 Z세대가 홈 화면 위젯으로 모였다",
        body: [
          "개방형 SNS의 정서적 피로감이 커지면서, 소수의 친구끼리 사진을 공유하는 폐쇄형 위젯 SNS인 Locket Widget이 Z세대 사이에서 대안으로 떠올랐습니다.",
          "기능은 단순한데 왜 사람들이 이 위젯에서 강한 연결감을 느끼는지, 그리고 처음의 의도적인 사용이 어떻게 무의식적인 루틴으로 바뀌는지 알고 싶었습니다.",
        ],
      },
      {
        label: "Research",
        title: "20명의 일주일을 다이어리로 따라갔다",
        body: [
          "20대 20명(20대 초반 16명, 중반 4명)이 참여했습니다. 신규 사용자는 7일, 기존 사용자는 3일 동안 매일 다이어리 문항에 응답했고, 이후 1시간 내외의 심층 인터뷰를 진행했습니다.",
          "가공 전 데이터를 LLM에 넣어 관련 테마를 먼저 도출한 뒤, 원본 발화의 맥락과 대조하며 축코딩과 테마코딩을 진행했습니다. 신규 사용자와 장기 사용자를 비교하기 위해 패턴을 다시 분류했습니다.",
        ],
        stats: [
          { value: "20명", label: "20대 참여자 (초반 16명, 중반 4명)" },
          { value: "7일 · 3일", label: "신규 · 기존 사용자 다이어리 스터디" },
          { value: "1시간", label: "참여자별 심층 인터뷰" },
        ],
      },
      {
        label: "Insight",
        title: "보려고 하지 않아도 보이는 것이 연결감을 만든다",
        body: [
          "Ambient Co-presence — 사용자는 위젯을 보려는 의지 없이도 핸드폰을 켤 때마다 친구의 일상에 노출됩니다. 이 비자발적 노출이 기존 SNS보다 더 강한 연결감을 만들었습니다.",
          "Inhabiting Other's Screen — 내 사진이 상대 홈 화면의 한 칸을 계속 차지한다는 인식이, 사진을 올리기 전에 상대를 배려하게 만들었습니다.",
          "Less Expectation of Explicit Reaction — 다음 사진이 오면 사라지는 위젯의 휘발성이 명시적인 반응에 대한 기대를 낮췄습니다. 반응하지 않아도 이미 교류한 것처럼 느꼈습니다.",
        ],
        quotes: [
          "24시간 영상통화하는 기분이 들었어요.",
          "여자친구 핸드폰 한 칸에 월세 내고 지내는 기분이네요.",
          "사진을 보기만 해도 이미 상대와 소통한 것 같았어요.",
        ],
      },
      {
        label: "Solution",
        title: "발견을 세 가지 디자인 제안으로",
        body: [
          "조절할 수 없는 노출 강도 — 연결감의 항상성은 유지하되, 감정 상태에 따라 위젯 노출을 잠시 조절하는 기능을 제안했습니다.",
          "발신자의 자발적인 책임감 — 온보딩 단계에서 '내 사진이 상대 홈 화면에 항상 뜬다'는 구조를 명확히 인지시켜, 상대를 배려하도록 유도합니다.",
          "소멸성을 느낄 수 있는 노출 레이어 — 콘텐츠가 사라지는 방식을 보여주는 마이크로 인터랙션으로 사용자의 반응 기대를 낮춥니다.",
        ],
        images: [{ src: "/images/widget/implications.jpg", caption: "내 사진이 상대 홈 화면에 뜬다는 구조와 소멸성을 보여주는 화면" }],
      },
    ],
  },

  "pet-share": {
    cover: "/images/petshare/app-entry.jpg",
    sections: [
      {
        label: "Background",
        title: "반려동물을 돌볼 시간이 없는 사람, 동물과 함께하고 싶은 사람",
        body: [
          "반려동물을 키우려면 시간과 여유가 필요하지만 바쁜 일상에서는 그렇지 못한 경우가 많고, 반대로 동물과 교류하고 싶지만 여건상 키우기 어려운 사람도 있습니다.",
          "Rover, Wag! 같은 기존 서비스는 유료 거래 중심이었습니다. PetShare는 돈이 오가지 않는 교환과 이웃 간의 지원을 바탕으로 두 사람을 연결하는 커뮤니티를 목표로 했습니다. DTU 교환학생 기간에 6인 팀으로 진행했습니다.",
        ],
      },
      {
        label: "Research",
        title: "두 사용자의 목표를 각각 지도로 그렸다",
        body: [
          "짧은 인터뷰를 바탕으로 Lean Canvas를 만들고, 반려동물을 맡기는 owner와 돌봐주는 helper 각각의 User Story Map을 작성해 필요한 핵심 과업을 정리했습니다.",
        ],
        images: [{ src: "/images/petshare/story-map.jpg", caption: "Owner와 Helper의 User Story Map" }],
      },
      {
        label: "Insight",
        title: "AI 기능보다 '이웃'이라는 관계가 더 고유한 가치였다",
        body: [
          "초기 컨셉은 AI 기반 펫케어 앱이었습니다. 수업에서 3분 피치 후 받은 피드백은 '고유한 가치 제안이 약하다'는 것이었고, UI와 레이아웃은 긍정적이었습니다.",
          "기능을 더하는 대신, 이웃끼리 자발적으로 돌봄을 나누는 커뮤니티 모델로 피벗하고 UI는 유지했습니다.",
        ],
        images: [{ src: "/images/petshare/pivot.jpg", caption: "Pivot — 반려동물 건강관리 앱 Petpulse의 홈(왼쪽)에서 이웃 간 돌봄을 나누는 PetShare의 홈(오른쪽)으로" }],
      },
      {
        label: "Prototype",
        title: "와이어프레임에서 Figma 인터랙티브 프로토타입으로",
        body: [
          "협업 스케치에서 와이어프레임, Figma 인터랙티브 프로토타입까지 총 세 번의 반복을 거쳤습니다. 저는 Samrat Ojha와 함께 Iteration #2를 맡았습니다.",
        ],
        images: [
          { src: "/images/petshare/wireframes.jpg", caption: "최종 와이어프레임 플로우" },
          { src: "/images/petshare/app-match.jpg", caption: "Helper board → Owner 프로필 → 도움 요청 수락 — 이웃과 반려동물을 연결하는 흐름" },
          { src: "/images/petshare/app-care.jpg", caption: "돌봄 이후 — 귀가 확인, 보호자와의 채팅, 산책 평가" },
          { src: "/images/petshare/landing.jpg", caption: "서비스 랜딩 페이지" },
        ],
      },
      {
        label: "Validation",
        title: "10명이 길을 잃은 지점을 기록했다",
        body: [
          "DTU 학생 10명(반려인 6명)에게 게시물 작성, 제안 수락, 다른 사용자 게시물 탐색, 제안 보내기의 4개 과제를 Thinking-Aloud로 수행하게 하고, 사후 설문을 진행했습니다.",
          "10명 중 6명이 한 화면의 상호작용 요소가 너무 많다고 느꼈고, 4명은 캘린더가 두 개라 하단 내비게이션의 캘린더 아이콘에서 혼란을 겪었습니다.",
          "게시물 작성 기능이 여러 하위 페이지 뒤에 숨어 있어 모든 참여자가 첫 과제에서 진입점을 찾기 어려워했고, 6명은 받은 제안 페이지를 찾기 전에 같은 곳을 맴돌았습니다.",
        ],
        stats: [
          { value: "6 / 10", label: "한 화면의 요소가 너무 많다고 느낌" },
          { value: "4 / 10", label: "캘린더가 두 개라 내비게이션에서 혼란" },
          { value: "6 / 10", label: "받은 제안 페이지를 찾기 전에 같은 곳을 맴돎" },
        ],
        images: [{ src: "/images/petshare/iteration.jpg", caption: "Iteration #2 — 테스트에서 나온 핵심 문제를 반영한 레이아웃" }],
      },
      {
        label: "Result",
        title: "요소를 묶고 내비게이션을 줄였다",
        body: [
          "Iteration #3에서 흩어져 있던 화면을 하나로 묶고 요소를 그룹핑해 내비게이션을 단순화했습니다. 같은 과제와 방법으로 다시 테스트한 결과, 내비게이션에 대한 불만이 크게 줄었습니다.",
          "다만 일부 참여자는 여전히 화면이 답답하다고 느꼈습니다. 여백이 부족하고 요소가 밀집해 있다는 피드백이었습니다.",
        ],
        images: [{ src: "/images/petshare/simplify.jpg", caption: "Iteration #3 — 흩어진 세 화면을 하나의 홈으로 통합" }],
      },
      {
        label: "Retrospective",
        title: "더 다양한 사람에게 검증했어야 했다",
        body: [
          // TODO: 본인의 회고로 다시 쓰기 — 아래는 보고서에 적힌 한계를 옮긴 것
          "테스트 참여자가 모두 DTU 학생이었기 때문에, 실제로 이웃과 돌봄을 나눌 다양한 연령과 배경의 사용자에게 검증하지 못한 점이 한계였습니다.",
        ],
      },
    ],
  },

  ghosty: {
    cover: "/images/ghosty/hero.jpg",
    sections: [
      {
        label: "Background",
        title: "알람 대신, 방 안에 숨은 작은 유령",
        body: [
          "Ghosty는 매일 아침 방 안 어딘가에 숨어 있다가, 하루가 시작되기 전에 아이에게 발견되기를 기다리는 작은 유령입니다. 따분한 알람 소리 대신 숨바꼭질로 아이가 스스로 일어나도록 돕는 투사형 놀이 알람입니다.",
        ],
        images: [{ src: "/images/ghosty/character.jpg", caption: "Meet Ghosty — 아이와 숨바꼭질하는 유령 캐릭터" }],
      },
      {
        label: "Problem",
        title: "어떻게 하면 아이가 놀이를 통해 스스로 일어날 수 있을까?",
        body: [
          "How can we help children wake up independently through play? — 이 질문에서 세 가지 목표를 세웠습니다.",
          "기상 과정에서 아이의 자율성을 높이고, 놀이를 통해 건강한 아침 루틴을 만들며, 사용자 맞춤 설정으로 지속적인 참여를 유지하는 것입니다.",
        ],
      },
      {
        label: "Research",
        title: "놀이, 감각, 그리고 손에 잡히는 상호작용",
        body: [
          "Emotional Design, Gamification, Tangible Interaction에 관한 배경 연구에서 세 가지 인사이트를 정리했습니다. 반복적인 일과를 놀이 같은 도전으로 바꾸면, 특히 아이들의 동기와 참여가 높아질 수 있습니다.",
        ],
        options: [
          { title: "Gamification", desc: "게임화는 습관 형성을 돕는다" },
          { title: "Multisensory stimuli", desc: "여러 감각을 함께 자극하면 기상 효율이 높아진다" },
          { title: "Physical interaction", desc: "아이들은 몸으로 하는 물리적 상호작용을 선호한다" },
        ],
      },
      {
        label: "Solution",
        title: "유령이 나타나고, 아이가 찾고, 잡으면 아침이 시작된다",
        body: [
          "회전하는 프로젝터가 방 안 곳곳에 유령을 띄우고, 아이가 유령에 손을 대면 카메라가 이를 인식해 게임이 끝납니다. 스피커, 진동 모터, LED, 가습 모듈 같은 단서로 아이가 유령을 찾도록 돕고, \"Catch me if you can~ Guess where I'm hiding~\" 같은 목소리로 참여를 이끕니다.",
        ],
        flow: [
          [{ title: "01 Appear", note: "Ghosty가 방 안 여러 곳에 나타난다" }],
          [{ title: "02 Hide & Seek", note: "아이가 Ghosty와 숨바꼭질을 한다", main: true }],
          [{ title: "03 Catch", note: "아이가 Ghosty를 잡으면 게임이 끝난다" }],
        ],
      },
      {
        label: "Prototype",
        title: "프로젝터를 돌리고, 손을 인식하다",
        body: [
          "Raspberry Pi 4가 OpenCV·MediaPipe로 아이의 손을 인식하고 효과음을 재생하며, Arduino가 서보·스텝 모터로 프로젝터를 회전시켜 유령이 나타날 위치를 바꿉니다. 프로젝터의 받침과 여닫이 부품은 아크릴로 제작했습니다.",
        ],
        flow: [
          [{ title: "Raspberry Pi 4", note: "OpenCV · MediaPipe 손 인식, MP3 재생" }],
          [{ title: "Arduino", note: "서보 · 스텝 모터 제어", main: true }],
          [{ title: "Projector", note: "회전하며 유령을 투사" }],
        ],
        images: [{ src: "/images/ghosty/prototype.jpg", caption: "초기 프로토타입 — 회전 받침을 단 프로젝터 테스트" }],
      },
      {
        label: "Next steps",
        title: "통합하고, 실제 아이들과 테스트하기",
        body: [
          "발표 시점에 정리한 다음 단계는 각 모듈의 통합, 효과 추가, 사용자 테스트, 그리고 OpenCV 인식 정확도 개선이었습니다.",
        ],
      },
    ],
  },
};
