import { useParams } from "next/navigation"

export const useGetUserId = () => {
    const params = useParams()
    return params.userId as string
}