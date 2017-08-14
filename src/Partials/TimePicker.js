import React from 'react';
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
    }

class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.timeChanged = this.timeChanged.bind(this);
        this.state = {editable: false, minuteEnable: true, time: this.props.selectedTime, error: "", minute: Math.floor(parseInt((this.props.selectedTime).substring(3,5))/5)*5, hour: (this.props.selectedTime).substring(0,2)}
    }
    timeChanged(){
        let {minute, hour} = this.refs;
        let {changeEvent} = this.props;
        let minuteInt = parseInt((minute.value));
        let houraInt = parseInt((hour.value));
            if( houraInt > 0 && houraInt < 24){
                if( minuteInt > 0 && minuteInt < 60){
                    this.setState({editable: false, error: ""});
                    if(!!changeEvent)changeEvent(hour.value+":"+minute.value);
                }else{this.setState({error: "دقیقه حداکثر ۶۰ باشد"})}
            }else{this.setState({error: "ساعت حداکثر ۲۴ باشد"})}
    }
    componentWillReceiveProps(nextprops){
        this.setState({time: nextprops.selectedTime})
    }
    TimePicker(){
        let {minute, hour, minuteEnable} = this.state;
        let hourOptions= [];
        for(let i = 0; 23 >= i; i++){
            let number = i.toString();
            if(i < 10) number= "0"+number;
            let persianNumber = number.replace(/1|2|3|4|5|6|7|8|9|0/gi, function(e) { return mapObj[e] });
            hourOptions.push(<option key={i} value={number}>{persianNumber}</option>)
        }
        let hourElement = (<select onChange={(e)=>{this.setState({minuteEnable: false, hour:e.target.value});}} value={hour} ref="hour">{hourOptions}</select>)
        
        let minuteOptions= [];
        for(let i = 0; 11 >= i; i++){
            let min= 5*i;
            let number = min.toString();
            if(min < 10) number= "0"+number;
            let persianNumber = number.replace(/1|2|3|4|5|6|7|8|9|0/gi, function(e) { return mapObj[e] });
            minuteOptions.push(<option key={i} value={number}>{persianNumber}</option>)
        }
        let minuteElement = (<select disabled={minuteEnable} value={minute} onChange={this.timeChanged} ref="minute">{minuteOptions}</select>)

        return (<div><div className="right">{minuteElement}:</div><div className="left">{hourElement}</div></div>);
    }
    render() {
        let {error, time, editable} = this.state;
        let timeString= time.toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function(e) { return mapObj[e] });
        return (
            <div className="JC-years">
                {!editable && <div className="number" style={{cursor: "pointer"}} onClick={()=>this.setState({editable: true})}>{timeString}</div>}
                {editable && this.TimePicker()}
                {error && <div className="JC-tooltip"><p style={{color: "red"}}>{error}</p></div>}
            </div>
        )
    }
};

export default TimePicker;