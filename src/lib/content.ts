export const intro = {
  role: 'Frontend Developer',
  name: '서근재',
  tagline: '구조적으로 진단하고 문제를 해결하는 프론트엔드 개발자입니다.',
  evidence:
    '엣지케이스 28건 방어, 번들 15% 감량 — 근본 원인을 끝까지 추적해 얻은 결과입니다.',
  // TODO: 실제 이력서 파일/링크로 교체해주세요.
  resumeUrl: '#',
  githubUrl: 'https://github.com/tjrmswo',
};

export const about = {
  paragraph: `군 생활 중 처음 접한 헬스는 저에게 단기적인 결과보다 '느리지만 매일 꾸준히 발전하는 과정의 가치'를 가르쳐 주었습니다. 오늘 들지 못했던 무게를 내일 마침내 들어 올릴 때 느꼈던 성장의 기쁨은, 제가 코드 앞에서 문제를 마주할 때 가질 수 있는 가장 큰 자산이 되었습니다.'`,
  content: `컴퓨터공학을 전공한 뒤 교육 분야 회사에 진학하여 근무하고 있는 현재도, 매 순간 배울 점을 찾으며 끊임없이 성장하려 노력합니다. 비록 현재 직무 영역은 다를지라도 "왜 이 문제가 발생했을까?"를 고민하며 구조적인 원인을 진단하고 고쳐나가는 일에서 깊은 자아효능감을 느낍니다. 이전에 해결하지 못했던 한계나 에러 상황을 하나씩 극복해 내며 한 단계 더 발전했음을 확인하는 과정이 저를 계속 움직이게 만듭니다.`,
  hobby: `저에게 '노래'는 스스로를 가장 솔직하게 표현하고 사람들과 마음을 이어주는 매개체입니다. 노래를 통해 저라는 사람이 가진 박자감, 감성, 그리고 끊임없이 디테일을 다듬어 완성도를 높이는 고집을 드러내듯, 프론트엔드 개발 역시 사용자와 가장 가까운 접점에서 섬세하고 안정적인 경험을 만들어 내는 작업이라 믿습니다.

단순히 기능을 동작시키는 데 그치지 않고, 제품과 사용자를 향한 집요함으로 지속 가능한 코드를 작성하는 개발자로 함께 성장하고 싶습니다.`,
  photo: {
    src: '/photos/travel.jpg',
    alt: '여행지에서 찍은 사진',
  },
};

// About me 세 문단에서 뽑아낸 역량. 각각 실제 프로젝트 증거와 짝지어 둡니다.
// evidenceProjectId/evidenceTargetId: 클릭 시 Projects 섹션의 해당 프로젝트 카드로 스크롤하고
// 모달을 열어 targetId 요소(피처드 케이스 스터디 또는 퍼포먼스 블록)로 바로 스크롤합니다.
export const strengths = [
  {
    title: '꾸준함',
    tagline: '느리지만 매일 쌓아가는 힘',
    description:
      '완성 이후에도 손을 떼지 않습니다. 기능을 배포한 뒤에도 코드 품질을 점검하고 다듬는 작업을 습관처럼 이어가며, 작은 개선을 꾸준히 쌓아 올립니다.',
  },
  {
    title: '근본 원인 탐구',
    tagline: "'왜'를 끝까지 파고드는 집요함",
    description:
      '겉으로 드러난 증상을 고치는 데서 멈추지 않습니다. 로그와 수치를 직접 확인하며 원인이 명확해질 때까지 파고들고, 짐작이 아니라 확인된 사실로 결정합니다.',
    evidenceLabel: '번들 사이즈 원인 추적',
    evidenceDetail:
      '"왜 다 무거울까"라는 질문 하나로 배럴 파일 속에 숨어 있던 트리셰이킹 차단 원인을 끝까지 추적해, 초기 로딩 용량을 15% 줄였습니다.',
    evidenceProjectId: 'connecting-road',
    evidenceTargetId: 'performance-connecting-road',
  },
  {
    title: '디테일에 대한 집착',
    tagline: '완성도를 끝까지 다듬는 고집',
    description:
      '정상 케이스만으로는 만족하지 않습니다. 놓치기 쉬운 예외 상황까지 하나씩 검증해, 사용자가 실제로 마주칠 모든 흐름에서 끊기지 않는 경험을 만듭니다.',
    evidenceLabel: '엣지케이스 28건 전부 방어',
    evidenceDetail:
      '매트릭스 테스트로 끝내지 않고, 놓칠 뻔한 사각지대 3건까지 재현 테스트로 추가로 찾아냈습니다.',
    evidenceProjectId: 'connecting-road',
    evidenceTargetId: 'edge-case-defense',
  },
];

