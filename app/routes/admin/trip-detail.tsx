import type { LoaderFunctionArgs } from "react-router";
import { getTripById } from "~/appwrite/trip";
import type { Route } from "./+types/trips";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { tripId } = params;
  if (!tripId) throw new Error("Trip Id is Required");

  const trip = await getTripById(tripId);
};
// :id -> params.id-> 123

const TripDetail = ({ loaderData }: Route.ComponentProps) => {
  return <div>TripDetail</div>;
};

export default TripDetail;
