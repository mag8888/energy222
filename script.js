const $ = (s) => document.querySelector(s);

const start = async () => {
  const status = $('#status');
  status.textContent = 'Запуск...';
  try {
    // Просто визуальный отклик. Здесь можно дернуть health сервера.
    await new Promise(r => setTimeout(r, 400));
    status.textContent = 'Готово ✅';
    alert('СТАРТ! Тестовая страница работает.');
  } catch (e) {
    status.textContent = 'Ошибка ❌';
  }
};

$('#startBtn').addEventListener('click', start);

