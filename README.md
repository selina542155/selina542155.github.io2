<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JiHye Portfolio</title>
<style>
/* 전체 폰트 및 기본 스타일 */
body {
  font-family: 'Noto Sans KR', sans-serif;
  margin:0;
  background:#f5f5f5;
  scroll-behavior: smooth;
}

/* Hero 섹션 */
.hero {
  position: relative;
  height: 100vh;
  background-image: url('images/dog_with_me.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero h1 {
  font-size: 60px;
  color: white;
  text-shadow: 2px 2px 4px #000;
  margin:0;
}

.hero h2 {
  font-size: 28px;
  color: white;
  margin:10px 0 0 0;
  text-shadow: 1px 1px 2px #000;
}

/* 메뉴 바 */
.menu-bar {
  position: fixed;
  top: 20px;
  right: 40px;
  display: flex;
  gap: 15px;
}

.menu-bar a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 15px;
  background: rgba(85,107,47,0.8);
  border-radius: 20px;
  transition: 0.3s;
}

.menu-bar a:hover {
  background: rgba(85,107,47,1);
}

/* 섹션 공통 */
section {
  padding: 80px 20px;
  display: flex;
  justify-content: center;
}

.detail-card {
  background: rgba(255,255,255,0.95);
  border-radius: 25px;
  padding: 30px;
  max-width: 900px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  display:flex;
  flex-direction: column;
  align-items: center;
}

.detail-card h2 {
  margin: 0 0 15px 0;
  color: #1b4d3e;
}

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

/* 플로팅 버튼 */
.btn-main-floating {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1000;
  padding: 15px 25px;
  background: #556b2f;
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
  position: fixed;
  right: 40px;
  bottom: 120px;
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

#contactBtn:hover { background:#f5f5b0; }

/* 섹션 제목 */
.section-title {
  font-weight:bold;
  margin-top:20px;
  margin-bottom:10px;
  font-size:20px;
  color:#1b4d3e;
  align-self:flex-start;
}
</style>
</head>
<body>

<!-- Hero -->
<section class="hero" id="hero">
  <h1>Growing with Animals</h1>
  <h2>ChoiJiHye | Pet Industry Portfolio</h2>
</section>

<!-- 메뉴 바 -->
<div class="menu-bar">
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#activities">Activities</a>
  <a href="#contact">Contact</a>
</div>

<!-- Experience -->
<section id="experience">
  <div class="detail-card">
    <h2>Experience</h2>
    <p>동물 관련 경험을 적는 공간입니다.</p>
    <ul>
      <li>병원 인턴 근무 경험</li>
      <li>애견 유치원 근무 경험</li>
      <li>학생회 활동 프로젝트</li>
    </ul>
  </div>
</section>

<!-- Projects -->
<section id="projects">
  <div class="detail-card">
    <h2>Projects</h2>
    <p>참여했던 프로젝트 내용을 소개합니다.</p>
    <ul>
      <li>국립공원 ESG 지원 활동 프로젝트</li>
      <li>학생회 반려동물 행사 프로젝트</li>
      <li>POSCO M-TECH 협업 프로젝트 영상 제작</li>
    </ul>
  </div>
</section>

<!-- Activities -->
<section id="activities">
  <div class="detail-card">
    <h2>Activities</h2>
    <p>참여했던 다양한 활동과 봉사 경험을 적는 공간입니다.</p>
    <ul>
      <li>학생회 활동</li>
      <li>National Park ESG 지원</li>
      <li>포스코 M-TECH 프로젝트 참여</li>
    </ul>
  </div>
</section>

<!-- Contact -->
<section id="contact">
  <div class="detail-card">
    <h2>Contact</h2>
    <ul>
      <li>전화: 010-1234-5678</li>
      <li>이메일: example@email.com</li>
      <li>학력: 신라대학교 반려동물학과 졸업</li>
    </ul>
  </div>
</section>

<!-- 플로팅 버튼 -->
<a href="#hero" class="btn-main-floating">↑ 맨 위로</a>
<div id="contactBtnContainer">
  <button id="contactBtn">문의사항 남기기</button>
</div>

<script>
// 문의사항 버튼 클릭 → 구글폼 새 창
document.getElementById("contactBtn").addEventListener("click", () => {
  window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
});
</script>

</body>
</html>
 ![Image](https://github.com/user-attachments/assets/a53de448-ca91-4b06-b84a-729cb361f0ee)

![Image](https://github.com/user-attachments/assets/7efeeb7f-c66f-43ec-8d78-c99997125f43)

![Image](https://github.com/user-attachments/assets/a9a0c470-9894-4f15-9799-c9107fac31a7)

![Image](https://github.com/user-attachments/assets/49b15bf6-e9cd-4628-86bf-c4e69650e08f)

![Image](https://github.com/user-attachments/assets/580ca612-e766-4ec5-b2b1-2c9289211126
 
