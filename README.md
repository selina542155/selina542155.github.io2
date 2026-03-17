<!-- index.html -->
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
    <div class="about-pic" style="background-image: url('images/dog_with_me.jpg');"></div>
    <div class="about-info">
      <h2>ChoiJiHye</h2>
      <p>제가 키우는 9살 말티즈 강이와 함께 지내며 <br>반려동물 산업에서 경험을 쌓고 꾸준히 배우며 성장하고 있습니다.</p>
      <ul>
        <li>반려동물과 함께 배우고 성장하는 것을 즐깁니다.</li>
        <li>병원과 현장에서 다양한 경험을 쌓으며 동물과 사람 모두에게 도움을 주는 일을 추구하고 있습니다.</li>
        <li>꾸준히 배우고 도전하며, <br>반려동물 산업에서 전문성을 키워가고 있습니다.</li>
      </ul>
    </div>
  </div>
</section>

<!-- Bottom -->
<section class="bottom" id="bottom">
  <div class="bottom-gradient"></div>
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
      setTimeout(() => {
        bottom.scrollIntoView({ behavior: "smooth" });
      }, 50);
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

<!-- details/experience.html -->
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Experience | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>

<div class="hero-wrapper" style="background-image: url('../images/dog_bottom2.jpg');">
  <section class="detail-hero">
    <div class="detail-menu">
      <h1>Experience</h1>
    </div>
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
</div>

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn" class="floating-btn">문의사항 남기기</button>
</div>
<script>
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
});
</script>
</body>
</html>

<!-- details/projects.html -->
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>
<div class="hero-wrapper" style="background-image: url('../images/dog_bottom2.jpg');">
  <section class="detail-hero">
    <div class="detail-menu">
      <h1>Projects</h1>
    </div>
  </section>
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
</div>
<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn" class="floating-btn">문의사항 남기기</button>
</div>
<script>
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
});
</script>
</body>
</html>

<!-- details/activities.html -->
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Activities | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>
<div class="hero-wrapper" style="background-image: url('../images/dog_bottom2.jpg');">
  <section class="detail-hero">
    <div class="detail-menu">
      <h1>Activities</h1>
    </div>
  </section>
  <section class="detail-content">
    <div class="detail-card">
      <p>참여했던 다양한 활동과 봉사 경험을 적는 공간입니다.</p>
      <ul>
        <li>학생회 활동</li>
        <li>National Park ESG 지원</li>
        <li>POSCO M-TECH 프로젝트 참여</li>
      </ul>
    </div>
  </section>
</div>
<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn" class="floating-btn">문의사항 남기기</button>
</div>
<script>
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
});
</script>
</body>
</html>

<!-- details/contact.html -->
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>
<div class="hero-wrapper" style="background-image: url('../images/dog_bottom2.jpg');">
  <section class="detail-hero">
    <div class="detail-menu">
      <h1>Contact</h1>
    </div>
  </section>
  <section class="detail-content">
    <div class="detail-card" style="background: rgba(180,180,180,0.9);">
      <div class="about-pic" style="background-image: url('../images/profilejpg.jpg'); width:150px; height:150px; border-radius:50%; border:3px solid #556b2f; margin-bottom:20px;"></div>
      <h2>최지혜</h2>
      <div class="section-title">연락처</div>
      <ul>
        <li>전화: 010-1234-5678</li>
        <li>이메일: example@email.com</li>
      </ul>
      <div class="section-title">학력</div>
      <ul>
        <li>신라대학교 반려동물학과 졸업</li>
      </ul>
    </div>
  </section>
</div>
<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn" class="floating-btn">문의사항 남기기</button>
</div>
<script>
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
});
</script>
</body>
</html>

<!-- style.css -->
body, html { margin:0; padding:0; font-family:'Noto Sans KR', sans-serif; scroll-behavior: smooth; }
.hero { height:100vh; position:relative; background:#f0f0f0; display:flex; justify-content:center; align-items:center; text-align:center; }
.hero-gradient-top, .hero-gradient-bottom { position:absolute; width:100%; height:50%; left:0; }
.hero-gradient-top { top:0; background:linear-gradient(to bottom, rgba(0,0,0,0.5), transparent); }
.hero-gradient-bottom { bottom:0; background:linear-gradient(to top, rgba(0,0,0,0.5), transparent); }
.hero-text h1 { font-size:3rem; color:#fff; }
.hero-text h2 { font-size:1.5rem; color:#ddd; margin-top:10px; }

.about { position:relative; padding:100px 20px; background:#f8f8f8; display:flex; justify-content:center; }
.about-container { display:flex; max-width:1200px; gap:50px; flex-wrap:wrap; }
.about-pic { width:300px; height:300px; background-size:cover; background-position:center; border-radius:15px; flex-shrink:0; }
.about-info { flex:1; }
.about-info h2 { font-size:2rem; margin-bottom:20px; }
.about-info p { font-size:1.2rem; margin-bottom:20px; }
.about-info ul { list-style:disc; padding-left:20px; }

.bottom { position:relative; padding:100px 20px; background:#556b2f; color:#fff; text-align:center; }
.bottom-gradient { position:absolute; width:100%; height:100%; left:0; top:0; background:linear-gradient(to top, #556b2f, transparent); opacity:0.8; }
.bottom-title { font-size:2.5rem; margin-bottom:30px; }
.menu-bar a { margin:0 15px; color:#fff; text-decoration:none; font-weight:bold; }

.hero-wrapper { width:100%; height:100vh; background-size:cover; background-position:center; display:flex; flex-direction:column; justify-content:center; align-items:center; }
.detail-hero { background:rgba(0,0,0,0.4); width:100%; text-align:center; padding:50px 0; }
.detail-hero h1 { color:#fff; font-size:3rem; }
.detail-content { padding:50px 20px; max-width:1000px; margin:0 auto; }
.detail-card { background:rgba(255,255,255,0.9); padding:30px; border-radius:10px; margin-bottom:30px; }

.btn-main-floating { position:fixed; bottom:20px; left:20px; padding:10px 20px; background:#556b2f; color:#fff; border:none; border-radius:5px; cursor:pointer; text-decoration:none; }
.floating-btn { position:fixed; bottom:20px; right:20px; padding:10px 20px; background:#8fbc8f; color:#fff; border:none; border-radius:50px; cursor:pointer; }

 ![Image](https://github.com/user-attachments/assets/a53de448-ca91-4b06-b84a-729cb361f0ee)

![Image](https://github.com/user-attachments/assets/7efeeb7f-c66f-43ec-8d78-c99997125f43)

![Image](https://github.com/user-attachments/assets/a9a0c470-9894-4f15-9799-c9107fac31a7)

![Image](https://github.com/user-attachments/assets/49b15bf6-e9cd-4628-86bf-c4e69650e08f)

![Image](https://github.com/user-attachments/assets/580ca612-e766-4ec5-b2b1-2c9289211126
 
