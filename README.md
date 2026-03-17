<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JiHye Portfolio</title>
<style>
body { font-family:'Noto Sans KR', sans-serif; margin:0; background:#f5f5f5; }
section { position: relative; text-align:center; }
.hero { height:100vh; display:flex; justify-content:center; align-items:center; background:#556b2f; color:#fff; flex-direction:column; }
.hero h1 { font-size:3em; margin:0; }
.hero h2 { font-size:1.5em; margin:10px 0 0 0; }
.about { padding:50px 20px; display:flex; flex-direction:column; align-items:center; }
.about-info { max-width:600px; margin-bottom:30px; }
.about-pic { width:250px; height:250px; border-radius:50%; background-size:cover; background-position:center; margin-bottom:30px; border:3px solid #fff; }
.bottom { padding:50px 20px; background:#e0e0e0; }
.menu-bar a { margin:0 15px; color:#1b4d3e; text-decoration:none; font-weight:bold; }
.menu-bar a:hover { text-decoration:underline; }

/* 카드 스타일 */
.detail-card { background:rgba(255,255,255,0.9); border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); margin:30px auto; text-align:left; }
.detail-card h2 { color:#1b4d3e; margin-bottom:15px; }
.detail-card ul { list-style:none; padding:0; margin:0; font-size:18px; }
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1); }
.detail-card ul li:last-child { border-bottom:none; }

/* 플로팅 버튼 */
.floating-btn { position: fixed; right:40px; padding:18px 28px; border-radius:30px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25); text-align:center; transition:0.3s; }
.btn-main-floating { bottom:40px; background:#556b2f; color:#fff; border-radius:30px; text-decoration:none; box-shadow:0 4px 10px rgba(0,0,0,0.2); position:fixed; right:40px; z-index:1000; padding:15px 25px; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9); box-shadow:0 8px 20px rgba(0,0,0,0.3); }
#contactBtnContainer { position:fixed; right:40px; bottom:180px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
#contactBtn:hover { background:#f5f5b0; }
</style>
</head>
<body>

<!-- Hero -->
<section class="hero">
  <h1>Growing with Animals</h1>
  <h2>ChoiJiHye | Pet Industry Portfolio</h2>
</section>

<!-- About -->
<section class="about">
  <div class="about-pic" style="background-image:url('https://raw.githubusercontent.com/USERNAME/portfolio/main/images/dog_with_me.jpg');"></div>
  <div class="about-info">
    <h2>ChoiJiHye</h2>
    <p>제가 키우는 9살 말티즈 강이와 함께 지내며 반려동물 산업에서 경험을 쌓고 꾸준히 배우며 성장하고 있습니다.</p>
    <ul>
      <li>반려동물과 함께 배우고 성장하는 것을 즐깁니다.</li>
      <li>병원과 현장에서 다양한 경험을 쌓으며 동물과 사람 모두에게 도움을 주는 일을 추구합니다.</li>
      <li>꾸준히 배우고 도전하며, 반려동물 산업에서 전문성을 키워가고 있습니다.</li>
    </ul>
  </div>
</section>

<!-- Bottom -->
<section class="bottom" id="bottom">
  <h2>Explore More</h2>
  <div class="menu-bar">
    <a href="details/experience.html">Experience</a>
    <a href="details/projects.html">Projects</a>
    <a href="details/activities.html">Activities</a>
    <a href="details/contact.html">Contact</a>
  </div>
</section>

<!-- 플로팅 버튼 -->
<a href="#bottom" class="btn-main-floating">↓ Explore</a>
<div id="contactBtnContainer">
  <button id="contactBtn" class="floating-btn">문의사항 남기기</button>
</div>

<script>
// 문의사항 버튼 클릭 → 구글폼 새 창
document.getElementById("contactBtn").addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID","_blank");
});
</script>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Experience | JiHye Portfolio</title>
<style>
body { margin:0; font-family:'Noto Sans KR', sans-serif; background:#f5f5f5; }
.hero-wrapper { background-image: url('https://raw.githubusercontent.com/selina542155/portfolio/main/images/dog_bottom2.jpg'); background-size: cover; background-position: center; min-height: 35vh; display:flex; justify-content:center; align-items:flex-end; }
.detail-menu h1 { color:white; font-size:60px; margin:0; text-align:center; text-shadow:2px 2px 4px #000; position:relative; }
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%); }
.detail-content { display:flex; justify-content:center; padding:50px 20px; }
.detail-card { background:white; border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center; }
.detail-card ul { list-style:none; padding:0; width:100%; font-size:18px; margin:0; }
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1); }
.detail-card ul li:last-child { border-bottom:none; }
.btn-main-floating { position: fixed; bottom: 40px; right: 40px; padding:18px 28px; border-radius:30px; font-weight:bold; background:#556b2f; color:#fff; text-decoration:none; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }
#contactBtnContainer { position:fixed; right:40px; bottom:100px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
#contactBtn:hover { background:#f5f5b0; }
</style>
</head>
<body>
<div class="hero-wrapper">
  <div class="detail-menu"><h1>Experience</h1></div>
</div>

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

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn">문의사항 남기기</button>
</div>

<script>
document.getElementById("contactBtn").addEventListener("click", ()=>{ window.open("https://forms.gle/YOUR_FORM_ID","_blank"); });
</script>
</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects | JiHye Portfolio</title>
<style>
body { margin:0; font-family:'Noto Sans KR', sans-serif; background:#f5f5f5; }
.hero-wrapper { background-image: url('https://raw.githubusercontent.com/selina542155/portfolio/main/images/dog_bottom2.jpg'); background-size: cover; background-position: center; min-height: 35vh; display:flex; justify-content:center; align-items:flex-end; }
.detail-menu h1 { color:white; font-size:60px; margin:0; text-align:center; text-shadow:2px 2px 4px #000; position:relative; }
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%); }
.detail-content { display:flex; justify-content:center; padding:50px 20px; }
.detail-card { background:white; border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center; }
.detail-card ul { list-style:none; padding:0; width:100%; font-size:18px; margin:0; }
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1); }
.detail-card ul li:last-child { border-bottom:none; }
.btn-main-floating { position: fixed; bottom: 40px; right: 40px; padding:18px 28px; border-radius:30px; font-weight:bold; background:#556b2f; color:#fff; text-decoration:none; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }
#contactBtnContainer { position:fixed; right:40px; bottom:100px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
#contactBtn:hover { background:#f5f5b0; }
</style>
</head>
<body>
<div class="hero-wrapper">
  <div class="detail-menu"><h1>Projects</h1></div>
</div>

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

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn">문의사항 남기기</button>
</div>

<script>
document.getElementById("contactBtn").addEventListener("click", ()=>{ window.open("https://forms.gle/YOUR_FORM_ID","_blank"); });
</script>
</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Activities | JiHye Portfolio</title>
<style>
body { margin:0; font-family:'Noto Sans KR', sans-serif; background:#f5f5f5; }
.hero-wrapper { background-image: url('https://raw.githubusercontent.com/selina542155/portfolio/main/images/dog_bottom2.jpg'); background-size: cover; background-position: center; min-height: 35vh; display:flex; justify-content:center; align-items:flex-end; }
.detail-menu h1 { color:white; font-size:60px; margin:0; text-align:center; text-shadow:2px 2px 4px #000; position:relative; }
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%); }
.detail-content { display:flex; justify-content:center; padding:50px 20px; }
.detail-card { background:white; border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center; }
.detail-card ul { list-style:none; padding:0; width:100%; font-size:18px; margin:0; }
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1); }
.detail-card ul li:last-child { border-bottom:none; }
.btn-main-floating { position: fixed; bottom: 40px; right: 40px; padding:18px 28px; border-radius:30px; font-weight:bold; background:#556b2f; color:#fff; text-decoration:none; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }
#contactBtnContainer { position:fixed; right:40px; bottom:100px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
#contactBtn:hover { background:#f5f5b0; }
</style>
</head>
<body>
<div class="hero-wrapper">
  <div class="detail-menu"><h1>Activities</h1></div>
</div>

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

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn">문의사항 남기기</button>
</div>

<script>
document.getElementById("contactBtn").addEventListener("click", ()=>{ window.open("https://forms.gle/YOUR_FORM_ID","_blank"); });
</script>
</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact | JiHye Portfolio</title>
<style>
body { margin:0; font-family:'Noto Sans KR', sans-serif; background:#f5f5f5; }
.hero-wrapper { background-image: url('https://raw.githubusercontent.com/selina542155/portfolio/main/images/dog_bottom2.jpg'); background-size: cover; background-position: center; min-height: 35vh; display:flex; justify-content:center; align-items:flex-end; }
.detail-menu h1 { color:white; font-size:60px; margin:0; text-align:center; text-shadow:2px 2px 4px #000; position:relative; }
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%); }
.detail-content { display:flex; justify-content:center; padding:50px 20px; }
.detail-card { background:rgba(180,180,180,0.9); border-radius:25px; padding:30px; max-width:500px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center; }
.detail-card h2 { margin:0 0 15px 0; color:#1b4d3e; text-shadow: 1px 1px 2px #fff; }
.detail-card ul { list-style:none; padding:0; width:100%; font-size:18px; margin:0; }
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1); }
.detail-card ul li:last-child { border-bottom:none; }
.btn-main-floating { position: fixed; bottom: 40px; right: 40px; padding:18px 28px; border-radius:0px; font-weight:bold; background:#556b2f; color:#fff; text-decoration:none; box-shadow:0 4px 10px rgba(0,0,0,0.2); transition:0.3s; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }
#contactBtnContainer { position:fixed; right:40px; bottom:100px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
#contactBtn:hover { background:#f5f5b0; }
</style>
</head>
<body>
<div class="hero-wrapper">
  <div class="detail-menu"><h1>Contact</h1></div>
</div>

<section class="detail-content">
  <div class="detail-card">
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

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer">
  <button id="contactBtn">문의사항 남기기</button>
</div>

<script>
document.getElementById("contactBtn").addEventListener("click", ()=>{ window.open("https://forms.gle/YOUR_FORM_ID","_blank"); });
</script>
</body>
</html>

 ![Image](https://github.com/user-attachments/assets/a53de448-ca91-4b06-b84a-729cb361f0ee)

![Image](https://github.com/user-attachments/assets/7efeeb7f-c66f-43ec-8d78-c99997125f43)

![Image](https://github.com/user-attachments/assets/a9a0c470-9894-4f15-9799-c9107fac31a7)

![Image](https://github.com/user-attachments/assets/49b15bf6-e9cd-4628-86bf-c4e69650e08f)

![Image](https://github.com/user-attachments/assets/580ca612-e766-4ec5-b2b1-2c9289211126
 
