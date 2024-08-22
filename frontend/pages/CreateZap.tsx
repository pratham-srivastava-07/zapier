"use client"

import ZapCell from "@/components/ZapCell";
import { useState } from "react";

export default function CreateZap() {
    const [selectedTriggers, setSelectedTriggers] = useState("");
    const [selectedActions, setSelectedActions] = useState([])
    return <div>
        <div className="w-full min-h-screen flex-col justify-center">
            <ZapCell name={selectedTriggers ? selectedTriggers: "Trigger"} index={1}/>
        </div>
    </div>
}