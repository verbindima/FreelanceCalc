import { NextResponse } from "next/server";
import { CITIES as CITY_DATA } from "../../goroda/cities";
import { CITY_PAIRS } from "../../goroda/sravnenie/page";
import { SPECIALTIES as SPECIALTY_DATA } from "../../stavka/[slug]/specialties";
import { LEVELS } from "../../stavka/[slug]/opyt/[level]/levels";
import { NAJEM_DATA } from "../../frilanc-vs-najm/najem-data";

const BASE_URL = "https://freelancecalc-one.vercel.app";
const INDEXNOW_KEY = "65be3d47fc9c440b9c82afe4b001c2ba";

/** Build the same URL list as sitemap.ts */
function getAllUrls(): string[] {
  const urls: string[] = [
    BASE_URL,
    `${BASE_URL}/stavka`,
    `${BASE_URL}/stati`,
    `${BASE_URL}/rukovodstvo`,
    `${BASE_URL}/goroda`,
    `${BASE_URL}/instrumenty`,
    `${BASE_URL}/benchmark`,
    `${BASE_URL}/alternativa`,
    // Stati
    `${BASE_URL}/stati/srednyaya-stavka-frilansera-2026`,
    `${BASE_URL}/stati/stavka-samozanyatogo-2026`,
    `${BASE_URL}/stati/kak-raschitat-stavku-frilansera`,
    `${BASE_URL}/stati/frilans-vs-naym-2026`,
    `${BASE_URL}/stati/kak-povysit-stavku-frilansera`,
    `${BASE_URL}/stati/samozanyatyj-vs-ip-frilancer`,
    `${BASE_URL}/stati/skolko-stoit-nanyat-frilansera`,
    `${BASE_URL}/stati/skrytye-rashody-frilansera`,
    `${BASE_URL}/stati/stavki-frilanserov-po-gorodam-2026`,
    `${BASE_URL}/stati/izmeneniya-samozanyatyh-2026`,
    `${BASE_URL}/stati/stavki-razrabotchikov-frilanserov-2026`,
    `${BASE_URL}/stati/stavki-dizajnerov-frilanserov-2026`,
    `${BASE_URL}/stati/stavki-marketologov-frilanserov-2026`,
    `${BASE_URL}/stati/stavki-analitikov-frilanserov-2026`,
    `${BASE_URL}/stati/stavki-kopirajterov-frilanserov-2026`,
    `${BASE_URL}/stati/stavki-yuristov-perevodchikov-frilanserov-2026`,
    `${BASE_URL}/stati/stavki-qa-testerov-frilanserov-2026`,
    `${BASE_URL}/stati/skolko-stoit-chas-raboty-programmista-2026`,
    `${BASE_URL}/stati/skolko-zarabatyvayut-frilansery-2026`,
    `${BASE_URL}/stati/finansy-frilansera-kak-raspredelyat-dohod`,
    // Instrumenty
    `${BASE_URL}/instrumenty/kalkulator-naloga-samozanyatogo`,
    `${BASE_URL}/instrumenty/kalkulator-stoimosti-proekta`,
    // Open data report + Rating
    `${BASE_URL}/otchet-2026`,
    `${BASE_URL}/reyting`,
    // Alternativa
    `${BASE_URL}/alternativa/moj-nalog-kalkulator`,
    `${BASE_URL}/alternativa/digital-broccoli`,
    `${BASE_URL}/alternativa/tinkoff-kalkulator`,
    `${BASE_URL}/alternativa/fl-ru-kalkulator`,
    `${BASE_URL}/alternativa/kwork-kalkulator`,
    `${BASE_URL}/alternativa/profi-ru-kalkulator`,
    `${BASE_URL}/alternativa/youdo-kalkulator`,
    `${BASE_URL}/alternativa/npd-calculator`,
    `${BASE_URL}/alternativa/cossa-kalkulator`,
    `${BASE_URL}/alternativa/klerk-ru-kalkulator`,
    `${BASE_URL}/alternativa/habr-freelance-kalkulator`,
    `${BASE_URL}/alternativa/konsol-pro`,
    `${BASE_URL}/alternativa/yandex-pay-kalkulator`,
    `${BASE_URL}/alternativa/freelancehunt-kalkulator`,
    // Nalog cluster
    `${BASE_URL}/nalog`,
    `${BASE_URL}/nalog/ip-usn`,
    `${BASE_URL}/nalog/sfr`,
    `${BASE_URL}/nalog/sravnenie`,
    // Embed
    `${BASE_URL}/embed`,
    // Sravnenie specialty hub + all comparison pages
    `${BASE_URL}/sravnenie`,
    `${BASE_URL}/sravnenie/frontend-vs-backend`,
    `${BASE_URL}/sravnenie/python-vs-frontend`,
    `${BASE_URL}/sravnenie/ui-ux-vs-graficheskij-dizajner`,
    `${BASE_URL}/sravnenie/smm-vs-targetolog`,
    `${BASE_URL}/sravnenie/kopirayter-vs-kontent-menedzher`,
    `${BASE_URL}/sravnenie/qa-vs-frontend`,
    `${BASE_URL}/sravnenie/data-analyst-vs-ml`,
    `${BASE_URL}/sravnenie/fullstack-vs-backend`,
    `${BASE_URL}/sravnenie/java-razrabotchik-vs-python-razrabotchik`,
    `${BASE_URL}/sravnenie/1c-razrabotchik-vs-php`,
    `${BASE_URL}/sravnenie/android-vs-ios-razrabotchik`,
    `${BASE_URL}/sravnenie/bitrix-razrabotchik-vs-wordpress-razrabotchik`,
    `${BASE_URL}/sravnenie/devops-vs-backend`,
    `${BASE_URL}/sravnenie/golang-razrabotchik-vs-python-razrabotchik`,
    `${BASE_URL}/sravnenie/java-razrabotchik-vs-golang-razrabotchik`,
    `${BASE_URL}/sravnenie/net-razrabotchik-vs-java-razrabotchik`,
    `${BASE_URL}/sravnenie/php-razrabotchik-vs-python-razrabotchik`,
    `${BASE_URL}/sravnenie/seo-specialist-vs-smm-specialist`,
    `${BASE_URL}/sravnenie/menedzher-proektov-vs-biznes-analitik`,
    `${BASE_URL}/sravnenie/seo-specialist-vs-targetolog`,
    `${BASE_URL}/sravnenie/devops-vs-ml-inzhener`,
    `${BASE_URL}/sravnenie/fullstack-vs-mobilnyj-razrabotchik`,
    `${BASE_URL}/sravnenie/python-razrabotchik-vs-data-analyst`,
    // Missing stati — batch 1
    `${BASE_URL}/stati/kak-stat-frilanserom-2026`,
    `${BASE_URL}/stati/pochemu-frilansery-zanizhayt-stavki`,
    `${BASE_URL}/stati/dogovor-gph-nalogi-frilansera-2026`,
    // Missing stati — batch 2 (added 2026-03-21)
    `${BASE_URL}/stati/kak-oformit-samozanyatost-2026`,
    `${BASE_URL}/stati/kak-najti-pervogo-klienta-frilansera-2026`,
    `${BASE_URL}/stati/portfolio-frilansera-2026`,
    `${BASE_URL}/stati/frilanser-inostrannyj-zakazchik-2026`,
    `${BASE_URL}/stati/samozanyatyj-ipoteka-2026`,
    `${BASE_URL}/stati/peregovory-o-stavke-s-zakazchikom`,
    `${BASE_URL}/stati/fl-ru-vs-kwork-birzha-frilanserov-2026`,
    `${BASE_URL}/stati/stavki-1c-razrabotchikov-frilanserov-2026`,
    `${BASE_URL}/stati/stavki-proekt-menedzherov-frilanserov-2026`,
    `${BASE_URL}/stati/kak-vystavit-schet-samozanyatomu-2026`,
  ];

  // Specialty pages
  for (const { slug } of SPECIALTY_DATA) {
    urls.push(`${BASE_URL}/stavka/${slug}`);
  }

  // City pages
  for (const { slug } of CITY_DATA) {
    urls.push(`${BASE_URL}/goroda/${slug}`);
  }

  // Specialty × City cross-pages (long-tail)
  for (const spec of SPECIALTY_DATA) {
    for (const city of CITY_DATA) {
      urls.push(`${BASE_URL}/stavka/${spec.slug}/${city.slug}`);
    }
  }

  // Experience-level pages: 26 specs × 3 levels = 78 pages
  for (const spec of SPECIALTY_DATA) {
    for (const lvl of LEVELS) {
      urls.push(`${BASE_URL}/stavka/${spec.slug}/opyt/${lvl.slug}`);
    }
  }

  // Experience-level × City: 26 × 3 × 24 = 1872 pages
  for (const spec of SPECIALTY_DATA) {
    for (const lvl of LEVELS) {
      for (const city of CITY_DATA) {
        urls.push(`${BASE_URL}/stavka/${spec.slug}/opyt/${lvl.slug}/${city.slug}`);
      }
    }
  }

  // City comparison: hub + 12 pair pages
  urls.push(`${BASE_URL}/goroda/sravnenie`);
  for (const { city1, city2 } of CITY_PAIRS) {
    urls.push(`${BASE_URL}/goroda/sravnenie/${city1}-vs-${city2}`);
  }

  // Frilanc-vs-najm hub + specialty pages
  urls.push(`${BASE_URL}/frilanc-vs-najm`);
  for (const { slug } of SPECIALTY_DATA) {
    if (NAJEM_DATA[slug]) {
      urls.push(`${BASE_URL}/frilanc-vs-najm/${slug}`);
    }
  }

  return urls;
}

