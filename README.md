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
  <div class="hero-gradient-top"></div>
  <div class="hero-text">
    <h1>Growing with Animals</h1>
    <h2>ChoiJiHye | Pet Industry Portfolio</h2>
  </div>
  <div class="hero-gradient-bottom"></div>
</section>

<!-- About -->
<section class="about">
  <div class="about-container">
    <div class="section-overlay top"></div>
    <div class="section-overlay bottom"></div>
    <div class="about-pic" style="background-image: url('details/images/dog_with_me.jpg');"></div>
    <div class="about-info">
      <h2>ChoiJiHye</h2>
      <p>제가 키우는 9살 말티즈 강이와 함께 지내며<br>반려동물 산업에서 경험을 쌓고 꾸준히 배우며 성장하고 있습니다.</p>
      <ul>
        <li>반려동물과 함께 배우고 성장하는 것을 즐깁니다.</li>
        <li>병원과 현장에서 다양한 경험을 쌓으며 동물과 사람 모두에게 도움을 주는 일을 추구합니다.</li>
        <li>꾸준히 배우고 도전하며, 반려동물 산업에서 전문성을 키워가고 있습니다.</li>
      </ul>
    </div>
  </div>
</section>

<!-- Bottom -->
<section class="bottom" id="bottom">
  <div class="bottom-gradient" style="background-image: url('details/images/dog_bottom2.jpg');"></div>
  <div class="bottom-content">
    <h2 class="bottom-title">Explore More</h2>
    <div class="menu-bar">
      <a href="details/experience.html">Experience</a>
      <a href="details/projects.html">Projects</a>
      <a href="details/activities.html">Activities</a>
      <a href="details/contact.html">Contact</a>
    </div>
  </div>
</section>

<script>
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "#bottom") {
    const bottom = document.getElementById("bottom");
    if (bottom) {
      setTimeout(() => { bottom.scrollIntoView({ behavior: "smooth" }); }, 50);
    }
  }
  const bottomLinks = document.querySelectorAll('a[href="#bottom"]');
  bottomLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const bottom = document.getElementById("bottom");
      if (bottom) {
        bottom.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, null, "#bottom");
      }
    });
  });
});
</script>

