const TIME_TO_SECONDS = {
    MINUTE: 60,
    HOUR: 60 * 60,
    DAY: 24 * 60 * 60,
};

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
}

export const DateConverter = (time) => {
    const date = new Date(time);
    const now = new Date();
    const duration = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (duration > TIME_TO_SECONDS.DAY * 2) {
        return (
            MONTHS[date.getMonth()] +
            " " +
            date.getDate() +
            ", " +
            date.getFullYear()
        );
    }
    if (date.getDate() !== now.getDate())
        return "Yesterday at " + formatAMPM(date);
    if (duration > TIME_TO_SECONDS.HOUR) return "Today at " + formatAMPM(date);
    if (duration > TIME_TO_SECONDS.MINUTE) {
        var timePast = Math.floor(duration / TIME_TO_SECONDS.MINUTE);
        return timePast + " minute" + (timePast === 1 ? "" : "s") + " ago";
    }
    return "A few seconds ago";
};
