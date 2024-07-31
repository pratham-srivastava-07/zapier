"use client"
import DarkButton from "@/components/buttons/DarkButton";
import axios from "axios";
import { useEffect, useState } from "react";

interface Zap {
    "id": string,
    "triggerId": string,
    "userId": number,
    "actions": {
        "id": string,
        "zapId": string,
        "actionId": string,
        "sortingOrder": number,
        "type": {
            "id": string,
            "name": string
            "image": string
        }
    }[],
    "trigger": {
        "id": string,
        "zapId": string,
        "triggerId": string,
        "type": {
            "id": string,
            "name": string,
            "image": string
        }
    }
}    

function useZaps() {
    const [loading, setLoading] = useState(true)
    const [zaps, setZaps] = useState<Zap[]>([]);

    useEffect(()=> {
        axios.get("http://localhost:3000/api/v1/zap")
        .then(res => {
            setZaps(res.data.zaps)
        })
    })
    return {
        loading, zaps
    }
}

export default function Dashboard() {

    const {loading, zaps} = useZaps()

    return <div>
        <div className="pt-8 flex justify-center">
        <div className="max-w-2xl w-full">
            <div className="flex justify-between pr-8">
                <div className="text-2xl font-bold">
                    My Zaps
                </div>
                <DarkButton onClick={()=> {}}>Create</DarkButton>
            </div>
        </div>
    </div>
    {loading ? "Loading..." : <ZapsTable zaps={zaps}></ZapsTable>}
    </div>
}

function ZapsTable({zaps}: {zaps: Zap[]}) {
    return <div>

    </div>
}