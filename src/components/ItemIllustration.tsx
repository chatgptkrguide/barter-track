import { useId } from "react";

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

function DropShadowFilter({ id, stdDeviation = 4, dx = 2, dy = 4, opacity = 0.18 }: {
  id: string;
  stdDeviation?: number;
  dx?: number;
  dy?: number;
  opacity?: number;
}): React.JSX.Element {
  return (
    <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation={stdDeviation} result="blur" />
      <feOffset in="blur" dx={dx} dy={dy} result="offsetBlur" />
      <feFlood floodColor={C.shadow} floodOpacity={opacity} result="color" />
      <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
      <feMerge>
        <feMergeNode in="shadow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );
}

function MonamiPenIllustration(): React.JSX.Element {
  const uid = useId().replace(/:/g, "");
  const ids = {
    shadow: `penShadow-${uid}`,
    body: `penBody-${uid}`,
    cap: `penCap-${uid}`,
    band: `accentBand-${uid}`,
    tip: `penTip-${uid}`,
    clip: `clipGrad-${uid}`,
    surface: `surface-${uid}`,
    shimmer: `shimmer-${uid}`,
  };

  return (
    <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="모나미 153 볼펜">
      <defs>
        <DropShadowFilter id={ids.shadow} stdDeviation={5} dx={3} dy={5} opacity={0.22} />
        <linearGradient id={ids.body} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fefefe" />
          <stop offset="35%" stopColor={C.warm50} />
          <stop offset="100%" stopColor={C.warm200} />
        </linearGradient>
        <linearGradient id={ids.cap} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fcfcfc" />
          <stop offset="50%" stopColor={C.warm100} />
          <stop offset="100%" stopColor={C.warm300} />
        </linearGradient>
        <linearGradient id={ids.band} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.accentLight} />
          <stop offset="50%" stopColor={C.accent} />
          <stop offset="100%" stopColor={C.accentDark} />
        </linearGradient>
        <linearGradient id={ids.tip} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#888" />
          <stop offset="50%" stopColor="#666" />
          <stop offset="100%" stopColor="#444" />
        </linearGradient>
        <linearGradient id={ids.clip} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.warm300} />
          <stop offset="50%" stopColor={C.warm200} />
          <stop offset="100%" stopColor={C.warm300} />
        </linearGradient>
        <radialGradient id={ids.surface} cx="50%" cy="50%">
          <stop offset="0%" stopColor={C.warm100} stopOpacity="0.6" />
          <stop offset="100%" stopColor={C.warm50} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={ids.shimmer} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.white} stopOpacity="0" />
          <stop offset="45%" stopColor={C.white} stopOpacity="0.5" />
          <stop offset="55%" stopColor={C.white} stopOpacity="0.5" />
          <stop offset="100%" stopColor={C.white} stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="140" cy="120" rx="100" ry="18" fill={`url(#${ids.surface})`} />
      <g filter={`url(#${ids.shadow})`} transform="translate(140, 80) rotate(-15) translate(-140, -80)">
        <polygon points="28,84 38,80 38,88" fill={`url(#${ids.tip})`} stroke="#555" strokeWidth="0.3" />
        <circle cx="29" cy="84" r="1" fill="#333" />
        <polygon points="38,79 56,76 56,92 38,89" fill="#999" stroke="#888" strokeWidth="0.3" />
        <polygon points="38,81 56,78 56,80 38,83" fill={C.white} opacity="0.3" />
        {[42, 45, 48, 51].map((x) => (
          <line key={`grip-${x}`} x1={x} y1={77 + (x - 38) * -0.17} x2={x} y2={89 + (x - 38) * 0.17} stroke="#aaa" strokeWidth="0.5" opacity="0.6" />
        ))}
        <rect x="56" y="74" width="120" height="20" rx="1.5" fill={`url(#${ids.body})`} stroke={C.warm300} strokeWidth="0.5" />
        <rect x="58" y="75.5" width="116" height="3" rx="1.5" fill={`url(#${ids.shimmer})`} opacity="0.7" />
        <text x="108" y="88" fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif" fill={C.warm800} textAnchor="middle" opacity="0.85">153</text>
        <text x="140" y="87.5" fontSize="4.5" fontFamily="Arial, sans-serif" fill={C.warm400} textAnchor="middle" letterSpacing="1.5">MONAMI</text>
        <rect x="176" y="73.5" width="5" height="21" rx="1" fill={`url(#${ids.band})`} />
        <rect x="176" y="74.5" width="5" height="2.5" rx="1" fill={C.accentGlow} opacity="0.5" />
        <rect x="181" y="74" width="3" height="20" fill={C.warm200} stroke={C.warm300} strokeWidth="0.3" />
        <rect x="184" y="73" width="40" height="22" rx="2" fill={`url(#${ids.cap})`} stroke={C.warm300} strokeWidth="0.5" />
        <rect x="185" y="74" width="38" height="3.5" rx="1.5" fill={C.white} opacity="0.35" />
        <rect x="222" y="73.5" width="4" height="21" rx="2" fill={C.warm200} stroke={C.warm300} strokeWidth="0.3" />
        <rect x="196" y="63" width="3" height="12" rx="1" fill={`url(#${ids.clip})`} stroke={C.warm300} strokeWidth="0.4" />
        <circle cx="197.5" cy="63" r="2.5" fill={C.warm200} stroke={C.warm300} strokeWidth="0.4" />
        <rect x="196.5" y="64" width="1.5" height="8" rx="0.5" fill={C.white} opacity="0.3" />
      </g>
      {/* Ambient — short diagonal lines instead of circles */}
      <line x1="42" y1="132" x2="46" y2="128" stroke={C.accent} strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      <line x1="230" y1="35" x2="234" y2="31" stroke={C.accentLight} strokeWidth="1" opacity="0.18" strokeLinecap="round" />
    </svg>
  );
}

