"use client";

import { useState } from "react";

import { DONATION_PRESETS } from "@/components/site/donation-card";
import { useBasket } from "@/components/site/basket-context";
import { useCurrency } from "@/components/site/currency-context";
import { CURRENCIES } from "@/lib/currency";
import type { DonationFrequency } from "@/lib/types";

const QUICK_DONATE_APPEALS: { id: string; title: string; image_key: string | null }[] = [
  { id: "aqua-aid", title: "Aqua Aid", image_key: null },
  { id: "sustain-now", title: "Sustain Now", image_key: null },
  { id: "rebuild-hope", title: "Rebuild Hope", image_key: null },
  { id: "bright-futures", title: "Bright Futures", image_key: null },
  { id: "emergency-aid", title: "Emergency Aid", image_key: null },
  { id: "share-meals", title: "Share Meals", image_key: null },
  { id: "medi-help", title: "Medi Help", image_key: null },
];

export function QuickDonateBar() {
  const { addItem } = useBasket();
  const { currency, format } = useCurrency();
  const [frequency, setFrequency] = useState<DonationFrequency>("one_time");
  const [campaignId, setCampaignId] = useState(QUICK_DONATE_APPEALS[0].id);
  const [selected, setSelected] = useState<number>(DONATION_PRESETS.one_time[0]);
  const [customAmount, setCustomAmount] = useState("");

  const campaigns = QUICK_DONATE_APPEALS;
  const presets = DONATION_PRESETS[frequency];
  const customCents = customAmount
    ? Math.round((parseFloat(customAmount) / CURRENCIES[currency].rateFromUsd) * 100)
    : 0;
  const activeCents = customCents > 0 ? customCents : selected;
  const campaign = campaigns.find((c) => c.id === campaignId) ?? campaigns[0];

  const switchFrequency = (next: DonationFrequency) => {
    setFrequency(next);
    setSelected(DONATION_PRESETS[next][0]);
    setCustomAmount("");
  };

  const handleAdd = () => {
    if (!activeCents || activeCents <= 0) return;
    addItem({
      campaignId: campaign.id,
      campaignTitle: campaign.title,
      campaignImage: campaign.image_key,
      unitAmountCents: activeCents,
      frequency,
    });
  };

  return (
    <div className="pt-quickdonate-wrap">
      <div className="pt-container">
        <div className="pt-quickdonate-bar">
          <span className="pt-quickdonate-label">Quick Donate</span>

          <div className="pt-freq-toggle pt-quickdonate-freq">
            <button
              type="button"
              className={`pt-freq-btn${frequency === "one_time" ? " active" : ""}`}
              onClick={() => switchFrequency("one_time")}
            >
              One-Time
            </button>
            <button
              type="button"
              className={`pt-freq-btn${frequency === "monthly" ? " active" : ""}`}
              onClick={() => switchFrequency("monthly")}
            >
              Monthly
            </button>
          </div>

          <select
            className="pt-quickdonate-select"
            value={campaign.id}
            onChange={(e) => setCampaignId(e.target.value)}
            aria-label="Select appeal to support"
          >
            {campaigns.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>

          <div className="pt-quickdonate-amounts">
            {presets.map((cents) => (
              <button
                key={cents}
                type="button"
                className={`pt-amount-btn${!customCents && selected === cents ? " active" : ""}`}
                onClick={() => {
                  setSelected(cents);
                  setCustomAmount("");
                }}
              >
                {format(cents)}
              </button>
            ))}
          </div>

          <div className="pt-donate-custom-wrap pt-quickdonate-custom">
            <span className="pt-currency-prefix">{CURRENCIES[currency].symbol}</span>
            <input
              type="number"
              min={1}
              placeholder="Other"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              aria-label="Custom donation amount"
            />
          </div>

          <button
            type="button"
            className="pt-btn pt-btn-accent pt-btn-pill pt-quickdonate-add"
            disabled={!activeCents}
            onClick={handleAdd}
          >
            <i className="fa-solid fa-cart-shopping" /> Add {format(activeCents)}
          </button>
        </div>
      </div>
    </div>
  );
}
