import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Подключение РСЯ — FreelanceCalc Setup",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    num: 1,
    title: "Зарегистрируй сайт в РСЯ",
    time: "5 мин",
    done: false,
    content: (
      <>
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
      </>
    ),
  },
  {
    num: 2,
    title: 'Создай ДВА блока — тип "Адаптивный"',
    time: "3 мин",
    done: false,
    content: (
      <>
        <p className="text-gray-700 mb-4">
          В кабинете партнёра: <strong>«Мои блоки»</strong> → <strong>«Новый блок»</strong>.
          Создай <strong>два</strong> блока с такими настройками:
        </p>

        {/* Visual: what to choose */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
              <div className="text-red-600 text-xs">
                ⛔ НЕ выбирай "Фиксированный" — размер вводить не нужно!
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
              <div className="text-red-600 text-xs">
                ⛔ НЕ выбирай "Фиксированный" — размер вводить не нужно!
              </div>
            </div>
          </div>
        </div>

        {/* Adaptive explanation */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
          <strong>Почему адаптивный?</strong> Яндекс сам выбирает оптимальный размер рекламы
          в зависимости от устройства и доступного места. На мобильном — ~320px ширина,
          на десктопе — полная ширина колонки. Высоту Яндекс выбирает автоматически (90–250px).
          Ты <strong>не вводишь никаких размеров</strong>.
        </div>
      </>
    ),
  },
  {
    num: 3,
    title: "Скопируй ID двух блоков",
    time: "1 мин",
    done: false,
    content: (
      <>
        <p className="text-gray-700 mb-3">
          После создания блоков Яндекс покажет код для вставки. В этом коде есть{" "}
          <strong>ID блока</strong> вида:
        </p>
        <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm mb-4">
          <div className="text-gray-500">// В коде вставки ищи строку:</div>
          <div className="mt-1">
            blockId:{" "}
            <span className="text-yellow-300 font-bold">"R-A-XXXXXXX-1"</span>
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
      </>
    ),
  },
  {
    num: 4,
    title: "Добавь три переменные в Vercel",
    time: "3 мин",
    done: false,
    content: (
      <>
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
          Первые часы блок может быть пустым — это нормально, Яндекс наполняет постепенно.
        </div>
      </>
    ),
  },
];

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
          <p className="text-gray-600">
            4 шага · ~12 минут · после этого реклама появится на сайте
          </p>
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

        {/* Steps */}
        <div className="space-y-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-4 p-4 border-b border-gray-100 bg-gray-50">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{step.title}</div>
                </div>
                <div className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded-full">
                  {step.time}
                </div>
              </div>
              <div className="p-4">{step.content}</div>
            </div>
          ))}
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
