import { calculateTrendPercentage, cn } from "lib/utils";
-5;
const StatsCard = ({
  headerTitle,
  total,
  lastMonthCount,
  currentMonthCount,
}: StatsCard) => {
  const { trend, percentage } = calculateTrendPercentage(
    currentMonthCount,
    lastMonthCount
  );
  const isDecrement = trend === "decrement";
  console.log(percentage);
  return (
    <article className="stats-card">
      <h3 className="text-base font-medium">{headerTitle}</h3>
      <div className="content">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">{total}</h2>
          <div className="flex items-center gap-2">
            <figure className="flex items-center gap-1">
              <img
                src={`/assets/icons/${
                  isDecrement ? "arrow-down-red.svg" : "arrow-up-green.svg"
                }`}
              />
              <figcaption
                className={cn(
                  "text-small font-medium",
                  isDecrement ? "text-red-500" : "text-success-700"
                )}
              >
                {Math.round(percentage)}%
              </figcaption>
            </figure>
            <p className="test-sm font-medium text-gray-100 truncate">
              vs last month
            </p>
          </div>
        </div>
        <img
          src={`/assets/icons/${
            isDecrement ? "decrement.svg" : "increment.svg"
          }`}
          className="xl:w-32 w-full h-full md:h-32"
          alt=""
        />
      </div>
    </article>
  );
};

export default StatsCard;
