import type { AxisModel } from "@syncfusion/ej2-react-charts";
import { formatDate } from "lib/utils";

export const sidebarItems = [
  {
    id: 1,
    icon: "/assets/icons/home.svg",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    icon: "/assets/icons/users.svg",
    label: "All Users",
    href: "/all-users",
  },
  {
    id: 4,
    icon: "/assets/icons/itinerary.svg",
    label: "AI Trips",
    href: "/trips",
  },
];

export const chartOneData: object[] = [
  {
    x: "Jan",
    y1: 0.5,
    y2: 1.5,
    y3: 0.7,
  },
  {
    x: "Feb",
    y1: 0.8,
    y2: 1.2,
    y3: 0.9,
  },
  {
    x: "Mar",
    y1: 1.2,
    y2: 1.8,
    y3: 1.5,
  },
  {
    x: "Apr",
    y1: 1.5,
    y2: 2.0,
    y3: 1.8,
  },
  {
    x: "May",
    y1: 1.8,
    y2: 2.5,
    y3: 2.0,
  },
  {
    x: "Jun",
    y1: 2.0,
    y2: 2.8,
    y3: 2.5,
  },
];

export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];

export const footers = ["Terms & Condition", "Privacy Policy"];

export const selectItems = [
  "groupType",
  "travelStyle",
  "interest",
  "budget",
] as (keyof TripFormData)[];

export const comboBoxItems = {
  groupType: groupTypes,
  travelStyle: travelStyles,
  interest: interests,
  budget: budgetOptions,
} as Record<keyof TripFormData, string[]>;

export const userXAxis: AxisModel = { valueType: "Category", title: "Day" };
export const useryAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const tripXAxis: AxisModel = {
  valueType: "Category",
  title: "Travel Styles",
  majorGridLines: { width: 0 },
};

export const tripyAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const CONFETTI_SETTINGS = {
  particleCount: 200, // Number of confetti pieces
  spread: 60, // Spread of the confetti burst
  colors: ["#ff0", "#ff7f00", "#ff0044", "#4c94f4", "#f4f4f4"], // Confetti colors
  decay: 0.95, // Gravity decay of the confetti
};

export const LEFT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 45, // Direction of the confetti burst (90 degrees is top)
  origin: { x: 0, y: 1 }, // Center of the screen
};

export const RIGHT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 135,
  origin: { x: 1, y: 1 },
};
export const user = { name: "Samuel" };

export const dashboardStats = {
  totalUsers: 12450,
  userJoined: { currentMonth: 218, lastMonth: 176 },
  totalTrips: 3210,
  tripsCreated: { currentMonth: 150, lastMonth: 250 },
  userRole: { total: 62, currentMonth: 25, lastMonth: 250 },
};

export const allTrips = [
  {
    id: 1,
    name: "Trip 1",
    imageUrls: ["/assets/images/sample.jpeg"],
    itinerary: [{ location: "New York" }, { location: "Boston" }],
    tags: ["Adventure", "Culture"],
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
  },
  {
    id: 2,
    name: "Trip 2",
    imageUrls: ["/assets/images/sample.jpeg"],
    itinerary: [{ location: "Paris" }, { location: "Lyon" }],
    tags: ["Romantic", "Luxury"],
    travelStyle: "Couple",
    estimatedPrice: "$2,500",
  },
  {
    id: 3,
    name: "Trip 3",
    imageUrls: ["/assets/images/sample.jpeg"],
    itinerary: [{ location: "Tokyo" }, { location: "Kyoto" }],
    tags: ["Family", "Cultural"],
    travelStyle: "Family",
    estimatedPrice: "$3,200",
  },
  {
    id: 4,
    name: "Trip 4",
    imageUrls: ["/assets/images/sample.jpeg"],
    itinerary: [{ location: "Sydney" }, { location: "Melbourne" }],
    tags: ["Adventure", "Beach"],
    travelStyle: "Group",
    estimatedPrice: "$2,800",
  },
];

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "/assets/images/david.webp",
    dateJoined: formatDate("2025-01-01"),
    itineraryCreated: 10,
    status: "user",
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    imageUrl: "/assets/images/alice.webp",
    dateJoined: formatDate("2024-11-15"),
    itineraryCreated: 23,
    status: "premium",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.j@example.com",
    imageUrl: "/assets/images/robert.webp",
    dateJoined: formatDate("2025-02-20"),
    itineraryCreated: 5,
    status: "user",
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emily.w@example.com",
    imageUrl: "/assets/images/emily.webp",
    dateJoined: formatDate("2024-09-10"),
    itineraryCreated: 42,
    status: "admin",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.b@example.com",
    imageUrl: "/assets/images/michael.webp",
    dateJoined: formatDate("2025-03-05"),
    itineraryCreated: 15,
    status: "premium",
  },
];