function MysteryBoxIllustration(): React.JSX.Element {
  const uid = useId().replace(/:/g, "");
  const ids = {
    shadow: `boxShadow-${uid}`,
    top: `boxTop-${uid}`,
    front: `boxFront-${uid}`,
    side: `boxSide-${uid}`,
    glow: `mysteryGlow-${uid}`,
    ribbon: `ribbon-${uid}`,
  };

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="미스터리 상자">
      <defs>
        <DropShadowFilter id={ids.shadow} />
        <linearGradient id={ids.top} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.accentGlow} />
          <stop offset="100%" stopColor={C.accentLight} />
        </linearGradient>
        <linearGradient id={ids.front} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.accentLight} />
          <stop offset="100%" stopColor={C.accent} />
        </linearGradient>
        <linearGradient id={ids.side} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.accentDark} />
          <stop offset="100%" stopColor={C.accent} />
        </linearGradient>
        <radialGradient id={ids.glow} cx="50%" cy="50%">
          <stop offset="0%" stopColor={C.accentGlow} stopOpacity="0.4" />
          <stop offset="60%" stopColor={C.accentGlow} stopOpacity="0.1" />
          <stop offset="100%" stopColor={C.warm50} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={ids.ribbon} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm800} />
          <stop offset="100%" stopColor={C.warm600} />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="75" ry="65" fill={`url(#${ids.glow})`} />
      <ellipse cx="100" cy="160" rx="55" ry="12" fill={C.shadow} opacity="0.1" />
      <g filter={`url(#${ids.shadow})`}>
        <polygon points="100,55 155,80 100,105 45,80" fill={`url(#${ids.top})`} stroke={C.accent} strokeWidth="0.8" strokeDasharray="5,3" />
        <polygon points="45,80 100,105 100,155 45,130" fill={`url(#${ids.front})`} stroke={C.accent} strokeWidth="0.8" strokeDasharray="5,3" />
        <polygon points="100,105 155,80 155,130 100,155" fill={`url(#${ids.side})`} stroke={C.accentDark} strokeWidth="0.8" strokeDasharray="5,3" />
      </g>
      <polygon points="70,80 80,85 80,142 70,137" fill={`url(#${ids.ribbon})`} opacity="0.7" />
      <polygon points="100,64 110,69 55,94 45,89" fill={`url(#${ids.ribbon})`} opacity="0.6" />
      <g transform="translate(62, 78)">
        <ellipse cx="-6" cy="-8" rx="8" ry="5" transform="rotate(-20)" fill={C.warm800} opacity="0.8" />
        <ellipse cx="10" cy="-10" rx="8" ry="5" transform="rotate(25)" fill={C.warm600} opacity="0.8" />
        <circle cx="3" cy="-2" r="3" fill={C.warm800} />
      </g>
      <text x="70" y="118" fontSize="28" fontWeight="bold" fontFamily="Georgia, serif" fill={C.warm50} opacity="0.85" textAnchor="middle">?</text>
      {/* Sparkles — diamond shapes for mystery feel */}
      {[
        { x: 140, y: 55, s: 3, o: 0.5 },
        { x: 150, y: 70, s: 2, o: 0.35 },
        { x: 50, y: 50, s: 2.5, o: 0.4 },
        { x: 35, y: 95, s: 2, o: 0.3 },
        { x: 160, y: 100, s: 1.8, o: 0.25 },
      ].map((s) => (
        <polygon
          key={`${s.x}-${s.y}`}
          points={`${s.x},${s.y - s.s} ${s.x + s.s * 0.6},${s.y} ${s.x},${s.y + s.s} ${s.x - s.s * 0.6},${s.y}`}
          fill={C.accentGlow}
          opacity={s.o}
        />
      ))}
    </svg>
  );
}

