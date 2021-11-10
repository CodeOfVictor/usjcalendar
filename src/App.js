import './App.css';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import schedule from './schedule.PNG';
import { getEvents } from './EventsCalendar';

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

moment.locale('ko', {
  week: {
      dow: 1,
      doy: 1,
  },
});

const localizer = momentLocalizer(moment);

const events = getEvents();

function App() {
  return (
    <div className="App">
      <Calendar localizer={localizer} events={events} startAccessor='start' endAccessor='end' style={{height: 500, margin: '50px'}} />
      <img src={schedule} style={{maxWidth: '100%', flex: 1}} alt="schedule" />
    </div>
  );
}

export default App;
