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

function WangKkumteulIllustration(): React.JSX.Element {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="왕꿈틀이">
      <defs>
        <ShadowFilter />
        <linearGradient id="wkPkgFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe066" />
          <stop offset="100%" stopColor="#f5c518" />
        </linearGradient>
        <linearGradient id="wkPkgSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d4a010" />
          <stop offset="100%" stopColor="#e8b815" />
        </linearGradient>
        <linearGradient id="wkPkgTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff3a0" />
          <stop offset="100%" stopColor="#ffe566" />
        </linearGradient>
        <linearGradient id="wormBody1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff6b8a" />
          <stop offset="50%" stopColor="#ff4d73" />
          <stop offset="100%" stopColor="#e8365d" />
        </linearGradient>
        <linearGradient id="wormBody2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7dd87d" />
          <stop offset="50%" stopColor="#5cc85c" />
          <stop offset="100%" stopColor="#45b045" />
        </linearGradient>
        <linearGradient id="wormBody3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffa94d" />
          <stop offset="50%" stopColor="#ff8c1a" />
          <stop offset="100%" stopColor="#e67700" />
        </linearGradient>
        <linearGradient id="sugarShimmer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Floor shadow */}
      <ellipse cx="100" cy="162" rx="58" ry="14" fill={C.shadow} opacity="0.1" />

      {/* Package - isometric box */}
      <g filter="url(#dropShadow)">
        {/* Top face */}
        <polygon points="100,50 158,75 100,100 42,75" fill="url(#wkPkgTop)" stroke="#d4a010" strokeWidth="0.8" />
        {/* Front face */}
        <polygon points="42,75 100,100 100,148 42,123" fill="url(#wkPkgFront)" stroke="#d4a010" strokeWidth="0.8" />
        {/* Side face */}
        <polygon points="100,100 158,75 158,123 100,148" fill="url(#wkPkgSide)" stroke="#c49510" strokeWidth="0.8" />

        {/* Package top shimmer */}
        <polygon points="100,52 145,72 100,92 55,72" fill="url(#sugarShimmer)" opacity="0.3" />

        {/* Crown logo area on front */}
        <polygon points="55,82 92,96 92,118 55,104" fill="#e85d2e" opacity="0.85" />
        {/* "왕꿈틀이" text on front */}
        <text x="73" y="100" fontSize="7" fontWeight="900" fontFamily="sans-serif" fill="#fff" textAnchor="middle" transform="skewY(27) translate(-14, -25)">왕꿈틀이</text>

        {/* Decorative stripe on side */}
        <polygon points="108,96 150,79 150,88 108,105" fill="#e85d2e" opacity="0.7" />
      </g>

      {/* Gummy worms popping out */}
      {/* Pink worm - curving out from top */}
      <g filter="url(#dropShadow)">
        <path
          d="M88,62 C82,48 72,42 68,35 C64,28 70,22 78,26 C86,30 82,40 85,48"
          fill="none" stroke="url(#wormBody1)" strokeWidth="7" strokeLinecap="round"
        />
        {/* Sugar coating dots on pink worm */}
        {[
          { cx: 72, cy: 36 }, { cx: 76, cy: 30 }, { cx: 80, cy: 42 },
          { cx: 84, cy: 52 }, { cx: 70, cy: 42 },
        ].map((d, i) => (
          <circle key={`sugar1-${i}`} cx={d.cx} cy={d.cy} r="0.8" fill="#fff" opacity="0.7" />
        ))}
        {/* Worm eyes */}
        <circle cx="76" cy="24" r="2" fill="#fff" />
        <circle cx="76" cy="24" r="1" fill="#222" />
        <circle cx="80" cy="25" r="2" fill="#fff" />
        <circle cx="80" cy="25" r="1" fill="#222" />
      </g>

      {/* Green worm */}
      <g filter="url(#dropShadow)">
        <path
          d="M112,58 C118,44 128,40 135,34 C142,28 148,32 144,40 C140,48 130,46 122,52"
          fill="none" stroke="url(#wormBody2)" strokeWidth="6.5" strokeLinecap="round"
        />
        {[
          { cx: 130, cy: 38 }, { cx: 136, cy: 34 }, { cx: 140, cy: 42 },
          { cx: 125, cy: 44 }, { cx: 118, cy: 50 },
        ].map((d, i) => (
          <circle key={`sugar2-${i}`} cx={d.cx} cy={d.cy} r="0.7" fill="#fff" opacity="0.6" />
        ))}
        <circle cx="143" cy="38" r="1.8" fill="#fff" />
        <circle cx="143" cy="38" r="0.9" fill="#222" />
        <circle cx="146" cy="36" r="1.8" fill="#fff" />
        <circle cx="146" cy="36" r="0.9" fill="#222" />
      </g>

      {/* Orange worm - smaller, peeking */}
      <g filter="url(#dropShadow)">
        <path
          d="M96,56 C94,46 98,38 104,32 C108,28 112,30 110,36 C108,42 100,44 98,50"
          fill="none" stroke="url(#wormBody3)" strokeWidth="5.5" strokeLinecap="round"
        />
        {[
          { cx: 102, cy: 34 }, { cx: 106, cy: 32 }, { cx: 100, cy: 42 },
        ].map((d, i) => (
          <circle key={`sugar3-${i}`} cx={d.cx} cy={d.cy} r="0.6" fill="#fff" opacity="0.5" />
        ))}
        <circle cx="108" cy="31" r="1.5" fill="#fff" />
        <circle cx="108" cy="31" r="0.7" fill="#222" />
      </g>

      {/* Scattered sugar particles */}
      {[
        { x: 60, y: 55, r: 1.2, o: 0.3 },
        { x: 145, y: 50, r: 1, o: 0.25 },
        { x: 90, y: 30, r: 0.8, o: 0.35 },
        { x: 120, y: 28, r: 1, o: 0.2 },
        { x: 55, y: 70, r: 0.8, o: 0.15 },
      ].map((s, i) => (
        <circle key={`particle-${i}`} cx={s.x} cy={s.y} r={s.r} fill="#fff8dc" opacity={s.o} />
      ))}
    </svg>
  );
}

