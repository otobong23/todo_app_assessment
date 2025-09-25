import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0)); // January 2025
  const [pickerView, setPickerView] = useState('calendar'); // 'calendar', 'years', 'months'
  const [selectedYear, setSelectedYear] = useState(2025);

  // Get current date for "Today" calculation
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthIndex = today.getMonth();
  const currentDay = today.getDate();

  // Helper function to get date for preset options
  const getPresetDate = (option) => {
    const now = new Date();
    switch (option) {
      case 'Today':
        return new Date();
      case 'Tomorrow':
        const tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);
        return tomorrow;
      case 'This Weekend':
        const thisWeekend = new Date(now);
        const daysUntilSaturday = (6 - now.getDay()) % 7;
        thisWeekend.setDate(now.getDate() + (daysUntilSaturday === 0 ? 7 : daysUntilSaturday));
        return thisWeekend;
      case 'Next Week':
        const nextWeek = new Date(now);
        const daysUntilMonday = ((7 - now.getDay()) % 7) + 1;
        nextWeek.setDate(now.getDate() + daysUntilMonday);
        return nextWeek;
      case 'Next Weekend':
        const nextWeekend = new Date(now);
        const daysUntilNextSaturday = ((6 - now.getDay()) % 7) + 7;
        nextWeekend.setDate(now.getDate() + daysUntilNextSaturday);
        return nextWeekend;
      case '2 Week':
        const twoWeeks = new Date(now);
        twoWeeks.setDate(now.getDate() + 14);
        return twoWeeks;
      case '4 Week':
        const fourWeeks = new Date(now);
        fourWeeks.setDate(now.getDate() + 28);
        return fourWeeks;
      default:
        return now;
    }
  };

  // Helper function to format preset dates
  const formatPresetDate = (option) => {
    const date = getPresetDate(option);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    if (option === 'Today') return 'Thu';
    if (option === 'Tomorrow') return 'Fri';
    if (option === 'This Weekend') return 'Sat';
    if (option === 'Next Week') return 'Mon';
    if (option === 'Next Weekend') return `${date.getDate()} ${months[date.getMonth()]}`;
    if (option === '2 Week') return `${date.getDate()} ${months[date.getMonth()]}`;
    if (option === '4 Week') return `${date.getDate()} ${months[date.getMonth()]}`;
    
    return days[date.getDay()];
  };

  const presetOptions = [
    { label: 'Today', date: formatPresetDate('Today') },
    { label: 'Tomorrow', date: formatPresetDate('Tomorrow') },
    { label: 'This Weekend', date: formatPresetDate('This Weekend') },
    { label: 'Next Week', date: formatPresetDate('Next Week') },
    { label: 'Next Weekend', date: formatPresetDate('Next Weekend') },
    { label: '2 Week', date: formatPresetDate('2 Week') },
    { label: '4 Week', date: formatPresetDate('4 Week') }
  ];

  // Calendar logic
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    // Adjust so Monday = 0
    let firstDayOfWeek = (firstDay.getDay() + 6) % 7;
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const formatSelectedDate = (date) => {
    if (!date) return 'DD/MM/YYYY';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDateClick = (day) => {
    if (day) {
      const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(newDate);
    }
  };

  const handlePresetClick = (option) => {
    const presetDate = getPresetDate(option.label);
    setSelectedDate(presetDate);
    // Navigate to the month of the selected date
    setCurrentMonth(new Date(presetDate.getFullYear(), presetDate.getMonth()));
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setPickerView('months');
  };

  const handleMonthSelect = (monthIndex) => {
    setCurrentMonth(new Date(selectedYear, monthIndex));
    setPickerView('calendar');
  };

  const handleTitleClick = () => {
    setSelectedYear(currentMonth.getFullYear());
    setPickerView('years');
  };

  const generateYearRange = () => {
    const currentYear = currentMonth.getFullYear();
    const years = [];
    for (let i = currentYear - 10; i <= currentYear + 5; i++) {
      years.push(i);
    }
    return years;
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-gray-50 p-4 border-b">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border min-w-32">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className={selectedDate ? "text-gray-900" : "text-gray-500"}>
              {formatSelectedDate(selectedDate)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar with Presets */}
        <div className="w-48 bg-gray-50 p-4 border-r">
          <div className="space-y-1">
            {presetOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handlePresetClick(option)}
                className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors text-left"
              >
                <span>{option.label}</span>
                <span className="text-gray-500 text-xs">{option.date}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="flex-1 p-4">
          {/* Header - different for each view */}
          <div className="flex items-center justify-between mb-6">
            {pickerView === 'calendar' && (
              <>
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <button
                  onClick={handleTitleClick}
                  className="text-lg font-medium text-gray-900 hover:bg-gray-100 px-3 py-1 rounded transition-colors"
                >
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </button>
                
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </>
            )}

            {pickerView === 'years' && (
              <>
                <div></div>
                <h2 className="text-lg font-medium text-gray-900">Select Year</h2>
                <button
                  onClick={() => setPickerView('calendar')}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </>
            )}

            {pickerView === 'months' && (
              <>
                <button
                  onClick={() => setPickerView('years')}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <h2 className="text-lg font-medium text-gray-900">{selectedYear}</h2>
                
                <button
                  onClick={() => setPickerView('calendar')}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </>
            )}
          </div>

          {/* Year Picker */}
          {pickerView === 'years' && (
            <div className="grid grid-cols-4 gap-3">
              {generateYearRange().map(year => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className={`py-3 px-4 text-center rounded-lg transition-colors ${
                    currentMonth.getFullYear() === year
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100 border'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}

          {/* Month Picker */}
          {pickerView === 'months' && (
            <div className="grid grid-cols-3 gap-3">
              {monthNames.map((month, monthIndex) => (
                <button
                  key={monthIndex}
                  onClick={() => handleMonthSelect(monthIndex)}
                  className={`py-4 px-4 text-center rounded-lg transition-colors ${
                    currentMonth.getFullYear() === selectedYear && currentMonth.getMonth() === monthIndex
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100 border'
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          )}

          {/* Calendar View */}
          {pickerView === 'calendar' && (
            <>
              {/* Days of Week Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="h-8 flex items-center justify-center text-xs font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateClick(day)}
                    disabled={!day}
                    className={`h-10 flex items-center justify-center text-sm rounded transition-colors ${
                      !day
                        ? 'cursor-default'
                        : selectedDate && 
                          selectedDate.getDate() === day &&
                          selectedDate.getMonth() === currentMonth.getMonth() &&
                          selectedDate.getFullYear() === currentMonth.getFullYear()
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;