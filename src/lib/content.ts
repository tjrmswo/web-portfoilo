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
  motivation: `개발자가 되고 싶다는 목표는 처음부터 분명했습니다. 교육 직군에 몸담고 있는 동안에도 그 꿈을 놓지 않고, ConnectingRoad와 본론 두 개의 사이드 프로젝트를 기획부터 배포까지 직접 진행해왔습니다.`,
  paragraph: `군 생활 중 시작한 헬스에서 '느리지만 매일 꾸준히 발전하는 과정의 가치'를 배웠고, 지금도 코드를 마주할 때 그 감각을 가장 큰 자산으로 삼습니다.`,
  content: `컴퓨터공학을 전공했고, "왜 이 문제가 발생했을까?"를 구조적으로 진단하고 고쳐나가는 과정에서 가장 큰 자아효능감을 느낍니다.`,
  hobby: `'노래'로 다져온 디테일과 완성도에 대한 고집은, 사용자와 가장 가까운 접점을 섬세하게 만드는 프론트엔드 작업으로 이어집니다.`,
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
      {
        name: 'TanStack Query',
        icon: 'https://cdn.simpleicons.org/reactquery',
      },
      { name: 'Zustand', icon: '/icons/zustand.svg' },
      { name: 'Zod', icon: 'https://cdn.simpleicons.org/zod' },
      {
        name: 'React Hook Form',
        icon: 'https://cdn.simpleicons.org/reacthookform',
      },
    ],
  },
  {
    category: 'UI',
    items: [
      {
        name: 'Tailwind CSS',
        icon: 'https://skillicons.dev/icons?i=tailwind',
      },
      { name: 'shadcn/ui', icon: 'https://cdn.simpleicons.org/shadcnui' },
    ],
  },
  {
    category: 'AI 도구',
    items: [
      {
        name: 'OpenAI API',
        icon: 'https://api.iconify.design/logos:openai-icon.svg',
      },
      { name: 'Claude Code', icon: 'https://cdn.simpleicons.org/claude' },
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
    ],
  },
  {
    category: '운영·인프라',
    items: [
      { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
      { name: 'Supabase', icon: 'https://skillicons.dev/icons?i=supabase' },
      { name: 'PostHog', icon: 'https://cdn.simpleicons.org/posthog' },
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
          'AI 응답 비정형화로 DB 저장·파싱 불가 → 본론 경험 근거로 **필드명·글자 수 고정 프롬프트** 제안 → **API-UI 바인딩 안정화**',
        problem:
          '팀 회의에서 검토한 로드맵 생성 프롬프트는 기획 의도는 명확했지만 출력 포맷이 정형화되어 있지 않아 DB 저장과 FE 파싱이 불가능한 구조였습니다. 개인 프로젝트(본론)에서 OpenAI API를 직접 다뤄본 경험상 지시어만으로는 글자 수·필드 구조가 응답마다 흔들린다는 걸 알고 있었기에, 실제 썼던 프롬프트를 근거로 고정 필드명(title/summary/body)과 글자 수 제한을 제안했습니다.',
        action: '',
        result:
          '제안이 반영돼 학습 목표 30~50자 제목형, 세부 학습 400자 고정 분량으로 프롬프트가 재설계됐고, 이후 로드맵 생성 전반의 API-UI 바인딩이 안정화됐습니다.',
      },
      {
        id: 'edge-case-defense',
        title:
          '사각지대 28건 전부 방어 — 백엔드 스펙 공백을 프론트엔드 검증으로 무력화',
        featured: true,
        problem:
          '로드맵 생성 실패 시 에러 토스트 하나만 뜨고 원인 안내가 없었습니다. 산업군·경력 등 일부 필드가 백엔드에서 optional 처리돼 있어, 값이 비어도 200이 반환되는 사각지대가 있었습니다.',
        action:
          "백엔드가 아직 필드별 에러 코드를 정리하지 않은 상태라(확인 가능한 코드는 목표 회사 불일치용 ROADMAP-008 하나뿐) 필드별 자체 에러 코드 4개를 설계해, 나중에 백엔드 코드가 확정되면 매핑 테이블 키만 바꾸도록 만들었습니다. 처음에는 각 페이지 '다음' 버튼에도 전체 필드를 재검증하는 가드를 넣었는데, 정상 플로우에서도 오탐으로 발동해 사용자를 예상치 못하게 이전 페이지로 되돌리는 문제를 발견해 제거하고, 검증 책임을 API 호출 직전 한 곳으로 좁힌 detectMissingFieldCode 함수로 통일했습니다. Vitest로 6개 필드 × 4가지 무효값 24개 매트릭스를 검증하는 과정에서 범위 밖의 사각지대 3건(음수 ID 2건, 공백 문자열 1건)을 추가로 발견해 양수·trim 검증을 보완했고, baseline 1건을 더해 총 28개 케이스를 테스트했습니다.",
        result:
          '28개 테스트 전부 통과, 커버리지 100%를 달성했습니다. 문제 필드를 토스트로 안내하고 해당 화면으로 자동 이동시키되, 값을 다시 채운 뒤에는 처음부터 다시 거치지 않고 원래 로드맵 생성 페이지로 바로 복귀하도록 구현해 재입력 부담을 없앴습니다.',
        retrospective:
          '백엔드 스펙을 기다리지 않고 프론트엔드가 먼저 방어선을 설계하되, 나중에 매핑 테이블만 바꾸면 흡수되도록 여지를 남기는 방어적 설계 원칙을 세웠습니다.',
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
          '실패 유형별 캡처 위치 불명확 → 레이어별로 **담당 분리** 설계 → **4개 지점 중복·누락 없이 커버**',
        problem:
          '에러 확인 수단이 Slack 스크린샷 공유뿐이라 재현·실시간 파악이 불가능했습니다. API 실패·렌더링 에러·SSR 크래시는 서로 다른 층에서 발생해 한 곳에서만 잡으면 중복되거나 누락되는데, 실제로 API 호출 지점 약 30곳 중 29곳이 react-query를 거쳐 인터셉터와 동시 계측 시 거의 모든 에러가 두 번 리포트됐습니다. 그래서 API 실패는 재시도 종료 후 react-query 전역 핸들러에서, 코드 버그는 에러 바운더리에서, 화면이 그려지기 전 죽는 SSR 크래시는 instrumentation.ts에서 잡도록 4개 지점을 분리 설계했습니다.',
        action: '',
        result:
          '코드 기준 4개 지점 프로덕션 적용을 완료해 Slack 의존에서 벗어났습니다 (실트래픽 검증은 다음 단계).',
      },
      {
        title: 'Steiger 도입 및 구조 위반 정량 해소',
        oneLiner:
          '명확한 FSD 구조 확립 필요 → **Steiger 도입**, Claude Code로 위반 30건 탐지 → **29건(97%) 해소**, 트리셰이킹 회귀 1건 차단',
        problem:
          'FSD 구조를 명확히 확립하려 Steiger 도입을 검토했고, 확실한 근거를 갖추기 위해 도입에 앞서 Claude Code로 코드베이스를 전수 스캔해 위반 지점을 7개 규칙·30건으로 찾아냈습니다. 슬라이스 재배치·피처 병합·배럴 재설계 순으로 우선순위를 정해 해소를 지시했고, 검증 중 shared 참조가 배럴(절대경로)로 바뀐 걸 발견해 과거 트리셰이킹 실패 경험을 근거로 상대경로로 재수정했습니다.',
        action: '',
        result:
          '검증 중 트리셰이킹을 막을 뻔한 회귀 1건을 병합 전에 차단했고, 위반 30건 중 29건(97%)을 해소해 346개 파일에서 코드 810줄을 순감소시켰습니다. 남은 1건(entities/roadmap)은 소비자가 한 곳뿐이라 병합보다 관망이 낫다고 판단해 의도적으로 남긴 것입니다.',
      },
    ],
    performance: {
      title:
        '초기 로딩 번들 15% 감량 — 배럴 파일에 숨어 있던 트리셰이킹 차단 원인 추적',
      problem:
        '로드맵 섹션 화면별 초기 로딩 용량을 점검하던 중, 그래프(레이더 차트)가 전혀 없는 산업군 선택 화면이 그래프가 있는 결과 분석 화면과 초기 로딩 용량이 거의 같다는 이상 징후를 발견했습니다.',
      action:
        "Bundle Analyzer로 추적한 결과, 여러 화면이 공유하는 배럴(index.ts)이 차트 라이브러리(chart.js)를 최상단에서 함께 export하고 있었습니다. chart.js는 import되는 즉시 ChartJS.register(...)를 모듈 최상단에서 실행하는 부작용이 있어 번들러가 '안 쓰이니 제거해도 된다'고 판단하지 못해, 이 배럴을 참조하는 모든 화면에 통째로 포함되고 있었습니다. 이 배럴을 전혀 참조하지 않는 순수 정적 화면은 수정 전에도 가벼운 상태를 유지하고 있어 배럴이 원인임을 교차 확인했고, 배럴에서 차트 export를 제거한 뒤 실제로 필요한 화면 하나에서만 파일 경로로 직접 Dynamic Import하도록 분리했습니다.",
      result:
        '차트가 없는 화면은 물론 차트가 실제로 필요한 화면까지 포함해, 로드맵 섹션 전체 초기 로딩 번들 용량을 436KB → 367KB로 평균 15% 줄였습니다.',
      before: '436KB',
      after: '367KB',
      improvement: '-15%',
      retrospective:
        '부작용 있는 라이브러리를 배럴에서 export하면 그 배럴을 참조하는 모든 화면이 함께 영향받는다는 걸 배웠고, 이후 다른 배럴도 같은 패턴이 있는지 점검하는 습관이 생겼습니다.',
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
          '임베딩 기반 클러스터링은 같은 사건을 다르게 표현한 한국어 기사를 묶지 못했습니다. LLM으로 전환했지만, 이번엔 어떤 모델을 쓸지가 새 문제였습니다.',
        action:
          "먼저 GPT-5-mini를 시도했으나 temperature: 0 옵션이 지원되지 않아 제거하자 응답이 33초까지 지연되고 3회 호출에 $0.02가 드는 등 실사용 기준에 맞지 않아 제외했습니다. 후보를 gpt-5.4-nano와 gpt-4o-mini로 좁혀 동일 프롬프트로 직접 실측한 결과, gpt-5.4-nano는 응답속도가 44% 빨랐지만 출력 토큰이 3배 많아 실측 비용은 오히려 88% 더 높았고 기사가 많아지면 맥락 처리 오류도 발생해 제외했습니다. 이후 입력을 기사당 title 40자·description 60자로 제한해 속도를 단축했더니 일부 기사가 응답에서 누락돼, max_tokens를 1500으로 늘리고 누락된 기사를 코드에서 감지해 '기타' 그룹으로 자동 편입시키는 보완 로직을 추가했습니다.",
        result:
          '속도와 응답 완전성 사이 트레이드오프를 조정해 평균 응답 속도 약 2초대(1.5~4.7초)를 유지하면서, 비용 47% 절감(gpt-4o-mini $0.000368 vs gpt-5.4-nano $0.000692)과 맥락 처리 오류 0건을 동시에 달성했습니다.',
        retrospective:
          '"체감상 빠르다"는 인상을 코드에 반영하기 전에 동일 조건에서 실측 비교부터 하는 습관이 생겼습니다.',
      },
      {
        title:
          '실사용자 27건의 클릭이 제 판단보다 셌습니다 — flat 모드 제거로 이어진 데이터 기반 의사결정',
        featured: true,
        problem:
          'cluster 모드와 flat 모드를 함께 제공했지만, 어느 쪽이 실제 핵심 가치에 기여하는지는 감으로만 판단하고 있었습니다.',
        action:
          '개발자 커뮤니티에 공개해 실사용 데이터를 확보하고, Supabase에 compare_start·deselect 등 행동 이벤트를 미리 설계해 로깅했습니다. 실사용자 27건(7개 검색어)을 분석한 결과, flat 모드에서도 기사를 넘겨보는 행동(deselect)은 있었지만 비교 시작(compare_start) 전환은 단 한 건도 없었습니다. 사용자가 flat 모드를 아예 안 쓴 게 아니라 써봤지만 서비스 핵심 가치(같은 사건, 다른 시각 비교)로 이어지지 않았다는 신호로 판단해, A/B 테스트가 아닌 실제 행동 데이터를 근거로 제거를 결정했습니다.',
        result:
          'flat 모드를 제거하고 cluster 단일 모드로 통일했습니다. 같은 데이터에서 노출 기사가 많을수록 비교를 포기하는 패턴도 발견해 클러스터당 노출 기사 수를 4개로 제한했습니다.',
        retrospective:
          '표본은 작았지만 "0건"이라는 신호는 방향성이 명확했습니다. 이후 기능을 만들 때마다 "실제로 쓰이는지 어떻게 확인할 것인가"를 먼저 설계하게 됐습니다.',
      },
      {
        title: 'LLM 비정형 응답 방어 레이어',
        oneLiner:
          'OpenAI 응답 비결정성으로 배열·null 오염 반복 → **Zod preprocess 방어 레이어**, 프롬프트·스키마 여유치 이원화 → **3단계 방어 패턴** 확립',
        problem:
          "OpenAI 응답은 비결정적이라 keywords가 배열 대신 쉼표 구분 문자열로 오거나 null 대신 문자열 \"null\"이 섞이는 등 프롬프트 지시만으로는 통제되지 않는 비정형 응답이 반복됐습니다. 프롬프트 수정만으로는 완전한 제어가 불가능하다고 판단해 Zod preprocess로 파싱 전 응답을 정제하는 스키마 레벨 방어 레이어를 구축했고, Zod를 너무 엄격히 걸면 글자 수를 조금만 넘어도 파싱이 실패하기 때문에 프롬프트는 엄격하게(40자), Zod는 여유 있게(80자) 설정해 완충 역할을 하도록 균형을 맞췄습니다.",
        action: '',
        result:
          '"프롬프트 1차 제어 → Zod 2차 방어 → 코드 3차 보완" 3단계 방어 패턴을 확립해 화면 깨짐·런타임 오류를 사전에 차단했습니다.',
      },
      {
        title: '결과 영속화 및 공유 링크 설계',
        oneLiner:
          '클라이언트 상태 휘발성 → 로그인 이탈 우려로 **비인증 Supabase 영속화 + /result/[id] 라우팅** 채택 → **비로그인 링크 공유** 지원',
        problem:
          '분석 결과가 클라이언트 상태에만 존재해 새로고침·공유 시 소실됐습니다. localStorage만 쓰면 캐시 삭제 시 기록이 사라지고, 인증 없이 공유 DB만 쓰면 내 분석 기록이 다른 사용자에게 노출되는 문제가 있었습니다. 정식 인증·익명 세션·비로그인 공유 URL 세 가지를 검토한 끝에 로그인 절차가 이탈을 유발할 수 있다고 판단해 인증은 제외하고, Supabase PostgreSQL에 결과를 저장한 뒤 고유 id로 /result/[id] 동적 라우팅을 구성해 ChatGPT 공유 링크처럼 로그인 없이도 URL만으로 재방문할 수 있게 설계했습니다.',
        action: '',
        result:
          '클라이언트 상태로만 남아있던 분석 결과를 Supabase에 영구 저장하고, 비로그인 상태에서도 링크 공유만으로 결과를 재방문할 수 있는 구조로 전환했습니다.',
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
