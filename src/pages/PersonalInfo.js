import React, { useState } from "react";
import { addData } from "../Firebase/FirebaseAddTest";
import { db } from "../Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { async } from "@firebase/util";

const PersonalInfo = () => {
  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [enteredMiddleName, setEnteredMiddleName] = useState("");

  const middleNameChangeHandler = (event) => {
    setEnteredMiddleName(event.target.value);
  };

  const [enteredSurname, setEnteredSurname] = useState("");

  const surnameChangeHandler = (event) => {
    setEnteredSurname(event.target.value);
  };

  const [enteredPhoneNumber1, setEnteredPhoneNumber1] = useState("");

  const phoneNumber1ChangeHandler = (event) => {
    setEnteredPhoneNumber1(event.target.value);
  };

  const [enteredPhoneNumber2, setEnteredPhoneNumber2] = useState("");

  const phoneNumber2ChangeHandler = (event) => {
    setEnteredPhoneNumber2(event.target.value);
  };

  const [enteredDOB, setEnteredDOB] = useState("");

  const DOBChangeHandler = (event) => {
    setEnteredPhoneNumber2(event.target.value);
  };

  const [enteredEmergencyEmail1, setEnteredEmergencyEmail1] = useState("");

  const emergencyEmail1ChangeHandler = (event) => {
    setEnteredEmergencyEmail1(event.target.value);
  };
  const [enteredEmergencyEmail2, setEnteredEmergencyEmail2] = useState("");

  const emergencyEmail2ChangeHandler = (event) => {
    setEnteredEmergencyEmail2(event.target.value);
  };
  const [enteredAddress1, setEnteredAddress1] = useState("");

  const address1ChangeHandler = (event) => {
    setEnteredAddress1(event.target.value);
  };
  const [enteredAddress2, setEnteredAddress2] = useState("");

  const address2ChangeHandler = (event) => {
    setEnteredAddress2(event.target.value);
  };

  const [enteredCity, setEnteredCity] = useState("");

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const [enteredState, setEnteredState] = useState("");

  const stateChangeHandler = (event) => {
    setEnteredState(event.target.value);
  };

  const [enteredPincode, setEnteredPincode] = useState("");

  const pincodeChangeHandler = (event) => {
    setEnteredPincode(event.target.value);
  };

  const addDataObject = {
    name: enteredName,
    middleName: enteredMiddleName,
    surname: enteredSurname,
    phoneNumber1: enteredPhoneNumber1,
    phoneNumber2: enteredPhoneNumber2,
    emergencyEmail1: enteredEmergencyEmail1,
    emergencyEmail2: enteredEmergencyEmail2,
    address1: enteredAddress1,
    address2: enteredAddress2,
    city: enteredCity,
    state: enteredState,
    pincode: enteredPincode,
  };

  async function submitData(event) {
    event.preventDefault();
    await addData(addDataObject);
  }

  return (
    <form onSubmit={submitData}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-2">
            <h6 for="inputName">Name</h6>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Name"
              onChange={nameChangeHandler}
            />
          </div>
          <div className="col-md-4 p-2">
            <h6 htmlFor="inputMiddleName">Middle Name</h6>
            <input
              type="text"
              className="form-control"
              id="inputMiddleName"
              placeholder="Middle Name"
              onChange={middleNameChangeHandler}
            />
          </div>
          <div className="col-md-4 p-2">
            <h6 htmlFor="inputSurname">Surname</h6>
            <input
              type="text"
              className="form-control"
              id="inputSurname"
              placeholder="Surname"
              onChange={surnameChangeHandler}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 p-2">
            <h6 for="inputPhone1">Phone Number 1</h6>
            <input
              type="number"
              className="form-control"
              id="inputPhone1"
              placeholder="Phone Number 1"
              onChange={phoneNumber1ChangeHandler}
            />
          </div>
          <div className="col-md-4 p-2">
            <h6 for="inputPhone2">Phone Number 2</h6>
            <input
              type="number"
              className="form-control"
              id="inputPhone2"
              placeholder="Phone Number 2"
              onChange={phoneNumber2ChangeHandler}
            />
          </div>

          <div className="col-md-4 p-2">
            <h6 for="inputName" className="mx-2">
              Date of Birth
            </h6>
            <input
              type="date"
              max="2022-10-29"
              className="form-control"
              id="inputDOB"
              placeholder="Date of Birth"
              onChange={DOBChangeHandler}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 p-2">
            <h6 for="inputEmergencyEmail1">Emergency Email 1</h6>
            <input
              type="email"
              className="form-control"
              id="inputEmergencyEmail2"
              placeholder="Emergency Email 1"
              onChange={emergencyEmail1ChangeHandler}
            />
          </div>
          <div className="col-md-6 p-2">
            <h6 for="inputPhone2">Emergency Email 2</h6>
            <input
              type="email"
              className="form-control"
              id="inputEmergencyEmail2"
              placeholder="Emergency Email 2"
              onChange={emergencyEmail2ChangeHandler}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 p-2">
            <h6 for="inputAddress">Address</h6>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="House No. Building Name"
              onChange={address1ChangeHandler}
            />
          </div>
          <div className="col-md-6 p-2">
            <h6 for="inputAddress2">Address 2</h6>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Area Landmarks"
              onChange={address2ChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-5 p-2">
            <h6 for="inputCity">City</h6>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="City"
              onChange={cityChangeHandler}
            />
          </div>
          <div className="form-group col-md-5 p-2">
            <h6 for="inputState">State</h6>
            <select
              id="inputState"
              className="form-control"
              onChange={stateChangeHandler}
            >
              <option defaultValue>Select Option</option>
              <option>Maharashtra</option>
            </select>
          </div>
          <div className="form-group col-md-2 p-2">
            <h6 for="inputZip">Pincode</h6>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="Pincode"
              onChangeCapture={pincodeChangeHandler}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary my-4">
          Add Data
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