function WangKkumteulIllustration(): React.JSX.Element {
  const uid = useId().replace(/:/g, "");
  const ids = {
    shadow: `wkShadow-${uid}`,
    pkgFront: `wkPkgFront-${uid}`,
    pkgSide: `wkPkgSide-${uid}`,
    pkgTop: `wkPkgTop-${uid}`,
    worm1: `wormBody1-${uid}`,
    worm2: `wormBody2-${uid}`,
    worm3: `wormBody3-${uid}`,
    shimmer: `sugarShimmer-${uid}`,
  };

  return (
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="왕꿈틀이">
      <defs>
        <DropShadowFilter id={ids.shadow} />
        <linearGradient id={ids.pkgFront} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#ffe066" />
          <stop offset="100%" stopColor="#f5c518" />
        </linearGradient>
        <linearGradient id={ids.pkgSide} x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#d4a010" />
          <stop offset="100%" stopColor="#e8b815" />
        </linearGradient>
        <linearGradient id={ids.pkgTop} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#fff3a0" />
          <stop offset="100%" stopColor="#ffe566" />
        </linearGradient>
        <linearGradient id={ids.worm1} x1="0" y1="0" x2="0.8" y2="1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff6b8a" />
          <stop offset="50%" stopColor="#ff4d73" />
          <stop offset="100%" stopColor="#e8365d" />
        </linearGradient>
        <linearGradient id={ids.worm2} x1="0.2" y1="0" x2="1" y2="0.8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd87d" />
          <stop offset="50%" stopColor="#5cc85c" />
          <stop offset="100%" stopColor="#45b045" />
        </linearGradient>
        <linearGradient id={ids.worm3} x1="0" y1="0.2" x2="0.8" y2="1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffa94d" />
          <stop offset="50%" stopColor="#ff8c1a" />
          <stop offset="100%" stopColor="#e67700" />
        </linearGradient>
        <linearGradient id={ids.shimmer} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Floor shadow */}
      <ellipse cx="100" cy="192" rx="58" ry="14" fill={C.shadow} opacity="0.1" />

      {/* Package - isometric box */}
      <g filter={`url(#${ids.shadow})`}>
        <polygon points="100,80 158,105 100,130 42,105" fill={`url(#${ids.pkgTop})`} stroke="#d4a010" strokeWidth="0.8" />
        <polygon points="42,105 100,130 100,178 42,153" fill={`url(#${ids.pkgFront})`} stroke="#d4a010" strokeWidth="0.8" />
        <polygon points="100,130 158,105 158,153 100,178" fill={`url(#${ids.pkgSide})`} stroke="#c49510" strokeWidth="0.8" />

        <polygon points="100,82 145,102 100,122 55,102" fill={`url(#${ids.shimmer})`} opacity="0.3" />

        <polygon points="55,112 92,126 92,148 55,134" fill="#e85d2e" opacity="0.85" />
        <text x="73" y="130" fontSize="7" fontWeight="900" fontFamily="sans-serif" fill="#fff" textAnchor="middle" transform="skewY(27) translate(-14, -25)">왕꿈틀이</text>

        <polygon points="108,126 150,109 150,118 108,135" fill="#e85d2e" opacity="0.7" />
      </g>

      {/* Pink worm */}
      <g filter={`url(#${ids.shadow})`}>
        <path
          d="M88,92 C82,78 72,72 68,65 C64,58 70,52 78,56 C86,60 82,70 85,78"
          fill="none" stroke={`url(#${ids.worm1})`} strokeWidth="7" strokeLinecap="round"
        />
        {[
          { cx: 72, cy: 66 }, { cx: 77, cy: 59 }, { cx: 81, cy: 72 },
          { cx: 84, cy: 82 }, { cx: 69, cy: 73 },
        ].map((d) => (
          <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r="0.8" fill="#fff" opacity="0.7" />
        ))}
        <circle cx="76" cy="54" r="2.2" fill="#fff" />
        <circle cx="76.3" cy="53.8" r="1" fill="#222" />
        <circle cx="80" cy="55.5" r="1.8" fill="#fff" />
        <circle cx="80.2" cy="55.2" r="0.9" fill="#222" />
      </g>

      {/* Green worm */}
      <g filter={`url(#${ids.shadow})`}>
        <path
          d="M112,88 C118,74 128,70 135,64 C142,58 148,62 144,70 C140,78 130,76 122,82"
          fill="none" stroke={`url(#${ids.worm2})`} strokeWidth="6.5" strokeLinecap="round"
        />
        {[
          { cx: 130, cy: 68 }, { cx: 137, cy: 63 }, { cx: 141, cy: 72 },
          { cx: 125, cy: 74 }, { cx: 118, cy: 80 },
        ].map((d) => (
          <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r="0.7" fill="#fff" opacity="0.6" />
        ))}
        <circle cx="143" cy="68" r="1.8" fill="#fff" />
        <circle cx="143.3" cy="67.7" r="0.9" fill="#222" />
        <circle cx="146.5" cy="65.5" r="2" fill="#fff" />
        <circle cx="146.8" cy="65.2" r="1" fill="#222" />
      </g>

      {/* Orange worm */}
      <g filter={`url(#${ids.shadow})`}>
        <path
          d="M96,86 C94,76 98,68 104,62 C108,58 112,60 110,66 C108,72 100,74 98,80"
          fill="none" stroke={`url(#${ids.worm3})`} strokeWidth="5.5" strokeLinecap="round"
        />
        {[
          { cx: 102, cy: 64 }, { cx: 107, cy: 61 }, { cx: 100, cy: 72 },
        ].map((d) => (
          <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r="0.6" fill="#fff" opacity="0.5" />
        ))}
        <circle cx="108" cy="60.5" r="1.5" fill="#fff" />
        <circle cx="108.2" cy="60.3" r="0.7" fill="#222" />
      </g>

      {/* Scattered sugar — tiny crosses instead of circles */}
      {[
        { x: 60, y: 55, s: 3, o: 0.25 },
        { x: 145, y: 50, s: 2.5, o: 0.2 },
        { x: 90, y: 40, s: 2, o: 0.3 },
        { x: 120, y: 38, s: 2.5, o: 0.15 },
        { x: 55, y: 80, s: 2, o: 0.12 },
      ].map((s) => (
        <g key={`${s.x}-${s.y}`} opacity={s.o}>
          <line x1={s.x - s.s} y1={s.y} x2={s.x + s.s} y2={s.y} stroke="#fff8dc" strokeWidth="0.8" strokeLinecap="round" />
          <line x1={s.x} y1={s.y - s.s} x2={s.x} y2={s.y + s.s} stroke="#fff8dc" strokeWidth="0.8" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

function SuneungClockIllustration(): React.JSX.Element {
  const uid = useId().replace(/:/g, "");
  const ids = {
    shadow: `clkShadow-${uid}`,
    face: `clockFace-${uid}`,
    rim: `clockRim-${uid}`,
    back: `clockBack-${uid}`,
    strap: `strapGrad-${uid}`,
    strapSide: `strapSide-${uid}`,
    glass: `glassReflect-${uid}`,
    buckle: `buckleGrad-${uid}`,
  };
  const hourAngle = -60;
  const minuteAngle = 60;

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="수능시계">
      <defs>
        <DropShadowFilter id={ids.shadow} stdDeviation={3} dx={2} dy={3} opacity={0.15} />
        <linearGradient id={ids.face} x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#fefefe" />
          <stop offset="100%" stopColor={C.warm100} />
        </linearGradient>
        <linearGradient id={ids.rim} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm200} />
          <stop offset="50%" stopColor={C.warm300} />
          <stop offset="100%" stopColor={C.warm400} />
        </linearGradient>
        <linearGradient id={ids.back} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm300} />
          <stop offset="100%" stopColor={C.warm400} />
        </linearGradient>
        <linearGradient id={ids.strap} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d2520" />
          <stop offset="50%" stopColor="#1e1a16" />
          <stop offset="100%" stopColor="#2d2520" />
        </linearGradient>
        <linearGradient id={ids.strapSide} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a1512" />
          <stop offset="100%" stopColor="#2d2520" />
        </linearGradient>
        <radialGradient id={ids.glass} cx="35%" cy="35%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={ids.buckle} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm300} />
          <stop offset="100%" stopColor={C.warm400} />
        </linearGradient>
      </defs>

      {/* Floor shadow */}
      <ellipse cx="100" cy="168" rx="65" ry="12" fill={C.shadow} opacity="0.12" />

      <g filter={`url(#${ids.shadow})`}>
        {/* Upper strap */}
        <path d="M82,28 L78,30 L78,68 L82,66 Z" fill={`url(#${ids.strapSide})`} />
        <path d="M78,30 L118,30 L122,28 L82,28 Z" fill="#3d352d" />
        <path d="M118,30 L122,28 L122,66 L118,68 Z" fill={`url(#${ids.strap})`} />
        <rect x="78" y="30" width="40" height="38" rx="1" fill={`url(#${ids.strap})`} />
        <line x1="80" y1="32" x2="80" y2="66" stroke="#4a3f35" strokeWidth="0.5" strokeDasharray="3,2" />
        <line x1="116" y1="32" x2="116" y2="66" stroke="#4a3f35" strokeWidth="0.5" strokeDasharray="3,2" />
        {[38, 44, 50, 56].map((y) => (
          <ellipse key={`hole-${y}`} cx="98" cy={y} rx="2" ry="1.2" fill="#1a1512" stroke="#2d2520" strokeWidth="0.3" />
        ))}

        {/* Lower strap */}
        <path d="M82,138 L78,140 L78,172 L82,170 Z" fill={`url(#${ids.strapSide})`} />
        <path d="M118,140 L122,138 L122,170 L118,172 Z" fill={`url(#${ids.strap})`} />
        <rect x="78" y="138" width="40" height="32" rx="1" fill={`url(#${ids.strap})`} />
        <line x1="80" y1="140" x2="80" y2="170" stroke="#4a3f35" strokeWidth="0.5" strokeDasharray="3,2" />
        <line x1="116" y1="140" x2="116" y2="170" stroke="#4a3f35" strokeWidth="0.5" strokeDasharray="3,2" />

        {/* Buckle */}
        <rect x="74" y="164" width="48" height="10" rx="2" fill={`url(#${ids.buckle})`} stroke={C.warm400} strokeWidth="0.5" />
        <rect x="78" y="166" width="40" height="6" rx="1" fill="none" stroke={C.warm400} strokeWidth="0.6" />
        <rect x="94" y="165" width="3" height="8" rx="1" fill={C.warm400} />

        {/* Watch case */}
        <ellipse cx="100" cy="106" rx="38" ry="38" fill={`url(#${ids.back})`} />
        <circle cx="100" cy="103" r="38" fill={`url(#${ids.rim})`} stroke={C.warm400} strokeWidth="1" />
        <circle cx="100" cy="103" r="35" fill="none" stroke={C.warm300} strokeWidth="0.5" />

        {/* Clock face */}
        <circle cx="100" cy="103" r="33" fill={`url(#${ids.face})`} />

        {/* Hour markers with micro-jitter */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
          const jitter = (i % 3 === 1) ? 0.3 : (i % 3 === 2) ? -0.2 : 0;
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const isMain = i % 3 === 0;
          const outerR = 30;
          const innerR = isMain ? 25 : 27;
          return (
            <line
              key={`m-${i}`}
              x1={100 + Math.cos(angle) * innerR + jitter}
              y1={103 + Math.sin(angle) * innerR}
              x2={100 + Math.cos(angle) * outerR}
              y2={103 + Math.sin(angle) * outerR}
              stroke={isMain ? C.warm800 : C.warm400}
              strokeWidth={isMain ? 2 : 1}
              strokeLinecap="round"
            />
          );
        })}

        {/* Hour numbers */}
        {[12, 3, 6, 9].map((num) => {
          const i = num === 12 ? 0 : num / 3;
          const angle = (i * 90 - 90) * (Math.PI / 180);
          const r = 22;
          return (
            <text
              key={`n-${num}`}
              x={100 + Math.cos(angle) * r}
              y={103 + Math.sin(angle) * r + 3}
              fontSize="8"
              fontWeight="700"
              fontFamily="Arial, sans-serif"
              fill={C.warm800}
              textAnchor="middle"
            >
              {num}
            </text>
          );
        })}

        <text x="100" y="92" fontSize="5" fontFamily="sans-serif" fill={C.warm400} textAnchor="middle" letterSpacing="1">수능시계</text>

        {/* Hour hand */}
        <line
          x1="100" y1="103"
          x2={100 + Math.cos((hourAngle - 90) * Math.PI / 180) * 16}
          y2={103 + Math.sin((hourAngle - 90) * Math.PI / 180) * 16}
          stroke={C.warm800} strokeWidth="2.5" strokeLinecap="round"
        />
        {/* Minute hand */}
        <line
          x1="100" y1="103"
          x2={100 + Math.cos((minuteAngle - 90) * Math.PI / 180) * 22}
          y2={103 + Math.sin((minuteAngle - 90) * Math.PI / 180) * 22}
          stroke={C.warm800} strokeWidth="1.8" strokeLinecap="round"
        />
        {/* Second hand */}
        <line
          x1="100" y1="103"
          x2={100 + Math.cos((180 - 90) * Math.PI / 180) * 24}
          y2={103 + Math.sin((180 - 90) * Math.PI / 180) * 24}
          stroke={C.accent} strokeWidth="0.8" strokeLinecap="round"
        />
        <circle cx="100" cy="103" r="2.5" fill={C.warm800} />
        <circle cx="100" cy="103" r="1.2" fill={C.accent} />

        {/* Glass reflection */}
        <circle cx="100" cy="103" r="33" fill={`url(#${ids.glass})`} />

        {/* Crown */}
        <rect x="137" y="99" width="6" height="8" rx="2" fill={C.warm300} stroke={C.warm400} strokeWidth="0.5" />
        <line x1="139" y1="101" x2="139" y2="105" stroke={C.warm400} strokeWidth="0.3" />
        <line x1="141" y1="101" x2="141" y2="105" stroke={C.warm400} strokeWidth="0.3" />
      </g>

      {/* Ambient — small tick marks */}
      <line x1="48" y1="59" x2="52" y2="61" stroke={C.accent} strokeWidth="1" opacity="0.18" strokeLinecap="round" />
      <circle cx="156" cy="150" r="0.8" fill={C.accentLight} opacity="0.12" />
    </svg>
  );
}

