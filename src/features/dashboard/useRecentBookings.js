import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams, setSearchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const startDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(startDate),
    queryKey: ["booking", `last-${numDays}`],
  });

  return { bookings, isLoading, numDays };
}
