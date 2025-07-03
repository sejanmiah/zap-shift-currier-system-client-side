import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";


const useAuth = () => {
  const { user, loading } = useContext(AuthContext);
  return [user, loading];
};

export default useAuth;
