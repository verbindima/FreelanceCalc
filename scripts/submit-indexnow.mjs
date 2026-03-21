/**
 * IndexNow batch submission script
 * Submits the top ~100 priority URLs to Bing and Yandex IndexNow APIs.
 * Run AFTER deploy: node scripts/submit-indexnow.mjs
 *
 * IndexNow protocol: https://www.indexnow.org/
 * Both Bing and Yandex support it — no Webmaster verification required.
 */

const KEY = "freelancecalc9a3f2b7e4c1d8a6b";
const HOST = "freelancecalc.ru";
const BASE = `https://${HOST}`;

// Priority URLs — top pages most likely to rank first
const PRIORITY_URLS = [
  // Core
  "/",
  "/stavka",
  "/goroda",
  "/benchmark",
  "/stati",
  "/alternativa",
  "/sravnenie",
  "/instrumenty",
  "/reyting",
  "/rukovodstvo",
  "/otchet-2026",
  "/embed",

  // Top specialties (high search volume)
  "/stavka/frontend-razrabotchik",
  "/stavka/backend-razrabotchik",
  "/stavka/python-razrabotchik",
  "/stavka/fullstack-razrabotchik",
  "/stavka/mobilnyj-razrabotchik",
  "/stavka/react-razrabotchik",
  "/stavka/java-razrabotchik",
  "/stavka/golang-razrabotchik",
  "/stavka/devops-inzhener",
  "/stavka/ml-inzhener",
  "/stavka/data-analyst",
  "/stavka/1c-razrabotchik",
  "/stavka/php-razrabotchik",
  "/stavka/dizajner-ui-ux",
  "/stavka/graficheskij-dizajner",
  "/stavka/smm-specialist",
  "/stavka/targetolog",
  "/stavka/seo-specialist",
  "/stavka/kopirayter",
  "/stavka/kontent-menedzher",
  "/stavka/menedzher-proektov",
  "/stavka/testirovshchik-qa",
  "/stavka/biznes-analitik",
  "/stavka/yurist-frilanser",
  "/stavka/buhgalter-frilanser",
  "/stavka/marketolog-frilanser",
  "/stavka/product-manager-frilanser",
  "/stavka/repetitor",
  "/stavka/perevodchik",
  "/stavka/fotograf-frilanser",

  // Top cities
  "/goroda/moskva",
  "/goroda/sankt-peterburg",
  "/goroda/ekaterinburg",
  "/goroda/novosibirsk",
  "/goroda/kazan",
  "/goroda/krasnodar",
  "/goroda/samara",
  "/goroda/nizhnij-novgorod",
  "/goroda/rostov-na-donu",
  "/goroda/tyumen",

  // High-value specialty+city cross-pages
  "/stavka/frontend-razrabotchik/moskva",
  "/stavka/frontend-razrabotchik/sankt-peterburg",
  "/stavka/python-razrabotchik/moskva",
  "/stavka/python-razrabotchik/sankt-peterburg",
  "/stavka/backend-razrabotchik/moskva",
  "/stavka/dizajner-ui-ux/moskva",
  "/stavka/devops-inzhener/moskva",

  // Experience level pages (top specialties)
  "/stavka/frontend-razrabotchik/opyt/senior",
  "/stavka/frontend-razrabotchik/opyt/middle",
  "/stavka/python-razrabotchik/opyt/senior",
  "/stavka/backend-razrabotchik/opyt/senior",

  // Blog articles (all)
  "/stati/srednyaya-stavka-frilansera-2026",
  "/stati/kak-raschitat-stavku-frilansera",
  "/stati/stavka-samozanyatogo-2026",
  "/stati/frilans-vs-naym-2026",
  "/stati/kak-povysit-stavku-frilansera",
  "/stati/samozanyatyj-vs-ip-frilancer",
  "/stati/skolko-stoit-nanyat-frilansera",
  "/stati/skrytye-rashody-frilansera",
  "/stati/stavki-frilanserov-po-gorodam-2026",
  "/stati/izmeneniya-samozanyatyh-2026",
  "/stati/stavki-razrabotchikov-frilanserov-2026",
  "/stati/stavki-dizajnerov-frilanserov-2026",
  "/stati/stavki-marketologov-frilanserov-2026",
  "/stati/stavki-analitikov-frilanserov-2026",
  "/stati/stavki-kopirajterov-frilanserov-2026",
  "/stati/stavki-yuristov-perevodchikov-frilanserov-2026",
  "/stati/skolko-stoit-chas-raboty-programmista-2026",
  "/stati/skolko-zarabatyvayut-frilansery-2026",
  "/stati/finansy-frilansera-kak-raspredelyat-dohod",
  "/stati/stavki-qa-testerov-frilanserov-2026",
  "/stati/dogovor-gph-nalogi-frilansera-2026",

  // Alternatives (competitor comparison)
  "/alternativa/fl-ru-kalkulator",
  "/alternativa/kwork-kalkulator",
  "/alternativa/profi-ru-kalkulator",
  "/alternativa/youdo-kalkulator",
  "/alternativa/habr-freelance-kalkulator",
  "/alternativa/moj-nalog-kalkulator",
  "/alternativa/tinkoff-kalkulator",
  "/alternativa/klerk-ru-kalkulator",
  "/alternativa/cossa-kalkulator",
  "/alternativa/digital-broccoli",
  "/alternativa/npd-calculator",
  "/alternativa/konsol-pro",
  "/alternativa/yandex-pay-kalkulator",
  "/alternativa/freelancehunt-kalkulator",

  // Specialty comparisons
  "/sravnenie/frontend-vs-backend",
  "/sravnenie/python-vs-frontend",
  "/sravnenie/ui-ux-vs-graficheskij-dizajner",
  "/sravnenie/smm-vs-targetolog",
  "/sravnenie/kopirayter-vs-kontent-menedzher",
  "/sravnenie/qa-vs-frontend",
  "/sravnenie/data-analyst-vs-ml",
  "/sravnenie/fullstack-vs-backend",

  // Tools
  "/instrumenty/kalkulator-naloga-samozanyatogo",
  "/instrumenty/kalkulator-stoimosti-proekta",
].map((path) => `${BASE}${path}`);

async function submitToEngine(engine, endpoint) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${BASE}/${KEY}.txt`,
        urlList: PRIORITY_URLS,
      }),
    });
    const text = await response.text().catch(() => "");
    console.log(`✅ ${engine}: HTTP ${response.status}${text ? ` — ${text.slice(0, 100)}` : ""}`);
    return response.status;
  } catch (err) {
    console.error(`❌ ${engine} error: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log(`\n🚀 IndexNow submission — ${new Date().toISOString()}`);
  console.log(`📍 Host: ${HOST}`);
  console.log(`🔑 Key: ${KEY}`);
  console.log(`📄 URLs: ${PRIORITY_URLS.length}\n`);

  // Submit to Bing and Yandex in parallel
  await Promise.all([
    submitToEngine("Bing", "https://www.bing.com/indexnow"),
    submitToEngine("Yandex", "https://yandex.com/indexnow"),
  ]);

  console.log("\n✨ Done. Engines will verify key at:");
  console.log(`   ${BASE}/${KEY}.txt`);
  console.log("   and start crawling submitted URLs.\n");
}

main();
