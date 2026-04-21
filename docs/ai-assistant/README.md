# AI Asistan Geliştirme Rehberi

Projeye dair her türlü geliştirme, hata ayıklama veya sistem analizi talebinde; öncelikle bu klasördeki (docs/ai-assistant/) dökümanları dikkate alarak hareket ediniz.

## 1. Mimari Prensipler
- **Backend (Laravel):**
  - **Katmanlı Yapı:** Controller'lar ince (thin) olmalı. Sadece Request karşılama ve Response döndürme işlemleri yapılmalıdır.
  - **Action/Service:** Tüm Business Logic Action veya Service sınıflarında barınmalıdır.
  - **Repository Pattern:** Veritabanı ile doğrudan iletişim kuran yer Repository Interface ve Implementation'larıdır.
  - **Validation & Serialization:** Veri doğrulamaları Form Request ile, yanıt şekillendirmesi API Resource ile yapılmalıdır.
- **Frontend (Next.js):**
  - **RSC Mimarisi:** Server Component ile Client Component ayrımına tam uyulmalıdır. İnteraktif olmayan listelemeler Server, formlar Client üzerinde çalıştırılmalıdır.
  - **State Yönetimi:** Minimal düzeyde olmalıdır. Ekstra paketler yerine kendi içindeki Query Params veya Local State tercih edilmelidir.

## 2. Docker Kullanım Kuralları
Terminal komutları mutlaka aşağıdaki gibi çalıştırılmalıdır:
- PHP, Artisan, Composer ve Laravel komutları: `docker-compose exec app [komut]`
- Node, NPM, Vite komutları: `docker-compose exec node [komut]`
- Veritabanı komutları: `docker-compose exec db [komut]` (Gerektiğinde MySQL CLI için)

## 3. Çalışma Prensipleri
- Kodlar son derece okunabilir (Clean Code), modern standartlara ve strict-typing özelliklerine uygun olmalıdır.
- Hata yönetimi (Exception Handling) proaktif olarak ele alınmalıdır.
- Son kullanıcıya/müşteriye yönelik sunulacak açıklamalar ya da planlar Daima **TÜRKÇE** dilinde yazılmalıdır.
