import { Query } from "appwrite";
import { appwriteconfig, database } from "./client";
import { queryObjects } from "v8";

export const getAllTrips = async (limit: number, offset: number) => {
  const allTrips = await database.listDocuments(
    appwriteconfig.databaseId,
    appwriteconfig.tripCollectionId,
    [Query.limit(limit), Query.offset(offset), Query.orderDesc("createdAt")]
  );

  if (allTrips.total === 0) {
    console.error("No trips found");
    return {
      allTrips: [],
      total: 0,
    };
  }
  return {
    allTrips: allTrips.documents,
    total: allTrips.total,
  };
};

export const getTripById = async (tripId: string) => {
  const trip = await database.getDocument(
    appwriteconfig.databaseId,
    appwriteconfig.tripCollectionId,
    tripId
  );

  if (!trip.$id) {
    console.log("Trip not found");
    return null;
  }
  return trip;
};
