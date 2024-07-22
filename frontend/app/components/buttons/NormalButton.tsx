import { ReactNode } from "react";

export default function NormalButton({children, onClick}: {children: ReactNode, onClick: () => void}) {
    return <div className="px-6 py-2 bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600 text-white">
        {children}
    </div>
}