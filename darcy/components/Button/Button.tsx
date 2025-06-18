import styles from "./button.module.css";

export default function Button({
  children,
  type = "button",
  className,
  onClick,
}: {
  children: string;
  type: "button" | "submit" | "reset";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
