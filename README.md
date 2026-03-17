<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JiHye Portfolio</title>
<link rel="stylesheet" href="style.css">
<style>
.hero-gradient-top {
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background: linear-gradient(to bottom left, rgba(85,107,47,0.5), transparent);
  z-index:0;
}
.hero-gradient-bottom {
  position:absolute;
  width:100%;
  height:100%;
  bottom:0;
  left:0;
  background: linear-gradient(to top right, rgba(85,107,47,0.5), transparent);
  z-index:0;
}
.hero { 
  position:relative; 
  height:100vh; 
  background-image: url('https://selina542155.github.io/selina542155.github.io2/images/dog_bottom2.jpg'); 
  background-size: cover; 
  background-position: center; 
  display:flex; 
  justify-content:center; 
  align-items:center; 
  flex-direction:column;
  color:white;
}
.hero-text h1 { font-size:60px; margin:0; text-shadow:2px2px4px #000; }
.hero-text h2 { font-size:24px; margin-top:10px; text-shadow:1px1px2px #000; }

.about { padding:50px 20px; display:flex; justify-content:center; align-items:flex-start; flex-wrap:wrap; background:#f5f5f5;}
.about-pic { width:300px; height:300px; object-fit:cover; border-radius:20px; border:3px solid #556b2f; margin-right:30px; }
.about-info { max-width:600px; }
.about-info h2 { color:#1b4d3e; }
.about-info p { font-size:18px; line-height:1.5; }

.bottom { position:relative; padding:50px 20px; background:#e8f0e5; text-align:center; }
.bottom-title { font-size:28px; color:#1b4d3e; margin-bottom:20px; }
.menu-bar a { display:inline-block; margin:0 10px; padding:10px 20px; background:#556b2f; color:white; border-radius:20px; text-decoration:none; transition:0.3s; }
.menu-bar a:hover { background: rgba(85,107,47,0.9); }

.btn-main-floating { position:fixed; bottom:40px; right:40px; background:#556b2f; color:#fff; padding:15px 25px; border-radius:30px; text-decoration:none; font-weight:bold; box-shadow:0 4px 10px rgba(0,0,0,0.2); z-index:1000;}
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }

#contactBtnContainer { position:fixed; right:40px; bottom:120px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25);}
#contactBtn:hover { background:#f5f5b0; }
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
  <img src="https://selina542155.github.io/selina542155.github.io2/images/dog_with_me.jpg" class="about-pic" alt="JiHye와 강이">
  <div class="about-info">
    <h2>ChoiJiHye</h2>
    <p>제가 키우는 9살 말티즈 강이와 함께 지내며 반려동물 산업에서 경험을 쌓고 꾸준히 배우며 성장하고 있습니다.</p>
    <ul>
      <li>반려동물과 함께 배우고 성장하는 것을 즐깁니다.</li>
      <li>병원과 현장에서 다양한 경험을 쌓으며 동물과 사람 모두에게 도움을 주는 일을 추구합니다.</li>
      <li>꾸준히 배우고 도전하며 반려동물 산업에서 전문성을 키워가고 있습니다.</li>
    </ul>
  </div>
</section>

<section class="bottom" id="bottom">
  <h2 class="bottom-title">Explore More</h2>
  <div class="menu-bar">
    <a href="details/experience.html">Experience</a>
    <a href="details/projects.html">Projects</a>
    <a href="details/activities.html">Activities</a>
    <a href="details/contact.html">Contact</a>
  </div>
</section>

<div id="contactBtnContainer">
  <button id="contactBtn">문의사항 남기기</button>
</div>

<script>
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
<title>JiHye Portfolio</title>
<link rel="stylesheet" href="style.css">
<style>
.hero-gradient-top {
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background: linear-gradient(to bottom left, rgba(85,107,47,0.5), transparent);
  z-index:0;
}
.hero-gradient-bottom {
  position:absolute;
  width:100%;
  height:100%;
  bottom:0;
  left:0;
  background: linear-gradient(to top right, rgba(85,107,47,0.5), transparent);
  z-index:0;
}
.hero { 
  position:relative; 
  height:100vh; 
  background-image: url('https://selina542155.github.io/selina542155.github.io2/images/dog_bottom2.jpg'); 
  background-size: cover; 
  background-position: center; 
  display:flex; 
  justify-content:center; 
  align-items:center; 
  flex-direction:column;
  color:white;
}
.hero-text h1 { font-size:60px; margin:0; text-shadow:2px2px4px #000; }
.hero-text h2 { font-size:24px; margin-top:10px; text-shadow:1px1px2px #000; }

.about { padding:50px 20px; display:flex; justify-content:center; align-items:flex-start; flex-wrap:wrap; background:#f5f5f5;}
.about-pic { width:300px; height:300px; object-fit:cover; border-radius:20px; border:3px solid #556b2f; margin-right:30px; }
.about-info { max-width:600px; }
.about-info h2 { color:#1b4d3e; }
.about-info p { font-size:18px; line-height:1.5; }

.bottom { position:relative; padding:50px 20px; background:#e8f0e5; text-align:center; }
.bottom-title { font-size:28px; color:#1b4d3e; margin-bottom:20px; }
.menu-bar a { display:inline-block; margin:0 10px; padding:10px 20px; background:#556b2f; color:white; border-radius:20px; text-decoration:none; transition:0.3s; }
.menu-bar a:hover { background: rgba(85,107,47,0.9); }

.btn-main-floating { position:fixed; bottom:40px; right:40px; background:#556b2f; color:#fff; padding:15px 25px; border-radius:30px; text-decoration:none; font-weight:bold; box-shadow:0 4px 10px rgba(0,0,0,0.2); z-index:1000;}
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }

#contactBtnContainer { position:fixed; right:40px; bottom:120px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25);}
#contactBtn:hover { background:#f5f5b0; }
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
  <img src="https://selina542155.github.io/selina542155.github.io2/images/dog_with_me.jpg" class="about-pic" alt="JiHye와 강이">
  <div class="about-info">
    <h2>ChoiJiHye</h2>
    <p>제가 키우는 9살 말티즈 강이와 함께 지내며 반려동물 산업에서 경험을 쌓고 꾸준히 배우며 성장하고 있습니다.</p>
    <ul>
      <li>반려동물과 함께 배우고 성장하는 것을 즐깁니다.</li>
      <li>병원과 현장에서 다양한 경험을 쌓으며 동물과 사람 모두에게 도움을 주는 일을 추구합니다.</li>
      <li>꾸준히 배우고 도전하며 반려동물 산업에서 전문성을 키워가고 있습니다.</li>
    </ul>
  </div>
</section>

<section class="bottom" id="bottom">
  <h2 class="bottom-title">Explore More</h2>
  <div class="menu-bar">
    <a href="details/experience.html">Experience</a>
    <a href="details/projects.html">Projects</a>
    <a href="details/activities.html">Activities</a>
    <a href="details/contact.html">Contact</a>
  </div>
</section>

<div id="contactBtnContainer">
  <button id="contactBtn">문의사항 남기기</button>
</div>

<script>
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
<title>Experience | JiHye Portfolio</title>
<style>
body { font-family: 'Noto Sans KR', sans-serif; margin:0; background:#f5f5f5;}
.hero-wrapper { background-image: url('https://selina542155.github.io/selina542155.github.io2/images/dog_bottom2.jpg'); background-size:cover; background-position:center; min-height:100vh; display:flex; flex-direction:column; align-items:center;}
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; padding-bottom:30px; width:100%; }
.detail-menu h1 { color:white; font-size:60px; margin:0; text-align:center; text-shadow:2px2px4px #fff; position:relative; }
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%);}
.detail-content { display:flex; justify-content:center; padding:50px 20px; width:100%; }
.detail-card { background: rgba(255,255,255,0.9); border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center;}
.detail-card h2 { margin:0 0 15px 0; color:#1b4d3e; text-shadow: 1px 1px 2px #fff;}
.detail-card ul { list-style:none; padding:0; width:100%; font-size:18px; margin:0;}
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1);}
.detail-card ul li:last-child { border-bottom:none;}
.btn-main-floating { position:fixed; bottom:40px; right:40px; background:#556b2f; color:#fff; padding:15px 25px; border-radius:30px; text-decoration:none; font-weight:bold; box-shadow:0 4px 10px rgba(0,0,0,0.2); z-index:1000;}
.btn-main-floating:hover { background: rgba(85,107,47,0.9);}
#contactBtnContainer { position:fixed; right:40px; bottom:120px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25);}
#contactBtn:hover { background:#f5f5b0; }
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
</div>

<a href="https://selina542155.github.io/selina542155.github.io2/index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer"><button id="contactBtn">문의사항 남기기</button></div>

<script>
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
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
<title>Activities | JiHye Portfolio</title>
<style>
body { font-family: 'Noto Sans KR', sans-serif; margin:0; background:#f5f5f5;}
.hero-wrapper { background-image: url('https://selina542155.github.io/selina542155.github.io2/images/dog_bottom2.jpg'); background-size:cover; background-position:center; min-height:100vh; display:flex; flex-direction:column; align-items:center;}
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; padding-bottom:30px; width:100%; }
.detail-menu h1 { color:white; font-size:60px; margin:0; text-align:center; text-shadow:2px2px4px #fff; position:relative; }
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%);}
.detail-content { display:flex; justify-content:center; padding:50px 20px; width:100%; }
.detail-card { background: rgba(255,255,255,0.9); border-radius:25px; padding:30px; max-width:900px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center;}
.detail-card ul { list-style:none; padding:0; width:100%; font-size:18px; margin:0;}
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1);}
.detail-card ul li:last-child { border-bottom:none;}
.btn-main-floating { position:fixed; bottom:40px; right:40px; background:#556b2f; color:#fff; padding:15px 25px; border-radius:30px; text-decoration:none; font-weight:bold; box-shadow:0 4px 10px rgba(0,0,0,0.2); z-index:1000;}
.btn-main-floating:hover { background: rgba(85,107,47,0.9);}
#contactBtnContainer { position:fixed; right:40px; bottom:120px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25);}
#contactBtn:hover { background:#f5f5b0; }
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
        <li>POSCO M-TECH 프로젝트 참여</li>
      </ul>
    </div>
  </section>
</div>

<a href="https://selina542155.github.io/selina542155.github.io2/index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer"><button id="contactBtn">문의사항 남기기</button></div>

<script>
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
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
<title>Contact | JiHye Portfolio</title>
<style>
body { font-family: 'Noto Sans KR', sans-serif; margin:0; background:#f5f5f5;}
.hero-wrapper { background-image: url('https://selina542155.github.io/selina542155.github.io2/images/dog_bottom2.jpg'); background-size:cover; background-position:center; min-height:100vh; display:flex; flex-direction:column; align-items:center;}
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; padding-bottom:30px; width:100%; }
.detail-menu h1 { color:white; font-size:60px; margin:0; text-align:center; text-shadow:2px2px4px #fff; position:relative; }
.detail-menu::after { content:""; position:absolute; left:50%; width:80%; height:3px; background:#fff; opacity:0.8; border-radius:2px; transform:translateX(-50%);}
.detail-content { display:flex; justify-content:center; padding:50px 20px; width:100%; }
.detail-card { background: rgba(180,180,180,0.9); border-radius:25px; padding:30px; max-width:500px; width:90%; box-shadow:0 10px 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; align-items:center;}
.detail-card h2 { margin:0 0 15px 0; color:#1b4d3e; text-shadow: 1px 1px 2px #fff;}
.detail-card ul { list-style:none; padding:0; width:100%; font-size:18px; margin:0;}
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1);}
.detail-card ul li:last-child { border-bottom:none;}
.btn-main-floating { position:fixed; bottom:40px; right:40px; background:#556b2f; color:#fff; padding:15px 25px; border-radius:30px; text-decoration:none; font-weight:bold; box-shadow:0 4px 10px rgba(0,0,0,0.2); z-index:1000;}
.btn-main-floating:hover { background: rgba(85,107,47,0.9);}
#contactBtnContainer { position:fixed; right:40px; bottom:120px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25);}
#contactBtn:hover { background:#f5f5b0; }
</style>
</head>
<body>

<div class="hero-wrapper">
  <section class="detail-hero"><div class="detail-menu"><h1>Contact</h1></div></section>

  <section class="detail-content">
    <div class="detail-card">
      <img src="https://selina542155.github.io/selina542155.github.io2/images/profilejpg.jpg" alt="프로필 사진" style="width:150px;height:150px;border-radius:50%;border:3px solid #556b2f; margin-bottom:20px;">
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

<a href="https://selina542155.github.io/selina542155.github.io2/index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>
<div id="contactBtnContainer"><button id="contactBtn">문의사항 남기기</button></div>

<script>
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID","_blank");
});
</script>

</body>
</html>
 ![Image](https://github.com/user-attachments/assets/a53de448-ca91-4b06-b84a-729cb361f0ee)

![Image](https://github.com/user-attachments/assets/7efeeb7f-c66f-43ec-8d78-c99997125f43)

![Image](https://github.com/user-attachments/assets/a9a0c470-9894-4f15-9799-c9107fac31a7)

![Image](https://github.com/user-attachments/assets/49b15bf6-e9cd-4628-86bf-c4e69650e08f)

![Image](https://github.com/user-attachments/assets/580ca612-e766-4ec5-b2b1-2c9289211126
 
