import { ReactNode } from "react";

export default function DarkButton({children, onClick, size="small"}: {children: ReactNode, onClick: () => void, size?: "big" | "small"}) {
    return <div onClick={onClick} className={`${size === "small" ? "text-sm" : "text-xl"} ${size === "small" ? "px-8 py-2" : "px-15 py-3"} cursor-pointer hover:shadow-md border bg-purple-700 text-white rounded-full text-center flex justify-center flex-col`}>
        {children}
    </div>
}