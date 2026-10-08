require('date.js');

const calendarA = [{"date": "2026-06-15T12:00:00", "event":"Burna Boy Concert"}, 
    {"date": "2026-07-03T19:00:00", "event":"Dinner at The Hamptons"},
     {"date": "2026-07-20T08:00:00", "event":"Get new spectacles lenses"}];

const calendarB = [{"date": "2026-05-15T09:00:00", "event":" Coding Interview"}, 
    {"date": "2026-08-22T20:00:00", "event":"Play FC 27"}, 
    {"date": "2026-08-01T14:00:00", "event":"Golfing with friends"}];

function mergeCalendars(c1, c2) {
    const newCalendar = [...c1, ...c2];
    return newCalendar; 
}
const newCalendar = mergeCalendars(calendarA, calendarB);
console.log(newCalendar);


function readCalendarDates(calendar){
	calendar.forEach(item => {
console.log (new Date(item.date).toString("hh:mmtt MMMM dS, yyyy"))
})
}

readCalendarDates(newCalendar)