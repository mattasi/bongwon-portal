// 로그인(auth.js)이 확인된 뒤에만 renderPortal()이 호출됩니다.
function renderPortal() {
  if (renderPortal._done) return; // 중복 렌더링 방지
  renderPortal._done = true;

  document.getElementById("pageTitle").textContent = PORTAL.title;
  document.getElementById("footer").textContent = PORTAL.footer;

  const portal = document.getElementById("portal");

  PORTAL.categories.forEach(category => {
    const card = document.createElement("section");
    card.className = `card ${category.color}`;

    const title = document.createElement("h2");
    title.textContent = category.name;
    card.appendChild(title);

    category.items.forEach(item => {
      const link = document.createElement("a");
      const hasUrl = item.url && item.url !== "#";
      link.href = hasUrl ? item.url : "#";
      link.target = hasUrl ? "_blank" : "_self";
      link.rel = "noopener noreferrer";

      const label = item.password ? `🔒 ${item.name}` : item.name;
      link.innerHTML = label.replace(/\n/g, "<br>");

      if (!hasUrl) {
        link.addEventListener("click", event => {
          event.preventDefault();
          alert(`"${item.name.replace(/\n/g, " ")}"\n\n아직 링크가 연결되지 않았습니다.\nlinks.js에서 url을 입력해 주세요.`);
        });
      } else if (item.password) {
        // 비밀번호가 설정된 항목: 클릭 시 입력창을 띄우고 맞으면 새 탭으로 열림.
        // ⚠️ 정적 사이트이므로 완전한 보안은 아니며, 무심코 클릭하는 것을 막는 용도입니다.
        link.addEventListener("click", event => {
          event.preventDefault();
          const input = prompt(`"${item.name.replace(/\n/g, " ")}"\n\n비밀번호를 입력하세요.`);
          if (input === null) return; // 취소
          if (input === item.password) {
            window.open(item.url, "_blank", "noopener,noreferrer");
          } else {
            alert("비밀번호가 틀렸습니다.");
          }
        });
      }

      card.appendChild(link);
    });

    portal.appendChild(card);
  });
}
