import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success("Successfully login!");
      navigate("/");
    },
    onError: (err) => {
      toast.error("Invalid password or username");
    },
  });
  return { login, isLoading };
}
