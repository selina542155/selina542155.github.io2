![Image](https://github.com/user-attachments/assets/a53de448-ca91-4b06-b84a-729cb361f0ee)

![Image](https://github.com/user-attachments/assets/7efeeb7f-c66f-43ec-8d78-c99997125f43)

![Image](https://github.com/user-attachments/assets/a9a0c470-9894-4f15-9799-c9107fac31a7)

![Image](https://github.com/user-attachments/assets/49b15bf6-e9cd-4628-86bf-c4e69650e08f)

![Image](https://github.com/user-attachments/assets/580ca612-e766-4ec5-b2b1-2c9289211126
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JiHye Portfolio</title>
<link rel="stylesheet" href="style.css">
<style>
body { margin:0; font-family: 'Noto Sans KR', sans-serif; }
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('details/images/dog_bottom2.jpg');
  background-size: cover;
  background-position: center;
}
.hero-gradient-top { position:absolute; top:0; left:0; right:0; height:50%; background: linear-gradient(135deg, rgba(255,255,255,0.6), transparent);}
.hero-gradient-bottom { position:absolute; bottom:0; left:0; right:0; height:50%; background: linear-gradient(-135deg, rgba(255,255,255,0.6), transparent);}
.hero-text { position: relative; text-align: center; color: #1b4d3e; }
.about { position: relative; padding:80px 20px; background:#f5f5f5; display:flex; justify-content:center; align-items:center; }
.about-container { max-width:900px; width:100%; display:flex; gap:40px; align-items:center; flex-wrap: wrap;}
.about-info { flex:1; }
.about-pic { width:250px; height:250px; border-radius:25px; background-image:url('details/images/dog_with_me.jpg'); background-size:cover; background-position:center; flex-shrink:0; }
.bottom { position: relative; padding: 60px 20px; text-align: center; background-image: url('details/images/dog_bottom2.jpg'); background-size: cover; background-position: center; color: white; }
.menu-bar a { display:inline-block; margin:0 15px; padding:10px 20px; background: rgba(85,107,47,0.8); color:#fff; text-decoration:none; border-radius:20px; transition:0.3s; }
.menu-bar a:hover { background: rgba(85,107,47,1);}
.floating-btn { position: fixed; right:40px; bottom:40px; padding:18px 28px; border-radius:30px; font-size:18px; font-weight:bold; cursor:pointer; background:#fffacd; color:#556b2f; border:none; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s;}
.floating-btn:hover { background:#f5f5b0;}
</style>
</head>
<body>

<section class="hero">
  <div class="hero-gradient-top"></div>
  <div class="hero-text">
    <h1>Growing with Animals</h1>
    <h2>ChoiJiHye | Pet Industry Portfolio</h2>
  </div>
  <div class="hero-gradient-bottom"></div>
</section>

<section class="about">
  <div class="about-container">
    <div class="about-pic"></div>
    <div class="about-info">
      <h2>ChoiJiHye</h2>
      <p>제가 키우는 9살 말티즈 강이와 함께 지내며 <br>반려동물 산업에서 경험을 쌓고 꾸준히 배우며 성장하고 있습니다.</p>
      <ul>
        <li>반려동물과 함께 배우고 성장하는 것을 즐깁니다.</li>
        <li>병원과 현장에서 다양한 경험을 쌓으며 동물과 사람 모두에게 도움을 주는 일을 추구합니다.</li>
        <li>꾸준히 배우고 도전하며, 반려동물 산업에서 전문성을 키워가고 있습니다.</li>
      </ul>
    </div>
  </div>
</section>

<section class="bottom" id="bottom">
  <h2>Explore More</h2>
  <div class="menu-bar">
    <a href="details/experience.html">Experience</a>
    <a href="details/projects.html">Projects</a>
    <a href="details/activities.html">Activities</a>
    <a href="details/contact.html">Contact</a>
  </div>
</section>

<button class="floating-btn" onclick="window.open('https://forms.gle/YOUR_FORM_ID', '_blank')">문의사항 남기기</button>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Experience | JiHye Portfolio</title>
<style>
body { margin:0; font-family: 'Noto Sans KR', sans-serif; background:#f5f5f5; }
.hero-wrapper { min-height:100vh; display:flex; flex-direction:column; align-items:center; background-image:url('./images/dog_bottom2.jpg'); background-size:cover; background-position:center;}
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; padding-bottom:30px; width:100%; }
.detail-menu h1 { color:white; font-size:60px; text-align:center; text-shadow:2px 2px 4px #fff; position:relative; margin:0;}
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%);}
.detail-content { display:flex; justify-content:center; padding:50px 20px; width:100%; }
.detail-card { background: rgba(255,255,255,0.9); border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center;}
.btn-main-floating { position: fixed; bottom:40px; right:40px; z-index:1000; padding:15px 25px; background:#556b2f; color:#fff; font-weight:bold; border-radius:30px; text-decoration:none; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9);}
.floating-btn { position: fixed; right:40px; bottom:100px; z-index:1010; padding:18px 28px; border-radius:25px; font-weight:bold; font-size:18px; background:#fffacd; color:#556b2f; border:none;}
.floating-btn:hover { background:#f5f5b0;}
</style>
</head>
<body>

<div class="hero-wrapper">
  <section class="detail-hero">
    <div class="detail-menu"><h1>Experience</h1></div>
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

  <a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
  <button class="floating-btn" onclick="window.open('https://forms.gle/YOUR_FORM_ID', '_blank')">문의사항 남기기</button>
</div>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects | JiHye Portfolio</title>
<style>
body { margin:0; font-family: 'Noto Sans KR', sans-serif; background:#f5f5f5; }
.hero-wrapper { min-height:100vh; display:flex; flex-direction:column; align-items:center; background-image:url('./images/dog_bottom2.jpg'); background-size:cover; background-position:center;}
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; padding-bottom:30px; width:100%; }
.detail-menu h1 { color:white; font-size:60px; text-align:center; text-shadow:2px 2px 4px #fff; position:relative; margin:0;}
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%);}
.detail-content { display:flex; justify-content:center; padding:50px 20px; width:100%; }
.detail-card { background: rgba(255,255,255,0.9); border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center;}
.btn-main-floating { position: fixed; bottom:40px; right:40px; z-index:1000; padding:15px 25px; background:#556b2f; color:#fff; font-weight:bold; border-radius:30px; text-decoration:none; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9);}
.floating-btn { position: fixed; right:40px; bottom:100px; z-index:1010; padding:18px 28px; border-radius:25px; font-weight:bold; font-size:18px; background:#fffacd; color:#556b2f; border:none;}
.floating-btn:hover { background:#f5f5b0;}
</style>
</head>
<body>

<div class="hero-wrapper">
  <section class="detail-hero">
    <div class="detail-menu"><h1>Projects</h1></div>
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

  <a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
  <button class="floating-btn" onclick="window.open('https://forms.gle/YOUR_FORM_ID', '_blank')">문의사항 남기기</button>
</div>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Activities | JiHye Portfolio</title>
<style>
body { margin:0; font-family: 'Noto Sans KR', sans-serif; background:#f5f5f5; }
.hero-wrapper { min-height:100vh; display:flex; flex-direction:column; align-items:center; background-image:url('./images/dog_bottom2.jpg'); background-size:cover; background-position:center;}
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; padding-bottom:30px; width:100%; }
.detail-menu h1 { color:white; font-size:60px; text-align:center; text-shadow:2px 2px 4px #fff; position:relative; margin:0;}
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%);}
.detail-content { display:flex; justify-content:center; padding:50px 20px; width:100%; }
.detail-card { background: rgba(255,255,255,0.9); border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center;}
.btn-main-floating { position: fixed; bottom:40px; right:40px; z-index:1000; padding:15px 25px; background:#556b2f; color:#fff; font-weight:bold; border-radius:30px; text-decoration:none; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9);}
.floating-btn { position: fixed; right:40px; bottom:100px; z-index:1010; padding:18px 28px; border-radius:25px; font-weight:bold; font-size:18px; background:#fffacd; color:#556b2f; border:none;}
.floating-btn:hover { background:#f5f5b0;}
</style>
</head>
<body>

<div class="hero-wrapper">
  <section class="detail-hero">
    <div class="detail-menu"><h1>Activities</h1></div>
  </section>

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

  <a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
  <button class="floating-btn" onclick="window.open('https://forms.gle/YOUR_FORM_ID', '_blank')">문의사항 남기기</button>
</div>

</body>
</html><!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact | JiHye Portfolio</title>
<style>
body { margin:0; font-family: 'Noto Sans KR', sans-serif; background:#f5f5f5; }
.hero-wrapper { min-height:100vh; display:flex; flex-direction:column; align-items:center; background-image:url('./images/dog_bottom2.jpg'); background-size:cover; background-position:center;}
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; padding-bottom:30px; width:100%; }
.detail-menu h1 { color:white; font-size:60px; text-align:center; text-shadow:2px 2px 4px #fff; position:relative; margin:0;}
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%);}
.detail-content { display:flex; justify-content:center; padding:50px 20px; width:100%; }
.detail-card { background: rgba(255,255,255,0.9); border-radius:25px; padding:30px; max-width:500px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center;}
.detail-card h2 { color:#1b4d3e; text-shadow:1px 1px 2px #fff; margin:0 0 15px 0;}
.detail-card .section-title { font-weight:bold; font-size:20px; color:#1b4d3e; margin-top:20px; margin-bottom:10px; align-self:flex-start;}
.detail-card ul { list-style:none; padding:0; width:100%; font-size:18px; margin:0;}
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1);}
.detail-card ul li:last-child { border-bottom:none;}
.btn-main-floating { position: fixed; bottom:40px; right:40px; z-index:1000; padding:15px 25px; background:#556b2f; color:#fff; font-weight:bold; border-radius:30px; text-decoration:none; }
.btn-main-floating:hover { background: rgba(85,107,47,0.9);}
.floating-btn { position: fixed; right:40px; bottom:100px; z-index:1010; padding:18px 28px; border-radius:25px; font-weight:bold; font-size:18px; background:#fffacd; color:#556b2f; border:none;}
.floating-btn:hover { background:#f5f5b0;}
</style>
</head>
<body>

<div class="hero-wrapper">
  <section class="detail-hero">
    <div class="detail-menu"><h1>Contact</h1></div>
  </section>

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
  <button class="floating-btn" onclick="window.open('https://forms.gle/YOUR_FORM_ID', '_blank')">문의사항 남기기</button>
</
