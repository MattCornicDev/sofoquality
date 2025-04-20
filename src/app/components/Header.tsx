export default function Header() {
    return (
      <div className="w-full">
        {/* Bande décorative zellige */}
        <div className="w-full h-16 md:h-24 bg-white dark:bg-gray-900 overflow-hidden relative">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full"
          >
            {/* Motif géométrique inspiré du zellige */}
            <pattern id="zellige" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="60" height="60" fill="#16a34a" />
              <polygon points="30,0 60,30 30,60 0,30" fill="#fff" opacity="0.7" />
              <circle cx="30" cy="30" r="10" fill="#eab308" opacity="0.8" />
            </pattern>
            <rect width="1440" height="120" fill="url(#zellige)" />
          </svg>
        </div>
      </div>
    );
  }
