document.getElementById('btn_search').addEventListener('click', () => {
  const text = document.getElementById('text_search').value;
  if (text === 'お前を消す方法') {
    window.api.close();
    return;
  }
  window.api.open(text);
})