import React from 'react';
import moment from "moment-jalaali";
const canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);
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

class Days extends React.Component {
    constructor(props) {
        super(props);
        this.state={selectedDay: "", daysCount: this.props.daysCount, selectedYear: this.props.selectedYear}

        let unix = "";
        if(!!this.props.disableFromUnix) unix =this.props.disableFromUnix;
        if(!!unix){
            this.state.disableFromYear= moment(unix*1000).format("jYYYY");
            this.state.disableFromMonth= moment(unix*1000).format("jMM");
            this.state.disableFromDay= moment(unix*1000).format("jDD");
        }
    }
    componentWillReceiveProps(nextProps){
        if(canUseDOM){
            this.setState({daysCount: 0});
            let that = this;
            window.setTimeout(()=>{this.setState({daysCount: nextProps.daysCount, selectedYear: nextProps.selectedYear})},10);
        }
        
    }
    dayClicked(i, element){
        let {clickEvent} = this.props;
        if(clickEvent)clickEvent(i, element);
        if(!!this.state.selectedDay && !!this.refs[this.state.selectedDay])this.refs[this.state.selectedDay].className= this.refs[this.state.selectedDay].className.replace('selected','');
        this.setState({selectedDay: element});
        this.refs[element].className += " selected";
    }
    renderDays(){
        let {firstDay, currentMonth, selectedDay} = this.props;
        let {daysCount, disableFromYear, disableFromMonth, disableFromDay, selectedYear} = this.state;
        let year = selectedYear.toString();
        let month = currentMonth.toString();
        if(month.length == 1)month = "0"+month;
        let enable = true;
        let check = false;
        if(disableFromYear > year) enable = false;
        else if(disableFromYear == year && disableFromMonth > month) enable = false;
        else if(disableFromYear == year && disableFromMonth == month) check = true;
        let result= []
        for(let i = 1; daysCount >= i; i++){
            let addedClass= ""
            let marginRight = "0%";
            let date;
            let number = i.toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function(e) { return mapObj[e] });
            if(i == 1)marginRight = (firstDay*14.28)+"%";
            if(i < 10) date=year+month+"0"+i.toString();
            else date=year+month+i.toString();
            if(date == selectedDay)addedClass = " selected";
            const today = moment().format("jYYYYjMMjDD")
            if(date == today) addedClass += " current-date"
            if(check){
                if(i < disableFromDay) enable = false;
                else enable = true;
            }
            if(!enable)  result.push(<div className={"day-items"+addedClass} style={{background: "#ccc", cursor: "default", marginRight: marginRight}} ref={date} key={i}>{number}</div>)
            else if (enable) result.push(<div className={"day-items"+addedClass} ref={date} style={{marginRight: marginRight}} key={i} onClick={()=>this.dayClicked(1, date)}>{number}</div>)
        }
        return result;
    }
    render() {
        return (
            <div className="JC-days">
                <div className="holder">
                    {!!this.state.daysCount && this.renderDays()}
                </div>
            </div>
        )
    }
};

export default Days;