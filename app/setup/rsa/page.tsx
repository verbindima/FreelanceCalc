import type { Metadata } from "next";

// Force SSR — never cache at CDN edge (Russian Vercel PoPs had stale 404 issues)
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Подключение РСЯ — FreelanceCalc Setup",
  robots: { index: false, follow: false },
};

export default function RSASetupPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            🔧 ADMIN SETUP — не индексируется
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Подключение РСЯ к FreelanceCalc
          </h1>
          <p className="text-gray-600">4 шага · ~12 минут · после этого реклама появится на сайте</p>
        </div>

        {/* Current status */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-8">
          <div className="text-sm font-semibold text-gray-700 mb-3">Текущий статус:</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span>Код рекламы встроен в сайт (YandexAd.tsx)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span>Два позиции готовы: под шапкой + под калькулятором</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">❌</span>
              <span>
                <code className="bg-gray-100 px-1 rounded text-xs">NEXT_PUBLIC_YANDEX_AD_ENABLED</code>{" "}
                не выставлен → реклама скрыта
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">❌</span>
              <span>Block ID не добавлены в Vercel</span>
            </div>
          </div>
        </div>

        {/* === BANNER SIZE EXPLAINER === */}
        <div className="bg-white border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-gray-900 mb-1">📐 Про размеры баннеров</h2>
          <p className="text-sm text-gray-600 mb-4">
            Выбираем <strong>адаптивный</strong> формат — Яндекс сам подбирает размер.
            Тебе не нужно вводить никакие пиксели. Вот что получится:
          </p>

          {/* Device breakdown */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {/* Mobile */}
            <div className="text-center">
              <div className="text-2xl mb-1">📱</div>
              <div className="font-semibold text-xs text-gray-700 mb-2">Телефон</div>
              <div className="border-2 border-blue-300 rounded-lg bg-blue-50 p-2">
                <div className="bg-blue-200 rounded text-center py-1 text-xs font-mono text-blue-800">
                  320px
                </div>
                <div className="text-center text-xs text-blue-600 mt-1">↕ 50–100px</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">баннер или плитки</div>
            </div>
            {/* Tablet */}
            <div className="text-center">
              <div className="text-2xl mb-1">💻</div>
              <div className="font-semibold text-xs text-gray-700 mb-2">Планшет</div>
              <div className="border-2 border-purple-300 rounded-lg bg-purple-50 p-2">
                <div className="bg-purple-200 rounded text-center py-1 text-xs font-mono text-purple-800">
                  600–900px
                </div>
                <div className="text-center text-xs text-purple-600 mt-1">↕ 90–250px</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">горизонтальный баннер</div>
            </div>
            {/* Desktop */}
            <div className="text-center">
              <div className="text-2xl mb-1">🖥️</div>
              <div className="font-semibold text-xs text-gray-700 mb-2">Десктоп</div>
              <div className="border-2 border-green-300 rounded-lg bg-green-50 p-2">
                <div className="bg-green-200 rounded text-center py-1 text-xs font-mono text-green-800">
                  100% ширина
                </div>
                <div className="text-center text-xs text-green-600 mt-1">↕ 90–250px</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">лидерборд / биллборд</div>
            </div>
          </div>

          {/* Site mockup: where banners appear */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mb-3">
            <div className="bg-gray-700 text-white text-xs px-3 py-1.5 font-mono">
              freelancecalc.ru — схема расположения баннеров
            </div>
            <div className="bg-white p-3 space-y-2">
              {/* Header */}
              <div className="bg-slate-100 border border-slate-200 rounded px-3 py-2 text-xs text-slate-600 text-center">
                🔝 Шапка сайта (логотип + навигация)
              </div>
              {/* Top ad */}
              <div className="border-2 border-dashed border-blue-400 bg-blue-50 rounded px-3 py-3 text-center">
                <div className="text-blue-600 font-bold text-xs">📢 БАННЕР №1 (верхний)</div>
                <div className="text-blue-500 text-xs">min-height: 90px · 100% ширины</div>
                <div className="text-blue-400 text-xs">↑ Первый что видит пользователь</div>
              </div>
              {/* Calculator */}
              <div className="bg-slate-100 border border-slate-200 rounded px-3 py-4 text-xs text-slate-600 text-center">
                🧮 Калькулятор ставки (основной контент)
              </div>
              {/* Bottom ad */}
              <div className="border-2 border-dashed border-purple-400 bg-purple-50 rounded px-3 py-4 text-center">
                <div className="text-purple-600 font-bold text-xs">📢 БАННЕР №2 (нижний)</div>
                <div className="text-purple-500 text-xs">min-height: 250px · 100% ширины</div>
                <div className="text-purple-400 text-xs">↑ После того как посчитал ставку</div>
              </div>
            </div>
          </div>

          {/* Key sizes table */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="text-left px-3 py-2">Позиция</th>
                  <th className="text-center px-3 py-2">Мин. высота</th>
                  <th className="text-center px-3 py-2">Ширина</th>
                  <th className="text-left px-3 py-2">Тип</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-200">
                  <td className="px-3 py-2 font-medium">Верхний (Top)</td>
                  <td className="px-3 py-2 text-center font-mono">90px</td>
                  <td className="px-3 py-2 text-center font-mono">100%</td>
                  <td className="px-3 py-2 text-green-700 font-bold">Адаптивный</td>
                </tr>
                <tr className="border-t border-gray-200 bg-white">
                  <td className="px-3 py-2 font-medium">Нижний (Bottom)</td>
                  <td className="px-3 py-2 text-center font-mono">250px</td>
                  <td className="px-3 py-2 text-center font-mono">100%</td>
                  <td className="px-3 py-2 text-green-700 font-bold">Адаптивный</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Минимальная высота — это только для предотвращения прыжков страницы при загрузке.
            Реальный размер Яндекс определяет сам в зависимости от устройства и аукциона.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-4 p-4 border-b border-gray-100 bg-gray-50">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Зарегистрируй сайт в РСЯ</div>
              </div>
              <div className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded-full">
                5 мин
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-3">
                Перейди на{" "}
                <a
                  href="https://partner.yandex.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-medium"
                >
                  partner.yandex.ru
                </a>{" "}
                → нажми <strong>«Стать партнёром»</strong> → выбери <strong>«Сайт»</strong>.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400 mb-2">// Добавь сайт:</div>
                <div className="text-green-700 font-bold">freelancecalc.ru</div>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                ⏳ Модерация занимает <strong>1–3 рабочих дня</strong>. После одобрения переходи к шагу 2.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-4 p-4 border-b border-gray-100 bg-gray-50">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Создай ДВА блока — тип «Адаптивный»</div>
              </div>
              <div className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded-full">
                3 мин
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">
                В кабинете партнёра: <strong>«Мои блоки»</strong> → <strong>«Новый блок»</strong>.
                Создай <strong>два</strong> блока с такими настройками:
              </p>

              {/* Q&A box about sizes */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 mb-4">
                <div className="font-bold text-amber-900 mb-2">❓ Нужно ли вводить размеры?</div>
                <div className="text-amber-800 text-sm space-y-1">
                  <p>
                    <strong>НЕТ.</strong> При выборе типа <strong>«Адаптивный»</strong> — поля размеров
                    не появятся вообще. Это нормально.
                  </p>
                  <p>
                    Яндекс сам показывает нужный размер: 320×50px на телефоне, 728×90px на десктопе,
                    300×250px в ленте — в зависимости от контекста и аукциона.
                  </p>
                  <p className="font-bold text-amber-900">
                    Если видишь поле для ширины/высоты — значит ты выбрал «Фиксированный», а не «Адаптивный».
                  </p>
                </div>
              </div>

              {/* How to choose in Yandex interface */}
              <div className="bg-gray-900 rounded-xl p-4 mb-4 text-sm font-mono">
                <div className="text-gray-400 mb-3">// Что выбрать в интерфейсе Яндекса:</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-green-300">Тип блока: Адаптивный</span>
                    <span className="bg-green-900 text-green-300 text-xs px-2 py-0.5 rounded ml-auto">ВЫБЕРИ ЭТО</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-lg">✗</span>
                    <span className="text-red-400 line-through">Тип блока: Фиксированный</span>
                    <span className="bg-red-900 text-red-300 text-xs px-2 py-0.5 rounded ml-auto">НЕ НАДО</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-lg">—</span>
                    <span className="text-yellow-300">Размеры (ш × в): не заполняй</span>
                    <span className="bg-yellow-900 text-yellow-300 text-xs px-2 py-0.5 rounded ml-auto">ПРОПУСТИ</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Block 1 */}
                <div className="border-2 border-blue-200 rounded-xl p-4 bg-blue-50">
                  <div className="text-xs text-blue-600 font-bold uppercase mb-2">Блок 1 — верхний</div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">Название:</span>{" "}
                      <span className="font-mono bg-white px-1 rounded">FreelanceCalc Top</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Тип:</span>{" "}
                      <span className="font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                        ✅ Адаптивный
                      </span>
                    </div>
                    <div className="text-gray-500 text-xs">
                      Размеры — не трогай / не появится
                    </div>
                    <div className="bg-blue-100 rounded p-2 text-xs text-blue-700">
                      📐 Будет: 90–100px высота под шапкой
                    </div>
                  </div>
                </div>
                {/* Block 2 */}
                <div className="border-2 border-purple-200 rounded-xl p-4 bg-purple-50">
                  <div className="text-xs text-purple-600 font-bold uppercase mb-2">Блок 2 — нижний</div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">Название:</span>{" "}
                      <span className="font-mono bg-white px-1 rounded">FreelanceCalc Bottom</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Тип:</span>{" "}
                      <span className="font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                        ✅ Адаптивный
                      </span>
                    </div>
                    <div className="text-gray-500 text-xs">
                      Размеры — не трогай / не появится
                    </div>
                    <div className="bg-purple-100 rounded p-2 text-xs text-purple-700">
                      📐 Будет: 250px высота под калькулятором
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-4 p-4 border-b border-gray-100 bg-gray-50">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Скопируй ID двух блоков</div>
              </div>
              <div className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded-full">
                1 мин
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-3">
                После создания блоков Яндекс покажет код для вставки. В этом коде есть{" "}
                <strong>ID блока</strong> вида:
              </p>
              <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm mb-4">
                <div className="text-gray-500">// В коде вставки ищи строку:</div>
                <div className="mt-1">
                  blockId: <span className="text-yellow-300 font-bold">&quot;R-A-XXXXXXX-1&quot;</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border rounded-lg p-3 bg-gray-50">
                  <div className="text-xs text-gray-500 mb-1">Блок 1 (верхний) — ID:</div>
                  <div className="font-mono text-sm font-bold text-gray-800">R-A-XXXXXXX-1</div>
                </div>
                <div className="border rounded-lg p-3 bg-gray-50">
                  <div className="text-xs text-gray-500 mb-1">Блок 2 (нижний) — ID:</div>
                  <div className="font-mono text-sm font-bold text-gray-800">R-A-XXXXXXX-2</div>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Запиши оба ID — они нужны на следующем шаге.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-4 p-4 border-b border-gray-100 bg-gray-50">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Добавь три переменные в Vercel</div>
              </div>
              <div className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded-full">
                3 мин
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-3">
                Перейди в{" "}
                <a
                  href="https://vercel.com/dmitryverbin/freelancecalc/settings/environment-variables"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Vercel → Settings → Environment Variables
                </a>{" "}
                и добавь три переменные:
              </p>

              <div className="space-y-3 mb-4">
                {[
                  {
                    name: "NEXT_PUBLIC_YANDEX_AD_ENABLED",
                    value: "true",
                    desc: "Включает показ рекламы",
                  },
                  {
                    name: "NEXT_PUBLIC_AD_BLOCK_ID_TOP",
                    value: "R-A-XXXXXXX-1",
                    desc: "ID верхнего блока из шага 3",
                  },
                  {
                    name: "NEXT_PUBLIC_AD_BLOCK_ID_BOTTOM",
                    value: "R-A-XXXXXXX-2",
                    desc: "ID нижнего блока из шага 3",
                  },
                ].map((v) => (
                  <div key={v.name} className="border rounded-lg p-3 bg-gray-900 font-mono text-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="text-blue-400">{v.name}</div>
                        <div className="text-green-400">{v.value}</div>
                      </div>
                      <div className="text-gray-500 text-xs text-right max-w-[140px]">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                <strong>После сохранения:</strong> нажми <strong>«Redeploy»</strong> на вкладке
                Deployments (или сделай любой пустой git commit). Реклама появится через 5–10 минут.
                Первые часы блок может быть пустым — это нормально, Яндекс начнёт показывать
                рекламу после накопления статистики.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800">
          <strong>Готово?</strong> После Redeploy открой{" "}
          <a
            href="https://freelancecalc.ru"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            freelancecalc.ru
          </a>{" "}
          — реклама должна появиться в течение нескольких минут. Если в первые сутки блок пустой
          — норма. Яндекс начнёт показывать рекламу после накопления статистики.
        </div>

        <div className="mt-4 text-center text-xs text-gray-400">
          Эта страница не индексируется поисковиками (noindex). Только для внутреннего использования.
        </div>
      </div>
    </div>
  );
}
