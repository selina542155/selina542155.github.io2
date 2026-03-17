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
    <h1>Growing with Animals</h1>
    <h2>ChoiJiHye | Pet Industry Portfolio</h2>
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
      <p>제가 키우는 9살 말티즈 강이와 함께 지내며 <br>반려동물 산업에서 경험을 쌓고 꾸준히 배우며 성장하고 있습니다.</p>
      <ul>
        <li>반려동물과 함께 배우고 성장하는 것을 즐깁니다. </li>

          <li>병원과 현장에서 다양한 경험을 쌓으며 동물과 사람 모두에게 도움을 주는 일을 추구하고 있습니다. </li>

            <li>꾸준히 배우고 도전하며,<br> 반려동물 산업에서 전문성을 키워가고 있습니다.</li>

      </ul>
    </div> 
</section>

<!-- Bottom 섹션 -->
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

<script src="script.js"></script>
</body>
</html>
