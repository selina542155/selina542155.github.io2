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
/* 전체 폰트 */
body {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
}

/* Hero 섹션 */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-image: url('details/images/dog_bottom2.jpg');
  background-size: cover;
  background-position: center;
}

.hero h1 {
  font-size: 60px;
  text-shadow: 2px 2px 4px #000;
}

.hero h2 {
  font-size: 30px;
  text-shadow: 1px 1px 2px #000;
}

/* About 섹션 */
.about {
  position: relative;
  background-image: url('details/images/dog_with_me.jpg');
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  color: white;
  text-shadow: 1px 1px 2px #000;
}

.about h2 { font-size: 40px; }
.about p, .about ul { font-size: 18px; }
.about ul { list-style: disc; margin-left: 20px; }

/* Bottom 섹션 */
.bottom {
  padding: 50px 20px;
  background: #f5f5f5;
  text-align: center;
}

.menu-bar a {
  margin: 0 15px;
  text-decoration: none;
  color: #556b2f;
  font-weight: bold;
}

/* 플로팅 버튼 */
.btn-main-floating {
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 15px 25px;
  background: #556b2f;
  color: #fff;
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  z-index: 1000;
  transition: 0.3s;
}

.btn-main-floating:hover {
  background: rgba(85,107,47,0.9);
}
</style>
</head>
<body>

<!-- Hero -->
<section class="hero">
  <div>
    <h1>Growing with Animals</h1>
    <h2>ChoiJiHye | Pet Industry Portfolio</h2>
  </div>
</section>

