import React from 'react';
import { useEffect, useState, useRef } from 'react';

import { BsCalendarPlusFill } from 'react-icons/bs';

const AddAppoinment = ({ onSendAppointment, lastId }) => {
  const [toggleForm, setToggleForm] = useState(false);

  const clearData = {
    petName: '',
    ownerName: '',
    aptDate: '',
    aptTime: '',
    aptNotes: ''
  };

  const [formData, setFormData] = useState(clearData);

  const handleAddSchedule = (e) => {
    e.preventDefault();
    if (
      formData.petName.trim() === '' ||
      formData.ownerName.trim() === '' ||
      formData.aptDate.trim() === '' ||
      formData.aptTime.trim() === '' ||
      formData.aptNotes.trim() === ''
    ) {
      alert('Please insert all input');
    } else {
      const appointmentInfo = {
        id: lastId + 1,
        petName: formData.petName,
        ownerName: formData.ownerName,
        aptDate: formData.aptDate + ' ' + formData.aptTime,
        aptNotes: formData.aptNotes
      };
      onSendAppointment(appointmentInfo);
      setFormData(clearData);
      setToggleForm(!toggleForm);
    }
  };

  return (
    <>
      <section className="mt-4">
        <p className="text-base mb-4 md:mb-2">
          Welcome User! Click the{' '}
          <span className="font-semibold">'Add Appointment'</span> button below
          to add an appoinment.
        </p>
        <button
          onClick={() => setToggleForm(!toggleForm)}
          className={`flex gap-x-3 items-center cursor-pointer bg-blue-200 p-2 rounded-t-lg w-full hover:bg-blue-900 hover:text-white ${
            toggleForm ? 'rounded-t-lg' : 'rounded-lg'
          }`}
        >
          <BsCalendarPlusFill className="w-6 h-6  " />
          <h3 className="text-lg font-medium">Add Appointment</h3>
        </button>
        {toggleForm && (
          <form className="bg-gray-100 px-4 py-2 border border-x-gray-300 transition ease-in duration-300">
            <div className="form-control ">
              <label htmlFor="ownerName" className="text-lg">
                Owner Name
              </label>
              <div className="">
                <input
                  type="text"
                  name="ownerName"
                  id="ownerName"
                  className="p-1 w-full text-gray-900 border-2 border-blue-300 outline-blue-950 outline-4"
                  autoComplete="off"
                  placeholder="Juan Dela Cruz"
                  value={formData.ownerName}
                  onChange={(e) =>
                    setFormData({ ...formData, ownerName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control ">
              <label htmlFor="petName" className="text-lg">
                Pet Name
              </label>
              <div className="">
                <input
                  type="text"
                  name="petName"
                  id="petName"
                  className="p-1 w-full text-gray-900 border-2 border-blue-300 outline-blue-950"
                  placeholder="Brownie"
                  value={formData.petName}
                  onChange={(e) =>
                    setFormData({ ...formData, petName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control ">
              <label htmlFor="aptDate" className="text-lg">
                Date
              </label>
              <div className="">
                <input
                  type="date"
                  name="aptDate"
                  id="aptDate"
                  className="p-1 w-full text-gray-900 border-2 border-blue-300 outline-blue-950"
                  value={formData.aptDate}
                  onChange={(e) =>
                    setFormData({ ...formData, aptDate: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control ">
              <label htmlFor="aptTime" className="text-lg">
                Time
              </label>
              <div className="">
                <input
                  type="time"
                  name="aptTime"
                  id="aptTime"
                  className="p-1 w-full text-gray-900 border-2 border-blue-300 outline-blue-950"
                  value={formData.aptTime}
                  onChange={(e) =>
                    setFormData({ ...formData, aptTime: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control ">
              <label htmlFor="aptNotes" className="text-lg">
                Owner Name
              </label>
              <div className="">
                <textarea
                  type="text"
                  name="aptNotes"
                  id="aptNotes"
                  className="p-1 w-full text-gray-900 border-2 border-blue-300 outline-blue-950 outline-4"
                  autoComplete="off"
                  placeholder="This dog is good"
                  onResize="none"
                  rows="3"
                  style={{ resize: 'none' }}
                  value={formData.aptNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, aptNotes: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex md:w-full md:justify-end justify-start mt-4">
              <button
                onClick={handleAddSchedule}
                className="px-4 py-2 border rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Add Schedule
              </button>
            </div>
          </form>
        )}
      </section>
    </>
  );
};

export default AddAppoinment;
