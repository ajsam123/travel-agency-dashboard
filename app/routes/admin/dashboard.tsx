import { Header, StatsCard, TripCard } from "components";

const dashboard = () => {
  const user = { name: "Samuel" };
  const dashboardStats = {
    totalUsers: 12450,
    userJoined: { currentMonth: 218, lastMonth: 176 },
    totalTrips: 3210,
    tripsCreated: { currentMonth: 150, lastMonth: 250 },
    userRole: { total: 62, currentMonth: 25, lastMonth: 250 },
  };
  const { totalTrips, totalUsers, tripsCreated, userJoined, userRole } =
    dashboardStats;
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destinations in real time"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={userJoined.currentMonth}
            lastMonthCount={userJoined.currentMonth}
          />
          <StatsCard
            headerTitle="Total Users"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.currentMonth}
          />
          <StatsCard
            headerTitle="Active Users"
            total={userRole}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.currentMonth}
          />
        </div>
      </section>
      <TripCard />
    </main>
  );
};

export default dashboard;
