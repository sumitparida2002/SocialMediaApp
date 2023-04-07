import axios from "axios";
import useAuth from "./useAuth";

const url = "http://localhost:5000";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get(`${url}/refresh`, {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
        user: response.data.user,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
