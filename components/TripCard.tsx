import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import {
  ChipListComponent,
  ChipDirective,
  ChipsDirective,
} from "@syncfusion/ej2-react-buttons";

import { cn, getFirstWord } from "lib/utils";

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
        <div className="mt-5 pl-[18px] pr-3.5 pb-5">
          <ChipListComponent>
            <ChipsDirective>
              {tags.map((tag, index) => (
                <ChipDirective
                  key={index}
                  text={getFirstWord(tag)}
                  cssClass={cn(
                    index === 1
                      ? "!bg-pink-50 !text-pink-500"
                      : "!bg-success-50 !text-success-700"
                  )}
                />
              ))}
            </ChipsDirective>
          </ChipListComponent>
        </div>
        <article className="tripCard-pill">{price}</article>
      </Link>
    </div>
  );
};

export default TripCard;
