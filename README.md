# SSG LANDERS 패인 페이지

> SSG 래더스를 사랑하는 팬들을 위한 공식 웹사이트 클론 프로젝트입니다.  
> React.js, TailwindCSS를 기반으로 제작되어서, 최신 뉴스, 후원사, 구단 정보 등을 제공하는 반응형 웹사이트입니다.

---

## 프로젝트 개요

- **개발 기간** : 2025년 4월
- **개발 목적** : React.js와 TailwindCSS를 활용한 웹사이트 제작 실습 및 포트폴리오 구성
- **해당 기능** :
  - 래더스 구단 뉴스 제공
  - 반응형 네비가이션 바
  - 후원사 캐렌셀 바너
  - 고정형 푸터 영역
  - 페이지 라우팅 기능

---

## 사용 기술

- **Frontend**
  - React.js (v18)
  - React Router DOM (v6)
  - TailwindCSS
- **Tooling**
  - Vite
- **기타**
  - CSS3
  - HTML5

---

## 디렉토리 구조

```bash
src/
├── assets/           # 이미지, 폰트 등 정적 리소스
├── components/       # NavBar, Footer, SponsorCarousel, NewsCard 등 공용 컨트립
├── page/             # NewsPage (래더스 뉴스 페이지)
├── data/             # 뉴스 데이터
├── App.jsx           # 라우팅 관리
├── index.jsx         # 엔트리 포인트
├── global.css        # 전역 스타일
```

---

## 주요 기능 설명

### 1. 네비가이션 바 (NavBar)
- PC/uba54쮜 반응형 지원
- 햄버거 버튼을 통한 풀스크린 메뉴 전환
- 특정 메뉴(예: "래더스 소식")은 실제 라우팅 연결

### 2. 뉴스 페이지 (NewsPage)
- `NewsCard` 컨트립을 활용하여 뉴스 목록을 그리드로 출력
- 각 뉴스는 이미지, 제목, 간단 설명, 날짜 정보를 포함

### 3. 후원사 캐렌셀 (SponsorCarousel)
- 자동 슬라이딩 바너
- 재생/일시정지 버튼 기능
- family/partner/sponsor 그룹 아이템 통합

### 4. 푸터 (Footer)
- 법률 관련 리트 제공
- 구단 기본 정보 표기
- 주요 SNS 채널 링크

---

## 설치 및 시험 방법

1. 레포지트리 클론

```bash
git clone https://github.com/사용자명/SSG-LANDERS.git
cd SSG-LANDERS
```

2. 패키지 설치

```bash
npm install
```

3. 개발 서버 시작

```bash
npm run dev
```

4. 빌드

```bash
npm run build
```

5. 빌드 결과물 `dist/` 폴더를 GitHub Pages 등으로 배포

---

## 죄의사항

- 배포 시 Vite 설정 파일의 `base` 건너리를 반드시 레포지트리명(`/ssg-landers/`)으로 설정해야 합니다.
- 이미지 파일 건너리 및 import 건너리가 정확히 일치해야 합니다.
- 브라우저 호환성은 최신 크론, 사파리 기준으로 테스트했습니다.

---

## 기억

> 본 프로젝트는 개인 포트폴리오 용도로 제작되어서,  
> 협염 및 확장을 원하시는 경우 별도 문의해주세요.

---

## 라이선스

본 프로젝트는 별도의 라이선스 없이 자유롭게 참고가능합니다.  
다만 상업적 사용이나 무단 복제는 사용을 차지합니다.
