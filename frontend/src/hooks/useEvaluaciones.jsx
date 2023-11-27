import { useContext } from "react";
import UsuariosContext from "../context/UsuariosProvider";

const useEvaluaciones = () =>{
    return useContext(UsuariosContext)
}

export default useEvaluaciones