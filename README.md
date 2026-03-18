<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JiHye Portfolio</title>
<link rel="stylesheet" href="style.css">
</head>
<body>





<!-- Hero -->
<section class="hero">
  <div class="hero-gradient-top"></div>       <!-- 오른쪽 위 → 왼쪽 아래 -->

  <div class="hero-text">
    <h1>Creative content & Markeing Design </h1>
    <h2>ChoiJiHye | Marketing Design Portfolio</h2>
  </div>
 
  <div class="hero-gradient-bottom"></div>    <!-- 왼쪽 아래 → 오른쪽 위 -->
</section>

<!-- About -->
<section class="about">
  <div class="about-container">
  <div class="section-overlay.top"></div>     <!-- About 상단 흐림 -->
  <div class="section-overlay.bottom"></div>  <!-- About 하단 흐림 -->
    <img src="images/dog_with_me.jpg" class="about-pic" alt="JiHye와 강이">
    <div class="about-info">
      <h2>ChoiJiHye</h2>
      <p>
콘텐츠 제작과 디지털 마케팅에 관심을 가지고 다양한 프로젝트와 활동을 통해 콘텐츠 기획과 제작 경험을 쌓아왔습니다. 
협업과 실무 경험을 통해 아이디어를 실제 콘텐츠로 구현하는 과정에 흥미를 느끼고 있으며, 
마케팅 콘텐츠 디자인과 디지털 콘텐츠 제작 역량을 지속적으로 발전시키고 있습니다.
      </p>

      <ul>

        <li>캠페인 및 홍보 활동을 통해 다양한 콘텐츠 제작 경험을 쌓았습니다.</li>

        <li>팀 프로젝트와 협업을 통해 아이디어를 콘텐츠로 구현하는 경험을 했습니다.</li>

        <li>카드뉴스, 홍보 콘텐츠 등 다양한 형태의 디지털 콘텐츠 제작에 참여했습니다.</li>

        <li>콘텐츠 기획과 디자인 경험을 바탕으로 실무 역량을 꾸준히 발전시키고 있습니다.</li>

      </ul>

    </div> 
</section>

<!-- Bottom 섹션 -->
<section class="bottom" id="bottom">
  <div class="bottom-gradient"></div>
  <div class="bottom-content">
    <h2 class="bottom-title">Explore More</h2>
    <div class="menu-bar">
      
      <a href="details/experience.html">Youngmind Campaign</a>
      <a href="details/projects.html">National Park ESG Project</a>
      <a href="details/activities.html">Baekyang Tutoring Program</a>
      <a href="details/contact.html">Overseas Supporters Activity</a>
    </div>
  </div>
</section>

<script>
// 페이지 로딩 시 F5 새로고침 문제 방지 + 앵커 클릭 처리
window.addEventListener("DOMContentLoaded", () => {

  // 1. 세부 페이지에서 #bottom으로 온 경우
  if (window.location.hash === "#bottom") {
    const bottom = document.getElementById("bottom");
    if (bottom) {
      setTimeout(() => {
        bottom.scrollIntoView({ behavior: "smooth" });
      }, 50); // 요소 렌더링 안정 위해 약간 딜레이
    }
  }

  // 2. 메인 페이지 내 앵커 클릭 시
  const bottomLinks = document.querySelectorAll('a[href="#bottom"]');
  bottomLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const bottom = document.getElementById("bottom");
      if (bottom) {
        bottom.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, null, "#bottom"); // 주소창에도 반영
      }
    });
  });

});
</script>

  <!-- Hero 섹션 하단 흐림 -->
<div class="section-overlay bottom"></div>

<!-- About 섹션 상단/하단 흐림 -->
<div class="section-overlay top"></div>
<div class="section-overlay bottom"></div>

<!-- Bottom 섹션 상단 흐림 -->
<div class="section-overlay top"></div>
</section>















<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>
Youngmind Campaign | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>
<style>
/* 전체 폰트 및 기본 스타일 */
body {
  font-family: 'Noto Sans KR', sans-serif;
  margin:0;
  background:#f5f5f5;
}

/* Hero + content 통합 배경 */
.hero-wrapper {
  background-image: url('../images/dog_bottom2.jpg'); /* ../images 기준 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; /* Hero 영역 최소 높이 확보 */
}

/* Hero 영역 */
.detail-hero {
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
  width: 100%;
}

.detail-menu h1 {
  color: white;
  font-size: 60px;
  margin: 0;
  text-align: center;
  text-shadow: 2px 2px 4px #fff; /* 약간 입체감 */
  position: relative;
}

