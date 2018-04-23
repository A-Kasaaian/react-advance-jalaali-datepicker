# Advance React Date and Time Picker for jalaali (persian, shamsi) calender

It contains 3 types of jalaali (persian) date pickers, which are range (from, to) date and time pickerو range date picker, date picker and date and time picker.

<p dir="rtl">
این ماژول شامل ۴ نوع مختلف از باکس انتخاب تاریخ و زمان جلالی (شمسی) است. انواع باکس های انتخاب تاریخ و زمان (پیاده سازی شده تا کنون) عبارتند از: بازه تاریخ و زمان (از، تا)، بازه تاریخ (از، تا)، انتخاب تاریخ و انتخاب تاریخ زمان.</p>

This module is written using  [moment-jalali](https://github.com/jalaali/moment-jalaali), which is relied on [momentjs](http://momentjs.com/).

## Instalation

Use `npm i react-advance-jalaali-datepicker` in order to install the module. Yes that's it. There is no extera font or css file to include. It's designed simple to prevent any issue during customization. Customize it in any way you want.

## Usage
In order to use this module, import the packege into your react component and use the module as below. The belowing example is the code  that is used in the sample usage video below.

![demo of react advance jalaali (persian) datepicker](https://raw.githubusercontent.com/A-Kasaaian/react-advance-jalaali-datepicker/master//demo.gif)

```javascript
	import {DatePicker, DateTimePicker, DateRangePicker, DateTimeRangePicker} from "react-advance-jalaali-datepicker";
    export var Home = createReactClass({
 		getInitialState(){
    		return{
    		  hideModal: true
		    }
		  },
		change(unix, formatted){
		    console.log(unix) // returns timestamp of the selected value, for example.
            console.log(formatted) // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
		},
		render() {
		    return (
		      <div className="datePicker">
		        <DatePicker placeholder="انتخاب تاریخ" format="jYYYY/jMM/jDD" onChange={this.change} id="datePicker" preSelected="1396/05/15" />
		        <DateTimePicker placeholder="انتخاب تاریخ و ساعت" format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm" id="dateTimePicker" onChange={this.changeTimeDate} preSelected="تاریخ: 1396/02/24 ساعت: 18:30" />
		        <DateRangePicker placeholderStart="تاریخ شروع" placeholderEnd="تاریخ پایان" format="jYYYY/jMM/jDD" onChangeStart={this.change} onChangeEnd={this.changeTimeDate} idStart="rangePickerStart" idEnd="rangePickerEnd" />
		        <DateTimeRangePicker placeholderStart="تاریخ و ساعت شروع" placeholderEnd="تاریخ و ساعت پایان" format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm" onChangeStart={this.change} onChangeEnd={this.changeTimeDate} idStart="rangePickerStart" idEnd="rangePickerEnd" />
		      </div>
    )
  }
});
```
#### component types:

| name | Description |
| ---- | ----------- |
| **DatePicker** | shows a box allowing you pick just a _date_ |
| **DateTimePicker** | shows a box allowing you pick just a _date_ and _time_ |
| **DateRangePicker** | shows a box twice, allowing you pick two _dates_. The first box allows you to pick the beginnig _date_ and second one lets you pick end _date_ |
| **DateTimeRangePicker** | shows a box twice, allowing you pick two _dates_ and _time_. The first box allows you to pick the beginnig _date_ and _time_ and second one lets you pick end _date_ and _time_ |


## Options

Each type has its' own options.

**"DatePicker" and "DateTimePicker":**

| Name          | Description  |
| ------------- |-------------|
| placeholder   | Placeholder of the datepicker input |
| format      | Format of showing date in the input and styled output. Accepts moment-jalali formats (required) |
| onChange | On change call of the input (required) |
| id | Adds id attribute to the input elment |
| preSelected | Previously selected date, it should be formatted exactly the same as the format option | 
| customClass | To add "className" to the datepicker | 
| inputTextAlign | Texte align of the date input. default "right" | 
| containerClass | To add "className" to the datepicker input container | 

**DateRangePicker:**

| Name          | Description  |
| ------------- |-------------|
| placeholderStart, placeholderEnd   | Placeholder of the datepickers inputs |
| format      | Format of showing date in the input. Applies on both inputs. Accepts moment-jalali formats (required) |
| onChangeStart, onChangeEnd | On change call of inputs |
| idStart, idEnd | Add id attributes to the input elments |
| customClassStart, customClassEnd | To add class name to start and end dattepickers | 
| inputTextAlign | Texte align of the date input. default "right" | 
| containerClass | To add "className" to the datepicker input container | 

## More

More features will be provided.

I'll be glad to help if you faced any issue. Please, report issues [here](https://github.com/A-Kasaaian/react-advance-jalaali-datepicker/issues/new).

## License

MIT
