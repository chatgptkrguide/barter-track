interface ItemIllustrationProps {
  itemName: string;
  className?: string;
}

const C = {
  warm50: "#faf8f5",
  warm100: "#f0ebe4",
  warm200: "#e0d5c8",
  warm300: "#c9b9a8",
  warm400: "#a8937d",
  warm600: "#7a6b5d",
  warm800: "#4a3f35",
  accent: "#c45d3e",
  accentDark: "#a34a30",
  accentLight: "#e8a690",
  accentGlow: "#f4c4b0",
  white: "#ffffff",
  shadow: "#3a3028",
} as const;

function ShadowFilter(): React.JSX.Element {
  return (
    <defs>
      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
        <feOffset in="blur" dx="2" dy="4" result="offsetBlur" />
        <feFlood floodColor={C.shadow} floodOpacity="0.18" result="color" />
        <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

function MonamiPenIllustration(): React.JSX.Element {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="모나미 153 볼펜">
      <defs>
        <filter id="penShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
          <feOffset in="blur" dx="3" dy="5" result="offsetBlur" />
          <feFlood floodColor={C.shadow} floodOpacity="0.22" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="penBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fefefe" />
          <stop offset="35%" stopColor={C.warm50} />
          <stop offset="100%" stopColor={C.warm200} />
        </linearGradient>
        <linearGradient id="penCap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fcfcfc" />
          <stop offset="50%" stopColor={C.warm100} />
          <stop offset="100%" stopColor={C.warm300} />
        </linearGradient>
        <linearGradient id="accentBand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.accentLight} />
          <stop offset="50%" stopColor={C.accent} />
          <stop offset="100%" stopColor={C.accentDark} />
        </linearGradient>
        <linearGradient id="penTip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#888" />
          <stop offset="50%" stopColor="#666" />
          <stop offset="100%" stopColor="#444" />
        </linearGradient>
        <linearGradient id="clipGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.warm300} />
          <stop offset="50%" stopColor={C.warm200} />
          <stop offset="100%" stopColor={C.warm300} />
        </linearGradient>
        <radialGradient id="surface" cx="50%" cy="50%">
          <stop offset="0%" stopColor={C.warm100} stopOpacity="0.6" />
          <stop offset="100%" stopColor={C.warm50} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.white} stopOpacity="0" />
          <stop offset="45%" stopColor={C.white} stopOpacity="0.5" />
          <stop offset="55%" stopColor={C.white} stopOpacity="0.5" />
          <stop offset="100%" stopColor={C.white} stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="155" rx="80" ry="20" fill="url(#surface)" />
      <g filter="url(#penShadow)" transform="translate(100, 100) rotate(-30) translate(-100, -100)">
        <polygon points="28,104 38,100 38,108" fill="url(#penTip)" stroke="#555" strokeWidth="0.3" />
        <circle cx="29" cy="104" r="1" fill="#333" />
        <polygon points="38,99 56,96 56,112 38,109" fill="#999" stroke="#888" strokeWidth="0.3" />
        <polygon points="38,101 56,98 56,100 38,103" fill={C.white} opacity="0.3" />
        {[42, 45, 48, 51].map((x) => (
          <line key={x} x1={x} y1={97 + (x - 38) * -0.17} x2={x} y2={109 + (x - 38) * 0.17} stroke="#aaa" strokeWidth="0.5" opacity="0.6" />
        ))}
        <rect x="56" y="94" width="78" height="20" rx="1.5" fill="url(#penBody)" stroke={C.warm300} strokeWidth="0.5" />
        <rect x="58" y="95.5" width="74" height="3" rx="1.5" fill="url(#shimmer)" opacity="0.7" />
        <text x="88" y="108" fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif" fill={C.warm800} textAnchor="middle" opacity="0.85">153</text>
        <text x="110" y="107.5" fontSize="4.5" fontFamily="Arial, sans-serif" fill={C.warm400} textAnchor="middle" letterSpacing="1.5">MONAMI</text>
        <rect x="134" y="93.5" width="5" height="21" rx="1" fill="url(#accentBand)" />
        <rect x="134" y="94.5" width="5" height="2.5" rx="1" fill={C.accentGlow} opacity="0.5" />
        <rect x="139" y="94" width="3" height="20" fill={C.warm200} stroke={C.warm300} strokeWidth="0.3" />
        <rect x="142" y="93" width="30" height="22" rx="2" fill="url(#penCap)" stroke={C.warm300} strokeWidth="0.5" />
        <rect x="143" y="94" width="28" height="3.5" rx="1.5" fill={C.white} opacity="0.35" />
        <rect x="170" y="93.5" width="4" height="21" rx="2" fill={C.warm200} stroke={C.warm300} strokeWidth="0.3" />
        <rect x="152" y="83" width="3" height="12" rx="1" fill="url(#clipGrad)" stroke={C.warm300} strokeWidth="0.4" />
        <circle cx="153.5" cy="83" r="2.5" fill={C.warm200} stroke={C.warm300} strokeWidth="0.4" />
        <rect x="152.5" y="84" width="1.5" height="8" rx="0.5" fill={C.white} opacity="0.3" />
      </g>
      <circle cx="45" cy="165" r="2" fill={C.accent} opacity="0.25" />
      <circle cx="155" cy="40" r="1.5" fill={C.accentLight} opacity="0.2" />
    </svg>
  );
}