</body>
</html>
/* 전체 폰트 및 기본 스타일 */
body { font-family: 'Noto Sans KR', sans-serif; margin:0; background:#f5f5f5; }

/* Hero */
.hero { position:relative; height:100vh; display:flex; justify-content:center; align-items:center; text-align:center; color:#fff; }
.hero-gradient-top { position:absolute; top:0; left:0; width:100%; height:50%; background:linear-gradient(to bottom right, rgba(85,107,47,0.6), transparent); z-index:0; }
.hero-gradient-bottom { position:absolute; bottom:0; left:0; width:100%; height:50%; background:linear-gradient(to top right, rgba(85,107,47,0.6), transparent); z-index:0; }
.hero-text { position:relative; z-index:1; }
.hero-text h1 { font-size:60px; margin:0; text-shadow: 2px 2px 4px #000; }
.hero-text h2 { font-size:28px; margin:10px 0 0 0; }

/* About */
.about { padding:50px 20px; display:flex; justify-content:center; }
.about-container { max-width:1200px; display:flex; flex-wrap:wrap; gap:30px; }
.about-pic { width:300px; height:300px; border-radius:50%; background-size:cover; background-position:center; border:5px solid #556b2f; }
.about-info { flex:1; min-width:300px; }
.about-info h2 { color:#1b4d3e; }
.about-info ul { list-style:none; padding:0; }
.about-info ul li { margin-bottom:10px; }

/* Bottom */
.bottom { position:relative; padding:50px 20px; text-align:center; color:#fff; }
.bottom-gradient { position:absolute; top:0; left:0; width:100%; height:100%; background-size:cover; background-position:center; z-index:-1; opacity:0.5; }
.bottom-content a { display:inline-block; margin:10px 15px; padding:10px 20px; background:#556b2f; color:#fff; text-decoration:none; border-radius:10px; transition:0.3s; }
.bottom-content a:hover { background:rgba(85,107,47,0.8); }

/* 섹션 흐림 */
.section-overlay.top { position:absolute; top:0; left:0; width:100%; height:30px; background:linear-gradient(to bottom, rgba(245,245,245,1), transparent); }
.section-overlay.bottom { position:absolute; bottom:0; left:0; width:100%; height:30px; background:linear-gradient(to top, rgba(245,245,245,1), transparent); }

/* 세부페이지 공통 */
.hero-wrapper { min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:flex-start; background-size:cover; background-position:center; }
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; width:100%; padding-bottom:30px; }
.detail-menu h1 { color:white; font-size:60px; margin:0; text-shadow:2px 2px 4px #000; position:relative; }
.detail-menu::after { content:""; position:absolute; left:50%; bottom:-10px; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%); }
.detail-content { display:flex; justify-content:center; padding:50px 20px; width:100%; }
.detail-card { background: rgba(255,255,255,0.9); border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center; }
.detail-card ul { list-style:none; padding:0; width:100%; font-size:18px; margin:0; }
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1); }
.detail-card ul li:last-child { border-bottom:none; }

/* 플로팅 버튼 */
.floating-btn { position:fixed; right:40px; padding:18px 28px; border-radius:30px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25); text-align:center; transition:0.3s; }
.btn-main-floating { position:fixed; bottom:40px; right:40px; z-index:1000; padding:15px 25px; background:#556b2f; color:#fff; font-weight:bold; border-radius:30px; text-decoration:none; box-shadow:0 4px 10px rgba(0,0,0,0.2); transition:0.3s; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9); box-shadow:0 8px 20px rgba(0,0,0,0.3); }
#contactBtnContainer { position: fixed; right:40px; bottom:180px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
#contactBtn:hover { background:#f5f5b0; }
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Experience - JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>

<div class="hero-wrapper" style="background-image: url('./images/dog_bottom2.jpg');">
  <div class="detail-hero">
    <div class="detail-menu">
      <h1>Experience</h1>
    </div>
  </div>
</div>

<div class="detail-content">
  <div class="detail-card">
    <ul>
      <li>반려동물학과 졸업</li>
      <li>동물병원 근로 및 현장실습 경험</li>
      <li>애견유치원 근로 경험</li>
      <li>보건사협회 학생위원단 활동</li>
      <li>법률 관련 활동: 동물의료사고 법률원고 작성</li>
    </ul>
  </div>
</div>

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer"><button id="contactBtn">문의사항 남기기</button></div>

<script>
document.getElementById("contactBtn").addEventListener("click", () => {
  alert("문의사항 창 열기 기능 구현 예정");
});
</script>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects - JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>

<div class="hero-wrapper" style="background-image: url('./images/dog_with_me.jpg');">
  <div class="detail-hero">
    <div class="detail-menu">
      <h1>Projects</h1>
    </div>
  </div>
</div>

<div class="detail-content">
  <div class="detail-card">
    <ul>
      <li>포트폴리오 영상 프로젝트: 'Dream 속에서 꿈을 Greene 다!'</li>
      <li>POSCO M-TECH와 국립공원 ESG 활동 협업</li>
      <li>장애 유튜버 지원 프로젝트 포함</li>
      <li>친환경 제품/서비스 소개 영상 제작</li>
      <li>장기적 성과 시각화 그래픽 제작</li>
    </ul>
  </div>
</div>

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer"><button id="contactBtn">문의사항 남기기</button></div>

<script>
document.getElementById("contactBtn").addEventListener("click", () => {
  alert("문의사항 창 열기 기능 구현 예정");
});
</script>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Activities - JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>

<div class="hero-wrapper" style="background-image: url('./images/profilejpg.jpg');">
  <div class="detail-hero">
    <div class="detail-menu">
      <h1>Activities</h1>
    </div>
  </div>
</div>

<div class="detail-content">
  <div class="detail-card">
    <ul>
      <li>학생회 참여 및 학술 동아리 부회장 활동</li>
      <li>국립공원 ESG 지원 활동 참여</li>
      <li>학교 및 지역 사회 봉사 활동 경험</li>
      <li>현장 프로젝트 기획 및 참여 경험</li>
      <li>반려동물 관련 커뮤니티 활동</li>
    </ul>
  </div>
</div>

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer"><button id="contactBtn">문의사항 남기기</button></div>

<script>
document.getElementById("contactBtn").addEventListener("click", () => {
  alert("문의사항 창 열기 기능 구현 예정");
});
</script>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact - JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>

<div class="hero-wrapper" style="background-image: url('./images/dog_bottom2.jpg');">
  <div class="detail-hero">
    <div class="detail-menu">
      <h1>Contact</h1>
    </div>
  </div>
</div>

<div class="detail-content">
  <div class="detail-card">
    <ul>
      <li>이메일: jihye@example.com</li>
      <li>전화: 010-1234-5678</li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/jihye" target="_blank">linkedin.com/in/jihye</a></li>
      <li>Github: <a href="https://github.com/jihye" target="_blank">github.com/jihye</a></li>
      <li>문의사항은 문의 버튼을 통해 남겨주세요</li>
    </ul>
  </div>
</div>

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer"><button id="contactBtn">문의사항 남기기</button></div>

<script>
document.getElementById("contactBtn").addEventListener("click", () => {
  alert("문의사항 창 열기 기능 구현 예정");
});
</script>

</body>
</html>

    ![Image](https://github.com/user-attachments/assets/a53de448-ca91-4b06-b84a-729cb361f0ee)

![Image](https://github.com/user-attachments/assets/7efeeb7f-c66f-43ec-8d78-c99997125f43)

![Image](https://github.com/user-attachments/assets/a9a0c470-9894-4f15-9799-c9107fac31a7)

![Image](https://github.com/user-attachments/assets/49b15bf6-e9cd-4628-86bf-c4e69650e08f)

![Image](https://github.com/user-attachments/assets/580ca612-e766-4ec5-b2b1-2c9289211126
  </section>

  <a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
  <button class="floating-btn" onclick="window.open('https://forms.gle/YOUR_FORM_ID', '_blank')">문의사항 남기기</button>
</
