// 获取模态窗口元素
const modal = document.getElementById('_signin_Window');

// 获取圆形固定按钮
const floatingButton = document.getElementById('_signin_floatingButton');

// 获取关闭按钮
const closeButton = document.getElementById('_signin_closeButton');

// 点击圆形固定按钮时打开模态窗口
floatingButton.addEventListener('click', () => {
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