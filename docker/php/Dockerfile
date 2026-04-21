FROM php:8.2-fpm

# Gerekli sistem paketlerinin yüklenmesi
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libonig-dev \
    libxml2-dev \
    libzip-dev

# PHP Uzantılarının yüklenmesi
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Composer yüklenmesi
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Çalışma dizininin ayarlanması
WORKDIR /var/www

# İzinlerin ayarlanması
RUN chown -R www-data:www-data /var/www

EXPOSE 9000

CMD ["php-fpm"]
