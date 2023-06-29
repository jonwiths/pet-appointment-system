import React from 'react';
import { BiSolidTrashAlt } from 'react-icons/bi';
const AppointmentInfo = ({ appointment, handleDeleteAppointment }) => {
  return (
    <li className="mb-2 flex flex-col sm:flex-row items-start bg-blue-50 px-4 py-3 gap-x-4">
      <div className="flex flex-col w-full leading-none">
        <div className="flex items-center">
          <span className="flex-none font-medium text-3xl text-blue-700">
            {appointment.petName}
          </span>
        </div>
        <div className="text-lg">
          <b className="font-bold text-blue-500">Owner:</b>{' '}
          <span>{appointment.ownerName}</span>
        </div>
        <div className="leading-tight mt-1">{appointment.aptNotes}</div>
      </div>
      <div className="flex flex-col md:items-end items-start md:gap-y-4 gap-y-0 mt-2 w-full">
        <div className="flex items-start justify-start">
          {appointment.aptDate}
        </div>
        <button
          onClick={() => handleDeleteAppointment(appointment.id)}
          className="h-full text-center flex items-center bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md hover:ring-2 ring-red-900 ring-offset-2 text-white"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default AppointmentInfo;
