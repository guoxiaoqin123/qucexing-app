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

const testBank = {
  "动物人格测试": {
    questions: [
      { text: "团队遇到难题时，你通常会怎么做？", choices: [["主动定方向，带大家行动", "lion"], ["先分析原因和可行方案", "owl"], ["活跃气氛，鼓励大家表达", "dolphin"], ["留意每个人的状态并协调", "deer"]] },
      { text: "来到一个陌生聚会，你更可能？", choices: [["自然成为话题中心", "lion"], ["先观察环境和人群", "owl"], ["很快认识一圈新朋友", "dolphin"], ["和一两个舒服的人深聊", "deer"]] },
      { text: "做重要决定时，你最看重什么？", choices: [["目标是否值得争取", "lion"], ["信息是否充分准确", "owl"], ["过程是否有趣开放", "dolphin"], ["会不会伤害他人感受", "deer"]] },
      { text: "朋友最常用哪个词形容你？", choices: [["可靠有主见", "lion"], ["理性有洞察", "owl"], ["乐观有感染力", "dolphin"], ["温和有耐心", "deer"]] },
      { text: "理想的周末更接近哪一种？", choices: [["完成一个有挑战的目标", "lion"], ["安静学习或研究兴趣", "owl"], ["尝试新活动和认识新朋友", "dolphin"], ["陪伴家人或亲密朋友", "deer"]] }
    ],
    results: {
      lion: ["狮子型 · 行动力领袖", "你目标明确、敢于承担，遇事倾向于迅速推动。适当放慢脚步倾听，会让你的影响力更持久。"],
      owl: ["猫头鹰型 · 深度思考者", "你重视逻辑与细节，善于从复杂信息里找到规律。偶尔允许不完美，能帮助你更快把想法变成行动。"],
      dolphin: ["海豚型 · 活力连接者", "你好奇、乐观，擅长连接人与创意。给灵感增加一点计划，会让你的创造力走得更远。"],
      deer: ["小鹿型 · 温柔共情者", "你敏锐体贴，很容易感受到他人的需要。照顾别人之外，也要为自己的边界保留位置。"]
    }
  },
  "MBTI 16型人格": {
    questions: [
      { text: "忙碌一周后，哪种方式更能让你恢复能量？", choices: [["和朋友见面聊天", "E"], ["独处做喜欢的事", "I"]] },
      { text: "接触新事物时，你更信任什么？", choices: [["实际经验和具体事实", "S"], ["直觉联想和未来可能", "N"]] },
      { text: "意见冲突时，你通常优先考虑？", choices: [["逻辑是否一致", "T"], ["每个人的感受", "F"]] },
      { text: "面对旅行或项目，你喜欢？", choices: [["提前规划好关键安排", "J"], ["保留空间，随机应变", "P"]] },
      { text: "在会议或课堂中，你更常？", choices: [["边说边整理想法", "E"], ["想清楚后再表达", "I"]] }
    ]
  },
  "九型人格测试": {
    questions: [
      { text: "你最希望别人如何评价你？", choices: [["正直可靠", "1,6,3"], ["温暖有爱", "2,9,4"], ["优秀有成就", "3,7,8"]] },
      { text: "压力来临时，你更容易？", choices: [["沉浸在自己的情绪里", "4,2,9"], ["退后观察和思考", "5,1,3"], ["反复确认风险与支持", "6,7,8"]] },
      { text: "面对新的机会，你的第一反应是？", choices: [["很兴奋，想马上体验", "7,3,2"], ["先确认由谁掌控局面", "8,1,5"], ["看看大家是否都能接受", "9,6,4"]] },
      { text: "发生分歧时，你最可能？", choices: [["主动照顾对方感受", "2,9,6"], ["寻找最稳妥的方案", "6,1,5"], ["尽量避免正面冲突", "9,4,7"]] },
      { text: "你内心最在意的是？", choices: [["做正确的事", "1,3,8"], ["理解世界的规律", "5,4,6"], ["拥有自由和快乐", "7,2,9"]] }
    ],
    results: {
      1: ["1号 · 完美型", "你有原则、重责任，愿意把事情做到正确。对自己多一点宽容，会让认真变成更从容的力量。"],
      2: ["2号 · 助人型", "你善于体察需要，也乐于给予支持。清楚表达自己的需要，能让关系更加平衡。"],
      3: ["3号 · 成就型", "你目标清晰、适应力强，擅长把努力转化为成果。别忘了，你的价值不只来自表现。"],
      4: ["4号 · 自我型", "你感受细腻、追求真实与独特。把情绪转化为表达和创造，是你的天然优势。"],
      5: ["5号 · 理智型", "你独立冷静，喜欢通过理解获得安全感。适时参与和分享，会让知识产生更多连接。"],
      6: ["6号 · 忠诚型", "你谨慎可靠，善于发现风险并守护团队。相信自己的判断，能减少不必要的担忧。"],
      7: ["7号 · 活跃型", "你乐观灵活，总能看见新的可能。持续投入一件重要的事，会带来更深的满足。"],
      8: ["8号 · 领袖型", "你直接、有力量，愿意保护自己重视的人。展现柔软不会削弱你，反而能增加信任。"],
      9: ["9号 · 和平型", "你包容稳定，擅长理解不同立场。更主动地说出自己的观点，会让你的存在被真正看见。"]
    }
  },
  "大五人格测试": {
    questions: [
      { text: "我喜欢探索陌生领域和不同观点。", trait: "O", choices: [["非常符合", 4], ["比较符合", 3], ["不太符合", 2], ["完全不符合", 1]] },
      { text: "我会有计划地完成承诺，很少拖到最后。", trait: "C", choices: [["非常符合", 4], ["比较符合", 3], ["不太符合", 2], ["完全不符合", 1]] },
      { text: "和很多人在一起时，我通常精力充沛。", trait: "E", choices: [["非常符合", 4], ["比较符合", 3], ["不太符合", 2], ["完全不符合", 1]] },
      { text: "即使观点不同，我也愿意先理解对方。", trait: "A", choices: [["非常符合", 4], ["比较符合", 3], ["不太符合", 2], ["完全不符合", 1]] },
      { text: "面对变化或压力，我常会感到紧张不安。", trait: "N", choices: [["非常符合", 4], ["比较符合", 3], ["不太符合", 2], ["完全不符合", 1]] }
    ],
    results: {
      O: ["开放性突出 · 灵感探索者", "你好奇、富有想象力，愿意接触新观点与新体验。把创意落实到具体行动，会带来更多成就感。"],
      C: ["尽责性突出 · 稳健执行者", "你自律可靠，擅长规划并持续推进目标。适当保留弹性，能让高标准不变成负担。"],
      E: ["外向性突出 · 能量连接者", "你从互动中获得能量，表达直接且富有感染力。也可以为独处留些时间，听见内在声音。"],
      A: ["宜人性突出 · 温暖合作者", "你重视合作、善于体谅，是团队中可靠的协调者。清晰边界能让善意更有力量。"],
      N: ["敏感度突出 · 细腻感知者", "你对环境和情绪变化十分敏锐，能够提前觉察风险。稳定的生活节奏有助于把敏感转化为洞察。"]
    }
  },
  "气质类型测试": {
    questions: [
      { text: "计划突然改变时，你通常会？", choices: [["很快接受，寻找新的乐趣", "sanguine"], ["马上接管并制定新方案", "choleric"], ["反复思考哪里出了问题", "melancholic"], ["平静配合，不太受影响", "phlegmatic"]] },
      { text: "在团队中，你更自然的角色是？", choices: [["活跃气氛的人", "sanguine"], ["推动决策的人", "choleric"], ["把控细节的人", "melancholic"], ["协调关系的人", "phlegmatic"]] },
      { text: "面对一项长期任务，你更像？", choices: [["靠兴趣和新鲜感推进", "sanguine"], ["盯住目标快速推进", "choleric"], ["按高标准认真打磨", "melancholic"], ["保持稳定节奏慢慢完成", "phlegmatic"]] },
      { text: "别人冒犯你时，你更可能？", choices: [["过一会儿就忘了", "sanguine"], ["当场直接表达不满", "choleric"], ["记在心里反复回想", "melancholic"], ["选择退让避免冲突", "phlegmatic"]] },
      { text: "哪种生活状态最吸引你？", choices: [["丰富有趣，常有惊喜", "sanguine"], ["目标明确，不断突破", "choleric"], ["精致有序，富有深度", "melancholic"], ["安稳舒适，关系和谐", "phlegmatic"]] }
    ],
    results: {
      sanguine: ["多血质 · 活泼型", "你反应灵活、热情开朗，对新鲜事物充满兴趣。建立简单的持续习惯，能帮助热情沉淀为成果。"],
      choleric: ["胆汁质 · 力量型", "你精力充沛、果断直接，遇到目标会迅速行动。给他人更多表达空间，会让协作更加顺畅。"],
      melancholic: ["抑郁质 · 思考型", "你体验深刻、观察细致，对品质有较高要求。减少过度反刍，能让敏锐成为更轻盈的优势。"],
      phlegmatic: ["黏液质 · 平稳型", "你沉着耐心、情绪稳定，擅长维持和谐与节奏。适时主动争取，会让重要机会更靠近你。"]
    }
  }
};

