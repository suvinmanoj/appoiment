import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { AppointmentPicker } from "react-appointment-picker";

function App() {
  const [loading, setLoading] = useState(false);
  const [continuousLoading, setContinuousLoading] = useState(false);

  const addAppointmentCallback = ({
    addedAppointment: { day, number, time, id },
    addCb,
  }) => {
    setLoading(true);
    setTimeout(() => {
      console.log(
        `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
      );
      addCb(day, number, time, id);
      setLoading(false);
    }, 2000);
  };

  const removeAppointmentCallback = ({ day, number }, removeCb) => {
    setLoading(true);
    setTimeout(() => {
      console.log(`Removed appointment ${number}, day ${day}`);
      removeCb(day, number);
      setLoading(false);
    }, 2000);
  };

  const addAppointmentCallbackContinuousCase = ({
    addedAppointment: { day, number, time, id },
    addCb,
    removedAppointment: params,
    removeCb,
  }) => {
    setContinuousLoading(true);
    setTimeout(() => {
      if (removeCb) {
        console.log(
          `Removed appointment ${params.number}, day ${params.day}, time ${params.time}, id ${params.id}`
        );
        removeCb(params.day, params.number);
      }
      console.log(
        `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
      );
      addCb(day, number, time, id);
      setContinuousLoading(false);
    }, 1000);
  };

  const removeAppointmentCallbackContinuousCase = (
    { day, number },
    removeCb
  ) => {
    setContinuousLoading(true);
    setTimeout(() => {
      console.log(`Removed appointment ${number}, day ${day}`);
      removeCb(day, number);
      setContinuousLoading(false);
    }, 2000);
  };

  const days = [
    [
      { id: 1, number: 1, isSelected: true, periods: 2 },
      { id: 2, number: 2 },
      null,
      { id: 3, number: "3", isReserved: true },
      { id: 4, number: "4" },
      null,
      { id: 5, number: 5 },
      { id: 6, number: 6 },
    ],
    [
      { id: 7, number: 1, isReserved: true, periods: 3 },
      { id: 8, number: 2, isReserved: true },
      null,
      { id: 9, number: "3", isReserved: true },
      { id: 10, number: "4" },
      null,
      { id: 11, number: 5 },
      { id: 12, number: 6 },
    ],
    [
      { id: 13, number: 1 },
      { id: 14, number: 2 },
      null,
      { id: 15, number: 3, isReserved: true },
      { id: 16, number: "4" },
      null,
      { id: 17, number: 5 },
      { id: 18, number: 6 },
    ],
    [
      { id: 19, number: 1 },
      { id: 20, number: 2 },
      null,
      { id: 21, number: 3 },
      { id: 22, number: "4" },
      null,
      { id: 23, number: 5 },
      { id: 24, number: 6 },
    ],
    [
      { id: 25, number: 1, isReserved: true },
      { id: 26, number: 2 },
      null,
      { id: 27, number: "3", isReserved: true },
      { id: 28, number: "4" },
      null,
      { id: 29, number: 5 },
      { id: 30, number: 6, isReserved: true },
    ],
  ];
  return (
    <div>
      <h1>Appointment Picker</h1>
      <AppointmentPicker
        addAppointmentCallback={addAppointmentCallback}
        removeAppointmentCallback={removeAppointmentCallback}
        initialDay={new Date("2018-05-05")}
        days={days}
        maxReservableAppointments={3}
        alpha
        visible
        selectedByDefault
        loading={loading}
      />
      {/* <h1>Appointment Picker Continuous Case</h1>
      <AppointmentPicker
        addAppointmentCallback={addAppointmentCallbackContinuousCase}
        removeAppointmentCallback={removeAppointmentCallbackContinuousCase}
        initialDay={new Date("2018-05-05")}
        days={days}
        maxReservableAppointments={2}
        alpha
        visible
        selectedByDefault
        loading={continuousLoading}
        continuous
      /> */}
    </div>
  );
}

export default App;