function GenericPackageIllustration({ label }: { label: string }): React.JSX.Element {
  const uid = useId().replace(/:/g, "");
  const ids = {
    shadow: `pkgShadow-${uid}`,
    top: `pkgTop-${uid}`,
    front: `pkgFront-${uid}`,
    side: `pkgSide-${uid}`,
    tag: `labelTag-${uid}`,
  };
  const displayLabel = label.length > 6 ? label.slice(0, 5) + "…" : label;

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`${label} 패키지`}>
      <defs>
        <DropShadowFilter id={ids.shadow} />
        <linearGradient id={ids.top} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm100} />
          <stop offset="100%" stopColor={C.warm200} />
        </linearGradient>
        <linearGradient id={ids.front} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm200} />
          <stop offset="100%" stopColor={C.warm300} />
        </linearGradient>
        <linearGradient id={ids.side} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.warm400} />
          <stop offset="100%" stopColor={C.warm300} />
        </linearGradient>
        <linearGradient id={ids.tag} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm50} />
          <stop offset="100%" stopColor={C.warm100} />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="158" rx="50" ry="10" fill={C.shadow} opacity="0.1" />
      <g filter={`url(#${ids.shadow})`}>
        <polygon points="100,60 150,82 100,105 50,82" fill={`url(#${ids.top})`} stroke={C.warm300} strokeWidth="0.6" />
        <polygon points="50,82 100,105 100,150 50,127" fill={`url(#${ids.front})`} stroke={C.warm300} strokeWidth="0.6" />
        <polygon points="100,105 150,82 150,127 100,150" fill={`url(#${ids.side})`} stroke={C.warm400} strokeWidth="0.6" />
        <line x1="100" y1="60" x2="100" y2="105" stroke={C.warm300} strokeWidth="2" opacity="0.4" />
        <line x1="50" y1="82" x2="150" y2="82" stroke={C.warm300} strokeWidth="2" opacity="0.3" />
      </g>
      <g transform="translate(60, 100)">
        <rect x="0" y="0" width="30" height="18" rx="2" fill={`url(#${ids.tag})`} stroke={C.warm300} strokeWidth="0.5" transform="skewY(27)" />
        <text x="15" y="20" fontSize="7" fontWeight="600" fontFamily="sans-serif" fill={C.warm800} textAnchor="middle" transform="skewY(27)">{displayLabel}</text>
      </g>
      <line x1="147" y1="63" x2="150" y2="66" stroke={C.accent} strokeWidth="1" opacity="0.18" strokeLinecap="round" />
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

  const isWangKkumteul = name.includes("왕꿈틀이") || name.includes("꿈틀이") || name.includes("젤리") || name.includes("구미");
  if (isWangKkumteul) {
    return <div className={className}><WangKkumteulIllustration /></div>;
  }

  const isClock = name.includes("수능시계") || name.includes("시계") || name.toLowerCase().includes("clock") || name.toLowerCase().includes("watch");
  if (isClock) {
    return <div className={className}><SuneungClockIllustration /></div>;
  }

  return <div className={className}><GenericPackageIllustration label={name} /></div>;
}
