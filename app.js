function increment() {
  let count = document.getElementById("count");
  count.innerText = Number(count.innerText) + 1;
}

// テスト用
function add(a, b) {
  return a + b;
}

module.exports = { add };