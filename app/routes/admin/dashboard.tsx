import { Header } from "components";
import React from "react";

const dashboard = () => {
  const user = { name: "Samuel" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destinations in real time"
      />
    </main>
  );
};

export default dashboard;
