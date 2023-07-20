// 点击了改变按钮
document.querySelector(".change").addEventListener("click", () => {
  document.querySelector("#icon").src = "space.jpg";
});

// 点击了复原按钮
document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector("#icon").src = "lion.jpg";
});
