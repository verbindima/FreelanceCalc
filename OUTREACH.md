# FreelanceCalc — Outreach Kit (March 2026)

URL: https://freelancecalc.ru
Goal: drive free tool usage → upsell PDF (249 ₽) → РСЯ impressions

---

## Priority Stack (ROI order)

| # | Channel | Effort | Expected traffic | Free? |
|---|---------|--------|-----------------|-------|
| 1 | **vc.ru article** | 2h write | 500–2000 organic/month | ✅ |
| 2 | **Habr article** | 2h write | 200–800 (dev audience) | ✅ |
| 3 | **Kadrof.ru listing** | 15 min email | Passive long-tail | ✅ |
| 4 | **Telegram chats** (rate Q&A trigger) | 30 min/day | 50–200 spikes | ✅ |
| 5 | **VK groups** | 30 min post | 100–300 | ✅ |

---

## 0. Персонализированные страницы (embed-виджет аутрич) — СДЕЛАНО

По тактике @dindex (17 марта): вместо холодного спама — персональная страница.
Каждая страница показывает имя сайта-адресата, живой виджет и embed-код.

| Сайт | Персональная страница |
|------|----------------------|
| VC.ru | freelancecalc-one.vercel.app/dlya/vc |
| Habr | freelancecalc-one.vercel.app/dlya/habr |
| Kadrof.ru | freelancecalc-one.vercel.app/dlya/kadrof |
| Tproger | freelancecalc-one.vercel.app/dlya/tproger |
| Freelancehunt | freelancecalc-one.vercel.app/dlya/freelancehunt |
| RB.ru | freelancecalc-one.vercel.app/dlya/rb |

**Шаблон письма (универсальный):**
```
Тема: [Сайт], вот инструмент для ваших читателей

Привет!

Видел ваши статьи о фрилансе/ставках. Сделал страницу специально для вас:
freelancecalc-one.vercel.app/dlya/[site]

Там живой калькулятор и код для вставки — один тег, бесплатно.
Читатели считают ставку прямо в статье, не уходя на другой сайт.

— Дмитрий
```

**Где найти контакты:**
- VC.ru: https://vc.ru/about → редактор рубрики HR/Карьера
- Habr: профиль автора → личные сообщения (если открыт)
- Kadrof: contact@kadrof.ru
- Tproger: https://tproger.ru/about → редакция
- Freelancehunt: https://freelancehunt.com/blog → форма обратной связи

---

## 1. vc.ru Article (HIGHEST PRIORITY)

**Title:** `Как фрилансеру посчитать свою ставку: формула + бесплатный калькулятор`

**Section:** HR / Карьера → https://vc.ru/hr
**Publish time:** вторник–четверг, 11:00–14:00 МСК

**Full draft:**

---

Многие фрилансеры называют цену «на глаз» — и регулярно продешевляют. Особенно в начале: берут 800 ₽/час, работают 160 часов в месяц, а потом обнаруживают, что на руки пришло 90 тысяч и никакого оплачиваемого отпуска.

Проблема не в лени. Проблема в том, что ставка должна покрывать:
- **налоги** (самозанятый — 6%, ИП УСН — 6–15%, ООО — дороже)
- **нерабочее время** — выходные, больничные, отпуск
- **простой** — время на поиск клиентов, переговоры, оценки

### Формула ставки фрилансера

Базовая математика выглядит так:

```
Ставка = Желаемый доход на руки ÷ (Рабочих часов в месяц × % загрузки) × Налоговый коэффициент
```

**Пример для самозанятого:**
- Хочу 150 000 ₽ в месяц
- Работаю 8 ч × 22 дня = 176 ч, минус отпуск (~14 дней/год) → ~164 ч
- Реальная загрузка: 70% (остальное — поиск клиентов) → 115 ч оплачиваемых
- Налог самозанятого с физлиц: 4% → коэффициент 1.042
- **Ставка: 150 000 ÷ 115 × 1.042 = ~1360 ₽/час**

Большинство фрилансеров, называя 800–1000 ₽/час, реально получают 60–80 тысяч. А не 150.

### Бесплатный калькулятор

