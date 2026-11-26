const copyButton = document.querySelector('#copy-sql');
const source = document.querySelector('#sql-source');
const status = document.querySelector('#copy-status');

copyButton.hidden = !navigator.clipboard?.writeText;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(source.textContent);
    status.textContent = 'SQL kodi nusxalandi.';
  } catch {
    status.textContent = 'Nusxalanmadi. Kodni qo‘lda belgilang.';
  }
});
