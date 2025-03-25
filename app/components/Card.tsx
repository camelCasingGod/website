import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: Props) {
  return (
    <div className={`rounded-2xl shadow-md border ${className || ""}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }: Props) {
  return (
    <div className={`p-4 ${className || ""}`} {...props}>
      {children}
    </div>
  );
}
