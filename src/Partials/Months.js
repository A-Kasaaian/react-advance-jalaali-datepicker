import React from 'react';

class Months extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            monthPickerView: false
        }
    }
    monthClicked(i){
        let {clickEvent} = this.props;
        if(clickEvent)clickEvent(i);
        this.setState({monthPickerView: false})
    }
    renderMonths(){
        let {months} = this.state;
        let result= []
        for(let i = 1; months.length >= i; i++){
            result.push(<div key={i} className="month-items" onClick={()=>this.monthClicked(i)}>{months[i-1]}</div>)
        }
        return result;
    }
    render() {
        let {month} = this.props;
        let {months, monthPickerView} = this.state;
        return (
            <div className="JC-months">
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