/** Submit up to 10,000 URLs to IndexNow endpoint */
async function submitBatch(
  endpoint: string,
  urlList: string[]
): Promise<{ ok: boolean; status: number; text: string }> {
  const body = {
    host: new URL(BASE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return { ok: res.ok, status: res.status, text: await res.text().catch(() => "") };
}

export async function POST() {
  try {
    const allUrls = getAllUrls();

    // IndexNow supports up to 10,000 per request — we're well under
    const [bingResult, yandexResult] = await Promise.allSettled([
      submitBatch("https://api.indexnow.org/indexnow", allUrls),
      submitBatch("https://yandex.com/indexnow", allUrls),
    ]);

    const report = {
      total_urls: allUrls.length,
      bing: bingResult.status === "fulfilled" ? bingResult.value : { ok: false, error: String(bingResult.reason) },
      yandex: yandexResult.status === "fulfilled" ? yandexResult.value : { ok: false, error: String(yandexResult.reason) },
      submitted_at: new Date().toISOString(),
    };

    const allOk =
      (bingResult.status === "fulfilled" && bingResult.value.ok) ||
      (yandexResult.status === "fulfilled" && yandexResult.value.ok);

    return NextResponse.json(report, { status: allOk ? 200 : 207 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

/** GET — quick health check, returns key location */
export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    key_url: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    total_urls: getAllUrls().length,
    usage: "POST /api/indexnow to submit all URLs to Bing + Yandex",
  });
}
