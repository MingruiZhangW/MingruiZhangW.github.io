import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Calendar({ mode = 'single', selected, onSelect, className = '' }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const previousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };
  
  const selectDate = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    onSelect(selectedDate);
  };
  
  const isSelected = (day) => {
    if (!selected) return false;
    const date = new Date(currentYear, currentMonth, day);
    return selected.toDateString() === date.toDateString();
  };
  
  const isToday = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    return today.toDateString() === date.toDateString();
  };
  
  const renderDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const selected = isSelected(day);
      const isCurrentDay = isToday(day);
      
      days.push(
        <button
          key={day}
          onClick={() => selectDate(day)}
          className={`
            p-2 text-sm rounded-md hover:bg-slate-100 transition-colors
            ${selected ? 'bg-slate-900 text-white hover:bg-slate-800' : ''}
            ${isCurrentDay && !selected ? 'bg-slate-100 font-semibold' : ''}
          `}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };
  
  return (
    <div className={`p-3 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={previousMonth}
          className="p-1 hover:bg-slate-100 rounded-md transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h2 className="text-sm font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button
          onClick={nextMonth}
          className="p-1 hover:bg-slate-100 rounded-md transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="p-2 text-xs font-medium text-slate-500 text-center">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {renderDays()}
      </div>
    </div>
  );
}