function SuneungClockIllustration(): React.JSX.Element {
  const hourAngle = -60; // 10시 10분 포즈
  const minuteAngle = 60;

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="수능시계">
      <defs>
        <ShadowFilter />
        <linearGradient id="clockFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fefefe" />
          <stop offset="100%" stopColor={C.warm100} />
        </linearGradient>
        <linearGradient id="clockRim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm200} />
          <stop offset="50%" stopColor={C.warm300} />
          <stop offset="100%" stopColor={C.warm400} />
        </linearGradient>
        <linearGradient id="clockBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm300} />
          <stop offset="100%" stopColor={C.warm400} />
        </linearGradient>
        <linearGradient id="strapGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d2520" />
          <stop offset="50%" stopColor="#1e1a16" />
          <stop offset="100%" stopColor="#2d2520" />
        </linearGradient>
        <linearGradient id="strapSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a1512" />
          <stop offset="100%" stopColor="#2d2520" />
        </linearGradient>
        <radialGradient id="glassReflect" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="buckleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.warm300} />
          <stop offset="100%" stopColor={C.warm400} />
        </linearGradient>
      </defs>

      {/* Floor shadow */}
      <ellipse cx="100" cy="168" rx="65" ry="12" fill={C.shadow} opacity="0.12" />

      <g filter="url(#dropShadow)">
        {/* === Upper strap (isometric perspective) === */}
        <path d="M82,28 L78,30 L78,68 L82,66 Z" fill="url(#strapSide)" />
        <path d="M78,30 L118,30 L122,28 L82,28 Z" fill="#3d352d" />
        <path d="M118,30 L122,28 L122,66 L118,68 Z" fill="url(#strapGrad)" />
        <rect x="78" y="30" width="40" height="38" rx="1" fill="url(#strapGrad)" />
        {/* Strap stitching */}
        <line x1="80" y1="32" x2="80" y2="66" stroke="#4a3f35" strokeWidth="0.5" strokeDasharray="3,2" />
        <line x1="116" y1="32" x2="116" y2="66" stroke="#4a3f35" strokeWidth="0.5" strokeDasharray="3,2" />
        {/* Strap holes */}
        {[38, 44, 50, 56].map((y) => (
          <ellipse key={`hole-${y}`} cx="98" cy={y} rx="2" ry="1.2" fill="#1a1512" stroke="#2d2520" strokeWidth="0.3" />
        ))}

        {/* === Lower strap === */}
        <path d="M82,138 L78,140 L78,172 L82,170 Z" fill="url(#strapSide)" />
        <path d="M118,140 L122,138 L122,170 L118,172 Z" fill="url(#strapGrad)" />
        <rect x="78" y="138" width="40" height="32" rx="1" fill="url(#strapGrad)" />
        <line x1="80" y1="140" x2="80" y2="170" stroke="#4a3f35" strokeWidth="0.5" strokeDasharray="3,2" />
        <line x1="116" y1="140" x2="116" y2="170" stroke="#4a3f35" strokeWidth="0.5" strokeDasharray="3,2" />

        {/* Buckle */}
        <rect x="74" y="164" width="48" height="10" rx="2" fill="url(#buckleGrad)" stroke={C.warm400} strokeWidth="0.5" />
        <rect x="78" y="166" width="40" height="6" rx="1" fill="none" stroke={C.warm400} strokeWidth="0.6" />
        <rect x="94" y="165" width="3" height="8" rx="1" fill={C.warm400} />

        {/* === Watch case (3D isometric) === */}
        {/* Case depth - bottom */}
        <ellipse cx="100" cy="106" rx="38" ry="38" fill="url(#clockBack)" />
        {/* Case rim */}
        <circle cx="100" cy="103" r="38" fill="url(#clockRim)" stroke={C.warm400} strokeWidth="1" />
        {/* Inner rim */}
        <circle cx="100" cy="103" r="35" fill="none" stroke={C.warm300} strokeWidth="0.5" />

        {/* Clock face */}
        <circle cx="100" cy="103" r="33" fill="url(#clockFace)" />

        {/* Hour markers */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const isMain = i % 3 === 0;
          const outerR = 30;
          const innerR = isMain ? 25 : 27;
          return (
            <line
              key={`marker-${i}`}
              x1={100 + Math.cos(angle) * innerR}
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
              key={`num-${num}`}
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

        {/* "수능" text */}
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
        {/* Center pin */}
        <circle cx="100" cy="103" r="2.5" fill={C.warm800} />
        <circle cx="100" cy="103" r="1.2" fill={C.accent} />

        {/* Glass reflection */}
        <circle cx="100" cy="103" r="33" fill="url(#glassReflect)" />

        {/* Crown (winding knob) */}
        <rect x="137" y="99" width="6" height="8" rx="2" fill={C.warm300} stroke={C.warm400} strokeWidth="0.5" />
        <line x1="139" y1="101" x2="139" y2="105" stroke={C.warm400} strokeWidth="0.3" />
        <line x1="141" y1="101" x2="141" y2="105" stroke={C.warm400} strokeWidth="0.3" />
      </g>

      {/* Ambient details */}
      <circle cx="50" cy="60" r="1.2" fill={C.accent} opacity="0.2" />
      <circle cx="155" cy="150" r="1" fill={C.accentLight} opacity="0.15" />
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
