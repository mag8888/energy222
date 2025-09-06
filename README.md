Energy222 — одностраничный тест

Состав
- index.html — разметка
- styles.css — стили
- script.js — логика кнопки «СТАРТ»

Загрузка в GitHub (mag8888/energy222)
1) Создайте пустой репозиторий https://github.com/mag8888/energy222 (без README/LICENCE, чтобы push прошёл без merge).
2) В терминале из этой папки выполните:

   git init
   git add .
   git commit -m "feat: initial single-page with START button"
   git branch -M main
   git remote add origin https://github.com/mag8888/energy222.git
   git push -u origin main

   # если используете SSH:
   # git remote add origin git@github.com:mag8888/energy222.git

Деплой на Render как Static Site
- Create New → Static Site
- Repository: mag8888/energy222
- Branch: main
- Build Command: (оставьте пустым) или echo "no build"
- Publish Directory: .
- Create Static Site

Проверка
- Откройте выданный Render URL → должна загрузиться страница с кнопкой «СТАРТ».

