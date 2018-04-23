import React from 'react';
import moment from "moment-jalaali";
import DateTimePicker from "./DateTimePicker.js";


class DateTimeRangePicker extends React.Component {
    constructor(props){
        super(props);
        this.change = this.change.bind(this);
        this.secondchange = this.secondchange.bind(this);
        this.state = {disableFromUnix: ""}
    }
    change(unix, formatted){
        let { onChangeStart } = this.props;
        this.setState({disableFromUnix: unix});
        if(!!onChangeStart) onChangeStart(unix, formatted)
    }
    secondchange(unix, formatted){
        let { onChangeEnd } = this.props;
        if(!!onChangeEnd) onChangeEnd(unix, formatted)
    }
    render() {
        let {placeholderEnd, placeholderStart, idStart, idEnd, format, customClassStart, customClassEnd, containerClass, inputTextAlign} = this.props;
        let { disableFromUnix } = this.state;
        if(!placeholderStart) placeholderStart= "";
        if(!placeholderEnd) placeholderEnd= "";
        if(!idStart) idStart="";
        if(!idEnd) idEnd="";
        return (
            <div  className="jdtrp" style={{textAlign: "initial"}}>
                <DateTimePicker containerClass={containerClass} inputTextAlign={inputTextAlign} customClass={customClassStart} placeholder={placeholderStart} format={format} onChange={this.change} id={idStart} />
                <div>{"->"}</div>
                {!disableFromUnix && <div>{placeholderEnd}</div>}
                {!!disableFromUnix && <DateTimePicker containerClass={containerClass} inputTextAlign={inputTextAlign} customClass={customClassEnd} placeholder={placeholderEnd} disableFromUnix={disableFromUnix} format={format} onChange={this.secondchange} id="datePicker" />}
            </div>
        )
    }
    }

export default DateTimeRangePicker;