.detail-menu::after {
  content:"";
  position:absolute;
  left:50%;
  width:80%;
  height:3px;
  background:#fff;
  opacity:0.8;
  border-radius:2px;
  transform:translateX(-50%);
}


/* 카드 영역 */
.detail-content {
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  width: 100%;
}

.detail-card {
  background: white 60%;
  border-radius:25px;
  padding:30px;
  max-width:900px;
  width:90%;
  box-shadow:0 10px 30px rgba(0,0,0,0.25);
  display:flex;
  flex-direction:column;
  align-items:center;
}

/* 프로필 사진 */
.detail-card img {
  width:150px;
  height:150px;
  border-radius:50%;
  object-fit:cover;
  margin-bottom:20px;
  border:3px solid #556b2f;
}

/* 이름 */
.detail-card h2 {
  margin:0 0 15px 0;
  color:#1b4d3e;
  text-shadow: 1px 1px 2px #fff;
}

/* 섹션 제목 */
.section-title {
  font-weight:bold;
  margin-top:20px;
  margin-bottom:10px;
  font-size:20px;
  color:#1b4d3e;
  align-self:flex-start;
}

/* 정보 리스트 */
.detail-card ul {
  list-style:none;
  padding:0;
  width:100%;
  font-size:18px;
  margin:0;
}

.detail-card ul li {
  padding:10px 15px;
  border-bottom:1px solid rgba(0,0,0,0.1);
}

.detail-card ul li:last-child {
  border-bottom:none;
}

/* 플로팅 버튼 공통 */
.floating-btn {
  position: fixed;
  right:40px;
  padding:18px 28px;
  border-radius:30px;
  font-size:18px;
  font-weight:bold;
  cursor:pointer;
  box-shadow:0 10px 25px rgba(0,0,0,0.25);
  text-align:center;
  transition:0.3s;
}

/* 메인 버튼 */
/* 플로팅 메인 버튼 */
.btn-main-floating {
  position: fixed;        /* 화면에 고정 */
  bottom: 40px;           /* 아래쪽 여백 */
  right: 40px;            /* 오른쪽 여백 */
  z-index: 1000;          /* 다른 요소보다 위 */
  padding: 15px 25px;     
  background: #556b2f;    /* 올리브 색 */
  color: #fff;            
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;  
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: 0.3s;
}

.btn-main-floating:hover {
  background: rgba(85,107,47,0.9);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}


/* 문의사항 버튼 */
#contactBtnContainer {
  position: fixed;  /* 화면에 고정 */
  right: 40px;
  bottom: 180px;    /* 메인 버튼 위 */
  z-index: 1010;
}

#contactBtn {
  background:#fffacd;
  color:#556b2f;
  border:none;
  border-radius: 25px;
  padding: 18px 28px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow:0 10px 25px rgba(0,0,0,0.25);
  transition: 0.3s;
}

#contactBtn {
  background:#fffacd; /* 노랑 */
  color:#556b2f;      /* 올리브그린 */
  border:none;
}
#contactBtn:hover { background:#f5f5b0; }



</style>
</head>
<body>


  <div class="hero-wrapper">
  <section class="detail-hero">
    <div class="detail-menu">
      <h1>Youngmind Campaign</h1>
    </div>
<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
  </section>

<section class="detail-content">
  <div class="detail-card">
    <p>동물 관련 경험을 적는 공간입니다.</p>
    <ul>
      <li>병원 인턴 근무 경험</li>
      <li>애견 유치원 근무 경험</li>
      <li>학생회 활동 프로젝트</li>
    </ul>
  </div>
</section>

<!-- 플로팅 버튼 -->
<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn" class="floating-btn">문의사항 남기기</button>
</div>

<script>
// 문의사항 버튼 클릭 → 구글폼 새 창
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
});
</script>

</body>
</html>






<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>National Park ESG Project | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>
<style>
/* 전체 폰트 및 기본 스타일 */
body {
  font-family: 'Noto Sans KR', sans-serif;
  margin:0;
  background:#f5f5f5;
}

/* Hero + content 통합 배경 */
.hero-wrapper {
  background-image: url('../images/dog_bottom2.jpg'); /* ../images 기준 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; /* Hero 영역 최소 높이 확보 */
}

/* Hero 영역 */
.detail-hero {
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
  width: 100%;
}

