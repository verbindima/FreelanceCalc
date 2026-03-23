"use client";

import { useState } from "react";

// ─── LAUNCH PAD ────────────────────────────────────────────────────────────────
// Приватная страница для быстрой дистрибуции.
// Всё готово к копированию — 5 действий × 2 минуты = первые пользователи.
// URL: /launch (noindex — не появится в поиске)
// ──────────────────────────────────────────────────────────────────────────────

const TG_CHANNELS = [
  {
    handle: "@THE_POMOGATOR",
    name: "THE ПОМОГАТОР",
    link: "https://t.me/THE_POMOGATOR",
    audience: "Помощь самозанятым и фрилансерам",
    message: `Привет! Сделал бесплатный калькулятор ставки фрилансера — https://freelancecalc.ru

Помогает понять, не занижает ли человек цену: вводишь желаемый доход, статус (самозанятый/ИП), часы работы — получаешь реальную часовую ставку с учётом налогов и выходных.

Может быть полезно вашей аудитории — большинство фрилансеров занижают ставку не потому что не умеют, а потому что не считали. Инструмент бесплатный, без регистрации.`,
  },
  {
    handle: "@freelancesz",
    name: "Фриланс самозанятые",
    link: "https://t.me/freelancesz",
    audience: "Самозанятые и налоги",
    message: `Привет! Собрал бесплатный калькулятор ставки для самозанятых фрилансеров — https://freelancecalc.ru

Считает реальную ставку с учётом налога 6% (или 4%), отпуска, частичной загрузки. Часто оказывается, что фрилансеры занижают ставку на 20–40% из-за неучтённых расходов.

Думаю, будет полезно вашим подписчикам. Инструмент бесплатный, без регистрации.`,
  },
  {
    handle: "@freelansim_ru",
    name: "Фрилансим",
    link: "https://t.me/freelansim_ru",
    audience: "Общее сообщество фрилансеров",
    message: `Привет! Сделал калькулятор ставки фрилансера — https://freelancecalc.ru

Вводишь доход-цель, статус (самозанятый/ИП), часы — получаешь ставку в час и в день. Учитывает налоги, отпуск, реальную загрузку. Бесплатно, без регистрации.

Многие фрилансеры после расчёта удивляются: их ставка оказывается ниже реального минимума. Может быть полезно подписчикам.`,
  },
  {
    handle: "@freelancetaverna",
    name: "Freelance Taverna",
    link: "https://t.me/freelancetaverna",
    audience: "Обсуждение фриланса и заработка",
    message: `Привет! Запустил бесплатный инструмент для фрилансеров — https://freelancecalc.ru

Калькулятор ставки: считает сколько нужно брать в час, чтобы выйти на нужный доход с учётом налогов (самозанятый/ИП), отпуска и загрузки. Без регистрации.

Есть и платный бенчмарк — медианные ставки по 26 специальностям в 10 городах, 249 ₽. Думаю, тема актуальна для вашей аудитории.`,
  },
  {
    handle: "@selfworkru",
    name: "Selfwork",
    link: "https://t.me/selfworkru",
    audience: "Самозанятость и удалённая работа",
    message: `Привет! Сделал калькулятор ставки для самозанятых — https://freelancecalc.ru

Помогает посчитать реальную часовую ставку с учётом налога НПД, отпуска и частичной загрузки. Большинство самозанятых занижают ставку на 15–30% просто потому что не считали.

Бесплатно, без регистрации. Может быть полезно вашей аудитории.`,
  },
];

const VC_ARTICLE_TITLE = "Почему фрилансеры занижают ставку — и как это посчитать";
const VC_ARTICLE_BODY = `Большинство фрилансеров называют ставку «на глаз» — и почти всегда занижают.

Не потому что не умеют торговаться. А потому что никогда не считали, сколько им реально нужно зарабатывать в час.

**Почему ставка «на глаз» — это проигрышная стратегия**

Когда фрилансер говорит «хочу 100 000 в месяц» и делит на 20 рабочих дней × 8 часов = 625 ₽/ч — он забывает о нескольких вещах:

• **Налоги**: самозанятый отдаёт 6%, ИП — больше. Реальная ставка должна покрывать это сверху.
• **Отпуск**: 28 дней без работы — это 2 рабочих месяца в год, которые нужно заложить в ставку.
• **Реальная загрузка**: редкий фрилансер работает 8 часов 5 дней в неделю без простоев. Средняя загрузка — 60–70%.
• **Больничные и форс-мажоры**: найм даёт подушку, фриланс — нет.

Учтите всё это — и ставка 625 ₽/ч превратится в реальные 1 100–1 400 ₽/ч.

**Сколько фрилансеры реально теряют**

Если брать 900 ₽/ч вместо реальных 1 300 ₽/ч и работать 120 часов в месяц — это минус 48 000 ₽ ежемесячно. За квартал — минус 144 000 ₽.

Это не абстракция: это отпуск, который не случился, или буфер на чёрный день, которого нет.

**Как посчитать свою ставку**

Я сделал бесплатный калькулятор: https://freelancecalc.ru

Вводишь:
— желаемый доход на руки
— статус (самозанятый, ИП УСН 6% или 15%)
— сколько часов в день работаешь
— сколько дней в неделю
— сколько дней в году берёшь отпуска
— реальную загрузку

Получаешь точную часовую и дневную ставку.

Большинство, кто проверял, удивляются: их текущая ставка оказывается ниже расчётной на 20–40%.

**Бонус: сравни с рынком**

Помимо калькулятора есть PDF-бенчмарк ставок по 26 специальностям в 10 городах России (Москва, СПб, Казань, Краснодар и ещё 6 городов). Джун / мид / сеньор, данные Q1 2026.

Стоит 249 ₽ — дешевле чашки кофе, а даёт понимание, где ты находишься относительно рынка: https://freelancecalc.ru/benchmark

---

Посчитайте свою ставку — потом удивитесь, почему не сделали это раньше.`;

