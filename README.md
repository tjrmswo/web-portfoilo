# 서근재 웹 포트폴리오

프론트엔드 개발자 서근재의 개인 웹 포트폴리오 저장소입니다. 이력서·노션에 정리된 프로젝트 경험을 스크롤 기반 단일 페이지 사이트로 재구성했습니다.

**배포**: [portfolio-silk-omega-35.vercel.app](https://portfolio-silk-omega-35.vercel.app)

## 구성

Intro → About → Strengths → Now → Skills → Projects → GitHub Activity → Contact 순서의 단일 페이지 스크롤 구조이며, 섹션마다 스크롤 진입 시 좌/우 페이드인 애니메이션이 적용됩니다.

- **Projects**: 카드에는 핵심 성과 뱃지·스크린샷 슬라이드만 노출하고, 클릭하면 Problem → Action → Result 구조의 상세 딥다이브를 슬라이드오버 모달로 보여줍니다.
- **Strengths**: About에서 드러나는 역량을 실제 프로젝트 성과와 연결해 보여줍니다.
- **GitHub Activity**: 실제 GitHub 기여 그래프를 임베드합니다.

## 기술 스택

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

## 실행 방법

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인합니다.

```bash
pnpm build
pnpm start
```