.detail-menu h1 {
  color: white;
  font-size: 60px;
  margin: 0;
  text-align: center;
  text-shadow: 2px 2px 4px #fff; /* 약간 입체감 */
  position: relative;
}

.detail-menu::after {
  content:"";
  position:absolute;
  left:50%;
  width:80%;
  height:3px;
  background:#fff;
  opacity:0.8;
  border-radius:2px;
  transform:translateX(-50%);
}


/* 카드 영역 */
.detail-content {
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  width: 100%;
}

.detail-card {
  background: white 60%;
  border-radius:25px;
  padding:30px;
  max-width:900px;
  width:90%;
  box-shadow:0 10px 30px rgba(0,0,0,0.25);
  display:flex;
  flex-direction:column;
  align-items:center;
}

/* 프로필 사진 */
.detail-card img {
  width:150px;
  height:150px;
  border-radius:50%;
  object-fit:cover;
  margin-bottom:20px;
  border:3px solid #556b2f;
}

/* 이름 */
.detail-card h2 {
  margin:0 0 15px 0;
  color:#1b4d3e;
  text-shadow: 1px 1px 2px #fff;
}

/* 섹션 제목 */
.section-title {
  font-weight:bold;
  margin-top:20px;
  margin-bottom:10px;
  font-size:20px;
  color:#1b4d3e;
  align-self:flex-start;
}

/* 정보 리스트 */
.detail-card ul {
  list-style:none;
  padding:0;
  width:100%;
  font-size:18px;
  margin:0;
}

.detail-card ul li {
  padding:10px 15px;
  border-bottom:1px solid rgba(0,0,0,0.1);
}

.detail-card ul li:last-child {
  border-bottom:none;
}

/* 플로팅 버튼 공통 */
.floating-btn {
  position: fixed;
  right:40px;
  padding:18px 28px;
  border-radius:30px;
  font-size:18px;
  font-weight:bold;
  cursor:pointer;
  box-shadow:0 10px 25px rgba(0,0,0,0.25);
  text-align:center;
  transition:0.3s;
}

/* 메인 버튼 */
/* 플로팅 메인 버튼 */
.btn-main-floating {
  position: fixed;        /* 화면에 고정 */
  bottom: 40px;           /* 아래쪽 여백 */
  right: 40px;            /* 오른쪽 여백 */
  z-index: 1000;          /* 다른 요소보다 위 */
  padding: 15px 25px;     
  background: #556b2f;    /* 올리브 색 */
  color: #fff;            
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;  
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: 0.3s;
}

.btn-main-floating:hover {
  background: rgba(85,107,47,0.9);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}
.btn-main {
  bottom:40px;
  background:#556b2f;
  color:#fff;
  text-decoration:none;
}
.btn-main:hover { background: rgba(85,107,47,0.9); }

/* 문의사항 버튼 */
#contactBtnContainer {
  position: fixed;  /* 화면에 고정 */
  right: 40px;
  bottom: 180px;    /* 메인 버튼 위 */
  z-index: 1010;
}

#contactBtn {
  background:#fffacd;
  color:#556b2f;
  border:none;
  border-radius: 25px;
  padding: 18px 28px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow:0 10px 25px rgba(0,0,0,0.25);
  transition: 0.3s;
}

#contactBtn {
  background:#fffacd; /* 노랑 */
  color:#556b2f;      /* 올리브그린 */
  border:none;
}
#contactBtn:hover { background:#f5f5b0; }

</style>
</head>
<body>
  <div class="hero-wrapper">
  <section class="detail-hero">
    <div class="detail-menu">
      <h1>National Park ESG Project</h1>
    </div>
  </section>
<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
  <section class="detail-content">
    <div class="detail-card">
    <p>참여했던 프로젝트 내용을 소개합니다.</p>
    <ul>
      <li>국립공원 ESG 지원 활동 프로젝트</li>
      <li>학생회 반려동물 행사 프로젝트</li>
      <li>POSCO M-TECH 협업 프로젝트 영상 제작</li>
    </ul>
  </div>
</section>
<!-- 플로팅 버튼 -->
<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn" class="floating-btn">문의사항 남기기</button>
</div>

<script>
// 문의사항 버튼 클릭 → 구글폼 새 창
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
});
</script>


</body>
</html>




<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>
Baekyang Tutoring Program| JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>

<style>
/* 전체 폰트 및 기본 스타일 */
body {
  font-family: 'Noto Sans KR', sans-serif;
  margin:0;
  background:#f5f5f5;
}

