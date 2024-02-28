import { Client, Databases, Account } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65decfc00c8f10258aa9");

export const account = new Account(client);



// Database

export const databases = new Databases(client, "65decffbeb04911d7219");