export const now = [
  'ConnectingRoad 출시를 준비하며, 에러 모니터링·데이터 검증 등 실제 운영을 전제로 한 의사결정을 다듬는 중입니다.',
  'TMD교육그룹에서 3개 센터 통합 웹 대시보드 프로젝트를 진행 중입니다 (2026.04~).',
  'Claude Code 기반 AI 페어 프로그래밍을 프로젝트 전반에 적용하고, 생성된 코드를 구조·엣지케이스·성능 기준으로 직접 리뷰·리팩터링하는 습관을 유지하고 있습니다.',
  '이 포트폴리오 사이트도   계속 다듬는 중입니다.',
];

// icon은 실제 이미지를 가리키는 절대 경로/URL입니다. 로고가 없는 항목은 비워둡니다.
export const skillGroups = [
  {
    category: 'Core',
    items: [
      { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
      { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
      { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
    ],
  },
  {
    category: '데이터·상태',
    items: [
      { name: 'React Query', icon: 'https://cdn.simpleicons.org/reactquery' },
      { name: 'Zustand', icon: '/icons/zustand.svg' },
      { name: 'Zod', icon: 'https://cdn.simpleicons.org/zod' },
      {
        name: 'React Hook Form',
        icon: 'https://cdn.simpleicons.org/reacthookform',
      },
    ],
  },
  {
    category: '협업·아키텍처',
    items: [
      {
        name: 'FSD',
        icon: 'https://raw.githubusercontent.com/feature-sliced/documentation/main/static/img/brand/logo-square.png',
      },
      { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
      {
        name: 'GitHub Actions',
        icon: 'https://skillicons.dev/icons?i=githubactions',
      },
    ],
  },
  {
    category: '인프라',
    items: [
      { name: 'AWS', icon: 'https://skillicons.dev/icons?i=aws' },
      { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
      { name: 'NGINX', icon: 'https://skillicons.dev/icons?i=nginx' },
    ],
  },
];

export type ProjectLinks = {
  demo?: string;
  github?: string;
  readme?: string;
};

export type ProjectMedia = {
  src: string;
  alt: string;
  // 원본 픽셀 크기. 크롭 없이 원본 비율 그대로 보여주는 데 사용됩니다.
  width: number;
  height: number;
};

export type CaseStudy = {
  title: string;
  problem: string;
  action: string;
  result: string;
  code?: string;
  // true인 케이스는 모달 상단에 시그니처 스토리로 크게 노출됩니다.
  featured?: boolean;
  retrospective?: string;
  // 서브 기여용 1줄 압축 요약 (**bold** 표기 지원). 상시 노출되는 스캔 리스트에 사용.
  oneLiner?: string;
  // Strengths 섹션 evidence 링크가 이 항목으로 바로 스크롤할 때 사용하는 DOM id.
  id?: string;
};

export type PerformanceNote = {
  title: string;
  problem: string;
  action: string;
  result: string;
  before: string;
  after: string;
  improvement: string;
  code?: string;
  retrospective?: string;
};

export type Project = {
  id: string;
  name: string;
  period: string;
  type: string;
  role: string;
  summary: string;
  stack: string[];
  // 메인 카드에 노출되는 짧은 성과 뱃지 (30초 스캔용).
  badges: string[];
  media?: ProjectMedia[];
  // 상세 모달의 Problem -> Action -> Result 딥다이브.
  caseStudies: CaseStudy[];
  performance?: PerformanceNote;
  links: ProjectLinks;
};

// 순서: ConnectingRoad -> 본론
export const projects: Project[] = [
  {
    id: 'connecting-road',
    name: 'ConnectingRoad',
    period: '2025.05 ~ 진행중',
    type: 'Team · 기획1·마케팅1·백엔드2·디자인1·프론트엔드1',
    role: '프론트엔드 담당',
    summary:
      '커리어 멘토링 플랫폼. 사이드 프로젝트로 출발해 핵심 기획 재설계와 구조 고도화를 거쳐 현재 출시 준비 단계이며, 출시 이후 에러 모니터링·데이터 검증 등 실제 서비스 운영을 전제로 한 의사결정이 요구됩니다.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Zustand',
      'PostHog',
    ],
    badges: [
      '엣지케이스 28개 방어',
      '번들 JS 15% 감량',
      'FSD 아키텍처 도입',
      '에러 캡처 4개 지점',
    ],
    media: [
      {
        src: '/screenshots/connecting-road/01.png',
        alt: '로드맵 생성 대기 화면 — 맞춤 분석 진행 상태와 레이더 차트 미리보기',
        width: 860,
        height: 1896,
      },
      {
        src: '/screenshots/connecting-road/02.png',
        alt: '로드맵 분석 결과 — 우선순위별 성장 여지 점수와 추천 학습 순서',
        width: 856,
        height: 1846,
      },
      {
        src: '/screenshots/connecting-road/03.png',
        alt: '로드맵 콘텐츠 탭 — 목표 역량에 맞춘 추천 아티클·강의 목록',
        width: 854,
        height: 1888,
      },
      {
        src: '/screenshots/connecting-road/04.png',
        alt: '로드맵 관리 탭 — 주간 캘린더와 로드맵 단계·할 일 설정',
        width: 846,
        height: 1900,
      },
    ],
    caseStudies: [
      {
        title: 'AI 응답 포맷 표준화',
        oneLiner:
          'LLM 응답 포맷 불안정 → **프롬프트 구조 표준화** 설계·도입 → **파싱 오류 0건**',
        problem:
          'LLM 응답 포맷이 호출마다 달라져 DB 저장·FE 파싱이 불안정 — 이전 프로젝트에서 경험한 프롬프트 내용을 근거로 프롬프트 구조 표준화를 설계·제안.',
        action: '',
        result: '포맷 불일치발 화면 깨짐 제거, DB 저장·파싱 파이프라인 안정화.',
      },
      {
        id: 'edge-case-defense',
        title:
          '사각지대 28건 전부 방어 — 백엔드 계약 공백을 프론트엔드 검증으로 무력화',
        featured: true,
        problem:
          '로드맵 생성은 ConnectingRoad의 핵심 전환 플로우인데, 실패 시 사용자에게 보이는 건 에러 토스트 하나뿐이었습니다. 어떤 값이 잘못됐는지, 어느 화면으로 돌아가 무엇을 다시 선택해야 하는지 알려주지 않아 그대로 이탈할 위험이 컸습니다. Swagger 문서를 다시 확인해보니 산업군·경력 등 일부 필드가 optional로 처리돼 있어, 값이 비어 있어도 백엔드가 200을 반환하는 사각지대가 존재했습니다. 백엔드가 필드별 에러 코드를 아직 정리하지 못한 상태라, 백엔드 응답만 기다려서는 해결되지 않는 구조적 공백이었습니다.',
        action:
          '백엔드 에러 코드 정비를 기다리는 대신, 프론트엔드가 먼저 필드별 자체 에러 코드 4개(FE-INDUSTRY, FE-LEVEL, FE-RECRUIT, FE-COMPANY)를 설계해 API 호출 직전에 사전 검증하는 detectMissingFieldCode 함수를 만들었습니다. 나중에 백엔드 코드가 확정되면 매핑 테이블의 키만 바꾸면 되도록 설계해 로직을 다시 짜지 않아도 되게 했습니다. 초기에는 각 페이지 "다음" 버튼마다 전체 재검증 가드를 넣었지만, 정상 플로우에서도 발동돼 사용자를 예상치 못하게 이전 화면으로 돌려보내는 부작용을 발견해 제거하고 — 검증 책임을 API 호출 직전 한 곳으로 좁혔습니다. 검증 로직은 Vitest로 직접 테스트했습니다: 6개 필드 × 4가지 무효값(null/undefined/빈 문자열/0) = 24개 매트릭스에, 테스트 중 발견한 사각지대(음수 값, 공백 문자열) 3건과 baseline 1건을 더해 총 28개 케이스를 작성했습니다.',
        result:
          '28개 테스트가 모두 통과했고, detectMissingFieldCode 기준 Statements/Branches/Functions/Lines 커버리지 100%를 달성했습니다. 에러 발생 시 어떤 필드가 문제인지 토스트로 안내하고 해당 필드 입력 화면으로 자동 이동 + 실패한 필드만 선택적으로 초기화하는 구조까지 구현해, 사용자가 처음부터 다시 입력하지 않아도 되게 만들었습니다.',
        retrospective:
          '백엔드가 아직 처리하지 못하는 케이스를 무작정 기다리지 않고 프론트엔드가 먼저 방어선을 설계하되, 나중에 스펙이 확정되면 매핑 테이블 하나만 바꿔서 흡수할 수 있도록 여지를 남기는 것 — 이게 실제 협업 환경에서 프론트엔드가 가져야 할 방어적 설계라고 생각합니다. 이후 본론 프로젝트에서 LLM의 비정형 응답을 Zod로 방어할 때도 "신뢰할 수 없는 입력은 경계에서 걸러낸다"는 같은 원칙을 적용했습니다.',
        code: `export const detectMissingFieldCode = (roadmap: Roadmap): string | null => {
  const hasValidPositionId = !!roadmap.targetPositionId && roadmap.targetPositionId > 0;
  const hasValidIndustry = !!roadmap.industry && roadmap.industry.trim().length > 0;
  if (!hasValidPositionId || !hasValidIndustry) return "FE-INDUSTRY";
  if (!roadmap.careerSummary || !roadmap.positionApplicationExperience) return "FE-LEVEL";
  if (!roadmap.hiringProcessDifficulty) return "FE-RECRUIT";
  if (!roadmap.targetCompanyId) return "FE-COMPANY";
  return null;
};`,
      },
      {
        title: '에러 모니터링 체계 구축',
        oneLiner:
          'Slack 스크린샷 의존 → **전역 핸들러·에러 바운더리 4개 지점** 캡처 설계 → 실시간 가시성 확보',
        problem:
          '에러 확인 수단이 Slack 스크린샷 공유뿐이라 재현·실시간 파악 불가 — 전역 에러 핸들러·에러 바운더리·크래시 폴백 4개 지점에 캡처 로직 설계, 서버 전송 경로 구축.',
        action: '',
        result:
          '코드 기준 4개 지점 프로덕션 적용 완료, Slack 의존 탈피 (실트래픽 검증은 다음 단계).',
      },
      {
        title: 'FSD 아키텍처 전환',
        oneLiner:
          '역할별 폴더 구조 탐색 비용 증가 → **FSD 레이어 구조** 설계·도입 → 기능 단위 응집도 확보',
        problem:
          '역할별(components/hooks/apis) 폴더 구조에서 기능이 늘어날수록 관련 코드가 여러 폴더에 흩어져 탐색 비용과 응집 부재 문제가 커졌습니다.',
        action: '',
        result:
          'Next.js 재구축 시점에 맞춰 FSD(Feature-Sliced Design) 레이어 구조로 전환해, 기능별로 코드가 한곳에 응집되도록 구조를 개선했습니다.',
      },
    ],
    performance: {
      title:
        '초기 로딩 번들 15% 감량 — 배럴 파일에 숨어 있던 트리셰이킹 차단 원인 추적',
      problem:
        '로드맵 섹션 화면별 초기 로딩 용량을 점검하다 이상한 점을 발견했습니다 — 차트가 전혀 없는 산업군 선택 화면과 채용공고 입력 화면이, 그래프가 있는 결과 분석 화면과 거의 같은 용량을 사용자에게 매번 내려받게 하고 있었습니다.',
      action:
        'Bundle Analyzer로 추적한 결과, 여러 화면이 공유하는 배럴(index.ts) 파일이 차트 라이브러리(chart.js)를 최상단에서 함께 export하고 있었고, 이 라이브러리가 모듈 로드 즉시 초기화 코드를 실행하는 부작용(side effect) 때문에 트리셰이킹이 차단되고 있었습니다. 배럴에서 차트 컴포넌트 export를 제거하고, 실제로 필요한 화면 하나에서만 Dynamic Import로 불러오도록 분리했습니다.',
      result:
        '차트가 없는 화면의 초기 로딩 번들 용량을 436KB → 367KB로 15% 줄였습니다.',
      before: '436KB',
      after: '367KB',
      improvement: '-15%',
      retrospective:
        '배럴 파일은 편의를 위해 만들지만, 부작용이 있는 라이브러리를 무심코 최상단에서 export하는 순간 그 배럴을 참조하는 모든 화면이 함께 볼모로 잡힌다는 걸 배웠습니다. 이후 다른 배럴(quiz, profile)도 같은 패턴이 있는지 교차 검증하는 습관이 생겼습니다.',
      code: `// features/roadmap/index.ts (수정 후)
// CompetencyRadarChart는 배럴에서 export하지 않음: chart.js가 모듈 최상단에서
// 부작용을 실행해 트리셰이킹이 안 되고, 다른 roadmap 페이지까지 chart.js가 포함된다.

// app/home/roadmap/roadmapAnalysis/page.tsx
const CompetencyRadarChart = dynamic(
  () => import("@/features/roadmap/ui/CompetencyRadarChart").then((m) => m.CompetencyRadarChart),
  { ssr: false }
);`,
    },
    links: {
      // TODO: 실제 배포 주소로 교체해주세요.
      demo: 'https://dev-web.connectforme.com/',
      // TODO: 실제 GitHub 저장소 링크로 교체해주세요.
      github: 'https://github.com/tjrmswo/connecting-road-web',
      // TODO: 트러블슈팅 README.md 링크로 교체해주세요.
      readme: '',
    },
  },
  {
    id: 'bonron',
    name: '본론',
    period: '2026.04 ~ 2026.05',
    type: 'Solo project',
    role: '기획부터 배포까지 단독 진행',
    summary:
      '같은 사건을 다룬 여러 언론사 기사를 AI로 클러스터링해 보도 방식 차이를 비교 분석하는 서비스. AI로 이미지·영상 조작이 쉬워진 환경에서 요구되는 정보 판별력에 대한 문제의식에서 착안했습니다 (이후 코드 품질 개선을 위한 리팩토링만 지속 중).',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Zustand',
      'OpenAI API',
      'Supabase',
      'Vercel',
    ],
    badges: [
      '비용 47% 절감',
      '실측 데이터 기반 의사결정',
      'Zod 방어 레이어 구축',
      '링크 공유 재방문 지원',
    ],
    media: [
      {
        src: '/screenshots/bonron/01.png',
        alt: '본론 메인 화면 — 사건명 검색 또는 기사 본문 붙여넣기로 분석 시작',
        width: 1312,
        height: 1656,
      },
      {
        src: '/screenshots/bonron/02.png',
        alt: '검색 결과 화면 — 같은 사건을 다룬 여러 매체의 기사 목록',
        width: 1398,
        height: 1660,
      },
      {
        src: '/screenshots/bonron/03.png',
        alt: '비교 분석 결과 — 매체별 WHO/WHAT/WHY/WHEN 항목 비교와 서술 톤 표시',
        width: 1212,
        height: 1652,
      },
    ],
    caseStudies: [
      {
        title:
          "실측 비교로 비용 47% 절감 — '더 빠른 모델'이 아니라 '더 정확한 모델'을 선택한 이유",
        featured: true,
        problem:
          'AI 기반 뉴스 클러스터링의 첫 시도는 text-embedding-3-small 임베딩 방식이었습니다. 코사인 유사도 threshold를 0.40까지 낮춰도 "이란 협상 무산"과 "이란 핵 회담 결렬"처럼 같은 사건을 다르게 표현한 한국어 기사는 벡터 거리가 멀어 묶이지 않는 문제가 반복됐습니다. 맥락 이해가 필요하다고 판단해 LLM 기반으로 전환했지만, 이번엔 어떤 모델을 쓸지가 새로운 문제가 됐습니다. 1차로 시도한 GPT-5-mini는 temperature: 0 파라미터 자체가 지원되지 않아 에러가 발생했고, 3회 호출에 $0.02라는 비용도 감당하기 어려운 수준이었습니다.',
        action:
          '후보를 gpt-5.4-nano와 gpt-4o-mini 두 개로 좁히고, 동일 프롬프트로 순차 호출해 직접 실측했습니다. gpt-5.4-nano는 응답속도 2,069ms로 gpt-4o-mini(2,991ms)보다 44% 빨랐지만, 기사 수가 많아질수록 뒷부분 기사의 맥락 처리에 실패해 그룹 분류 오류가 발생했습니다. 비용도 예상과 반대였습니다 — gpt-5.4-nano는 입력 단가는 낮지만 출력 토큰이 3배 많이 나와, 실측 비용이 gpt-4o-mini보다 오히려 88% 더 높게 측정됐습니다. "빠르다"는 인상만으로 판단하지 않고 속도·정확도·실측 비용 세 축을 모두 놓고 비교한 뒤에야 gpt-4o-mini를 최종 채택했습니다. 이후 입력 토큰을 기사당 title 40자 + description 60자로 제한하고 max_tokens을 1500으로 명시해 응답 속도 자체도 개선했고, 호출 실패나 기사 누락 시 해당 기사를 자동으로 "기타" 그룹에 배정하는 방어 로직도 별도로 구현했습니다.',
        result:
          '비용 47% 절감(gpt-4o-mini $0.000368 vs gpt-5.4-nano $0.000692)과 맥락 처리 오류 0건을 동시에 달성했습니다. 20개 기사 기준 응답 속도도 평균 1.5~4.7초(약 2초대)로 단축했습니다.',
        retrospective:
          '"더 빠르다"는 인상은 실측 앞에서 자주 뒤집혔습니다. gpt-5.4-nano는 속도만 보면 명백한 우위였지만, 출력 토큰 실측치와 맥락 처리 정확도까지 함께 재보고 나서야 진짜 비용과 품질이 드러났습니다. 이후로는 "체감상 빠르다/저렴하다"는 판단을 코드에 반영하기 전에 반드시 동일 조건에서 실측 비교부터 하는 습관이 생겼습니다.',
      },
      {
        title:
          '실사용자 27건의 클릭이 제 판단보다 셌습니다 — flat 모드 제거로 이어진 데이터 기반 의사결정',
        featured: true,
        problem:
          '본론은 AI가 같은 사건끼리 묶어 보여주는 cluster 모드와, 그룹 없이 나열하는 flat 모드를 함께 제공하고 있었습니다. 두 모드 다 만들어는 놨지만, 어느 쪽이 실제로 서비스의 핵심 가치(같은 사건, 다른 시각 비교)에 기여하는지는 감으로만 판단하고 있었습니다.',
        action:
          '개발자 커뮤니티(OKKY)에 서비스를 공개하고 실사용 후기를 요청해 실제 트래픽과 행동 로그를 확보했습니다. Supabase experiment_logs 테이블에 compare_start(비교 시작), deselect, kakao_share, original_link_click 같은 행동 이벤트를 미리 설계해 로깅해뒀고, dev/production 로그는 환경 컬럼으로 구분해 통계 오염을 방지했습니다. 커뮤니티 유입 실사용자 데이터 27건(7개 검색어)을 분석한 결과, flat 모드로 기사를 넘겨본 사례(예: 롤드컵 검색)에서 개별 기사를 열어보는 deselect 행동은 있었지만, 비교 기능 시작을 의미하는 compare_start 전환은 단 한 건도 없었습니다. "A/B 테스트가 아니라 실제 사용자 행동 데이터를 근거로 판단해야 한다"는 원칙에 따라 이 패턴을 그대로 의사결정에 반영했습니다.',
        result:
          'flat 모드의 compare_start 전환 0건을 근거로 flat 모드를 제거하고 cluster 단일 모드로 통일했습니다. 같은 데이터 분석에서 클러스터당 노출 기사 수가 많을수록 사용자가 비교를 포기하는 선택 피로 패턴도 함께 발견해, 클러스터당 노출 기사 수를 최대 4개로 제한하는 후속 개선까지 이어갔습니다.',
        retrospective:
          '표본 27건은 통계적으로 유의하다고 주장할 수 있는 규모는 아니었습니다. 하지만 "0건"이라는 신호는 표본 크기와 무관하게 방향성이 명확했고, 완벽한 통계적 근거를 기다리기보다 관찰된 실제 행동 패턴을 근거로 빠르게 의사결정하는 게 더 나은 선택이라고 판단했습니다. 이후로는 기능을 만들 때마다 "이 기능이 실제로 쓰이는지 어떻게 확인할 것인가"를 먼저 설계하는 습관이 생겼습니다.',
      },
      {
        title: 'LLM 비정형 응답 방어 레이어',
        oneLiner:
          'LLM 비정형 응답(포맷 불일치) 반복 → **Zod preprocess 방어 레이어** 설계 → **3단계 방어 패턴** 확립',
        problem:
          "OpenAI 응답이 비결정적이라 keywords 배열 붕괴·null 오염 문자열 반복 — Zod preprocess 기반 스키마 레벨 방어 레이어 설계·구축 (keywords는 split(',')으로 배열 변환, 오염 문자열은 정규식 제거).",
        action: '',
        result:
          '"프롬프트 1차 제어 → Zod 2차 방어 → 코드 3차 보완" 3단계 방어 패턴 확립, 화면 깨짐·런타임 오류 사전 차단.',
      },
      {
        title: '결과 영속화 및 공유 링크 설계',
        oneLiner:
          '클라이언트 상태 휘발성 → **Supabase 영속화 + /result/[id] 라우팅** 설계 → **비로그인 링크 공유** 지원',
        problem:
          '분석 결과가 클라이언트 상태에만 존재해 새로고침·공유 시 소실 — Supabase PostgreSQL 영속화, /result/[id] 동적 라우팅 설계.',
        action: '',
        result:
          '비로그인 상태에서도 링크 공유만으로 결과 재방문 가능한 구조로 전환.',
      },
    ],
    links: {
      // TODO: 실제 배포 주소(Vercel)로 교체해주세요.
      demo: 'https://bon-ron.vercel.app/',
      // TODO: 실제 GitHub 저장소 링크로 교체해주세요.
      github: 'https://github.com/tjrmswo/bon-ron',
      // TODO: 트러블슈팅 README.md 링크로 교체해주세요.
      readme: '',
    },
  },
];

export const contact = {
  email: 'zeus990506@gmail.com',
  github: 'https://github.com/tjrmswo',
};
