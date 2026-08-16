export const metadata = { title: "Core Values Statement | AICT Global" };

const CORE_VALUES = [
  {
    number: "1",
    icon: "fa-scale-balanced",
    title: "Accountability",
    arabic: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",
    translation: "“Verily, Allah commands you to render trusts to whom they are due…”",
    reference: "Surah An-Nisā’ 4:58",
    hadith: null as string | null,
    body: "We own every outcome — success or shortfall — as a trust (amānah) from Allah. We measure, report, and correct with precision, knowing we will stand before Allah to account for every Dollar, decision, and deed.",
    liveIt: [
      "Financials are audited publicly every year.",
      "Leaders say, “This delay is my responsibility — here is the fix.”",
      "Every project ends with a “Lessons from Allah’s Decree” report.",
    ],
  },
  {
    number: "2",
    icon: "fa-shield-halved",
    title: "Integrity",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ",
    translation: "“O you who believe! Fear Allah and speak the truth.”",
    reference: "Surah Al-Aḥzāb 33:70",
    hadith: "The Prophet ﷺ said: “Truthfulness leads to righteousness, and righteousness leads to Paradise.” (Bukhāri & Muslim)",
    body: "We are the same in private as in public — no gap between word and action. A half-truth, a padded report, or a silent compromise is a betrayal of Allah’s trust.",
    liveIt: [
      "Contracts are honoured even when no one is watching.",
      "We correct a mistake before it is discovered.",
      "“Sadaqah in speech” — we speak only what is true, kind, and necessary.",
    ],
  },
  {
    number: "3",
    icon: "fa-hand-fist",
    title: "Courage",
    arabic: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
    translation: "“And whoever fears Allah, He will make for him a way out…”",
    reference: "Surah Aṭ-Ṭalāq 65:2",
    hadith: "The Prophet ﷺ said: “The strong believer is better and more beloved to Allah than the weak believer.” (Muslim)",
    body: "We dare the impossible because Allah is Al-Muqallib al-Qulūb (Turner of Hearts). Courage is not recklessness — it is calculated tawakkul: plan boldly, act decisively, trust Allah fully.",
    liveIt: [
      "A junior speaks truth to power in a boardroom.",
      "We launch a project others call “impossible,” with data, duʿā’, and deadlines.",
      "Failure is met with “Alhamdulillah ‘ala kulli hāl” and faster iteration.",
    ],
  },
  {
    number: "4",
    icon: "fa-eye",
    title: "Transparency",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ",
    translation: "“O you who believe! Be persistently standing firm in justice, witnesses for Allah…”",
    reference: "Surah An-Nisā’ 4:135",
    hadith: null as string | null,
    body: "We expose the full truth — numbers, trade-offs, mistakes — because secrecy breeds fitnah. Openness is an act of worship; it builds barakah and protects the ummah’s wealth.",
    liveIt: [
      "Every donation is tracked end-to-end on a public blockchain dashboard.",
      "Errors are announced before they are asked about.",
    ],
  },
];

const PROMISE_POINTS = [
  { term: "Truthfulness", arabic: "ṣidq" },
  { term: "Justice", arabic: "‘adl" },
  { term: "Excellence", arabic: "iḥsān" },
];

export default function CoreValuesPage() {
  return (
    <>
      <section className="pt-section">
        <div className="pt-container">
          <h1 className="pt-section-title">Core Values Statement</h1>
          <p className="pt-section-subtitle">
            Doing the Impossible Together — Guided by Qur&rsquo;ān and Sunnah.
          </p>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container" style={{ maxWidth: 820, display: "flex", flexDirection: "column", gap: 48 }}>
          {CORE_VALUES.map((value) => (
            <div
              key={value.number}
              style={{
                borderTop: "1px solid var(--pt-border)",
                paddingTop: 40,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--pt-primary-alpha)",
                    color: "var(--pt-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "1.2rem",
                  }}
                >
                  <i className={`fa-solid ${value.icon}`} />
                </div>
                <h2 style={{ fontSize: "1.5rem", margin: 0 }}>
                  {value.number}. {value.title}
                </h2>
              </div>

              <p
                dir="rtl"
                lang="ar"
                style={{
                  fontSize: "1.35rem",
                  lineHeight: 2,
                  textAlign: "right",
                  color: "var(--pt-text)",
                  borderRight: "3px solid var(--pt-primary)",
                  paddingRight: 16,
                  marginBottom: 12,
                }}
              >
                {value.arabic}
              </p>
              <p style={{ marginBottom: value.hadith ? 8 : 16, color: "var(--pt-text-muted)", fontStyle: "italic" }}>
                {value.translation} ({value.reference})
              </p>
              {value.hadith && (
                <p style={{ marginBottom: 16, color: "var(--pt-text-muted)", fontStyle: "italic" }}>
                  {value.hadith}
                </p>
              )}
              <p style={{ marginBottom: 16, color: "var(--pt-text-muted)" }}>{value.body}</p>

              <p style={{ fontWeight: 700, marginBottom: 8 }}>We live it when:</p>
              <ul style={{ margin: 0, paddingLeft: 20, color: "var(--pt-text-muted)", display: "flex", flexDirection: "column", gap: 6 }}>
                {value.liveIt.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        className="pt-section"
        style={{ background: "var(--pt-border-light)", borderTop: "1px solid var(--pt-border)", borderBottom: "1px solid var(--pt-border)" }}
      >
        <div className="pt-container" style={{ maxWidth: 820 }}>
          <h2 className="pt-section-title" style={{ fontSize: "1.75rem" }}>Our Promise</h2>
          <p style={{ color: "var(--pt-text-muted)", marginBottom: 20 }}>
            These values are not slogans — they are shahādah in action. We draw them from the
            Qur&rsquo;ān and the Sunnah of the Final Messenger so that every AICT initiative
            becomes a living proof of:
          </p>

          <div className="pt-grid pt-grid-3" style={{ marginBottom: 32 }}>
            {PROMISE_POINTS.map((point) => (
              <div key={point.term} className="pt-card" style={{ padding: 24, alignItems: "center", textAlign: "center" }}>
                <div style={{ fontWeight: 700 }}>{point.term}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--pt-text-muted)", marginTop: 4, fontStyle: "italic" }}>
                  ({point.arabic})
                </div>
              </div>
            ))}
          </div>

          <p
            dir="rtl"
            lang="ar"
            style={{
              fontSize: "1.35rem",
              lineHeight: 2,
              textAlign: "right",
              color: "var(--pt-text)",
              borderRight: "3px solid var(--pt-primary)",
              paddingRight: 16,
              marginBottom: 12,
            }}
          >
            فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ
          </p>
          <p style={{ color: "var(--pt-text-muted)", fontStyle: "italic" }}>
            &ldquo;So whoever does an atom&rsquo;s weight of good will see it.&rdquo; (Surah
            Az-Zalzalah 99:7)
          </p>
        </div>
      </section>
    </>
  );
}
