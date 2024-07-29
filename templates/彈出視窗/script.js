// 获取模态窗口元素
const modal = document.getElementById('myModal');

// 获取可点击的div
const clickableDiv = document.querySelector('.clickable-div');

// 获取关闭按钮
const closeButton = document.querySelector('.close');

// 点击可点击的div时打开模态窗口
clickableDiv.addEventListener('click', () => {
  modal.style.display = 'block';
});

// 点击关闭按钮时关闭模态窗口
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// 点击模态窗口外部时关闭模态窗口
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
