import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { Header } from "components";
import React from "react";
import type { Route } from "./+types/create-trip";

export const loader = async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,latlng,maps"
  );

  const data = await response.json();
  // console.log(data);
  return data.map((country: any) => ({
    name: country.name.common,
    flag: country.flags.svg,
    coordinates: country.latlng,
    value: country.name.common,
    openStreetMap: country.maps?.openStreetMaps,
  }));
};

const CreateTrip = ({ loaderData }: Route.ComponentProps) => {
  const itemTemplate = (countryData: any) => (
    <div className="flex items-center gap-1 pl-2">
      <img
        src={countryData.flag}
        alt={countryData.text}
        className="w-5 h-4 rounded-sm"
      />
      <span>{countryData.text}</span>
    </div>
  );

  const valueTemplate = (countryData: any) => {
    if (!countryData) return <span>Select a country</span>;
    return (
      <div className="flex items-center gap-1 pl-2">
        <img
          src={countryData.flag}
          alt={countryData.text}
          className="w-5 h-4 rounded-sm"
        />
        <span>{countryData.text}</span>
      </div>
    );
  };

  const handleSubmit = async () => {};
  const countries = loaderData as Country[];

  const countryData = countries.map((country) => ({
    text: country.name,
    value: country.value,
    flag: country.flag,
  }));
  return (
    <main className="flex flex-col gap-10 p-5 pb-20">
      <Header
        title="Add a new trip"
        description="View and edit AI generated travel plans"
      />
      <section className="mt-2.5 wrapper-md">
        <form action="trip-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country">Country</label>
            <ComboBoxComponent
              id="country"
              dataSource={countryData}
              fields={{ text: "text", value: "value" }}
              itemTemplate={itemTemplate}
              valueTemplate={valueTemplate}
              placeholder="Select a country"
              className="combo-box"
            />
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateTrip;
