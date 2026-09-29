const zodiacData = [
  { name: "白羊座", icon: "♈", element: "火象", color: "珊瑚红", number: 7, tip: "行动力在线，先做再慢慢调整。" },
  { name: "金牛座", icon: "♉", element: "土象", color: "青苔绿", number: 16, tip: "稳住自己的节奏，好事会自然发生。" },
  { name: "双子座", icon: "♊", element: "风象", color: "天空蓝", number: 3, tip: "好奇心会带你遇见新的答案。" },
  { name: "巨蟹座", icon: "♋", element: "水象", color: "珍珠白", number: 22, tip: "温柔不是退让，也是一种力量。" },
  { name: "狮子座", icon: "♌", element: "火象", color: "香槟金", number: 28, tip: "慢即是快，静能生慧。" },
  { name: "处女座", icon: "♍", element: "土象", color: "燕麦黄", number: 9, tip: "完成比完美更重要，给自己一点空间。" },
  { name: "天秤座", icon: "♎", element: "风象", color: "雾霾蓝", number: 14, tip: "听从内心，选择会变得很清晰。" },
  { name: "天蝎座", icon: "♏", element: "水象", color: "浆果紫", number: 11, tip: "专注真正重要的事，答案已经很近。" },
  { name: "射手座", icon: "♐", element: "火象", color: "橘子橙", number: 19, tip: "保持坦率，新的机会正在靠近。" },
  { name: "摩羯座", icon: "♑", element: "土象", color: "岩石灰", number: 8, tip: "今天的积累，会成为明天的底气。" },
  { name: "水瓶座", icon: "♒", element: "风象", color: "极光蓝", number: 24, tip: "相信独特的想法，灵感值得被记录。" },
  { name: "双鱼座", icon: "♓", element: "水象", color: "丁香紫", number: 12, tip: "直觉很可靠，也别忘了照顾现实。" }
];

const savedZodiac = localStorage.getItem("zodiacIndex");

const state = {
  zodiac: savedZodiac === null ? 4 : Number(savedZodiac),
  activeTest: "",
  history: JSON.parse(localStorage.getItem("testHistory") || "[]")
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const zodiacSheet = $("#zodiacSheet");
const testDialog = $("#testDialog");
const zodiacGrid = $("#zodiacGrid");
let toastTimer;

function renderZodiacGrid() {
  zodiacGrid.innerHTML = zodiacData.map((zodiac, index) => `
    <button type="button" data-zodiac="${index}" class="${index === state.zodiac ? "is-selected" : ""}">
      <span>${zodiac.icon}</span>${zodiac.name}
    </button>
  `).join("");
}

function renderToday() {
  const today = new Date();
  const dateText = [today.getFullYear(), today.getMonth() + 1, today.getDate()]
    .map((part, index) => index === 0 ? String(part) : String(part).padStart(2, "0"))
    .join("-");
  const dateElement = $("#fortuneDate");
  dateElement.dateTime = dateText;
  dateElement.textContent = dateText;
}

function applyZodiac(index) {
  state.zodiac = index;
  const zodiac = zodiacData[index];
  $("#zodiacIcon").textContent = zodiac.icon;
  $("#fortuneTitle").innerHTML = `${zodiac.name} · 今日运势 <span>${zodiac.element}</span>`;
  $("#luckyColor").textContent = zodiac.color;
  $("#luckyNumber").textContent = zodiac.number;
  $("#fortuneTip").textContent = zodiac.tip;
  localStorage.setItem("zodiacIndex", String(index));
  renderZodiacGrid();
}

function setModal(modal, open) {
  modal.hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function renderHistory() {
  $("#completedCount").textContent = state.history.length;
  $("#emptyHistory").hidden = state.history.length > 0;
  $("#historyList").innerHTML = state.history
    .map((item) => `<li><strong>${item}</strong><br><small>已完成体验</small></li>`)
    .join("");
}

$("#switchZodiac").addEventListener("click", () => setModal(zodiacSheet, true));
$("#closeSheet").addEventListener("click", () => setModal(zodiacSheet, false));
zodiacGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-zodiac]");
  if (!button) return;
  applyZodiac(Number(button.dataset.zodiac));
  setModal(zodiacSheet, false);
  showToast(`已切换为${zodiacData[state.zodiac].name}`);
});

$$('.test-card').forEach((card) => {
  card.addEventListener("click", () => {
    state.activeTest = card.dataset.test;
    $("#dialogTitle").textContent = state.activeTest;
    $("#dialogIcon").style.background = card.dataset.color;
    setModal(testDialog, true);
  });
});

$("#closeDialog").addEventListener("click", () => setModal(testDialog, false));
$("#startTest").addEventListener("click", () => {
  if (!state.history.includes(state.activeTest)) {
    state.history.unshift(state.activeTest);
    localStorage.setItem("testHistory", JSON.stringify(state.history));
    renderHistory();
  }
  setModal(testDialog, false);
  showToast("体验版已记录，正式题库可继续接入");
});

[zodiacSheet, testDialog].forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) setModal(modal, false);
  });
});

$$('.nav-item').forEach((button) => {
  button.addEventListener("click", () => {
    $$('.nav-item').forEach((item) => item.classList.toggle("is-active", item === button));
    $$('.page').forEach((page) => page.classList.toggle("is-active", page.id === button.dataset.view));
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setModal(zodiacSheet, false);
  setModal(testDialog, false);
});

applyZodiac(state.zodiac);
renderToday();
renderHistory();
