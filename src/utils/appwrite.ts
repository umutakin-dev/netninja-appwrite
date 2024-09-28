import { Client, Databases } from "appwrite";

export const client = new Client()
  .setEndpoint("http://192.168.1.102/v1")
  .setProject("66f84fb0002d4dd76cf1");

export const databases = new Databases(client);
