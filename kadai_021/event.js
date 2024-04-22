// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // 2秒(2000ミリ秒)後にテキストを変更
  setTimeout(() => {
    // textというidを持つHTML要素を取得し、定数に代入する
    const text = document.getElementById('text');
    // テキストに「ボタンをクリックしました」というテキストを設定する
    text.textContent = 'ボタンをクリックしました';
  }, 2000); // 時間を2000ミリ秒（2秒）に設定
});