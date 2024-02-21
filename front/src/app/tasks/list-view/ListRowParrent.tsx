import { ITaskResponse } from "@/types/task.types"
import { Dispatch, SetStateAction } from "react"


interface IListRowParent {
    value: string
    label: string 
    items: ITaskResponse[] | undefined
    setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function ListRowParent({
    value, items, label, setItems
}: IListRowParent) {
    return (
        
    )
}