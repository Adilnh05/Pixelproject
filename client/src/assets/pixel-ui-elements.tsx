export const PixelDpadSVG = () => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <title>Pixel D-Pad</title>
      <g>
        {/* Base */}
        <rect x="11" y="11" width="10" height="10" fill="#333" />
        {/* Up */}
        <rect x="14" y="8" width="4" height="3" fill="#555" />
        {/* Right */}
        <rect x="21" y="14" width="3" height="4" fill="#555" />
        {/* Down */}
        <rect x="14" y="21" width="4" height="3" fill="#555" />
        {/* Left */}
        <rect x="8" y="14" width="3" height="4" fill="#555" />
        {/* Center */}
        <rect x="14" y="14" width="4" height="4" fill="#777" />
        {/* Highlights */}
        <rect x="14" y="8" width="1" height="1" fill="#999" />
        <rect x="21" y="14" width="1" height="1" fill="#999" />
        <rect x="17" y="23" width="1" height="1" fill="#999" />
        <rect x="8" y="17" width="1" height="1" fill="#999" />
      </g>
    </svg>
  );
};

export const PixelButtonsSVG = () => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <title>Pixel Buttons</title>
      <g>
        {/* A Button */}
        <circle cx="8" cy="16" r="5" fill="#ff5a5f" />
        <text x="8" y="18" textAnchor="middle" fontSize="6" fill="#fff" fontFamily="'Silkscreen', sans-serif">A</text>
        
        {/* B Button */}
        <circle cx="22" cy="16" r="5" fill="#3a86ff" />
        <text x="22" y="18" textAnchor="middle" fontSize="6" fill="#fff" fontFamily="'Silkscreen', sans-serif">B</text>
        
        {/* Shadows */}
        <rect x="5" y="19" width="6" height="2" fill="rgba(0,0,0,0.2)" />
        <rect x="19" y="19" width="6" height="2" fill="rgba(0,0,0,0.2)" />
      </g>
    </svg>
  );
};

export const PixelDialogBoxSVG = () => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <title>Pixel Dialog Box</title>
      <g>
        {/* Background */}
        <rect x="2" y="8" width="28" height="16" fill="#333" />
        <rect x="4" y="10" width="24" height="12" fill="#fff" />
        
        {/* Text lines */}
        <rect x="6" y="12" width="14" height="2" fill="#777" />
        <rect x="6" y="16" width="18" height="2" fill="#777" />
        <rect x="6" y="20" width="10" height="2" fill="#777" />
        
        {/* Corner decorations */}
        <rect x="2" y="8" width="2" height="2" fill="#3a86ff" />
        <rect x="28" y="8" width="2" height="2" fill="#3a86ff" />
        <rect x="2" y="22" width="2" height="2" fill="#3a86ff" />
        <rect x="28" y="22" width="2" height="2" fill="#3a86ff" />
      </g>
    </svg>
  );
};

export const PixelHealthBarSVG = () => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <title>Pixel Health Bar</title>
      <g>
        {/* Border */}
        <rect x="2" y="8" width="28" height="8" fill="#333" />
        
        {/* Background */}
        <rect x="4" y="10" width="24" height="4" fill="#555" />
        
        {/* Health (75%) */}
        <rect x="4" y="10" width="18" height="4" fill="#ff5a5f" />
        
        {/* Segments */}
        <rect x="8" y="10" width="1" height="4" fill="#333" opacity="0.3" />
        <rect x="12" y="10" width="1" height="4" fill="#333" opacity="0.3" />
        <rect x="16" y="10" width="1" height="4" fill="#333" opacity="0.3" />
        <rect x="20" y="10" width="1" height="4" fill="#333" opacity="0.3" />
        <rect x="24" y="10" width="1" height="4" fill="#333" opacity="0.3" />
        
        {/* Icon */}
        <rect x="4" y="14" width="4" height="4" fill="#ff5a5f" />
        <rect x="5" y="15" width="2" height="2" fill="#fff" />
      </g>
    </svg>
  );
};