/* Hero + content 통합 배경 */
.hero-wrapper {
  background-image: url('../images/dog_bottom2.jpg'); /* ../images 기준 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; /* Hero 영역 최소 높이 확보 */
}

/* Hero 영역 */
.detail-hero {
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
  width: 100%;
}

.detail-menu h1 {
  color: white;
  font-size: 60px;
  margin: 0;
  text-align: center;
  text-shadow: 2px 2px 4px #fff; /* 약간 입체감 */
  position: relative;
}

.detail-menu::after {
  content:"";
  position:absolute;
  left:50%;
  width:80%;
  height:3px;
  background:#fff;
  opacity:0.8;
  border-radius:2px;
  transform:translateX(-50%);
}


/* 카드 영역 */
.detail-content {
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  width: 100%;
}

.detail-card {
  background: white 60%;
  border-radius:25px;
  padding:30px;
  max-width:900px;
  width:90%;
  box-shadow:0 10px 30px rgba(0,0,0,0.25);
  display:flex;
  flex-direction:column;
  align-items:center;
}

/* 프로필 사진 */
.detail-card img {
  width:150px;
  height:150px;
  border-radius:50%;
  object-fit:cover;
  margin-bottom:20px;
  border:3px solid #556b2f;
}

/* 이름 */
.detail-card h2 {
  margin:0 0 15px 0;
  color:#1b4d3e;
  text-shadow: 1px 1px 2px #fff;
}

/* 섹션 제목 */
.section-title {
  font-weight:bold;
  margin-top:20px;
  margin-bottom:10px;
  font-size:20px;
  color:#1b4d3e;
  align-self:flex-start;
}

/* 정보 리스트 */
.detail-card ul {
  list-style:none;
  padding:0;
  width:100%;
  font-size:18px;
  margin:0;
}

.detail-card ul li {
  padding:10px 15px;
  border-bottom:1px solid rgba(0,0,0,0.1);
}

.detail-card ul li:last-child {
  border-bottom:none;
}

/* 플로팅 버튼 공통 */
.floating-btn {
  position: fixed;
  right:40px;
  padding:18px 28px;
  border-radius:30px;
  font-size:18px;
  font-weight:bold;
  cursor:pointer;
  box-shadow:0 10px 25px rgba(0,0,0,0.25);
  text-align:center;
  transition:0.3s;
}

/* 메인 버튼 */
/* 플로팅 메인 버튼 */
.btn-main-floating {
  position: fixed;        /* 화면에 고정 */
  bottom: 40px;           /* 아래쪽 여백 */
  right: 40px;            /* 오른쪽 여백 */
  z-index: 1000;          /* 다른 요소보다 위 */
  padding: 15px 25px;     
  background: #556b2f;    /* 올리브 색 */
  color: #fff;            
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;  
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: 0.3s;
}

.btn-main-floating:hover {
  background: rgba(85,107,47,0.9);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}
.btn-main {
  bottom:40px;
  background:#556b2f;
  color:#fff;
  text-decoration:none;
}
.btn-main:hover { background: rgba(85,107,47,0.9); }

/* 문의사항 버튼 */
#contactBtnContainer {
  position: fixed;  /* 화면에 고정 */
  right: 40px;
  bottom: 180px;    /* 메인 버튼 위 */
  z-index: 1010;
}

#contactBtn {
  background:#fffacd;
  color:#556b2f;
  border:none;
  border-radius: 25px;
  padding: 18px 28px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow:0 10px 25px rgba(0,0,0,0.25);
  transition: 0.3s;
}

#contactBtn {
  background:#fffacd; /* 노랑 */
  color:#556b2f;      /* 올리브그린 */
  border:none;
}
#contactBtn:hover { background:#f5f5b0; }

</style>
</head>
<body>
  <div class="hero-wrapper">
  <section class="detail-hero">
    <div class="detail-menu">
      <h1>Baekyang Tutoring Program</h1>
    </div>
  </section>
<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>

<section class="detail-content">
  <div class="detail-card">
    <p>참여했던 다양한 활동과 봉사 경험을 적는 공간입니다.</p>
    <ul>
      <li>학생회 활동</li>
      <li>National Park ESG 지원</li>
      <li>포스코 M-TECH 프로젝트 참여</li>
    </ul>
  </div>
</section>
<!-- 플로팅 버튼 -->
<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn" class="floating-btn">문의사항 남기기</button>
</div>

<script>
// 문의사항 버튼 클릭 → 구글폼 새 창
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
});
</script>

</body>
</html>






<script src="script.js"></script>
</body>
</html>
