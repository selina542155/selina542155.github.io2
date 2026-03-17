// Bottom 스크롤
window.addEventListener("load", () => {
  window.scrollTo(0, 0); // 새로고침 시 최상단으로 이동
});
document.getElementById("btn-bottom").addEventListener("click", (e) => {
  e.preventDefault();
  const bottomSection = document.getElementById("bottom");
  if (bottomSection) {
    bottomSection.scrollIntoView({ behavior: "smooth" });
  }
});

// 모달 제어
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const close = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "flex";  // 버튼 클릭 시 표시
close.onclick = () => modal.style.display = "none"; // 닫기 버튼
window.onclick = e => { if(e.target === modal) modal.style.display = "none"; } // 배경 클릭