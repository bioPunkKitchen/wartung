import React from "react"

const Calendar = () => (
  <div class="calendar">
    <iframe
      title="Kalender" // TODO: use configuration file
      src="https://open-web-calendar.herokuapp.com/calendar.html?url=https%3A%2F%2Fwww.meetup.com%2Fbiopunx%2Fevents%2Fical%2F&url=https%3A%2F%2Fforum.wilap.de%2Fc%2Fkitchen%2Fl%2Fcalendar.ics%3Ftime_zone%3DEurope%2FBerlin&language=de">
    </iframe>
  </div>
)
export default Calendar
