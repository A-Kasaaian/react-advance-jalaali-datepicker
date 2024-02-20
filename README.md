# Advance React Date and Time Picker for jalaali (persian, shamsi) calender

It contains 3 types of jalaali (persian) date pickers, which are date and time range (from, to) picker, date range picker, date picker, and date and time picker.

<p dir="rtl">
این ماژول شامل ۴ نوع مختلف از باکس انتخاب تاریخ و زمان جلالی (شمسی) است. انواع باکس های انتخاب تاریخ و زمان (پیاده سازی شده تا کنون) عبارتند از: بازه تاریخ و زمان (از، تا)، بازه تاریخ (از، تا)، انتخاب تاریخ و انتخاب تاریخ زمان.</p>

This module is written using [moment-jalali](https://github.com/jalaali/moment-jalaali), which is relied on [momentjs](http://momentjs.com/).

## Instalation

Use `npm i react-advance-jalaali-datepicker` in order to install the module. Yes that's it. There is no extra font or css file to include. It's designed simple to prevent any issue during customization. Customize it in the way you need.

## Usage

In order to use this module, import the package into your react component and use the module as below. The below example is the code that is used in the sample usage video.

![demo of react advance jalaali (persian) datepicker](https://raw.githubusercontent.com/A-Kasaaian/react-advance-jalaali-datepicker/master//demo.gif)

```javascript
import React from "react";
import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker
} from "react-advance-jalaali-datepicker";
export class Home extends React.component {
  change(unix, formatted) {
    console.log(unix); // returns timestamp of the selected value, for example.
    console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
  }
  DatePickerInput(props) {
    return <input className="popo" {...props} />;
  }
  render() {
    return (
      <div className="datePicker">
        <DatePicker
          inputComponent={this.DatePickerInput}
          placeholder="انتخاب تاریخ"
          format="jYYYY/jMM/jDD"
          onChange={this.change}
          id="datePicker"
          preSelected="1396/05/15"
        />
        <DateTimePicker
          placeholder="انتخاب تاریخ و ساعت"
          format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
          id="dateTimePicker"
          onChange={this.changeTimeDate}
          preSelected="تاریخ: 1396/02/24 ساعت: 18:30"
        />
        <DateRangePicker
          placeholderStart="تاریخ شروع"
          placeholderEnd="تاریخ پایان"
          format="jYYYY/jMM/jDD"
          onChangeStart={this.change}
          onChangeEnd={this.changeTimeDate}
          idStart="rangePickerStart"
          idEnd="rangePickerEnd"
        />
        <DateTimeRangePicker
          placeholderStart="تاریخ و ساعت شروع"
          placeholderEnd="تاریخ و ساعت پایان"
          format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
          onChangeStart={this.change}
          onChangeEnd={this.changeTimeDate}
          idStart="rangePickerStart"
          idEnd="rangePickerEnd"
        />
      </div>
    );
  }
}
```

#### component types:

| name                    | Description                                                                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DatePicker**          | shows a box allowing you pick just a _date_                                                                                                                                     |
| **DateTimePicker**      | shows a box allowing you pick just a _date_ and _time_                                                                                                                          |
| **DateRangePicker**     | shows a box twice, allowing you pick two _dates_. The first box allows you to pick the beginnig _date_ and second one lets you pick end _date_                                  |
| **DateTimeRangePicker** | shows a box twice, allowing you pick two _dates_ and _time_. The first box allows you to pick the beginnig _date_ and _time_ and second one lets you pick end _date_ and _time_ |

## Options

Each type has its' own options.

**"DatePicker" and "DateTimePicker":**

| Name                    | type        | Description                                                                                                     |
| ----------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| placeholder             | string      | Placeholder of the datepicker input                                                                             |
| format                  | string      | Format of showing date in the input and styled output. Accepts moment-jalali formats (required)                 |
| onChange                | function    | On change call of the input (required)                                                                          |
| id                      | string      | Adds id attribute to the input elment                                                                           |
| preSelected             | string      | Previously selected date, it should be formatted exactly the same as the format option                          |
| customClass             | string      | To add "className" to the datepicker                                                                            |
| inputTextAlign          | string      | Text align of the date input. default "right"                                                                  |
| containerClass          | string      | To add "className" to the datepicker input container                                                            |
| monthTitleEnable        | boolean     | To add a title before month controller row                                                                      |
| inputComponent          | JSX element | To add customized input field to your datepicker                                                                |
| cancelOnBackgroundClick | boolean     | To add background, which closes the datepicker on click event. It's customizable with class name "JDBackground" |
| controlValue           | boolean     | By setting to true, It will make preselected value control the input value                                       |
| newThemeColor           | string    | Set the new theme colorto render new theme with the provided color. Otherwise, render the default simple theme and customize it yourself                                       |

**DateRangePicker:**

| Name                             | type        | Description                                                                                                     |
| -------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| placeholderStart, placeholderEnd | string      | Placeholder of the datepickers inputs                                                                           |
| format                           | string      | Format of showing date in the input. Applies on both inputs. Accepts moment-jalali formats (required)           |
| onChangeStart, onChangeEnd       | function    | On change call of inputs (required)                                                                                        |
| idStart, idEnd                   | string      | Add id attributes to the input elments                                                                          |
| customClassStart, customClassEnd | string      | To add class name to start and end dattepickers                                                                 |
| inputTextAlign                   | string      | Text align of the date input. default "right"                                                                  |
| containerClass                   | string      | To add "className" to the datepicker input container                                                            |
| monthTitleEnable                 | boolean     | to add a title before month controller row                                                                      |
| inputComponent                   | JSX element | To add customized input field to your datepicker                                                                |
| preSelectedStart                 | string      | Previously selected date, it should be formatted exactly the same as the format option                          |
| cancelOnBackgroundClick          | boolean     | To add background, which closes the datepicker on click event. It's customizable with class name "JDBackground" |
| controlValue                    | boolean     | By setting to true, It will make preselected value control the input value                                       |
| renderPointer                    | boolean     | Shows the pointer to the end of range, if enabled. default: true
| pointer                          | JSX element | Renders the passed pointer element instead of the default one
| newThemeColor           | string    | Set the new theme colorto render new theme with the provided color. Otherwise, render the default simple theme and customize it yourself                                       |

### Current date
You can use `current-date` class to style today. In the calendar you can find today has additional class of `current-date`.

### Outside control sample

[here](https://github.com/A-Kasaaian/react-advance-jalaali-datepicker/blob/master/examples/controlValue.js) you can find an example of code to control input from your parent component. This example shows how to reset values by a button.

### Highlight specific date

Add format of the date. Add preSelected date with the mentioned format. The day will get "selected" class.
Today is containing "current-date" class name.

## More

More features will be provided.

I'll be glad to help if you faced any issue. Please, report issues [here](https://github.com/A-Kasaaian/react-advance-jalaali-datepicker/issues/new).

## License

MIT