function MysteryBoxIllustration(): React.JSX.Element {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="미스터리 상자">
      <defs>
        <ShadowFilter />
        <linearGradient id="boxTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.accentGlow} />
          <stop offset="100%" stopColor={C.accentLight} />
        </linearGradient>
        <linearGradient id="boxFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.accentLight} />
          <stop offset="100%" stopColor={C.accent} />
        </linearGradient>
        <linearGradient id="boxSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.accentDark} />
          <stop offset="100%" stopColor={C.accent} />
        </linearGradient>
        <radialGradient id="mysteryGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor={C.accentGlow} stopOpacity="0.4" />
          <stop offset="60%" stopColor={C.accentGlow} stopOpacity="0.1" />
          <stop offset="100%" stopColor={C.warm50} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ribbon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm800} />
          <stop offset="100%" stopColor={C.warm600} />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="75" ry="65" fill="url(#mysteryGlow)" />
      <ellipse cx="100" cy="160" rx="55" ry="12" fill={C.shadow} opacity="0.1" />
      <g filter="url(#dropShadow)">
        <polygon points="100,55 155,80 100,105 45,80" fill="url(#boxTop)" stroke={C.accent} strokeWidth="0.8" strokeDasharray="5,3" />
        <polygon points="45,80 100,105 100,155 45,130" fill="url(#boxFront)" stroke={C.accent} strokeWidth="0.8" strokeDasharray="5,3" />
        <polygon points="100,105 155,80 155,130 100,155" fill="url(#boxSide)" stroke={C.accentDark} strokeWidth="0.8" strokeDasharray="5,3" />
      </g>
      <polygon points="70,80 80,85 80,142 70,137" fill="url(#ribbon)" opacity="0.7" />
      <polygon points="100,64 110,69 55,94 45,89" fill="url(#ribbon)" opacity="0.6" />
      <g transform="translate(62, 78)">
        <ellipse cx="-6" cy="-8" rx="8" ry="5" transform="rotate(-20)" fill={C.warm800} opacity="0.8" />
        <ellipse cx="10" cy="-10" rx="8" ry="5" transform="rotate(25)" fill={C.warm600} opacity="0.8" />
        <circle cx="3" cy="-2" r="3" fill={C.warm800} />
      </g>
      <text x="70" y="118" fontSize="28" fontWeight="bold" fontFamily="Georgia, serif" fill={C.warm50} opacity="0.85" textAnchor="middle">?</text>
      {[
        { x: 140, y: 55, r: 1.5, o: 0.5 },
        { x: 150, y: 70, r: 1, o: 0.35 },
        { x: 50, y: 50, r: 1.2, o: 0.4 },
        { x: 35, y: 95, r: 1, o: 0.3 },
        { x: 160, y: 100, r: 0.8, o: 0.25 },
      ].map((s, i) => (
        <circle key={`sparkle-${i}`} cx={s.x} cy={s.y} r={s.r} fill={C.accentGlow} opacity={s.o} />
      ))}
    </svg>
  );
}

function GenericPackageIllustration({ label }: { label: string }): React.JSX.Element {
  const displayLabel = label.length > 6 ? label.slice(0, 5) + "…" : label;

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`${label} 패키지`}>
      <defs>
        <ShadowFilter />
        <linearGradient id="pkgTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm100} />
          <stop offset="100%" stopColor={C.warm200} />
        </linearGradient>
        <linearGradient id="pkgFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm200} />
          <stop offset="100%" stopColor={C.warm300} />
        </linearGradient>
        <linearGradient id="pkgSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.warm400} />
          <stop offset="100%" stopColor={C.warm300} />
        </linearGradient>
        <linearGradient id="labelTag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm50} />
          <stop offset="100%" stopColor={C.warm100} />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="158" rx="50" ry="10" fill={C.shadow} opacity="0.1" />
      <g filter="url(#dropShadow)">
        <polygon points="100,60 150,82 100,105 50,82" fill="url(#pkgTop)" stroke={C.warm300} strokeWidth="0.6" />
        <polygon points="50,82 100,105 100,150 50,127" fill="url(#pkgFront)" stroke={C.warm300} strokeWidth="0.6" />
        <polygon points="100,105 150,82 150,127 100,150" fill="url(#pkgSide)" stroke={C.warm400} strokeWidth="0.6" />
        <line x1="100" y1="60" x2="100" y2="105" stroke={C.warm300} strokeWidth="2" opacity="0.4" />
        <line x1="50" y1="82" x2="150" y2="82" stroke={C.warm300} strokeWidth="2" opacity="0.3" />
      </g>
      <g transform="translate(60, 100)">
        <rect x="0" y="0" width="30" height="18" rx="2" fill="url(#labelTag)" stroke={C.warm300} strokeWidth="0.5" transform="skewY(27)" />
        <text x="15" y="20" fontSize="7" fontWeight="600" fontFamily="sans-serif" fill={C.warm800} textAnchor="middle" transform="skewY(27)">{displayLabel}</text>
      </g>
      <circle cx="148" cy="65" r="1.5" fill={C.accent} opacity="0.2" />
    </svg>
  );
}

export default function ItemIllustration({ itemName, className }: ItemIllustrationProps): React.JSX.Element {
  const name = itemName.trim();

  if (name === "???" || name === "?") {
    return <div className={className}><MysteryBoxIllustration /></div>;
  }

  const isPen = name.includes("볼펜") || name.includes("펜") || name.includes("모나미") || name.toLowerCase().includes("monami") || name.toLowerCase().includes("pen");
  if (isPen) {
    return <div className={className}><MonamiPenIllustration /></div>;
  }

  return <div className={className}><GenericPackageIllustration label={name} /></div>;
}
