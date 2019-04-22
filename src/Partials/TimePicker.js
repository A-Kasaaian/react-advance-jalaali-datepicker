import React from "react";
import moment from "moment-jalaali";
const mapObj = {
  1: "۱",
  2: "۲",
  3: "۳",
  4: "۴",
  5: "۵",
  6: "۶",
  7: "۷",
  8: "۸",
  9: "۹",
  0: "۰"
};

class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.minuteChanged = this.minuteChanged.bind(this);
    this.hourChanged = this.hourChanged.bind(this);
    this.state = {
      editable: false,
      minuteDisabled: true,
      time: this.props.selectedTime,
      error: "",
      minute:
        Math.floor(parseInt(this.props.selectedTime.substring(3, 5)) / 5) * 5,
      hour: this.props.selectedTime.substring(0, 2)
    };
    let unix = "";
    if (!!this.props.disableFromUnix) unix = this.props.disableFromUnix;
    if (!!unix) {
      this.state.disableFromYear = moment(unix * 1000).format("jYYYY");
      this.state.disableFromMonth = moment(unix * 1000).format("jMM");
      this.state.disableFromDay = moment(unix * 1000).format("jDD");
      this.state.disableFromHour = moment(unix * 1000).format("HH");
      this.state.disableFromMinute = moment(unix * 1000).format("mm");
    }
  }
  minuteChanged() {
    let { minute, hour } = this.refs;
    let { changeEvent } = this.props;
    let minuteInt = parseInt(minute.value);
    let houraInt = parseInt(hour.value);
    if (houraInt >= 0 && houraInt < 24) {
      if (minuteInt >= 0 && minuteInt < 60) {
        this.setState({ editable: false, error: "" });
        if (!!changeEvent) changeEvent(hour.value + ":" + minute.value);
      } else {
        this.setState({ error: "دقیقه حداکثر ۶۰ باشد" });
      }
    } else {
      this.setState({ error: "ساعت حداکثر ۲۴ باشد" });
    }
  }
  hourChanged() {
    let { minute, hour } = this.refs;
    let { changeEvent } = this.props;
    let minuteInt = parseInt(minute.value);
    let houraInt = parseInt(hour.value);
    if (houraInt >= 0 && houraInt < 24) {
      if (!!changeEvent) changeEvent(hour.value + ":" + minute.value);
      this.setState({ error: "", minuteDisabled: false, hour: hour.value });
    } else {
      this.setState({ error: "ساعت حداکثر ۲۴ باشد" });
    }
  }
  componentWillReceiveProps(nextprops) {
    this.setState({ time: nextprops.selectedTime });
  }
  TimePicker() {
    let {
      minute,
      hour,
      minuteDisabled,
      disableFromMinute,
      disableFromHour,
      disableFromYear,
      disableFromMonth,
      disableFromDay
    } = this.state;
    let { selectedYear, currentMonth, selectedDay } = this.props;
    let hourOptions = [];
    let initCheck = false;
    if (currentMonth < 10) currentMonth = "0" + currentMonth;
    if (!!selectedDay)
      selectedDay = moment(selectedDay, "jYYYYjMMjDD").format("jDD");
    if (
      selectedYear == disableFromYear &&
      currentMonth == disableFromMonth &&
      selectedDay == disableFromDay
    )
      initCheck = true;
    for (let i = 0; 23 >= i; i++) {
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
    let hourElement = (
      <select onChange={this.hourChanged} value={hour} ref="hour">
        {hourOptions}
      </select>
    );

    let minuteOptions = [];
    for (let i = 0; 11 >= i; i++) {
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
    let minuteElement = (
      <select
        disabled={minuteDisabled}
        value={minute}
        onChange={this.minuteChanged}
        ref="minute"
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
  }
  render() {
    let { error, time, editable } = this.state;
    let { selectedDay } = this.props;
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
            onClick={() => this.setState({ editable: true })}
          >
            {timeString}
          </div>
        )}
        {!!selectedDay && editable && this.TimePicker()}
        {editable && !selectedDay && (
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
}

export default TimePicker;
