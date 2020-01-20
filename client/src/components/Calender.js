// import React from 'react';
// import { EventCalendar, eventTypes } from '@jfschmiechen/react-event-calendar';

// class Calender extends React.Component {
// render() {
//     const { taskList } = this.props;
//     let parsedEvents = [];
// // Create shim so that the calendar can get the correct data from each event.
// // In this example, I am using events from a google calendar.
// taskList.map(event => {
//     let tempObject = {};

//     tempObject.start = event.start.dateTime ? event.start.dateTime : event.start.date;
//     tempObject.end = event.end.dateTime ? event.end.dateTime : event.end.date;
//     tempObject.text = event.summary;

//     parsedEvents.push(tempObject);
// });

// // These colors allow customization to the theme.
// // default colors are slateblue and lightslategray.
// let colors = {
//     primaryColor: 'slateblue',
//     secondaryColor: 'lightslategray'
// };

// // The config contains all settings for the event calendar.
// // See the API table to see all possible values.
// let config = {
//     colors,
//     onEventClick: (e, event, eventArray) => console.log(event.type === eventTypes.SINGLE_DAY_TYPE),
//     onTileClick: (e, eventArray) => console.log(eventArray),
//     onPlusMoreClick: (e, eventArray) => console.log(eventArray)
// };
//     return (

//         <EventCalendar items={parsedEvents} month={5} year={2019} config={config} />
//     );
// }
// }

// export default Calender;