import { useParams } from "next/navigation"

export const useGetTransactionId = () => {
    const params = useParams()
    return params.transactionId as string
}