const savedZodiac = localStorage.getItem("zodiacIndex");
const savedHistory = JSON.parse(localStorage.getItem("testHistory") || "[]");
const state = {
  zodiac: savedZodiac === null ? 4 : Number(savedZodiac),
  activeTest: "",
  questionIndex: 0,
  answers: [],
  history: savedHistory.map((item) => typeof item === "string" ? { name: item, result: "已完成测试", date: "" } : item)
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const zodiacSheet = $("#zodiacSheet");
const testDialog = $("#testDialog");
const quizScreen = $("#quizScreen");
const zodiacGrid = $("#zodiacGrid");
let toastTimer;

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" })[character]);
}

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
  const uniqueCompleted = new Set(state.history.map((item) => item.name)).size;
  $("#completedCount").textContent = uniqueCompleted;
  $("#pendingCount").textContent = Math.max(0, 5 - uniqueCompleted);
  $("#emptyHistory").hidden = state.history.length > 0;
  $("#historyList").innerHTML = state.history.map((item) => `
    <li><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.result)}${item.date ? ` · ${escapeHTML(item.date)}` : ""}</small></li>
  `).join("");
}

function countValues(values) {
  return values.reduce((counts, value) => {
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function mostFrequent(values) {
  const counts = countValues(values);
  return values.reduce((best, value) => counts[value] > (counts[best] || 0) ? value : best, values[0]);
}

function calculateResult() {
  const test = testBank[state.activeTest];
  if (state.activeTest === "MBTI 16型人格") {
    const counts = countValues(state.answers);
    const type = `${(counts.E || 0) >= (counts.I || 0) ? "E" : "I"}${(counts.S || 0) >= (counts.N || 0) ? "S" : "N"}${(counts.T || 0) >= (counts.F || 0) ? "T" : "F"}${(counts.J || 0) >= (counts.P || 0) ? "J" : "P"}`;
    const energy = type.startsWith("E") ? "你倾向从互动与行动中获得能量" : "你倾向从独处与深入思考中恢复能量";
    const style = type[2] === "T" ? "做决定时更重视逻辑与一致性" : "做决定时更重视价值与他人感受";
    return [`${type} · 你的 MBTI 倾向`, `${energy}，${style}。这是 5 题轻量结果，可作为认识自己的起点。`];
  }
  if (state.activeTest === "大五人格测试") {
    const scores = {};
    test.questions.forEach((question, index) => { scores[question.trait] = state.answers[index]; });
    const trait = Object.keys(scores).reduce((best, key) => scores[key] > scores[best] ? key : best);
    return test.results[trait];
  }
  if (state.activeTest === "九型人格测试") {
    const type = mostFrequent(state.answers.flatMap((answer) => answer.split(",")));
    return test.results[type];
  }
  return test.results[mostFrequent(state.answers)];
}

function renderQuestion() {
  const test = testBank[state.activeTest];
  const question = test.questions[state.questionIndex];
  $("#quizTitle").textContent = state.activeTest;
  $("#quizStep").textContent = `${state.questionIndex + 1}/${test.questions.length}`;
  $("#quizProgressBar").style.width = `${((state.questionIndex + 1) / test.questions.length) * 100}%`;
  $("#questionNumber").textContent = `第 ${state.questionIndex + 1} 题`;
  $("#questionText").textContent = question.text;
  $("#previousQuestion").disabled = state.questionIndex === 0;
  $("#answerList").innerHTML = question.choices.map((choice, index) => `
    <button class="answer-button${state.answers[state.questionIndex] === choice[1] ? " is-selected" : ""}" type="button" data-choice="${index}" data-letter="${String.fromCharCode(65 + index)}">${escapeHTML(choice[0])}</button>
  `).join("");
}

function beginTest() {
  state.questionIndex = 0;
  state.answers = [];
  $("#questionPanel").hidden = false;
  $("#resultPanel").hidden = true;
  setModal(testDialog, false);
  quizScreen.hidden = false;
  document.body.style.overflow = "hidden";
  quizScreen.scrollTop = 0;
  renderQuestion();
}

function closeQuiz() {
  quizScreen.hidden = true;
  document.body.style.overflow = "";
}

function finishQuiz() {
  const [title, description] = calculateResult();
  $("#questionPanel").hidden = true;
  $("#resultPanel").hidden = false;
  $("#quizStep").textContent = "完成";
  $("#quizProgressBar").style.width = "100%";
  $("#resultTitle").textContent = title;
  $("#resultDescription").textContent = description;
  state.history = state.history.filter((item) => item.name !== state.activeTest);
  state.history.unshift({ name: state.activeTest, result: title, date: new Date().toLocaleDateString("zh-CN") });
  localStorage.setItem("testHistory", JSON.stringify(state.history));
  renderHistory();
  quizScreen.scrollTop = 0;
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
$("#startTest").addEventListener("click", beginTest);
$("#exitQuiz").addEventListener("click", closeQuiz);
$("#restartTest").addEventListener("click", beginTest);
$("#finishTest").addEventListener("click", () => {
  closeQuiz();
  showToast("测试结果已保存到“我的”");
});

$("#previousQuestion").addEventListener("click", () => {
  if (state.questionIndex === 0) return;
  state.questionIndex -= 1;
  renderQuestion();
});

$("#answerList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (!button) return;
  const question = testBank[state.activeTest].questions[state.questionIndex];
  state.answers[state.questionIndex] = question.choices[Number(button.dataset.choice)][1];
  $$(".answer-button").forEach((answer) => answer.classList.toggle("is-selected", answer === button));
  $("#answerList").style.pointerEvents = "none";
  setTimeout(() => {
    $("#answerList").style.pointerEvents = "";
    if (state.questionIndex === testBank[state.activeTest].questions.length - 1) {
      finishQuiz();
    } else {
      state.questionIndex += 1;
      renderQuestion();
      quizScreen.scrollTop = 0;
    }
  }, 180);
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
  if (!quizScreen.hidden) closeQuiz();
  setModal(zodiacSheet, false);
  setModal(testDialog, false);
});

applyZodiac(state.zodiac);
renderToday();
renderHistory();
