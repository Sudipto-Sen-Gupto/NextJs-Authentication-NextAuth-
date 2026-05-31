import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const clientPromise = client.connect();

export const dbConnect = async (collectionName) => {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName).collection(collectionName);
};