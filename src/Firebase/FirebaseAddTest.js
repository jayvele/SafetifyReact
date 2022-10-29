import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";

export async function addData(data) {
  console.log(data);
  addDoc(collection(db, "personalInfo"), {
    name: data.name,
    middleName: data.middleName,
    surname: data.surname,
    phoneNumber1: data.phoneNumber1,
    phoneNumber2: data.phoneNumber2,
    emergencyEmail1: data.emergencyEmail1,
    emergencyEmail2: data.emergencyEmail2,
    address1: data.address1,
    address2: data.address2,
    city: data.city,
    state: data.state,
    pincode: data.pincode,
  });
}
