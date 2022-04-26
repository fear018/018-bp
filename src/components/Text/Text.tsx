import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  variant?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small";
}

const Text = ({ children, className, variant = "p" }: IProps) => {
  const Tag = variant;

  return <Tag className={className}>{children}</Tag>;
};

export default Text;
