const dateFunction = () => {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    if (month < 10) month = "0" + month;
    let date = currentDate.getDate();
    if (date < 10) date = "0" + date;
    let hours = currentDate.getHours();
    if (hours < 10) hours = "0" + hours;
    let minutes = currentDate.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = currentDate.getMilliseconds();
    if (seconds < 10) seconds = seconds + "00";
    else if (seconds < 100 && seconds >= 10) seconds = seconds + "0";
    seconds = seconds + "0"
    let oriSeconds = currentDate.getSeconds();
    if (oriSeconds < 10) oriSeconds = "0" + oriSeconds;

    const payload = {
        currentYears: `${year}${month}${date}`,
        dateData: `${year}${month}${date}${hours}${minutes}${seconds}`,
        sendDate: `${year}-${month}-${date}`,
        oriTime: `${hours}:${minutes}:${oriSeconds}`
    };

    return payload;
}

const updateTime = () => {
    const updateTime = new Date();
    let updateYear = updateTime.getFullYear();
    let updateMonth = updateTime.getMonth() + 1;
    if (updateMonth < 10) updateMonth = "0" + updateMonth;
    let updateDate = updateTime.getDate();
    if (updateDate < 10) updateDate = "0" + updateDate;
    let updateHours = updateTime.getHours();
    if (updateHours < 10) updateHours = "0" + updateHours;
    let updateMinutes = updateTime.getMinutes();
    if (updateMinutes < 10) updateMinutes = "0" + updateMinutes;
    let updateSeconds = updateTime.getSeconds();
    if (updateSeconds < 10) updateSeconds = "0" + updateSeconds;

    const payload = {
        upd_dt: `${updateYear}-${updateMonth}-${updateDate}`,
        upd_tm: `${updateHours}:${updateMinutes}:${updateSeconds}`
    };
    return payload;
}

module.exports = { dateFunction, updateTime }
