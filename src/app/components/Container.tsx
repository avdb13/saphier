import { PropsWithChildren } from "react";

const Container = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <div className={`max-w-screen-xl mx-auto bg-white dark:bg-dark p-16 pt-8 border-x-2 border-slate-200 ${className}`}>
    {children}
  </div>
);

export default Container;
