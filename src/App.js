import './App.css';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = momentLocalizer(moment);

const events = [
  { title: "ANALISIS Y CALCULO: Ejercicios foro", allDay: true, start: new Date(2021, 10, 15), end: new Date(2021, 10, 15) },
  { title: "Game Engine Design", allDay: true, start: new Date(2021, 10, 15), end: new Date(2021, 10, 15) },
  { title: "ANALISIS Y CALCULO: EXAMEN", allDay: true, start: new Date(2021, 10, 18), end: new Date(2021, 10, 18) },
  { title: "EXAMEN: Computer Graphics", allDay: true, start: new Date(2021, 10, 30), end: new Date(2021, 10, 30) },
  { title: "FIESTA", allDay: true, start: new Date(2021, 11, 6), end: new Date(2021, 11, 8) },
  { title: "GAMERGY", allDay: true, start: new Date(2021, 11, 17), end: new Date(2021, 11, 19) },
  { title: "NAVIDAD", allDay: true, start: new Date(2021, 11, 22), end: new Date(2022, 0, 7) }
]


function App() {
  return (
    <div className="App">
      <Calendar localizer={localizer} events={events} startAccessor='start' endAccessor='end' style={{height: 500, margin: '50px'}} />
    </div>
  );
}

export default App;
