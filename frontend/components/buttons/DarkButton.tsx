import { ReactNode } from "react";

export default function DarkButton({children, onClick, size="small"}: {children: ReactNode, onClick: () => void, size?: "big" | "small"}) {
    return <div onClick={onClick} className={`cursor-pointer px-8 py-2 hover:shadow-md border bg-purple-700 text-white rounded-full text-center flex justify-center flex-col`}>
        {children}
    </div>
}