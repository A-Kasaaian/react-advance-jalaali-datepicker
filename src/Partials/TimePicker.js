import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment-jalaali';

moment.loadPersian([]);
const mapObj = {
  1: '۱',
  2: '۲',
  3: '۳',
  4: '۴',
  5: '۵',
  6: '۶',
  7: '۷',
  8: '۸',
  9: '۹',
  0: '۰'
};

function TimePicker(props) {
  const hourRef = useRef();
  const minuteRef = useRef();
  const [editable, setEditable] = useState(false);
  const [minuteDisabled, setMinuteDisabled] = useState(false);
  const [time, setTime] = useState(props.selectedTime);
  const [error, setError] = useState("");
  const [minute, setMinute] = useState(Math.floor(parseInt(props.selectedTime.substring(3, 5)) / 5) * 5);
  const [hour, setHour] = useState(props.selectedTime.substring(0, 2));
  const [disableFromYear, setDisableFromYear] = useState("");
  const [disableFromMonth, setDisableFromMonth] = useState("");
  const [disableFromDay, setDisableFromDay] = useState("");
  const [disableFromHour, setDisableFromHour] = useState("");

  useEffect(() => {
    setTime(props.selectedTime);
  }, [props.selectedTime]);

  useEffect(() => {
    let unix = props.disableFromUnix ? props.disableFromUnix : "";
    if (unix) {
      setDisableFromYear(moment(unix * 1000).format("jYYYY"));
      setDisableFromMonth(moment(unix * 1000).format("jMM"));
      setDisableFromDay(moment(unix * 1000).format("jDD"));
      setDisableFromHour(moment(unix * 1000).format("HH"));
      setMinute(Math.floor(parseInt(props.selectedTime.substring(3, 5)) / 5) * 5)
      setHour(props.selectedTime.substring(0, 2))
    }
  }, [props.disableFromUnix]);

  const minuteChanged = () => {
    const minuteValue = minuteRef.current.value;
    const hourValue = hourRef.current.value;
    const minuteInt = parseInt(minuteValue);
    const hourInt = parseInt(hourValue);
    if (hourInt >= 0 && hourInt < 24) {
      if (minuteInt >= 0 && minuteInt < 60) {
        setEditable(false);
        setError("");
        if (props.changeEvent) props.changeEvent(hourValue + ":" + minuteValue);
      } else {
        setError("دقیقه حداکثر ۶۰ باشد");
      }
    } else {
      setError("ساعت حداکثر ۲۴ باشد");
    }
  };

  const hourChanged = () => {
    const minuteValue = minuteRef.current.value;
    const hourValue = hourRef.current.value;
    const hourInt = parseInt(hourValue);
    if (hourInt >= 0 && hourInt < 24) {
      if (props.changeEvent) props.changeEvent(hourValue + ":" + minuteValue);
      setError("");
      setMinuteDisabled(false);
      setHour(hourValue);
    } else {
      setError("ساعت حداکثر ۲۴ باشد");
      setMinuteDisabled(true);
    }
  };

  const TimePicker = () => {
    let currentMonth = props.currentMonth;
    let selectedDay = props.selectedDay;
    const hourOptions = [];
    let initCheck = false;
    if (currentMonth < 10) currentMonth = "0" + currentMonth;
    if (selectedDay)
      selectedDay = moment(selectedDay, "jYYYYjMMjDD").format("jDD");
    if (
      props.selectedYear == disableFromYear &&
      currentMonth == disableFromMonth &&
      selectedDay == disableFromDay
    )
      initCheck = true;
    for (let i = 0; i <= 23; i++) {
      let number = i.toString();
      let enable = true;
      if (i < 10) number = "0" + number;
      let persianNumber = number.replace(/1|2|3|4|5|6|7|8|9|0/gi, function(e) {
        return mapObj[e];
      });
      if (initCheck && number <= disableFromHour) enable = false;
      if (enable)
        hourOptions.push(
          <option key={i} value={number}>
            {persianNumber}
          </option>
        );
    }

    const hourElement = (
      <select onChange={hourChanged} value={hour} ref={hourRef}>
        {hourOptions}
      </select>
    );

    const minuteOptions = [];
    for (let i = 0; i <= 11; i++) {
      let min = 5 * i;
      let number = min.toString();
      if (min < 10) number = "0" + number;
      let persianNumber = number.replace(/1|2|3|4|5|6|7|8|9|0/gi, function(e) {
        return mapObj[e];
      });
      minuteOptions.push(
        <option key={i} value={number}>
          {persianNumber}
        </option>
      );
    }

    const minuteElement = (
      <select
        disabled={minuteDisabled}
        value={minute}
        onChange={minuteChanged}
        ref={minuteRef}
      >
        {minuteOptions}
      </select>
    );

    return (
      <div>
        <div className="right">{minuteElement}:</div>
        <div className="left">{hourElement}</div>
      </div>
    );
  };

  let timeString = time
    .toString()
    .replace(/1|2|3|4|5|6|7|8|9|0/gi, function(e) {
      return mapObj[e];
    });

  return (
    <div className="JC-years">
      {!editable && (
        <div
          className="number"
          style={{ cursor: "pointer" }}
          onClick={() => setEditable(true)}
        >
          {timeString}
        </div>
      )}
      {!!props.selectedDay && editable && TimePicker()}
      {editable && !props.selectedDay && (
        <p style={{ color: "darkorange", fontSize: "12px" }}>
          ابتدا یک تاریخ انتخاب نمایید
        </p>
      )}
      {error && (
        <div className="JC-tooltip">
          <p style={{ color: "red" }}>{error}</p>
        </div>
      )}
    </div>
  );
}

export default TimePicker;
