interface LogoProps {
  className?: string;
  compact?: boolean;
}

export function Logo({ className = "", compact }: LogoProps) {
  return (
    <a href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={compact ? 28 : 36}
        height={compact ? 28 : 36}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="shield-grad" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        <path
          d="M18 2L4 9v8c0 10.5 5.5 16.5 14 19 8.5-2.5 14-8.5 14-19V9L18 2z"
          fill="url(#shield-grad)"
          fillOpacity="0.08"
          stroke="url(#shield-grad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M18 6L8 11v6c0 7.5 4 12 10 14 6-2 10-6.5 10-14v-6l-10-5z"
          fill="url(#shield-grad)"
          fillOpacity="0.12"
          stroke="url(#shield-grad)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="17" r="4" fill="url(#shield-grad)" fillOpacity="0.25" />
        <circle cx="18" cy="17" r="2" fill="url(#shield-grad)" fillOpacity="0.5" />
        <circle cx="18" cy="17" r="0.8" fill="#ffffff" />
        <line x1="18" y1="11" x2="18" y2="8" stroke="url(#shield-grad)" strokeWidth="1" strokeLinecap="round" />
        <line x1="18" y1="23" x2="18" y2="26" stroke="url(#shield-grad)" strokeWidth="1" strokeLinecap="round" />
        <line x1="12" y1="17" x2="9" y2="17" stroke="url(#shield-grad)" strokeWidth="1" strokeLinecap="round" />
        <line x1="24" y1="17" x2="27" y2="17" stroke="url(#shield-grad)" strokeWidth="1" strokeLinecap="round" />
        <line x1="13.5" y1="12.5" x2="11" y2="10" stroke="url(#shield-grad)" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="22.5" y1="21.5" x2="25" y2="24" stroke="url(#shield-grad)" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="22.5" y1="12.5" x2="25" y2="10" stroke="url(#shield-grad)" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="13.5" y1="21.5" x2="11" y2="24" stroke="url(#shield-grad)" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="14" y1="15" x2="22" y2="19" stroke="url(#shield-grad)" strokeWidth="0.5" strokeLinecap="round" />
        <line x1="14" y1="19" x2="22" y2="15" stroke="url(#shield-grad)" strokeWidth="0.5" strokeLinecap="round" />
      </svg>

      {!compact && (
        <div className="flex flex-col">
          <span className="text-base font-bold leading-tight tracking-tight text-text-main">
            AEGIS
          </span>
          <span className="text-[10px] font-medium leading-tight tracking-[0.2em] text-brand-primary">
            CODE SECURITY
          </span>
        </div>
      )}
    </a>
  );
}
