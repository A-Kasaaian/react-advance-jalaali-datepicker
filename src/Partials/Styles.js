let Styles= (nDays)=>{
    return(
        `
        .JDatePicker {
            width: 300px;
            min-height: 210px;
            padding: 5px;
            position: absolute;
            background: #fff;
            border-radius: 5px;
            z-index: 1;
        }
        .days-titles div {
            width: 14.28%;
            display: inline-block;
            font-size: 14px;
            font-weight: 300;
            text-align: center;
        }
        .JDatePicker .JC-months {
            position: relative;
            display: inline-block;
            width: 100%;
        }
        .JDatePicker .monthPicker {
            position: absolute;
            right: -6px;
            width: 100%;
            background: #fff;
            text-align: center;
            padding: 5px;
            border-radius: 5px;
            top: 26px;
            box-shadow: 0px 0px 7px -2px #000;
            z-index: 1;
        }
        .JDatePicker .month-items:hover, .JDatePicker .month-items.selected {
            background: aliceblue;
            color: #ccc;
        }
        .JDatePicker .month-items {
            width: 32.5%;
            float: right;
            text-align: center;
            cursor: pointer;
            padding: 4px 0px;
            border: 1px solid #ccc;
            font-size: 14px;
        }
        .JDatePicker .JC-months .prev,  .JDatePicker .JC-months .next{
            float: right;
            width: 20%;
            text-align: center;
            transform: rotate(180deg);
            cursor: pointer;
        }
        .JDatePicker .JC-days {
            position: relative;
            display: inline-block;
            background: #f7f7f7;
        }
        .JDatePicker .JC-days .holder {
            line-height: 24px;
        }
        .JDatePicker .print-month {
            width: 60%;
            text-align: center;
            float: right;
            cursor: pointer;
        }
        .JDatePicker .day-items{
            width: 14.28%;
            float: right;
            text-align: center;
            cursor: pointer;
            //border-bottom: solid #fff 1px;
            //border-left: 1px solid #fff;
        }
        .JDatePicker .day-items:hover, .JDatePicker .day-items.selected {
            background: #fff;
        }
        .JDatePicker .JDheader .right, .JDatePicker .JDheader .left {
            display: inline-block;
            width: 50%;
        }
        .JDatePicker .JDheader select {
            width: 94%;
            border: none;
            border-bottom: 1px solid;
            padding: 0 20%;
        }
        .JDatePicker .JDheader .left{
            text-align: center;
        }
        .JDatePicker .JDheader .right .number {
            width: 70%;
            direction: ltr;
            text-align: center;
            display: inline-block;
        }
        .JDatePicker .JDheader .right .number:hover {
            border: 1px solid #ccc;
            cursor: text !important;
        }
        .JDatePicker .JDheader .right input[type="tel"] {
            width: 40%;
            z-index: 2;
            direction: ltr;
            text-align: center;
            display: inline-block;
            top: 8px;
            position: absolute;
        }
        .JDatePicker .JC-tooltip {
            position: absolute;
            background: #d9d9d9;
            z-index: 1;
            padding: 0px 10px;
        }
        .JDatePicker button {
            border: none;
            color: #fff;
            font-size: 16px;
            margin: 0 10px;
            width: 40px;
            height: 26px;
            border-radius: 5px;
        }
        .JDatePicker .JDsubmit{
            background: #7fc6ff;
        }
        .jdtrp > div {
            display: initial;
            margin: 0 6px;
        }
        `
    )
}
export default Styles;