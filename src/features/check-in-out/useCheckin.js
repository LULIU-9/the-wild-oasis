import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export function useCheckin() {
  const { bookingId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, loading: isLoading } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in!`);
      queryClient.invalidateQueries({ active: true });
      navigate("/bookings");
    },

    onError: () => toast.error("Fail to check in"),
  });
  return { mutate, isLoading };
}