Чтобы не считать вручную, я сделал [калькулятор ставки фрилансера](https://freelancecalc.ru) — вводите желаемый доход, налоговый режим, часы и отпуск, получаете готовую ставку.

Инструмент бесплатный, без регистрации.

### Ориентиры по рынку

Отдельно выпускаю PDF с медианными ставками по 20+ специальностям (дизайнер, разработчик, копирайтер, SMM и т.д.) в разбивке по городам — обновляется раз в квартал. Стоит 249 ₽.

Если хотите сравнить свою ставку с рынком — [ссылка на калькулятор](https://freelancecalc.ru), там же кнопка для покупки PDF.

---

**Call-to-action в конце:** Посчитайте свою ставку → https://freelancecalc.ru

**Tags для vc.ru:** фриланс, карьера, удалённая работа, зарплаты, финансы, самозанятые

---

## 2. Habr Article

**Hub:** Фриланс (https://habr.com/ru/hubs/freelance/articles/) + Карьера
**Requires karma** — comment actively for 1–2 weeks first, or ask a friend with karma to publish

**Title:** `Почему фрилансер-разработчик в 2026 году берёт 1500 ₽/час, а не 900`

**Angle:** More technical/financial, developer-first tone

**Draft:**

---

Я собрал небольшой инструмент для расчёта почасовой ставки с учётом налогового режима и реальной загрузки: https://freelancecalc.ru

Вот что происходит с типичным разработчиком, который говорит «я беру 1000 ₽/час»:

| Параметр | Значение |
|---|---|
| Рабочих часов в месяц (8ч × 22д) | 176 |
| Минус отпуск (28 дней/год) | −19 |
| Эффективная загрузка (70%) | 110 ч оплачиваемых |
| Ставка 1000 ₽ × 110 ч | 110 000 ₽ брутто |
| Налог самозанятого (4%, с физлиц) | −4 400 ₽ |
| **На руки** | **105 600 ₽** |

При этом человек хотел 150 000. Разрыв — 44 400 ₽. Это не маленькая погрешность, это треть желаемого дохода.

Калькулятор: https://freelancecalc.ru (бесплатно, без регистрации)

---

## 3. Kadrof.ru Listing

**Action:** Email contact@kadrof.ru
**Subject:** `Бесплатный инструмент для фрилансеров — калькулятор ставки`

**Body:**

```
Здравствуйте!

Хотел предложить добавить бесплатный инструмент в вашу базу ресурсов:

Название: FreelanceCalc — Калькулятор ставки фрилансера
URL: https://freelancecalc.ru
Описание: Бесплатный калькулятор почасовой/дневной/месячной ставки с учётом
налогового режима (самозанятый, ИП УСН, ООО), загрузки и отпускных дней.
Без регистрации.

Kadrof собирает именно такие инструменты — подумал, что это будет полезно
вашим читателям.

Спасибо!
```

**Also email:** редакция цифровых воротничков → https://digital-collars.ru (contact form)

---

## 4. Telegram Chats — Trigger Script

**Target chats:**
- `@frilanc` (Фриланс, удалёнка, работа)
- `@Koteyka_Freelancer` (Фриланс Котики)
- Any IT/design/copywriting chat where "сколько брать" questions come up

**Strategy:** DO NOT spam. Monitor chats for trigger phrases, then reply helpfully.

**Trigger phrases to watch:**
- "сколько брать за..."
- "какую ставку поставить"
- "как считать почасовку"
- "как поднять ставку"
- "сколько стоит час"
- "не знаю сколько просить"

**Reply template (natural, not salesy):**

```
Считал так же вручную, пока не сделал калькулятор под это —
https://freelancecalc.ru
Учитывает налоговый режим, отпуск, реальную загрузку. Бесплатно.
```

**Shorter variant:**
```
Есть калькулятор с учётом налогов и загрузки: https://freelancecalc.ru —
бесплатно, без регистрации
```

---

## 5. VK Groups

**Target groups:**
- https://vk.com/frilansfree (Клуб фрилансеров)
- Search: "фриланс удалёнка" (top 3–4 results)
- Copywriter/designer/SMM niche groups

**Post template:**

```
Бесплатный калькулятор ставки фрилансера 👆

Ввожь желаемый доход на руки → выбираешь налоговый режим (самозанятый / ИП)
→ указываешь часы и отпуск → получаешь готовую почасовую ставку + оценку налогов.

Без регистрации: https://freelancecalc.ru

Отдельно есть PDF с медианными ставками по 20+ профессиям (249 ₽) —
можно сравнить себя с рынком.
```

---

## 6. Weekly Cadence (Maintenance)

| Day | Action |
|-----|--------|
| Mon | Scan Telegram chats for trigger phrases, reply |
| Wed | Check vc.ru article comments, reply |
| Fri | 1 new VK group post (rotate groups) |
| Monthly | Email 1 new directory/blog for listing |

---

## Metrics to Track

- Sessions from organic search (Yandex) — goal: 500/week in 60 days
- Sessions from Telegram (UTM: `?utm_source=telegram&utm_medium=chat`)
- Sessions from vc.ru (UTM: `?utm_source=vcru&utm_medium=article`)
- PDF purchases (target: 5/week after month 2)

**UTM template:**
```
https://freelancecalc.ru?utm_source=vcru&utm_medium=article&utm_campaign=rate-formula
https://freelancecalc.ru?utm_source=telegram&utm_medium=chat&utm_campaign=q-and-a
https://freelancecalc.ru?utm_source=vk&utm_medium=post&utm_campaign=group-outreach
```

---

*Sources: [vc.ru/hr/2217734](https://vc.ru/hr/2217734-frilans-v-telegram-top-kanaly-i-sayty-dlya-zakazov) | [kadrof.ru/articles/38427](https://www.kadrof.ru/articles/38427) | [partnerkin.com](https://partnerkin.com/blog/articles/freelance-telegram-kanaly) | [habr.com/ru/hubs/freelance/](https://habr.com/ru/hubs/freelance/articles/)*
