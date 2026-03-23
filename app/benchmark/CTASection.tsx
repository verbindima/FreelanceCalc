"use client";

import Link from "next/link";
import BuyButton from "./BuyButton";

const PRICE_INCREASE_DATE = new Date("2026-04-07T00:00:00+03:00");

export default function CTASection() {
  const isPriceRaised = Date.now() >= PRICE_INCREASE_DATE.getTime();

  if (isPriceRaised) {
    return (
      <section className="mb-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 md:p-10 text-white text-center">
        <div className="text-4xl mb-3">📊</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Бенчмарк ставок фрилансеров — Q1 2026
        </h2>
        <p className="text-indigo-100 mb-2 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Медианные ставки <strong>26 специальностей</strong> в <strong>10 городах</strong> России.
          Джун / мид / сеньор. Единоразовый платёж — доступ мгновенно.
        </p>
        <p className="text-indigo-200 text-xs mb-6">
          Обновляется ежеквартально · Q2 2026 выходит в июне
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <BuyButton />
          <Link
            href="/"
            className="text-sm text-indigo-200 hover:text-white underline underline-offset-2"
          >
            Сначала рассчитать свою ставку →
          </Link>
        </div>
        <p className="mt-4 text-xs text-indigo-300">
          После оплаты — мгновенный доступ к скачиванию · Без подписки · Без регистрации
        </p>
      </section>
    );
  }

  return (
    <section className="mb-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 md:p-10 text-white text-center">
      <div className="text-4xl mb-3">📊</div>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        С 7 апреля цена вырастет на 40%
      </h2>
      <p className="text-indigo-100 mb-2 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
        Сейчас бенчмарк стоит <strong>249 ₽</strong>. С 7 апреля — <strong>349 ₽</strong>.
        Единоразовый платёж — доступ к отчёту мгновенно после оплаты через ЮKassa.
      </p>
      <p className="text-indigo-200 text-xs mb-6">
        ⏳ Успей до повышения цены — с 7 апреля будет на 40% дороже.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <BuyButton label="Купить за 249 ₽ до повышения цены" />
        <Link
          href="/"
          className="text-sm text-indigo-200 hover:text-white underline underline-offset-2"
        >
          Сначала рассчитать свою ставку →
        </Link>
      </div>
      <p className="mt-4 text-xs text-indigo-300">
        После оплаты — мгновенный доступ к скачиванию · Без подписки · Без регистрации
      </p>
    </section>
  );
}
