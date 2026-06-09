(function() {
    // ---------- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ БЕЗОПАСНОСТИ ----------
    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    function safeUrl(url) {
        // Разрешаем только безопасные протоколы
        const allowed = ['http://', 'https://', 'mailto:', 'ftp://'];
        const lowerUrl = String(url).toLowerCase();
        if (allowed.some(proto => lowerUrl.startsWith(proto))) {
            return escapeHtml(url);
        }
        // Блокируем всё остальное (javascript:, data: и т.д.)
        return '#';
    }

    // ---------- СТАТИЧЕСКИЕ УЧЕБНЫЕ МАТЕРИАЛЫ ----------
    const STATIC_MATERIALS = {
        school: [
            { name: "1. Безопасное поведение в социальных сетях", url: "https://disk.yandex.ru/i/nd1AjVfsvS5-GA", type: "material" },
            { name: "2. Интернет и телефонное мошенничество", url: "https://disk.yandex.ru/i/Q0MBD7yGs7L4NQ", type: "material" },
            { name: "3. Кибербуллинг", url: "https://disk.yandex.ru/i/lTGOea9Kz9cTUA", type: "material" },
            { name: "4. Покупки в Интернете", url: "https://disk.yandex.ru/i/OoMIPevX5IRLMQ", type: "material" },
            { name: "5. Цифровой след и персональные данные", url: "https://disk.yandex.ru/i/qgwKS0px9jakpw", type: "material" },
            { name: "6. Цифровой этикет", url: "https://disk.yandex.ru/i/6sAkugvCkVvvTg", type: "material" },
            { name: "1. Анонимность в сети", url: "https://disk.yandex.ru/i/ZOK9P35SuEQfhQ", type: "video" },
            { name: "2. Дипфейки", url: "https://disk.yandex.ru/i/6r_MfxLQsVhQTQ", type: "video" },
            { name: "3. Травля в Интернете", url: "https://disk.yandex.ru/d/KizB1EDWGqCY-A", type: "video" },
            { name: "4. Персональные данные", url: "https://disk.yandex.ru/d/QM9_ZgK0KsGI9A", type: "video" },
            { name: "5. Мошенничество в интернете", url: "https://disk.yandex.ru/d/qsqsaytju2MdHg", type: "video" },
            { name: "6. Фейки в сети", url: "https://disk.yandex.ru/i/5caCM-oOw3XKmg", type: "video" }
        ],
        teacher: [
            { name: "1. Основы цифровой гигиены", url: "https://disk.yandex.ru/i/PSZTGEpJxa2nuA", type: "material" },
            { name: "2. Цифровой след:Как защитить личные данные", url: "https://disk.yandex.ru/i/felfj7CnYsWPxg", type: "material" },
            { name: "3. Социальная инженерия на работе Вы — цель №1", url: "https://disk.yandex.ru/i/Y-N6q6eJVlziQw", type: "material" },
            { name: "4. Цифровой след, репутация и утечки данных", url: "https://disk.yandex.ru/i/JW7otDc2eKMQFQ", type: "material" },
            { name: "5. Цифровая безопасность на работе и дома", url: "https://disk.yandex.ru/i/qTYF4dTI6U6naQ", type: "material" },
            { name: "1. правила цифровой гигиены", url: "https://disk.yandex.ru/i/yiDYSIGNfff3VQ", type: "video" },
            { name: "2. Как безопасно вести блог", url: "https://disk.yandex.ru/d/MfFHjSfoVBUapg", type: "video" },
            { name: "3. Дипфейк как защититься", url: "https://disk.yandex.ru/i/cEJGBeWnyO0YJA", type: "video" },
            { name: "4. Фейки как защититься", url: "https://disk.yandex.ru/i/Om_mdgStmmnsQA", type: "video" },
            { name: "5. Как защитить свои персональные данные", url: "https://disk.yandex.ru/i/-LuxLica-75mmg", type: "video" },
            { name: "6. мошенничество в сети", url: "https://disk.yandex.ru/i/3e5tV68tut5-Zg", type: "video" }
        ],
        official: [
            { name: "1. Инфо-грамотность: как распознать и остановить мошенников", url: "https://disk.yandex.ru/i/ga579lgkrYQxDw", type: "material" },
            { name: "2. Интернет без страха: Как распознать обман и защитить себя", url: "https://disk.yandex.ru/i/Q_cacG0DB4qNlw", type: "material" },
            { name: "3. Цифровая крепость: как защитить данные и деньги", url: "https://disk.yandex.ru/i/JnRvE9AQ0TpLCA", type: "material" },
            { name: "4. Критическое мышление и проверка информации", url: "https://disk.yandex.ru/i/w5spWIUKv9pVKA", type: "material" },
            { name: "1. правила цифровой гигиены", url: "https://disk.yandex.ru/i/yiDYSIGNfff3VQ", type: "video" },
            { name: "2. Дипфейк как защититься", url: "https://disk.yandex.ru/i/cEJGBeWnyO0YJA", type: "video" },
            { name: "3. Фейки как защититься", url: "https://disk.yandex.ru/i/Om_mdgStmmnsQA", type: "video" },
            { name: "4. мошенничество в сети", url: "https://disk.yandex.ru/i/3e5tV68tut5-Zg", type: "video" },
            { name: "5. Как защитить свои персональные данные", url: "https://disk.yandex.ru/i/-LuxLica-75mmg", type: "video" },
            { name: "📱 Буклет: Антивирус для смартфона", url: "https://www.kaspersky.ru/resource-center", type: "brochure" },
            { name: "📄 Памятка: Защита от телефонного мошенничества (крупный шрифт)", url: "https://cbr.ru/StaticHtml/File/112853/pamyatka_moshennichestvo.pdf", type: "brochure" }
        ]
    };

    // Отрисовка страницы учебных материалов
    function renderModulePage(category) {
        const container = document.getElementById('moduleContent');
        const labels = { school: 'Подростки 15-18 лет', teacher: 'Взрослые 18-60 лет', official: 'Старшее поколение от 60 лет' };
        const materialsArray = STATIC_MATERIALS[category] || [];
        if (!labels[category]) { container.innerHTML = '<p>Категория не найдена</p>'; return; }
        const groups = { material: [], video: [], brochure: [] };
        materialsArray.forEach(item => { const type = item.type || 'material'; groups[type].push(item); });
        
        function renderItemList(items, iconDefault = 'fa-file-alt') {
            if (!items.length) return '<div class="empty-message"><i class="fas fa-info-circle"></i> Материалы в этом разделе отсутствуют, но скоро появятся.</div>';
            let ul = '<ul class="materials-list">';
            items.forEach(mat => {
                let iconClass = iconDefault;
                const urlLower = mat.url.toLowerCase();
                if (urlLower.includes('.pdf')) iconClass = 'fa-file-pdf';
                else if (urlLower.includes('youtube.com') || urlLower.includes('youtu.be')) iconClass = 'fa-video';
                else if (urlLower.includes('kaspersky') || urlLower.includes('cbr.ru') || urlLower.includes('gosuslugi')) iconClass = 'fa-shield-alt';
                // Используем safeUrl для защиты href
                ul += `<li class="material-item"><a href="${safeUrl(mat.url)}" target="_blank" rel="noopener noreferrer"><i class="fas ${iconClass}" style="color:var(--secondary);"></i> ${escapeHtml(mat.name)}</a></li>`;
            });
            ul += '</ul>';
            return ul;
        }
        const html = `
            <h2 class="section-title" style="text-align:left; margin-bottom:1.5rem;">📚 Образовательный блок: ${labels[category]}</h2>
            <div class="material-category-block">
                <h3><i class="fas fa-graduation-cap"></i> Обучающие материалы</h3>
                ${renderItemList(groups.material, 'fa-book-open')}
            </div>
            <div class="material-category-block">
                <h3><i class="fas fa-video"></i> Видеоуроки</h3>
                ${renderItemList(groups.video, 'fa-video')}
            </div>
            <div class="material-category-block">
                <h3><i class="fas fa-file-alt"></i> Памятки и инструкции</h3>
                ${renderItemList(groups.brochure, 'fa-file-pdf')}
            </div>
        `;
        container.innerHTML = html;
    }

    // ---------- КВИЗ (ТЕСТЫ) ----------
    const STATIC_MATERIALS = {
        school: [
            { name: "1. Безопасное поведение в социальных сетях", url: "https://disk.yandex.ru/i/nd1AjVfsvS5-GA", type: "material" },
            { name: "2. Интернет и телефонное мошенничество", url: "https://disk.yandex.ru/i/Q0MBD7yGs7L4NQ", type: "material" },
            { name: "3. Кибербуллинг", url: "https://disk.yandex.ru/i/lTGOea9Kz9cTUA", type: "material" },
            { name: "4. Покупки в Интернете", url: "https://disk.yandex.ru/i/OoMIPevX5IRLMQ", type: "material" },
            { name: "5. Цифровой след и персональные данные", url: "https://disk.yandex.ru/i/qgwKS0px9jakpw", type: "material" },
            { name: "6. Цифровой этикет", url: "https://disk.yandex.ru/i/6sAkugvCkVvvTg", type: "material" },
            { name: "1. Анонимность в сети", url: "https://disk.yandex.ru/i/ZOK9P35SuEQfhQ", type: "video" },
            { name: "2. Дипфейки", url: "https://disk.yandex.ru/i/6r_MfxLQsVhQTQ", type: "video" },
            { name: "3. Травля в Интернете", url: "https://disk.yandex.ru/d/KizB1EDWGqCY-A", type: "video" },
            { name: "4. Персональные данные", url: "https://disk.yandex.ru/d/QM9_ZgK0KsGI9A", type: "video" },
            { name: "5. Мошенничество в интернете", url: "https://disk.yandex.ru/d/qsqsaytju2MdHg", type: "video" },
            { name: "6. Фейки в сети", url: "https://disk.yandex.ru/i/5caCM-oOw3XKmg", type: "video" }
        ],
        teacher: [
            { name: "1. Основы цифровой гигиены", url: "https://disk.yandex.ru/i/PSZTGEpJxa2nuA", type: "material" },
            { name: "2. Цифровой след:Как защитить личные данные", url: "https://disk.yandex.ru/i/felfj7CnYsWPxg", type: "material" },
            { name: "3. Социальная инженерия на работе Вы — цель №1", url: "https://disk.yandex.ru/i/Y-N6q6eJVlziQw", type: "material" },
            { name: "4. Цифровой след, репутация и утечки данных", url: "https://disk.yandex.ru/i/JW7otDc2eKMQFQ", type: "material" },
            { name: "5. Цифровая безопасность на работе и дома", url: "https://disk.yandex.ru/i/qTYF4dTI6U6naQ", type: "material" },
            { name: "1. правила цифровой гигиены", url: "https://disk.yandex.ru/i/yiDYSIGNfff3VQ", type: "video" },
            { name: "2. Как безопасно вести блог", url: "https://disk.yandex.ru/d/MfFHjSfoVBUapg", type: "video" },
            { name: "3. Дипфейк как защититься", url: "https://disk.yandex.ru/i/cEJGBeWnyO0YJA", type: "video" },
            { name: "4. Фейки как защититься", url: "https://disk.yandex.ru/i/Om_mdgStmmnsQA", type: "video" },
            { name: "5. Как защитить свои персональные данные", url: "https://disk.yandex.ru/i/-LuxLica-75mmg", type: "video" },
            { name: "6. мошенничество в сети", url: "https://disk.yandex.ru/i/3e5tV68tut5-Zg", type: "video" }
        ],
        official: [
            { name: "1. Инфо-грамотность: как распознать и остановить мошенников", url: "https://disk.yandex.ru/i/ga579lgkrYQxDw", type: "material" },
            { name: "2. Интернет без страха: Как распознать обман и защитить себя", url: "https://disk.yandex.ru/i/Q_cacG0DB4qNlw", type: "material" },
            { name: "3. Цифровая крепость: как защитить данные и деньги", url: "https://disk.yandex.ru/i/JnRvE9AQ0TpLCA", type: "material" },
            { name: "4. Критическое мышление и проверка информации", url: "https://disk.yandex.ru/i/w5spWIUKv9pVKA", type: "material" },
            { name: "1. правила цифровой гигиены", url: "https://disk.yandex.ru/i/yiDYSIGNfff3VQ", type: "video" },
            { name: "2. Дипфейк как защититься", url: "https://disk.yandex.ru/i/cEJGBeWnyO0YJA", type: "video" },
            { name: "3. Фейки как защититься", url: "https://disk.yandex.ru/i/Om_mdgStmmnsQA", type: "video" },
            { name: "4. мошенничество в сети", url: "https://disk.yandex.ru/i/3e5tV68tut5-Zg", type: "video" },
            { name: "5. Как защитить свои персональные данные", url: "https://disk.yandex.ru/i/-LuxLica-75mmg", type: "video" },
            { name: "📱 Буклет: Антивирус для смартфона", url: "https://www.kaspersky.ru/resource-center", type: "brochure" },
            { name: "📄 Памятка: Защита от телефонного мошенничества (крупный шрифт)", url: "https://cbr.ru/StaticHtml/File/112853/pamyatka_moshennichestvo.pdf", type: "brochure" }
        ]
    };

    let currentCategory = null, currentQuestionsArr = [], currentIndex = 0, userAnswers = [];
    const categorySelectionDiv = document.getElementById('categorySelection');
    const quizAreaDiv = document.getElementById('quizArea');
    const quizContentDiv = document.getElementById('quizContent');
    const nextBtn = document.getElementById('nextBtn');
    const restartBtn = document.getElementById('restartBtn');
    const progressFill = document.getElementById('progressFill');
    const resultDetailElem = document.getElementById('resultDetail');

    function resetQuizAll() {
        currentIndex = 0;
        userAnswers = [];
        if(resultDetailElem) resultDetailElem.classList.add('hidden');
        if(restartBtn) restartBtn.classList.add('hidden');
        if(nextBtn) nextBtn.classList.add('hidden');
        if(quizAreaDiv) quizAreaDiv.classList.add('hidden');
        if(categorySelectionDiv) categorySelectionDiv.classList.remove('hidden');
        currentCategory = null;
        currentQuestionsArr = [];
    }

    function startQuiz(cat) {
        currentCategory = cat;
        currentQuestionsArr = questionSets[cat];
        currentIndex = 0;
        userAnswers = new Array(currentQuestionsArr.length).fill(null);
        categorySelectionDiv.classList.add('hidden');
        quizAreaDiv.classList.remove('hidden');
        resultDetailElem.classList.add('hidden');
        restartBtn.classList.add('hidden');
        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        const q = currentQuestionsArr[currentIndex];
        progressFill.style.width = (currentIndex / currentQuestionsArr.length * 100) + '%';
        let html = `<div class="question-text">${currentIndex+1}. ${escapeHtml(q.question)}</div><div class="options">`;
        q.options.forEach((opt,i) => {
            html += `<button class="option-btn ${userAnswers[currentIndex] === i ? 'selected' : ''}" data-idx="${i}">${escapeHtml(opt)}</button>`;
        });
        html += '</div>';
        quizContentDiv.innerHTML = html;
        document.querySelectorAll('.option-btn').forEach(btn => btn.addEventListener('click', function() {
            const idx = parseInt(this.dataset.idx);
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            userAnswers[currentIndex] = idx;
            if(nextBtn) nextBtn.classList.remove('hidden');
        }));
        nextBtn.classList.toggle('hidden', userAnswers[currentIndex] === null);
    }

    function showQuizResult() {
        let correctCount = 0;
        const details = currentQuestionsArr.map((q, idx) => {
            const userAnswerIndex = userAnswers[idx];
            const isCorrect = (userAnswerIndex !== null && userAnswerIndex === q.correct);
            if (isCorrect) correctCount++;
            const userAnswerText = (userAnswerIndex !== null && q.options[userAnswerIndex]) ? q.options[userAnswerIndex] : '—';
            return {
                question: q.question,
                userAnswer: userAnswerText,
                correctAnswer: q.options[q.correct],
                isCorrect: isCorrect
            };
        });
        quizContentDiv.innerHTML = '';
        progressFill.style.width = '100%';
        const percent = Math.round((correctCount / currentQuestionsArr.length) * 100);
        let detailHtml = `<h3>Результат: ${correctCount}/${currentQuestionsArr.length} (${percent}%) – ${percent>=80 ? 'Отлично!' : (percent>=50 ? 'Хорошо' : 'Стоит подтянуть знания')}</h3><div class="result-detail">`;
        details.forEach((d, i) => {
            detailHtml += `<p><strong>${i+1}. ${escapeHtml(d.question)}</strong><br>Ваш ответ: <span style="color:${d.isCorrect ? 'green' : 'red'};">${escapeHtml(d.userAnswer)}</span><br>Правильный: <span style="color:green;">${escapeHtml(d.correctAnswer)}</span></p>`;
        });
        detailHtml += '</div>';
        resultDetailElem.innerHTML = detailHtml;
        resultDetailElem.classList.remove('hidden');
        nextBtn.classList.add('hidden');
        restartBtn.classList.remove('hidden');
    }

    nextBtn.addEventListener('click', () => {
        if (userAnswers[currentIndex] === null) alert('Выберите вариант');
        else if (currentIndex < currentQuestionsArr.length - 1) {
            currentIndex++;
            renderQuizQuestion();
        } else showQuizResult();
    });
    restartBtn.addEventListener('click', resetQuizAll);
    document.querySelectorAll('#categorySelection .btn').forEach(btn => btn.addEventListener('click', (e) => startQuiz(btn.dataset.category)));

    // ---------- УГРОЗЫ (исправлен пустой абзац) ----------
    const threatsData = [
        { title:"Фишинг и социальная инженерия", icon:"fa-fish", fullText:"<strong>Фишинг</strong> — вид мошенничества, при котором злоумышленники выдают себя за официальные организации (банки, госуслуги) и вынуждают перейти по поддельной ссылке или сообщить пароли. <strong>Социальная инженерия</strong> использует психологические уловки: звонки от 'безопасников', поддельные СМС, просьбы от имени знакомых. Как защититься: никогда не переходите по ссылкам из подозрительных писем, включите двухфакторную аутентификацию, проверяйте адрес сайта вручную." },
        { title:"Программы-вымогатели", icon:"fa-lock", fullText:"<strong>Ransomware</strong> — вредоносное ПО, которое шифрует файлы на компьютере или сервере и требует выкуп за расшифровку. Распространяется через вложения в письмах, взломанные сайты или вредоносную рекламу. Последствия: потеря данных, финансовые потери, простой бизнеса. Защита: регулярное создание резервных копий (офлайн), обновление антивирусов, осторожность с вложениями." },
        { title:"Внутренние угрозы", icon:"fa-user-secret", fullText:"Утечки данных из-за действий сотрудников (преднамеренных или случайных). Примеры: пересылка конфиденциальных документов в личные мессенджеры, потеря флешки, слабые пароли. Минимизация: внедрение DLP-систем, обучение персонала, политика минимальных привилегий." },
        { title:"ИИ в руках злоумышленников", icon:"fa-robot", fullText:"Современные злоумышленники используют нейросети для создания глубоких подделок (дипфейков), автоматического взлома паролей, генерации фишинговых писем без грамматических ошибок. ИИ усиливает социальную инженерию. Защита: критическое мышление, проверка информации по нескольким каналам, использование менеджеров паролей." },
        { title:"Уязвимости сетей", icon:"fa-wifi", fullText:"Небезопасные Wi-Fi сети в кафе, аэропортах, устаревшие протоколы шифрования (WEP), отсутствие VPN позволяют злоумышленникам перехватывать трафик, похищать логины и сессии. Рекомендации: не подключаться к открытым сетям без VPN, использовать современные роутеры с WPA3, отключать автоматическое подключение." }
    ];

    const threatModal = document.getElementById('threatModal');
    const threatModalTitle = document.getElementById('threatModalTitle');
    const threatModalText = document.getElementById('threatModalText');
    function showThreatModal(index) {
        const threat = threatsData[index];
        if (!threat) return;
        threatModalTitle.innerHTML = `<i class="fas ${threat.icon}" style="color:var(--secondary);"></i> ${escapeHtml(threat.title)}`;
        threatModalText.innerHTML = threat.fullText; // полный текст содержит HTML-разметку, она безопасна (доверенный источник)
        threatModal.style.display = 'flex';
    }
    function closeThreatModal() { threatModal.style.display = 'none'; }
    document.getElementById('closeThreatModalBtn')?.addEventListener('click', closeThreatModal);
    document.querySelector('.closeThreatModalFooter')?.addEventListener('click', closeThreatModal);
    window.addEventListener('click', (e) => { if(e.target === threatModal) closeThreatModal(); });

    const threatsGridMain = document.getElementById('threatsGridMain');
    if(threatsGridMain) {
        threatsGridMain.innerHTML = '';
        threatsData.forEach((threat, idx) => {
            const tile = document.createElement('div');
            tile.className = 'threat-tile';
            tile.setAttribute('data-threat-index', idx);
            // Удалён пустой абзац, оставлены только иконка и заголовок
            tile.innerHTML = `<i class="fas ${threat.icon}"></i><h3>${escapeHtml(threat.title)}</h3>`;
            tile.addEventListener('click', () => showThreatModal(idx));
            threatsGridMain.appendChild(tile);
        });
    }

    // ---------- НАВИГАЦИЯ ----------
    const pages = { home: document.getElementById('page-home'), education: document.getElementById('page-education'), module: document.getElementById('page-module') };
    function showPage(pageId, param = null) {
        Object.values(pages).forEach(p => { if(p) p.classList.remove('active'); });
        if(pages[pageId]) {
            pages[pageId].classList.add('active');
            if(pageId === 'module' && param) renderModulePage(param);
            const reveals = pages[pageId].querySelectorAll('.reveal');
            reveals.forEach(el => { el.classList.remove('visible'); void el.offsetWidth; el.classList.add('visible'); });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    function handleHashChange() {
        let hash = window.location.hash.substring(1);
        if (!hash) hash = 'home';
        if (hash.startsWith('module')) {
            const params = new URLSearchParams(hash.split('?')[1] || '');
            const cat = params.get('cat');
            if (cat && ['school', 'teacher', 'official'].includes(cat)) showPage('module', cat);
            else window.location.hash = '#education';
        } else if (pages[hash]) showPage(hash);
        else window.location.hash = '#home';
    }
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('load', () => { if (!window.location.hash || window.location.hash === '#') window.location.hash = '#home'; else handleHashChange(); });
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            if (targetId.startsWith('module') || pages[targetId.split('?')[0]]) {
                e.preventDefault();
                window.location.hash = targetId;
            }
        });
    });
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            const module = card.getAttribute('data-module');
            if (module === 'school') window.location.hash = '#module?cat=school';
            else if (module === 'teacher') window.location.hash = '#module?cat=teacher';
            else if (module === 'official') window.location.hash = '#module?cat=official';
        });
    });
    document.getElementById('aboutServiceTile')?.addEventListener('click',()=>document.getElementById('aboutServiceModal').style.display='flex');
    document.getElementById('missionTile')?.addEventListener('click',()=>document.getElementById('missionModal').style.display='flex');
    document.getElementById('relevanceTile')?.addEventListener('click',()=>document.getElementById('relevanceModal').style.display='flex');
    document.querySelectorAll('.close-modal, .closeAboutModal, .closeAboutModalBtn, .closeMissionModal, .closeMissionModalBtn, .closeRelevanceModal, .closeRelevanceModalBtn').forEach(btn=>btn.addEventListener('click',()=>{ 
        document.getElementById('aboutServiceModal').style.display='none';
        document.getElementById('missionModal').style.display='none';
        document.getElementById('relevanceModal').style.display='none';
    }));
    window.addEventListener('click',(e)=>{ 
        if(e.target===document.getElementById('aboutServiceModal')) document.getElementById('aboutServiceModal').style.display='none';
        if(e.target===document.getElementById('missionModal')) document.getElementById('missionModal').style.display='none';
        if(e.target===document.getElementById('relevanceModal')) document.getElementById('relevanceModal').style.display='none';
    });
})();