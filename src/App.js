import './App.css';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'prueba',
    allDay: true,
    start: new Date(2021, 10, 11),
    end: new Date(2021, 10, 11)
  }
]


function App() {
  return (
    <div className="App">
      <Calendar localizer={localizer} events={events} startAccessor='start' endAccessor='end' style={{height: 500, margin: '50px'}} />
    </div>
  );
}

export default App;
