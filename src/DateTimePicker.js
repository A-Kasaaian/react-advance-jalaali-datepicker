import React, { useState, useEffect } from 'react';
import moment from 'moment-jalaali';
import Days from "./Partials/Days";
import Months from "./Partials/Months";
import Styles from "./Partials/Styles";
import Years from "./Partials/Years";
import TimePicker from "./Partials/TimePicker";
import Input from "./Partials/Input";
import Background from "./Partials/Background";
import { daysInMonth } from './index'

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
moment.loadPersian([]);

function DateTimePicker(props) {
  const {
    id,
    placeholder,
    disableFromUnix,
    customClass,
    containerClass,
    inputTextAlign,
    monthTitleEnable,
    inputComponent,
    preSelected = "",
    newThemeColor,
    cancelOnBackgroundClick
  } = props;
  const [openPicker, setOpenPicker] = useState(false);
  const [selectedYear, setSelectedYear] = useState(parseInt(moment().format("jYYYY")));
  const [currentMonth, setCurrentMonth] = useState(parseInt(moment().format("jMM")));
  const [selectedMonthFirstDay, setSelectedMonthFirstDay] = useState(moment(`${moment().format("jYYYY")}/${moment().format("jMM")}/01`, "jYYYY/jMM/jDD").weekday());
  const [selectedDay, setSelectedDay] = useState(preSelected.length > 1 ? moment(preSelected, props.format).format("jYYYYjMMjDD") : "");
  const [selectedTime, setSelectedTime] = useState(moment().format("HH:mm"));
  const [inputValue, setInputValue] = useState(preSelected);
  const [daysCount, setDaysCount] = useState(daysInMonth(moment().format("jMM"), moment().format("jYYYY")));

  useEffect(() => {
    if (canUseDOM && !document.getElementById("jdstyle")) {
      const css = Styles(newThemeColor);
      const head = document.head || document.getElementsByTagName("head")[0];
      const style = document.createElement("style");

      style.type = "text/css";
      style.id = "jdstyle";
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    if (props.controlValue && props.preSelected !== selectedDay) {
      setSelectedDay(moment(preSelected, props.format).format("jYYYYjMMjDD"));
      setSelectedTime(moment().format("HH:mm"));
      setInputValue(preSelected);
    }
  }, [props.preSelected, props.format, props.controlValue, selectedDay]);

  useEffect(() => {
    setSelectedDay(moment(preSelected, props.format).format("jYYYYjMMjDD"));
    setSelectedTime(moment().format("HH:mm"));
    setInputValue(preSelected);
  }, [disableFromUnix])

  const daysClicked = (day, momentDay) => {
    let format = props.format || "jYYYY-jMM-jDD HH:mm";
    if (selectedDay !== momentDay) {
      setSelectedDay(momentDay);
      setInputValue(moment(`${momentDay} ${selectedTime}`, "jYYYYjMMjDD HH:mm").format(format));
    }
  };

  const monthsClicked = (month) => {
    let year = selectedYear;
    if (month === 0) {
      setCurrentMonth(12);
      setDaysCount(daysInMonth(12, year - 1));
      setSelectedYear(year - 1);
    } else if (month === 13) {
      setCurrentMonth(1);
      setDaysCount(daysInMonth(1, year + 1));
      setSelectedYear(year + 1);
    } else {
      setCurrentMonth(month);
      setDaysCount(daysInMonth(month, year));
    }
    firstDayOfMonth(month === 0 ? 12 : month === 13 ? 1 : month, month === 0 ? year - 1 : month === 13 ? year + 1 : year);
  };

  const firstDayOfMonth = (mo, ye) => {
    let month = mo.toString();
    let year = ye.toString();
    if (month.length === 1) month = "0" + month;
    setSelectedMonthFirstDay(moment(`${year}/${month}/01`, "jYYYY/jMM/jDD").weekday());
  };

  const yearSelected = (year) => {
    setSelectedYear(year);
    firstDayOfMonth(currentMonth, year);
  };

  const timeSelected = (time) => {
    let format = props.format || "jYYYY-jMM-jDD HH:mm";
    setSelectedTime(time);
    setInputValue(moment(`${selectedDay} ${time}`, "jYYYYjMMjDD HH:mm").format(format));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedDay && selectedTime) {
      setOpenPicker(false);
      let formatted = props.format ? moment(`${selectedDay} ${selectedTime}`, "jYYYYjMMjDD HH:mm").format(props.format) : null;
      if (props.onChange) {
        props.onChange(moment(`${selectedDay} ${selectedTime}`, "jYYYYjMMjDD HH:mm").unix(), formatted);
      }
    }
  };

  const cancelPicker = (e) => {
    setOpenPicker(false);
  };

  const inputAlign = inputTextAlign || "right";

  return (
    <div style={{ textAlign: "initial" }} className={containerClass}>
      <Input
        type="text"
        id={id}
        placeholder={placeholder}
        dir="ltr"
        style={{ textAlign: inputAlign }}
        readOnly
        value={inputValue}
        onClick={() => setOpenPicker(!openPicker)}
        component={inputComponent}
      />
      {cancelOnBackgroundClick && openPicker && (
        <Background onClick={cancelPicker} />
      )}
      {openPicker && (
        <div className={`JDatePicker ${customClass}`}>
          <div className="JDheader">
            <div className="right">
              <Years changeEvent={yearSelected} year={selectedYear} />
            </div>
            <div className="left">
              <TimePicker
                disableFromUnix={disableFromUnix}
                selectedYear={selectedYear}
                selectedDay={selectedDay}
                currentMonth={currentMonth}
                changeEvent={timeSelected}
                selectedTime={selectedTime}
              />
            </div>
          </div>
          <Months
            monthTitleEnable={monthTitleEnable}
            clickEvent={monthsClicked}
            month={currentMonth}
          />
          <div className="days-titles">
              <div>ش</div>
              <div>ی</div>
              <div>د</div>
              <div>س</div>
              <div>چ</div>
              <div>پ</div>
              <div>ج</div>
          </div>
          <Days
            disableFromUnix={disableFromUnix}
            selectedYear={selectedYear}
            selectedDay={selectedDay}
            currentMonth={currentMonth}
            daysCount={daysCount}
            firstDay={selectedMonthFirstDay}
            clickEvent={daysClicked}
          />
          <div className='JDfooter'>
            <button onClick={submitHandler} className="JDsubmit">تایید</button>
            <button onClick={cancelPicker} className="JDcancel">بستن</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DateTimePicker;
