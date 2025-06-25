import { ID, OAuthProvider, Query } from "appwrite";
import { account, appwriteconfig, database } from "./client";
import { redirect } from "react-router";

export const loginWithGoogle = async () => {
  try {
    account.createOAuth2Session(
      OAuthProvider.Google,
      "http://localhost:5173"
      // "http://localhost:5173/login"
    );
  } catch (e) {
    console.log("loginWithGoogle", e);
  }
};
export const getUser = async () => {
  try {
    const user = await account.get();

    if (!user) return redirect("/sign-in");

    const { documents } = await database.listDocuments(
      appwriteconfig.databaseId,
      appwriteconfig.userCollectionId,
      [
        Query.equal("accountId", user.$id),
        Query.select(["name", "email", "imageUrl", "joinedAt", "accountId"]),
      ]
    );
  } catch (e) {
    console.log(e);
  }
};
export const getGooglePicture = async () => {
  try {
    // Get the Current User session
    const session = await account.getSession("current");

    // Get the OAuth2 token from the session
    const oAuthToken = session.providerAccessToken;

    if (!oAuthToken) {
      console.log("No OAuth token available");
      return null;
    }

    //Make a request to the gooogle people API to get the profile photo
    const response = await fetch(
      "https://people.googleapis.com/v1/people/me?personFields=photos",
      {
        headers: {
          Authorization: `Bearer ${oAuthToken}`,
        },
      }
    );
    if (response.ok) {
      console.log("Failed to fetch profile photo from Google People API");
    }

    const data = await response.json();

    //extract the profile photo URL from the response
    const photoUrl =
      data.photos && data.photos.length > 0 ? data.photos[0].url : null;

    return photoUrl;
  } catch (e) {
    console.log("googlePictureError", e);
    return null;
  }
};
export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
    return true;
  } catch (e) {
    console.log("Logout user Error", e);
    return false;
  }
};

export const storeUserData = async () => {
  try {
    const user = await account.get();
    if (!user) return null;

    //check if user already exists in the database
    const { documents } = await database.listDocuments(
      appwriteconfig.databaseId,
      appwriteconfig.userCollectionId,
      [Query.equal("accountId", user.$id)]
    );
    if (documents.length > 0) return documents[0];

    //Get profile photo from google
    const imageUrl = await getGooglePicture();

    //Create new user document
    const newUser = await database.createDocument(
      appwriteconfig.databaseId,
      appwriteconfig.userCollectionId,
      ID.unique(),

      {
        accountId: user.$id,
        email: user.email,
        name: user.name,
        imageUrl: imageUrl || "",
        joinedAt: new Date().toISOString(),
      }
    );
    return newUser;
  } catch (e) {
    console.log("storeUserData error", e);
    return null;
  }
};
export const getExistingUser = async () => {
  try {
    const user = await account.get();

    if (!user) return null;

    //check if user exists in the database
    const { documents } = await database.listDocuments(
      appwriteconfig.databaseId,
      appwriteconfig.userCollectionId,
      [Query.equal("accountId", user.$id)]
    );
    if (documents.length === 0) return null;
    return documents[0];
  } catch (e) {
    console.log("getExistingUser error", e);
    return null;
  }
};
