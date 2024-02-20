import React, { useState, useEffect } from 'react';
import moment from 'moment-jalaali';
import Days from "./Partials/Days";
import Months from "./Partials/Months";
import Styles from "./Partials/Styles";
import Years from "./Partials/Years";
import Input from "./Partials/Input";
import Background from "./Partials/Background";

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
moment.loadPersian([]);

export const daysInMonth = (month, year) => {
  if (month > 0 && month < 7) return 31;
  if (month > 6 && month < 12) return 30;
  if (month == 12 && moment.jIsLeapYear(year)) return 30;
  if (month == 12 && !moment.jIsLeapYear(year)) return 29;
};

function JDatePicker(props) {
  const {
    id,
    placeholder,
    disableFromUnix,
    controlValue,
    customClass,
    containerClass,
    inputTextAlign,
    monthTitleEnable,
    inputComponent,
    cancelOnBackgroundClick,
    onChange,
    preSelected = "",
    format = "jYYYY-jMM-jDD"
  } = props;

  const defaultSelected = preSelected.length > 1 ? moment(preSelected, format).format("jYYYYjMMjDD") : ""
  const [openPicker, setOpenPicker] = useState(false);
  const [selectedYear, setSelectedYear] = useState(parseInt(moment().format("jYYYY")));
  const [currentMonth, setCurrentMonth] = useState(parseInt(moment().format("jMM")));
  const [selectedMonthFirstDay, setSelectedMonthFirstDay] = useState(moment(`${moment().format("jYYYY")}/${moment().format("jMM")}/01`, "jYYYY/jMM/jDD").weekday());
  const [selectedDay, setSelectedDay] = useState(defaultSelected);
  const [inputValue, setInputValue] = useState(preSelected);
  const [daysCount, setDaysCount] = useState(daysInMonth(moment().format("jMM"), moment().format("jYYYY")));

  useEffect(() => {
    if (canUseDOM && !document.getElementById("jdstyle")) {
      const css = Styles(selectedMonthFirstDay);
      const head = document.head || document.getElementsByTagName("head")[0];
      const style = document.createElement("style");

      style.type = "text/css";
      style.id = "jdstyle";
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }
  }, [selectedMonthFirstDay]);

  useEffect(() => {
    if (controlValue && preSelected !== selectedDay) {
      setSelectedDay(defaultSelected);
      setInputValue(preSelected);
    }
  }, [preSelected, controlValue, selectedDay]);

  useEffect(() => {
    setSelectedDay(defaultSelected);
    setInputValue(preSelected);
  }, [disableFromUnix])

  const daysClicked = (day, momentDay) => {
    if (selectedDay !== momentDay) {
      setSelectedDay(momentDay);
      setInputValue(moment(`${momentDay} 23:59:59`, "jYYYYjMMjDD HH:mm:ss").format(format));
      setOpenPicker(false);
    }
    if (onChange)
      onChange(moment(`${momentDay} 23:59:59`, "jYYYYjMMjDD HH:mm:ss").unix(), moment(`${momentDay} 23:59:59`, "jYYYYjMMjDD HH:mm:ss").format(format));
  };

  const monthsClicked = (month) => {
    let year = selectedYear;
    if (month === 0) {
      setCurrentMonth(12);
      setDaysCount(daysInMonth(12, selectedYear - 1));
      setSelectedYear(selectedYear - 1);
      year = selectedYear - 1;
    } else if (month === 13) {
      setCurrentMonth(1);
      setDaysCount(daysInMonth(1, selectedYear + 1));
      setSelectedYear(selectedYear + 1);
      year = selectedYear + 1;
    } else {
      setCurrentMonth(month);
      setDaysCount(daysInMonth(month, selectedYear));
    }
    firstDayOfMonth(month, year);
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

  const inputAlign = inputTextAlign ? inputTextAlign : "right";

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
        <Background onClick={() => setOpenPicker(false)} />
      )}

      {openPicker && (
        <div className={`JDatePicker ${customClass}`}>
          <div className="JDheader">
            <div className="right">
              <Years changeEvent={returnedYear => yearSelected(returnedYear)} year={selectedYear} />
            </div>
            <div className="left" />
          </div>
          <Months
            monthTitleEnable={monthTitleEnable}
            clickEvent={returnedMonth => monthsClicked(returnedMonth)}
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
            clickEvent={(day, momentDay) => daysClicked(day, momentDay)}
          />
        </div>
      )}
    </div>
  );
}

export default JDatePicker;
