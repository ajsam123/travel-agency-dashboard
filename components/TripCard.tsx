import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";

const TripCard = ({
  id,
  name,
  location,
  tags,
  price,
  imageUrl,
}: TripCardProps) => {
  const path = useLocation();
  return (
    <div>
      <Link
        to={
          path.pathname === "/" || path.pathname.startsWith("/travel")
            ? `/travel/${id}`
            : `/trips/${id}`
        }
        className="trip-card"
      >
        <img src={imageUrl} alt="name" />
        <article>
          <h2>{name}</h2>
          <figure>
            <img
              src="assets/icons/location-mark.svg"
              alt="location"
              className="size-4"
            />
          </figure>
          <figcaption>{location}</figcaption>
        </article>
        <div className="mt-5 pl-[18px] pr-3.5 pb-5"></div>
      </Link>
    </div>
  );
};

export default TripCard;
