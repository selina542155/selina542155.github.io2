/* style.css */
*{margin:0;padding:0;box-sizing:border-box;}
body { font-family:'Noto Sans KR', sans-serif; background:#f5f5f5; scroll-behavior:smooth; }
header { position:fixed; top:0; width:100%; background:rgba(85,107,47,0.9); color:#fff; z-index:1000; display:flex; justify-content:center; padding:15px 0; box-shadow:0 4px 10px rgba(0,0,0,0.2);}
header a { color:#fff; text-decoration:none; margin:0 20px; font-weight:bold; font-size:18px; transition:0.3s; }
header a:hover { color:#f5f5b0; }
section { min-height:100vh; display:flex; justify-content:center; align-items:center; flex-direction:column; padding:100px 20px 60px 20px; }
section h1 { font-size:60px; margin-bottom:20px; color:#556b2f; text-shadow:2px 2px 4px rgba(0,0,0,0.2);}
section p { font-size:20px; max-width:900px; text-align:center; line-height:1.6; margin-bottom:40px; }
section .btn { display:inline-block; padding:15px 30px; background:#556b2f; color:#fff; text-decoration:none; border-radius:25px; font-weight:bold; transition:0.3s; box-shadow:0 5px 15px rgba(0,0,0,0.25);}
section .btn:hover { background: rgba(85,107,47,0.9); }
.hero { background-size:cover; background-position:center; width:100%; min-height:60vh; display:flex; justify-content:center; align-items:center; color:#fff; text-shadow:2px 2px 5px rgba(0,0,0,0.5);}
.hero h1 { font-size:80px; text-align:center; }
.detail-section { background:#fff; padding:80px 20px; display:flex; flex-direction:column; align-items:center; }
.detail-card { background:#fdfdfd; border-radius:25px; max-width:900px; width:90%; padding:30px; margin:20px 0; box-shadow:0 10px 30px rgba(0,0,0,0.25); }
.detail-card ul { list-style:none; padding:0; font-size:18px; }
.detail-card ul li { padding:10px 15px; border-bottom:1px solid rgba(0,0,0,0.1);}
.detail-card ul li:last-child { border-bottom:none; }
.btn-main-floating { position: fixed; bottom: 40px; right: 40px; padding:18px 28px; border-radius:30px; font-weight:bold; background:#556b2f; color:#fff; text-decoration:none; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; z-index:100;}
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }
#contactBtnContainer { position:fixed; right:40px; bottom:100px; z-index:1010; }
#contactBtn { background:#fffacd; color:#556b2f; border:none; border-radius:25px; padding:18px 28px; font-size:18px; cursor:pointer; box-shadow:0 10px 25px rgba(0,0,0,0.25); transition:0.3s; }
#contactBtn:hover { background:#f5f5b0; }
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JiHye Portfolio</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <a href="#hero">Home</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#activities">Activities</a>
  <a href="#contact">Contact</a>
</header>

<section id="hero" class="hero" style="background-image:url('https://raw.githubusercontent.com/selina542155/portfolio/main/images/dog_bottom2.jpg');">
  <h1>JiHye Portfolio</h1>
</section>

<section id="experience" class="detail-section">
  <h1>Experience</h1>
  <div class="detail-card">
    <ul>
      <li>병원 인턴 근무 경험</li>
      <li>애견 유치원 근무 경험</li>
      <li>학생회 활동 프로젝트 참여</li>
    </ul>
    <a href="details/experience.html" class="btn">자세히 보기</a>
  </div>
</section>

<section id="projects" class="detail-section">
  <h1>Projects</h1>
  <div class="detail-card">
    <ul>
      <li>국립공원 ESG 지원 활동 프로젝트</li>
      <li>학생회 반려동물 행사 프로젝트</li>
      <li>POSCO M-TECH 협업 프로젝트 영상 제작</li>
    </ul>
    <a href="details/projects.html" class="btn">자세히 보기</a>
  </div>
</section>

<section id="activities" class="detail-section">
  <h1>Activities</h1>
  <div class="detail-card">
    <ul>
      <li>학생회 활동</li>
      <li>National Park ESG 지원</li>
      <li>POSCO M-TECH 프로젝트 참여</li>
    </ul>
    <a href="details/activities.html" class="btn">자세히 보기</a>
  </div>
</section>

<section id="contact" class="detail-section">
  <h1>Contact</h1>
  <div class="detail-card">
    <ul>
      <li>전화: 010-1234-5678</li>
      <li>이메일: example@email.com</li>
      <li>학력: 신라대학교 반려동물학과 졸업</li>
    </ul>
    <a href="details/contact.html" class="btn">자세히 보기</a>
  </div>
</section>

<a href="#hero" class="btn-main-floating">↑ 맨 위로</a>
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
<title>Experience | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>
<section class="detail-section" style="background-image:url('https://raw.githubusercontent.com/selina542155/portfolio/main/images/dog_bottom2.jpg'); background-size:cover; background-position:center;">
  <h1>Experience</h1>
  <div class="detail-card">
    <ul>
      <li>병원 인턴 근무 경험</li>
      <li>애견 유치원 근무 경험</li>
      <li>학생회 활동 프로젝트 참여</li>
    </ul>
    <a href="../index.html#experience" class="btn">메인으로 돌아가기</a>
  </div>
</section>
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
<link rel="stylesheet" href="../style.css">
</head>
<body>
<section class="detail-section" style="background-image:url('https://raw.githubusercontent.com/selina542155/portfolio/main/images/dog_bottom2.jpg'); background-size:cover; background-position:center;">
  <h1>Projects</h1>
  <div class="detail-card">
    <ul>
      <li>국립공원 ESG 지원 활동 프로젝트</li>
      <li>학생회 반려동물 행사 프로젝트</li>
      <li>POSCO M-TECH 협업 프로젝트 영상 제작</li>
    </ul>
    <a href="../index.html#projects" class="btn">메인으로 돌아가기</a>
  </div>
</section>
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
<link rel="stylesheet" href="../style.css">
</head>
<body>
<section class="detail-section" style="background-image:url('https://raw.githubusercontent.com/selina542155/portfolio/main/images/dog_bottom2.jpg'); background-size:cover; background-position:center;">
  <h1>Activities</h1>
  <div class="detail-card">
    <ul>
      <li>학생회 활동</li>
      <li>National Park ESG 지원</li>
      <li>POSCO M-TECH 프로젝트 참여</li>
    </ul>
    <a href="../index.html#activities" class="btn">메인으로 돌아가기</a>
  </div>
</section>
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
<link rel="stylesheet" href="../style.css">
</head>
<body>
<section class="detail-section" style="background-image:url('https://raw.githubusercontent.com/selina542155/portfolio/main/images/dog_bottom2.jpg'); background-size:cover; background-position:center;">
  <h1>Contact</h1>
  <div class="detail-card">
    <ul>
      <li>전화: 010-1234-5678</li>
      <li>이메일: example@email.com</li>
      <li>학력: 신라대학교 반려동물학과 졸업</li>
    </ul>
    <a href="../index.html#contact" class="btn">메인으로 돌아가기</a>
  </div>
</section>
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
 
