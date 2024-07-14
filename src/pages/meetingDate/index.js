import React, { useState } from 'react';
import Modal from 'react-modal';
import Calender from "../../assets/images/calender.png";

// Setting the root element for the modal
Modal.setAppElement('#root');

const MeetingDate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const dates = Array.from({ length: 31 }, (_, i) => i + 1); // Example dates
  const times = [
    '08:45 PM', '09:00 PM', '09:15 PM', '10:00 PM',
    '10:45 PM', '11:00 PM', '11:15 PM', '11:30 PM'
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeYear = (direction) => {
    setCurrentYear((prevYear) => prevYear + direction);
  };

  return (
    <div className="bg-black px-16 flex flex-col md:flex-row justify-center md:justify-between pt-4 md:pt-16">
      <div className="w-full md:w-[50%]">
        <h1 className="text-[26px] md:text-[40px] font-[500] text-white mt-0 md:mt-16" data-aos="fade-right">
          Level up Designs Studio - <br /> <span className="text-[#911A57]">Recruitment Sessions</span>
        </h1>
      </div>
      <div className="w-full md:w-[50%]" data-aos="zoom-in">
        <img src={Calender} alt="Calendar" onClick={openModal} className="cursor-pointer" />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center h-screen"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => changeYear(-1)} className="p-2 bg-gray-200 rounded-lg">Previous Year</button>
            <span className="text-lg font-medium">{currentYear}</span>
            <button onClick={() => changeYear(1)} className="p-2 bg-gray-200 rounded-lg">Next Year</button>
          </div>
          <div className="flex">
            {/* Calendar */}
            <div className="flex-grow mr-6">
              <div className="grid grid-cols-7 gap-2">
                {dates.map(date => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`py-2 px-4 rounded-full ${
                      selectedDate === date ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
            {/* Time Options */}
            <div className="flex flex-col space-y-2">
              {times.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 px-4 rounded-lg border ${
                    selectedTime === time ? 'bg-blue-500 text-white' : 'bg-white'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MeetingDate;
