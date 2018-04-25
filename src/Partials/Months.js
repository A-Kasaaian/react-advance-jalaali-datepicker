import React from 'react';

class Months extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            monthPickerView: false,
            selectedMonth: this.props.month
        }
    }
    monthClicked(i,e){
        let {clickEvent} = this.props;
        if(clickEvent)clickEvent(i);
        this.setState({monthPickerView: false, selectedMonth: i})
    }
    renderMonths(){
        let {months, selectedMonth} = this.state;
        let result= []
        for(let i = 1; months.length >= i; i++){
            if(selectedMonth == i) result.push(<div key={i} className="month-items selected">{months[i-1]}</div>)
            else result.push(<div key={i} className="month-items" onClick={(e)=>this.monthClicked(i,e)}>{months[i-1]}</div>)
        }
        return result;
    }
    render() {
        let {month, monthTitleEnable} = this.props;
        let {months, monthPickerView} = this.state;
        return (
            <div className="JC-months">
                {monthTitleEnable && <span>ماه: </span>}
                <div className="holder">
                    <div onClick={()=>this.monthClicked(month-1)} className="prev">{">"}</div>
                    <div onClick={()=>{this.setState({monthPickerView: !monthPickerView})}} className="print-month">{months[month -1]}</div>
                    <div onClick={()=>this.monthClicked(month+1)} className="next">{"<"}</div>
                    {monthPickerView && <div className="monthPicker">{this.renderMonths()}</div>}
                </div>
            </div>
        )
    }
};

export default Months;