<!-- About -->
<section class="about">
  <h2>ChoiJiHye</h2>
  <p>제가 키우는 9살 말티즈 강이와 함께 지내며 반려동물 산업에서 경험을 쌓고 꾸준히 배우며 성장하고 있습니다.</p>
  <ul>
    <li>반려동물과 함께 배우고 성장하는 것을 즐깁니다.</li>
    <li>병원과 현장에서 다양한 경험을 쌓으며 동물과 사람 모두에게 도움을 주는 일을 추구하고 있습니다.</li>
    <li>꾸준히 배우고 도전하며, 반려동물 산업에서 전문성을 키워가고 있습니다.</li>
  </ul>
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

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Experience | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
<style>
body { font-family: 'Noto Sans KR', sans-serif; margin:0; background:#f5f5f5; }
.hero-wrapper {
  background-image: url('images/dog_bottom2.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.detail-hero {
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  color: white;
  text-shadow: 2px 2px 4px #000;
}
.detail-card {
  background: rgba(255,255,255,0.85);
  border-radius: 25px;
  padding: 30px;
  max-width: 900px;
  width: 90%;
  margin-top: -50px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}
.detail-card ul { list-style: disc; margin-left: 20px; font-size: 18px; }
.detail-card p { font-size: 18px; margin-bottom: 10px; }
.btn-main-floating {
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 15px 25px;
  background: #556b2f;
  color: #fff;
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }
</style>
</head>
<body>

<div class="hero-wrapper">
  <section class="detail-hero">
    <h1>Experience</h1>
  </section>

  <section class="detail-card">
    <p>동물 관련 경험을 적는 공간입니다.</p>
    <ul>
      <li>병원 인턴 근무 경험</li>
      <li>애견 유치원 근무 경험</li>
      <li>학생회 활동 프로젝트</li>
    </ul>
  </section>
</div>

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
<style>
body { font-family: 'Noto Sans KR', sans-serif; margin:0; background:#f5f5f5; }
.hero-wrapper {
  background-image: url('images/dog_bottom2.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.detail-hero { height: 35vh; display: flex; justify-content: center; align-items: flex-end; width:100%; color:white; text-shadow:2px 2px 4px #000; }
.detail-card { background: rgba(255,255,255,0.85); border-radius:25px; padding:30px; max-width:900px; width:90%; margin-top:-50px; box-shadow:0 10px 30px rgba(0,0,0,0.25); }
.detail-card ul { list-style: disc; margin-left: 20px; font-size: 18px; }
.detail-card p { font-size: 18px; margin-bottom:10px; }
.btn-main-floating { position: fixed; bottom: 40px; right: 40px; padding: 15px 25px; background:#556b2f; color:#fff; font-weight:bold; border-radius:30px; text-decoration:none; z-index:1000; box-shadow:0 4px 10px rgba(0,0,0,0.2); }
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }
</style>
</head>
<body>

<div class="hero-wrapper">
  <section class="detail-hero">
    <h1>Projects</h1>
  </section>

  <section class="detail-card">
    <p>참여했던 프로젝트 내용을 소개합니다.</p>
    <ul>
      <li>국립공원 ESG 지원 활동 프로젝트</li>
      <li>학생회 반려동물 행사 프로젝트</li>
      <li>POSCO M-TECH 협업 프로젝트 영상 제작</li>
    </ul>
  </section>
</div>

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Activities | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
<style>
body { font-family: 'Noto Sans KR', sans-serif; margin:0; background:#f5f5f5; }
.hero-wrapper { background-image: url('images/dog_bottom2.jpg'); background-size: cover; background-position: center; min-height:100vh; display:flex; flex-direction:column; align-items:center; }
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; width:100%; color:white; text-shadow:2px 2px 4px #000; }
.detail-card { background: rgba(255,255,255,0.85); border-radius:25px; padding:30px; max-width:900px; width:90%; margin-top:-50px; box-shadow:0 10px 30px rgba(0,0,0,0.25); }
.detail-card ul { list-style: disc; margin-left: 20px; font-size:18px; }
.detail-card p { font-size:18px; margin-bottom:10px; }
.btn-main-floating { position: fixed; bottom: 40px; right: 40px; padding:15px 25px; background:#556b2f; color:#fff; font-weight:bold; border-radius:30px; text-decoration:none; z-index:1000; box-shadow:0 4px 10px rgba(0,0,0,0.2); }
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }
</style>
</head>
<body>

<div class="hero-wrapper">
  <section class="detail-hero"><h1>Activities</h1></section>

  <section class="detail-card">
    <p>참여했던 다양한 활동과 봉사 경험</p>
    <ul>
      <li>학생회 활동</li>
      <li>National Park ESG 지원</li>
      <li>POSCO M-TECH 프로젝트 참여</li>
    </ul>
  </section>
</div>

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>

</body>
</html>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact | JiHye Portfolio</title>
<link rel="stylesheet" href="../style.css">
<style>
body { font-family: 'Noto Sans KR', sans-serif; margin:0; background:#f5f5f5; }
.hero-wrapper { background-image: url('images/dog_bottom2.jpg'); background-size: cover; background-position:center; min-height:100vh; display:flex; flex-direction:column; align-items:center; }
.detail-hero { height:35vh; display:flex; justify-content:center; align-items:flex-end; width:100%; color:white; text-shadow:2px 2px 4px #000; }
.detail-card { background: rgba(255,255,255,0.85); border-radius:25px; padding:30px; max-width:500px; width:90%; margin-top:-50px; box-shadow:0 10px 30px rgba(0,0,0,0.25); }
.detail-card h2 { color:#1b4d3e; margin-bottom:15px; text-shadow:1px 1px 2px #fff; }
.detail-card ul { list-style: disc; margin-left:20px; font-size:18px; }
.detail-card p { font-size:18px; margin-bottom:10px; }
.btn-main-floating { position: fixed; bottom: 40px; right: 40px; padding:15px 25px; background:#556b2f; color:#fff; font-weight:bold; border-radius:30px; text-decoration:none; z-index:1000; box-shadow:0 4px 10px rgba(0,0,0,0.2); }
.btn-main-floating:hover { background: rgba(85,107,47,0.9); }
</style>
</head>
<body>

<div class="hero-wrapper">
  <section class="detail-hero"><h1>Contact</h1></section>

  <section class="detail-card">
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
  </section>
</div>

<a href="../index.html#bottom" class="btn-main-floating">← 메인으로 돌아가기</a>

</body>
</html>
