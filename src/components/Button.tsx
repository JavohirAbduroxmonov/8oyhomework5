type ButtonProps = {
  onClick?: () => void;
  bgColor?: string;
  color?: keyof typeof colorStyles; // color is now strictly typed to available colors
  children: React.ReactNode;
  pill?: boolean;
  fontSize?: number;
  outline?: boolean;
  size?: keyof typeof sizeStyles; // size is now strictly typed to available sizes
  disabled?: boolean;
};

const colorStyles = {
  default: {
    backgroundColor: "#0e7490",
    color: "white",
  },
  blue: {
    backgroundColor: "#1d4ed8",
    color: "white",
  },
  gray: {
    backgroundColor: "#111827",
    color: "white",
  },
  dark: {
    backgroundColor: "#1f2937",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "#111827",
  },
  success: {
    backgroundColor: "#15803d",
    color: "white",
  },
  failure: {
    backgroundColor: "#b91c1c",
    color: "white",
  },
  warning: {
    backgroundColor: "#facc15",
    color: "#111827",
  },
  purple: {
    backgroundColor: "#7e22ce",
    color: "white",
  },
};

const sizeStyles = {
  xs: {
    padding: "0.25rem 0.5rem",
    fontSize: "0.75rem",
  },
  sm: {
    padding: "0.375rem 0.75rem",
    fontSize: "0.875rem",
  },
  md: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
  },
  lg: {
    padding: "0.625rem 1.25rem",
    fontSize: "1rem",
  },
  xl: {
    padding: "0.75rem 1.5rem",
    fontSize: "1.25rem",
  },
};

export default function Button({
  color = "default",
  pill = false,
  outline = false,
  size = "md",
  onClick,
  children,
  disabled = false,
}: ButtonProps) {
  const styles = colorStyles[color]; // We know color exists in colorStyles now
  const sizeStyle = sizeStyles[size]; // Same for size

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: outline ? "transparent" : styles.backgroundColor,
        color: outline ? styles.backgroundColor : styles.color,
        borderRadius: pill ? "50px" : "4px",
        fontSize: sizeStyle.fontSize,
        padding: sizeStyle.padding,
        border: outline ? `2px solid ${styles.backgroundColor}` : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
