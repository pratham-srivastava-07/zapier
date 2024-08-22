export default function ZapCell({name, index}: {name?: string, index: number}) {
    return <div className="border-b border-black pt-4 pl-4 flex">
        <div className="font-bold">
            {index}
        </div>
        <div className="text-black">
            {name}
        </div>
    </div>
}