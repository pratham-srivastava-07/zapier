import { ReactNode } from "react";

export default function LinkButton({children, onClick}: {children: ReactNode, onClick: () => void}) {
    return <div className="px-2 py-1 cursor-pointer hover:bg-slate-200 font-light text-sm" onClick={onClick}>
        {children}
    </div>
}