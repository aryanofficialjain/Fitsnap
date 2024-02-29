import { Client, Databases, Account } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65e007603bfa01aecc47");

export const account = new Account(client);



// Database

export const databases = new Databases(client, "65e007a75764e767cb4a");