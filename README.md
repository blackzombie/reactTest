# React + Vite GitHub Pages 배포 가이드

## 프로젝트 생성

### 1. Vite로 React 프로젝트 생성
```bash
npm create vite@latest .
```

**설정 옵션:**
- Current directory is not empty: `Ignore files and continue`
- Package name: `react_test`
- Framework: `React`
- Variant: `TypeScript`

### 2. React Router 설치 (선택사항)
```bash
npm i react-router-dom@5 
npm i -D @types/react-router-dom@5
```

## GitHub Pages 배포 설정

### 1. gh-pages 패키지 설치
```bash
npm install --save-dev gh-pages
```

### 2. package.json 설정
`package.json`에 다음 내용 추가:

```json
{
  "homepage": "https://blackzombie.github.io/reactTest",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```


### 3. Git 설정 (필요시)
```bash
# Git 사용자 정보 설정
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Personal Access Token으로 인증 설정
git remote set-url origin https://username:token@github.com/username/repository.git
```

### 4. 배포 실행
```bash
npm run deploy
```

## 배포 과정
1. `npm run build` 실행 → `dist/` 폴더에 빌드 파일 생성
2. `gh-pages -d dist` 실행 → `gh-pages` 브랜치에 빌드 파일 배포
3. GitHub Pages에서 자동으로 웹사이트 호스팅

## GitHub Pages 설정

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `gh-pages` 선택
4. **Save** 클릭

## 웹사이트 접속
배포 완료 후 다음 주소에서 접속 가능:
```
https://blackzombie.github.io/reactTest
```

## 빌드 결과 예시
```bash
> npm run deploy

> react_test@0.0.0 predeploy
> npm run build

> react_test@0.0.0 build
> tsc -b && vite build

vite v7.1.1 building for production...
✓ 59 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.31 kB
dist/assets/index-CztuTIP_.css    0.84 kB │ gzip:  0.41 kB
dist/assets/index-IoREsQ59.js   216.65 kB │ gzip: 69.14 kB
✓ built in 699ms

> react_test@0.0.0 deploy
> gh-pages -d dist
Published
```

## 주요 차이점 (Vite vs Create React App)

| 항목 | Create React App | Vite |
|------|-----------------|------|
| 빌드 폴더 | `build/` | `dist/` |
| 배포 명령어 | `gh-pages -d build` | `gh-pages -d dist` |
| 빌드 도구 | Webpack | Vite |

## 트러블슈팅

### 빈 화면이 나오는 경우
1. `package.json`의 `homepage` URL 확인
2. 브라우저 개발자 도구에서 Console 에러 확인
3. 캐시 삭제 후 새로고침 (`Ctrl + F5`)

### 인증 오류가 나는 경우
1. Personal Access Token 재생성
2. `repo` 권한 확인
3. Git remote URL 재설정

## 개발 워크플로우

```bash
# 1. 로컬 개발
npm run dev

# 2. 코드 변경 후 커밋
git add .
git commit -m "Update features"
git push origin main

# 3. 배포
npm run deploy
```

## 폴더 구조
```
project/
├── src/              # 소스 코드
├── public/           # 정적 파일
├── dist/             # 빌드 결과물 (Vite)
├── package.json      # 프로젝트 설정
└── README.md         # 이 파일
```

---

**Live Demo:** https://username.github.io/repository-name
