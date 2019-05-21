import React from "react";
import moment from "moment-jalaali";
import Days from "./Partials/Days";
import Months from "./Partials/Months";
import Styles from "./Partials/Styles";
import Years from "./Partials/Years";
import Input from "./Partials/Input";
import Background from "./Partials/Background";
const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
moment.loadPersian([]);

class JDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.daysInMonth = this.daysInMonth.bind(this);
    let preSelected = "";
    if (this.props.preSelected) preSelected = this.props.preSelected;
    this.state = {
      openPicker: false,
      selectedYear: parseInt(moment().format("jYYYY")),
      currentMonth: parseInt(moment().format("jMM")),
      selectedMonthFirstDay: moment(
        moment().format("jYYYY") + "/" + moment().format("jMM") + "/01",
        "jYYYY/jMM/jDD"
      ).weekday(),
      selectedDay:
        preSelected.length > 1
          ? moment(preSelected, this.props.format).format("jYYYYjMMjDD")
          : "",
      inputValue: preSelected
    };
    this.state.daysCount = this.daysInMonth(
      moment().format("jMM"),
      moment().format("jYYYY")
    );
  }
  componentDidMount() {
    let { selectedMonthFirstDay } = this.state;
    if (canUseDOM && !document.getElementById("jdstyle")) {
      let css = Styles(selectedMonthFirstDay),
        head = document.head || document.getElementsByTagName("head")[0],
        style = document.createElement("style");

      style.type = "text/css";
      style.id = "jdstyle";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  }

  componentDidUpdate(preProps) {
    const { preSelected, format } = this.props;
    if (
      preProps.preSelected !== preSelected &&
      preSelected !== this.state.selectedDay
    )
      this.setState({
        selectedDay: moment(preSelected, format).format("jYYYYjMMjDD"),
        inputValue: preSelected
      });
  }

  daysInMonth(month, selectedYear) {
    if (month > 0 && month < 7) return 31;
    else if (month > 6 && month < 12) return 30;
    else if (month == 12 && moment.jIsLeapYear(selectedYear)) return 30;
    else if (month == 12 && !moment.jIsLeapYear(selectedYear)) return 29;
  }
  daysClicked(day, momentDay) {
    let { onChange, format } = this.props;
    if (!format) format = "jYYYY-jMM-jDD";
    if (this.state.selectedDay != momentDay) {
      this.setState({
        selectedDay: momentDay,
        inputValue: moment(
          momentDay + " 23:59:59",
          "jYYYYjMMjDD HH:mm:ss"
        ).format(format)
      });
      this.setState({ openPicker: false });
    }
    let formatted;
    if (!!format)
      formatted = moment(
        momentDay + " 23:59:59",
        "jYYYYjMMjDD HH:mm:ss"
      ).format(format);
    if (onChange)
      this.props.onChange(
        moment(momentDay + " 23:59:59", "jYYYYjMMjDD HH:mm:ss").unix(),
        formatted
      );
  }
  monthsClicked(month) {
    let { selectedYear } = this.state;
    let year = selectedYear;
    let thisMonth = month;
    this.setState({ daysCount: 0 });
    if (month == 0) {
      this.setState({
        currentMonth: 12,
        daysCount: this.daysInMonth(12, selectedYear - 1),
        selectedYear: selectedYear - 1
      });
      thisMonth = 12;
      year = selectedYear - 1;
    } else if (month == 13) {
      this.setState({
        currentMonth: 1,
        daysCount: this.daysInMonth(1, selectedYear + 1),
        selectedYear: selectedYear + 1
      });
      thisMonth = 1;
      year = selectedYear + 1;
    } else
      this.setState({
        currentMonth: month,
        daysCount: this.daysInMonth(month, selectedYear)
      });
    this.firstDayOfMonth(thisMonth, year);
  }
  firstDayOfMonth(mo, ye) {
    let month = mo.toString();
    let year = ye.toString();
    if (month.length == 1) month = "0" + month;
    this.setState({
      selectedMonthFirstDay: moment(
        year + "/" + month + "/01",
        "jYYYY/jMM/jDD"
      ).weekday()
    });
  }
  yearSelected(year) {
    this.setState({ selectedYear: year });
    this.firstDayOfMonth(this.state.currentMonth, year);
  }
  render() {
    let {
      openPicker,
      daysCount,
      selectedDay,
      currentMonth,
      selectedYear,
      selectedMonthFirstDay,
      inputValue
    } = this.state;
    let {
      id,
      placeholder,
      disableFromUnix,
      customClass,
      containerClass,
      inputTextAlign,
      monthTitleEnable,
      inputComponent,
      cancelOnBackgroundClick
    } = this.props;
    let inputAlign =
      !!inputTextAlign && typeof inputTextAlign != "undefined"
        ? inputTextAlign
        : "right";
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
          onClick={() => {
            this.setState({ openPicker: !openPicker });
          }}
          component={inputComponent}
        />

        {cancelOnBackgroundClick && openPicker && (
          <Background
            onClick={() => {
              this.setState({ openPicker: false });
            }}
          />
        )}

        {openPicker && (
          <div className={"JDatePicker " + customClass}>
            <div className="JDheader">
              <div className="right">
                <Years
                  changeEvent={returnedYear => this.yearSelected(returnedYear)}
                  year={selectedYear}
                />
              </div>
              <div className="left" />
            </div>
            <Months
              monthTitleEnable={monthTitleEnable}
              clickEvent={returnedMonth => this.monthsClicked(returnedMonth)}
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
              clickEvent={(day, momentDay) => this.daysClicked(day, momentDay)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default JDatePicker;
