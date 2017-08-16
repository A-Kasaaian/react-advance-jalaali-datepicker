import React from 'react';
import moment from "moment-jalaali";
import DatePicker from "./index.js";


class DateRangePicker extends React.Component {
    constructor(props){
        super(props);
        this.change = this.change.bind(this);
        this.state = {disableFromYear: "", disableFromMonth: "", disableFromDay: "", disableFromUnix: ""}
    }
    change(unix, formatted){
        let{ onChangeStart } = this.props;
        this.setState({disableFromUnix: unix});
        if(!!onChangeStart) onChangeStart(unix, formatted)
    }
    secondchange(unix, formatted){
        let{ onChangeEnd } = this.props;
        if(!!onChangeEnd) onChangeEnd(unix, formatted)
        debugger;
    }
    render() {
        let{placeholderEnd, placeholderStart, idStart, idEnd, format} = this.props;
        let { disableFromUnix } = this.state;
        if(!placeholderStart) placeholderStart= "";
        if(!placeholderEnd) placeholderEnd= "";
        if(!idStart) idStart="";
        if(!idEnd) idEnd="";
        return (
            <div className="rangePicker">
                <DatePicker placeholder={placeholderStart} format={format} onChange={this.change} id={idStart} />
                {!!disableFromUnix && <DatePicker placeholder={placeholderEnd} disableFromUnix={disableFromUnix} format={format} onChange={this.secondchange} id="datePicker" />}
            </div>
        )
    }
    }

export default DateRangePicker;
