import { toast } from "react-toastify"

export const toastedApi = <Model>({
    api, successMessage, errorMessage, params
}: {
    successMessage: string,
    errorMessage: string,
    api: <Model>(p: API<Model>) => void,
    params: API<Model>
}
) => {
    api<Model>({
        ...params,
        handleError: (err: any) => {          
            params?.handleError?.(err)
            toast.error(errorMessage)
        },
        handleResponse: (res: Model) => {
            params?.handleResponse?.(res)
            toast.success(successMessage)
        }
    })
}