function CopyBlock({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <pre className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed overflow-auto max-h-52">
        {text}
      </pre>
      <button
        onClick={handleCopy}
        className={`mt-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
          copied
            ? "bg-green-100 text-green-700 border border-green-300"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        {copied ? "✓ Скопировано!" : `📋 Скопировать ${label}`}
      </button>
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
      />
      <span className={`text-sm transition-all ${checked ? "line-through text-gray-400" : "text-gray-700"}`}>
        {label}
      </span>
    </label>
  );
}

export default function LaunchContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="bg-indigo-600 rounded-2xl p-6 mb-8 text-white">
          <div className="text-3xl mb-2">🚀</div>
          <h1 className="text-2xl font-bold mb-2">Launch Pad — FreelanceCalc</h1>
          <p className="text-indigo-200 text-sm leading-relaxed">
            Трафик = 0. Контент готов. Нужно только отправить.<br />
            5 DM + 1 статья на vc.ru = первые пользователи сегодня.
            <strong className="text-white"> Скопируй → вставь → отправь.</strong>
          </p>
        </div>

        {/* Checklist */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-8">
          <h2 className="font-bold text-gray-800 mb-4">📋 Прогресс запуска</h2>
          <div className="space-y-3">
            {TG_CHANNELS.map((ch) => (
              <CheckItem key={ch.handle} label={`Написал в ${ch.handle} (2 мин)`} />
            ))}
            <CheckItem label="Опубликовал статью на vc.ru (5 мин)" />
          </div>
        </div>

        {/* TG Channels */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            💬 Telegram-каналы — холодные DM
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-5 text-sm text-blue-800">
            <strong>Алгоритм:</strong> скопируй текст ниже → открой канал по ссылке → найди кнопку «Написать» (обычно под аватаром) → вставь → отправь.
          </div>

          <div className="space-y-6">
            {TG_CHANNELS.map((ch) => (
              <div key={ch.handle} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="font-bold text-gray-800">{ch.name}</div>
                    <div className="text-xs text-gray-500">{ch.audience}</div>
                  </div>
                  <a
                    href={ch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm font-semibold text-[#229ED9] hover:text-[#1a8bc4] flex items-center gap-1"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    {ch.handle}
                  </a>
                </div>
                <CopyBlock text={ch.message} label="сообщение" />
              </div>
            ))}
          </div>
        </section>

        {/* vc.ru Article */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            📝 Статья на vc.ru
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-5 text-sm text-blue-800">
            <strong>Алгоритм:</strong> скопируй текст → открой{" "}
            <a
              href="https://vc.ru/write"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              vc.ru/write
            </a>{" "}
            → вставь заголовок и текст → добавь теги <strong>Фриланс, Инструменты</strong> → опубликуй.
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="font-bold text-gray-800 mb-1">{VC_ARTICLE_TITLE}</div>
            <div className="text-xs text-gray-500 mb-3">~5 минут на публикацию</div>

            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Заголовок</div>
              <CopyBlock text={VC_ARTICLE_TITLE} label="заголовок" />
            </div>

            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Текст статьи</div>
              <CopyBlock text={VC_ARTICLE_BODY} label="текст статьи" />
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <strong>⚡ Почему это важно прямо сейчас:</strong> сайту 3 дня, трафик = 0.
          Каждый день без дистрибуции — потерянная выдача в органике (поисковики видят заброшенный сайт).
          5 DM + 1 статья = 300–1 000 первых посетителей за 48 часов.
        </div>
      </div>
    </div>
  );
}
