"use strict";

{
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    const results = [
      "天才!!",
      "凡人。",
      "凡人。",
      "凡人。",
      "凡人。",
      "凡人。",
      "凡人。",
      "只者…",
      "只者…",
      "只者…",
      "一般人",
      "一般人",
      "一般人",
      "一般人",
      "一般人",
      "並みの者",
      "並みの者",
      "並みの者",
      "並みの者",
      "フツーの人",
      "フツーの人",
      "フツーの人",
      "フツーの人",
      "フツーの人",
      "フツーの人",
      "フツーの人",
      "標準的な人",
      "標準的な人",
      "標準的な人",
      "パンピー",
      "パンピー",
      "市民",
      "市民",
    ];
    btn.textContent = results[Math.floor(Math.random() * results.length)];

    // const n = Math.random();
    // if (n < 0.05) {
    //   btn.textContent = "天才!!";
    // } else if (n < 0.1) {
    //   btn.textContent = "市民";
    // } else if (n < 0.1) {
    //   btn.textContent = "凡人。";
    // } else if (n < 0.15) {
    //   btn.textContent = "フツーの人";
    // } else if (n < 0.15) {
    //   btn.textContent = "パンピー";
    // } else if (n < 0.15) {
    //   btn.textContent = "一般人";
    // } else if (n < 0.15) {
    //   btn.textContent = "標準的な人";
    // } else {
    //   btn.textContent = "只者…";
    // }
  });
}
