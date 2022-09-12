import React, { Component } from "react";
import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker
} from "react-advance-jalaali-datepicker";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueDate: "1398/06/25",
      valueDateTime: "تاریخ: 1396/08/26 ساعت: 18:30",
      valueRDateStart: "1398/06/25",
      valueRDateEnd: "1398/06/25",
      valueRDateTimeStart: "تاریخ: 1396/08/26 ساعت: 18:30",
      valueRDateTimeEnd: "تاریخ: 1396/08/26 ساعت: 18:30"
    };
  }
  change = (unix, formatted) => {
    console.log(unix); // returns timestamp of the selected value, for example.
    console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    this.setState({
      valueDate: formatted
    });
  };
  DatePickerInput(props) {
    return <input className="popo" {...props} />;
  }
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({
              valueDate: "1398/06/25",
              valueDateTime: "تاریخ: 1396/08/26 ساعت: 18:30",
              valueRDateStart: "1398/06/25",
              valueRDateEnd: "1398/06/25",
              valueRDateTimeStart: "تاریخ: 1396/08/26 ساعت: 18:30",
              valueRDateTimeEnd: "تاریخ: 1396/08/26 ساعت: 18:30"
            });
          }}
        >
          reset
        </button>
        <div dir="rtl" className="datePicker">
          <DatePicker
            inputComponent={this.DatePickerInput}
            placeholder="انتخاب تاریخ"
            format="jYYYY/jMM/jDD"
            onChange={this.change}
            cancelOnBackgroundClick={true}
            id="datePicker"
            preSelected={this.state.valueDate}
            controlValue={true}
          />
          <DateTimePicker
            placeholder="انتخاب تاریخ و ساعت"
            format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
            id="dateTimePicker"
            onChange={(unix, formatted) =>
              this.setState({
                valueDateTime: formatted
              })
            }
            cancelOnBackgroundClick={true}
            preSelected={this.state.valueDateTime}
            controlValue={true}
          />
          <DateRangePicker
            placeholderStart="تاریخ شروع"
            placeholderEnd="تاریخ پایان"
            format="jYYYY/jMM/jDD"
            onChangeStart={(unix, formatted) =>
              this.setState({
                valueRDateStart: formatted
              })
            }
            cancelOnBackgroundClick={true}
            onChangeEnd={(unix, formatted) =>
              this.setState({
                valueRDateEnd: formatted
              })
            }
            preSelectedStart={this.state.valueRDateStart}
            idStart="rangePickerStart"
            idEnd="rangePickerEnd"
            controlValue={true}
          />
          <DateTimeRangePicker
            placeholderStart="تاریخ و ساعت شروع"
            placeholderEnd="تاریخ و ساعت پایان"
            format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
            onChangeStart={(unix, formatted) =>
              this.setState({
                valueRDateTimeStart: formatted
              })
            }
            preSelectedStart={this.state.valueRDateTimeStart}
            onChangeEnd={(unix, formatted) =>
              this.setState({
                valueRDateTimeEnd: formatted
              })
            }
            cancelOnBackgroundClick={true}
            idStart="rangePickerStart"
            idEnd="rangePickerEnd"
            controlValue={true}
          />
        </div>
      </div>
    );
  }
}

export default App;
