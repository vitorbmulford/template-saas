import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import "server-only";

const decodeKey = Buffer.from(process.env.FIREBASE_PRIVATE_KEY!, "base64").toString("utf-8")

export const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENTE_EMAIL,
  privateKey: decodeKey,
});

if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
  });
}

export const db = getFirestore();
