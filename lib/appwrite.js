import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6661c6c10011c0848e8b"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
