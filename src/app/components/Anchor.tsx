import Link from "next/link";
import { PropsWithChildren } from "react";

const sizes = {
  lg: "px-5 py-2.5",
  md: "px-4 py-2",
};

const styles = {
  outline: "bg-white border-2 border-black hover:bg-slate-100 text-black",
  primary: "bg-black text-white hover:bg-slate-800  border-2 border-transparent",
  inverted: "bg-white text-black border-2 border-transparent",
  muted: "bg-slate-100 hover:bg-slate-200 border-2 border-transparent",
};


const Anchor = ({ block, size, styleName, children, className }: PropsWithChildren<{
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted" | "muted";
  className?: string;
}>) => (
  <Link
    href="href"
    className={
      [
        `rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-slate-200 ${className}`,
        block && "w-full",
        size && sizes[size ?? "lg"],
        styles[styleName ?? "primary"],
      ].join(" ")
    }
  >{children ?? ""}
  </Link>
);

export default Anchor;
