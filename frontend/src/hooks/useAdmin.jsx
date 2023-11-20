import useEmpresas from "./useEmpresas";
import useAuth from "./useAuth";

const useAdmin = () => {

    const { empresa} = useEmpresas()
    const { auth} = useAuth()

    return empresa.creador === auth._id
}

export default useAdmin