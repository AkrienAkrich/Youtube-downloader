function log(text) {
    const consoleEl = document.getElementById("console");
    consoleEl.innerText += text + "\n";
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

async function fetchFormats() {
    const url = document.getElementById("url").value;
    if (!url) {
        alert("Вставь ссылку");
        return;
    }

    const consoleEl = document.getElementById("console");
    consoleEl.innerText = "Получение форматов...\n";

    const result = await eel.get_formats(url)();
    consoleEl.innerText = result || "Форматы не найдены";
}

async function chooseDir() {
    const dir = await eel.choose_directory()();
    document.getElementById("directory").innerText = dir || "не выбрана";
}

async function download() {
    const url = document.getElementById("url").value;
    const format = document.getElementById("format_code").value;
    const dir = document.getElementById("directory").innerText;

    if (!url || !format || dir === "не выбрана") {
        alert("Заполни все поля");
        return;
    }

    const consoleEl = document.getElementById("console");
    consoleEl.innerText = "Начало загрузки...\n";

    const result = await eel.download_video(url, format, dir)();
    log(result);
}
