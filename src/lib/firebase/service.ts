import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcryptjs";

const firestore = getFirestore(app);

export async function retrieveAllData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
}

export async function retrieveSingleData(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(data: {
  name: string;
  email: string;
  password: string;
  role?: string;
}) {
  const q = query(
    collection(firestore, "nextjs-users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  if (users.length > 0) {
    return { error: true, message: "Email already exists" };
  } else {
    try {
      data.role = "user";
      data.password = await bcrypt.hash(data.password, 10);
      await addDoc(collection(firestore, "nextjs-users"), data);

      return {
        error: false,
        message: "Registration success",
      };
    } catch (error) {
      return { error: true, message: "Registration failed" };
    }
  }
}

export async function login(email: string) {
  const q = query(
    collection(firestore, "nextjs-users"),
    where("email", "==", email)
  );

  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  if (users) return users[0];
  else return null;
}

export async function loginWithGoogle(data: any, callback: any) {
  const q = query(
    collection(firestore, "nextjs-users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const users: any = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  if (users.length > 0) {
    data.role = users[0].role;
    data.updatedAt = new Date().toISOString();
    await updateDoc(doc(firestore, "nextjs-users", users[0].id), data).then(
      () => {
        callback({ status: true, data });
      }
    );
  } else {
    data.role = "member";
    await addDoc(collection(firestore, "nextjs-users"), data).then(() => {
      callback({ status: true, data });
    });
  }
}
