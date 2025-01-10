# 🚀 Public Data OpenAPI 프로젝트

이 프로젝트는 **공공데이터 API**를 활용하여 **대기질 정보**, **버스 노선 정보**, **버스 정류장 정보**를 제공하는 **Spring Boot 백엔드 + React 프런트엔드** 애플리케이션입니다.

## 📌 기술 스택

### 🔹 백엔드 (Spring Boot)
- **Spring Boot 3.4.2**
- **Spring Web** (RESTful API)
- **공공데이터 포털 API 연동**

### 🔹 프런트엔드 (React)
- **React**
- **React Router** (`react-router-dom`)
- **Bootstrap** (스타일링)
- **Axios** (API 호출)

---

## 📂 프로젝트 구조

```
📦 PublicDataUseData
 ┣ 📂 .idea                           # IntelliJ IDEA 설정 파일
 ┣ 📂 public-quality-app              # React 프론트엔드 프로젝트
 ┃ ┣ 📂 src                           # React 소스 코드
 ┃ ┃ ┣ 📜 AirQuality.jsx              # 대기질 정보 
 ┃ ┃ ┣ 📜 App.js                      # 라우팅 및 메인 컴포넌트
 ┃ ┃ ┣ 📜 index.css                   # 전역 스타일
 ┃ ┃ ┣ 📜 index.js                    # React 진입점
 ┃ ┃ ┣ 📜 logo.svg                    # 로고 파일
 ┃ ┣ 📜 package.json                  # npm 패키지 관리 파일
 ┣ 📂 PublicDataUse                    # Spring Boot 백엔드 프로젝트
 ┃ ┣ 📂 src                            # Java 소스 코드
 ┃ ┃ ┣ 📂 main
 ┃ ┃ ┃ ┣ 📂 java/com.kh.opendata       # 패키지 구조
 ┃ ┃ ┃ ┃ ┣ 📂 restcontroller           # REST API 컨트롤러
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 APIAirController.java       # 대기질 정보 API 컨트롤러
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 APIBusRouteController.java  # 버스 노선 정보 API 컨트롤러
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 APIBusStationController.java# 버스 정류장 정보 API 컨트롤러
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 PublicDataUseApplication.java # Spring Boot 메인 클래스
```

---

## 🌐 API 엔드포인트

### 1️⃣ 대기질 정보 API
- **URL:** `GET /air.do`
- **설명:** 서울의 실시간 대기질 정보를 조회합니다.
- **공공데이터 API 사용:**
    - [대기오염 정보 조회 API](https://www.data.go.kr/)
- **예제 응답 (XML 데이터 변환 필요)**
  ```json
  {
    "PM10": "25",
    "PM2.5": "12",
    "O3": "0.02",
    "CO": "0.5",
    "SO2": "0.003",
    "NO2": "0.015"
  }
  ```

### 2️⃣ 버스 노선 정보 API
- **URL:** `GET /busroute`
- **설명:** 특정 버스 번호에 대한 노선 정보를 가져옵니다.
- **공공데이터 API 사용:**
    - [서울시 버스 노선 정보 API](http://ws.bus.go.kr/)

### 3️⃣ 버스 정류장 정보 API
- **URL:** `GET /busstation.do`
- **설명:** 특정 노선에 대한 정류장 목록을 가져옵니다.
- **공공데이터 API 사용:**
    - [서울시 버스 정류장 정보 API](http://ws.bus.go.kr/)

---

## 🖥️ React 프런트엔드 설정

### 1️⃣ 패키지 설치
```sh
cd frontend
npm install
```

### 2️⃣ React 라우터 설정 (`App.js`)
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AirQuality from './AirQuality';
import BusRouteList from './BusRouteList';
import BusStationList from './BusStationList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/air" element={<AirQuality />} />
          <Route path="/bus" element={<BusRouteList />} />
          <Route path="/busstation" element={<BusStationList />} />
          <Route path="*" element={<h2>404 - 페이지를 찾을 수 없습니다.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

---

## 🚀 실행 방법

### 1️⃣ 백엔드 실행 (Spring Boot)
```sh
cd backend
./mvnw spring-boot:run
```
- 기본 포트: `http://localhost:8080`

### 2️⃣ 프런트엔드 실행 (React)
```sh
cd frontend
npm start
```
- 기본 포트: `http://localhost:3000`

---



