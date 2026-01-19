# VideoDownloader For Youtube
[![Python](https://img.shields.io/badge/Python-3.12+-blue?logo=python&logoColor=white)](https://www.python.org/)  
[![GUI](https://img.shields.io/badge/GUI-Eel%20%2B%20HTML%2FCSS%2FJS-3776AB)](https://github.com/python-eel/Eel)  
[![yt-dlp](https://img.shields.io/badge/Core-yt--dlp-red)](https://github.com/yt-dlp/yt-dlp)  
[![Build](https://img.shields.io/badge/Build-PyInstaller-orange)](https://www.pyinstaller.org/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## ENG

**VideoDownloader** — lightweight desktop application for downloading videos and audio using **yt-dlp** with a clean graphical interface.  
Designed for users who want a **simple, standalone downloader** without relying on browser extensions or online services.

The application is especially useful in environments with **whitelists / restricted access**, where web-based download services are blocked, but direct video access is allowed.

Frontend is built with **pure HTML/CSS/JS**, backend in **Python**, wrapped into a desktop window using **Eel**.

---

## Features

- Download videos and audio from supported platform (YouTube via yt-dlp)
- Full access to **all available formats** (`yt-dlp -F`)
- Clear console output showing:
  - format extraction
  - download progress
  - errors and logs
- Manual format selection (audio only / video only / full)
- Directory chooser for saving files
- Works in **whitelisted networks** (no online services required)
- Ideal for users who **don’t have any desktop video download software**
- Minimalistic, distraction-free dark UI
- Easily portable and packable into a single `.exe`

---

## RU

**VideoDownloader** — лёгкое приложение для скачивания видео и аудио на базе **yt-dlp** с аккуратным интерфейсом.  
Создано для тех, кому нужен **простой и надёжный загрузчик** без браузерных расширений и сомнительных онлайн-сервисов.

Особенно полезно в условиях **белых списков и ограниченного доступа**, где сайты-загрузчики заблокированы, но прямой доступ к видео разрешён.

Фронтенд написан на **HTML/CSS/JS**, бэкенд — **Python**, приложение работает как desktop-программа через **Eel**.

---

## Возможности

- Скачивание видео и аудио с поддерживаемого сервиса (YouTube через yt-dlp)
- Получение **полного списка форматов** (`yt-dlp -F`)
- Встроенная консоль:
  - вывод форматов
  - лог скачивания
  - сообщения об ошибках
- Ручной выбор формата (audio only / video only / полное видео)
- Выбор директории сохранения
- Работает в сетях с **белыми списками**
- Подходит тем, у кого **нет сервиса для скачивания видео на ПК**
- Минималистичный тёмный интерфейс без лишних элементов
- Лёгкая сборка в один `.exe` файл

---

## Installation & Usage / Установка и использование

### 1. Install Python  / Установите Питон
  
https://www.python.org/downloads/

---

### 2. Clone repository and package it / Клонировать репозиторий и собрать его

```bash
git clone https://github.com/USERNAME/VideoDownloader.git
cd VideoDownloader
python -m eel main.py web --onefile --windowed --noconsole