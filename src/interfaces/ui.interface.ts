import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    light?: boolean;
    centered?: boolean;
}
