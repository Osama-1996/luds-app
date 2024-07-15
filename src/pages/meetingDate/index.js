import React, { useState, useRef } from 'react';

const MeetingDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [emailSent, setEmailSent] = useState(false); // Track if the email has been sent
  const [loading, setLoading] = useState(false); // Track loading state
  const overlayRef = useRef(null); // Reference to overlay for closing Gmail window

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const dates = Array.from({ length: daysInMonth(currentMonth, currentYear) }, (_, i) => i + 1); // Dates based on the current month and year

  const times = [
    '08:45 PM', '09:00 PM', '09:15 PM', '10:00 PM',
    '10:45 PM', '11:00 PM', '11:15 PM', '11:30 PM'
  ];

  const changeYear = (direction) => {
    setCurrentYear((prevYear) => prevYear + direction);
  };

  const changeMonth = (direction) => {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth + direction;
      if (newMonth < 0) {
        newMonth = 11;
        changeYear(-1);
      } else if (newMonth > 11) {
        newMonth = 0;
        changeYear(1);
      }
      return newMonth;
    });
  };

  const sendRequest = async () => {
    if (selectedTime) {
      const date = selectedDate;
      const month = months[currentMonth];
      const year = currentYear;
      const time = selectedTime;

      // Constructing the email body with a respectful request line
      const requestLine = 'Dear Team,\n\nKindly schedule a meeting for the following date and time:';
      const body = `${requestLine}\nDate: ${date} ${month} ${year}\nTime: ${time}\n\nThank you.`;

      try {
        setLoading(true); // Show loader

        // Open Gmail compose window
        const gmailWindow = window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=&body=${encodeURIComponent(body)}`,
          '_blank'
        );

        // Check if Gmail window is closed
        const checkClosed = setInterval(() => {
          if (gmailWindow.closed) {
            clearInterval(checkClosed); // Stop interval
            setLoading(false); // Hide loader
            setEmailSent(true); // Mark email as sent
            setTimeout(() => {
              // Redirect back to the website after 2 seconds
              window.location.href = '/'; // Replace with your website URL
            }, 2000);
          }
        }, 1000);

        // Focus overlay to close Gmail window on overlay click
        overlayRef.current && overlayRef.current.focus();
      } catch (error) {
        console.error('Error opening Gmail window:', error);
        setLoading(false); // Hide loader on error
      }
    }
  };

  return (
    <div className="bg-black px-16 flex flex-col md:flex-row justify-center md:justify-between pt-4 md:pt-16 relative">
      {/* Dark overlay for Gmail compose */}
      {loading && (
        <div
          ref={overlayRef}
          tabIndex={-1}
          className="absolute inset-0 bg-black opacity-50 flex items-center justify-center z-50"
          style={{ zIndex: 1000 }}
        >
          {/* Loader */}
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
        </div>
      )}

      <div className="w-full md:w-[50%]">
        <h1 className="text-[26px] md:text-[40px] font-[500] text-white mt-0 md:mt-16" data-aos="fade-right">
          Level up Designs Studio - <br /> <span className="text-[#911A57]">Recruitment Sessions</span>
        </h1>
      </div>
      <div className="w-full md:w-[50%] flex flex-col items-center" data-aos="zoom-in">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => changeYear(-1)} className="p-2 bg-gray-200 rounded-lg">Previous Year</button>
            <span className="text-lg font-medium">{currentYear}</span>
            <button onClick={() => changeYear(1)} className="p-2 bg-gray-200 rounded-lg">Next Year</button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => changeMonth(-1)} className="p-2 bg-gray-200 rounded-lg">Previous Month</button>
            <span className="text-lg font-medium">{months[currentMonth]}</span>
            <button onClick={() => changeMonth(1)} className="p-2 bg-gray-200 rounded-lg">Next Month</button>
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
                    disabled={emailSent} // Disable calendar buttons if email was sent
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
                  disabled={emailSent} // Disable time buttons if email was sent
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={sendRequest}
            disabled={!selectedDate || !selectedTime || emailSent}
            className={`w-full mt-4 py-2 px-4 rounded-lg text-white ${(!selectedDate || !selectedTime || emailSent) ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'}`}
          >
            {emailSent ? 'Request Sent' : 'Send Request'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingDate;
