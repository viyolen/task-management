# Task Management App

Laravel 11 API ve Next.js 14 ile geliştirilmiş görev yönetim uygulaması.

### Tech Stack
- Backend: Laravel 11 - Repository ve Action desenleri kullanıldı.
- Frontend: Next.js 14 - Tailwind CSS.
- Database: MySQL 8.0.
- Infrastructure: Docker.

---

### Kurulum

Projeyi çalıştırmak için:
```bash
docker-compose up -d --build
```

#### Backend işlemleri
```bash
docker-compose exec app composer install
docker-compose exec app cp .env.example .env
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan migrate --seed
```

#### Frontend işlemleri
```bash
docker-compose exec node npm install
```

---

### Port ve Linkler
- Frontend: http://localhost:3001/tasks
- API: http://localhost:8000/api/v1
- MySQL Port: 3310

### Notlar
- Uygulama Docker üzerinde çalışıyor.
- API rotaları bootstrap/app.php içindedir.
- SSR için container arası haberleşmede nginx hostname kullanılır.
