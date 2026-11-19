(function () {
  const RICK_EMBED = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  const overlay = document.getElementById("overlay");
  const rick = document.getElementById("rick");
  const chat = document.getElementById("chat");
  const input = document.getElementById("input");
  const composer = document.getElementById("composer");

  function rickroll() {
    rick.src = RICK_EMBED;
    overlay.classList.remove("hidden");
  }

  function closeOverlay() {
    overlay.classList.add("hidden");
    rick.src = "";
  }

  composer.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
      const div = document.createElement("div");
      div.className = "msg user";
      div.textContent = text;
      chat.appendChild(div);
      input.value = "";
    }
    rickroll();
  });

  document.getElementById("new-chat").addEventListener("click", function (e) {
    e.preventDefault();
    rickroll();
  });

  document.getElementById("model").addEventListener("change", rickroll);

  document.getElementById("close").addEventListener("click", closeOverlay);

  document.querySelectorAll("button, select").forEach(function (el) {
    if (el.id === "close" || el.id === "send" || el.id === "new-chat") return;
    el.addEventListener("click", function (e) {
      e.preventDefault();
      rickroll();
    });
  });
})();
