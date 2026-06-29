import { localImages } from "../data/images";

interface SectionBackdropProps {
  variant?: "light" | "dark" | "orange";
  showLogo?: boolean;
}

const LINE_COLORS: Record<string, string> = {
  light: "rgba(17,17,17,0.05)",
  dark: "rgba(255,255,255,0.06)",
  orange: "rgba(255,255,255,0.14)",
};

const LOGO_FILTERS: Record<string, string> = {
  light: "grayscale(1) brightness(0.2) opacity(0.05)",
  dark: "grayscale(1) brightness(3) opacity(0.05)",
  orange: "grayscale(1) brightness(0) opacity(0.06)",
};

export default function SectionBackdrop({ variant = "light", showLogo = true }: SectionBackdropProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <line x1="6%" y1="120%" x2="38%" y2="-20%" stroke={LINE_COLORS[variant]} strokeWidth="90" />
        <line x1="22%" y1="120%" x2="54%" y2="-20%" stroke={LINE_COLORS[variant]} strokeWidth="40" />
      </svg>
      {showLogo && (
        <img
          src={localImages.nexouyLogo}
          alt=""
          className="absolute -right-10 top-1/2 w-[380px] md:w-[520px] max-w-none -translate-y-1/2"
          style={{ filter: LOGO_FILTERS[variant] }}
        />
      )}
    </div>
  );
}
