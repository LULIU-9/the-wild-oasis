import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      toast.success("Successfully login!");
      navigate("/");
    },
    onError: (err) => {
      toast.error("Invalid password or username");
      console.log(err.message);
    },
  });
  return { login, isLoading };
}
