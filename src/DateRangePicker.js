import React from "react";
import DatePicker from "./index.js";

class DateRangePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disableFromUnix: "" };
  }
  change = (unix, formatted) => {
    let { onChangeStart } = this.props;
    this.setState({ disableFromUnix: unix });
    if (!!onChangeStart) onChangeStart(unix, formatted);
  }
  secondChange = (unix, formatted) => {
    let { onChangeEnd } = this.props;
    if (!!onChangeEnd) onChangeEnd(unix, formatted);
  }
  render() {
    let {
      placeholderEnd,
      placeholderStart,
      idStart,
      idEnd,
      format,
      customClassEnd,
      customClassStart,
      containerClass,
      inputTextAlign,
      monthTitleEnable,
      cancelOnBackgroundClick,
      preSelectedStart,
      renderPointer = true,
      pointer,
      ...rest
    } = this.props;
    const { disableFromUnix } = this.state;
    if (!placeholderStart) placeholderStart = "";
    if (!placeholderEnd) placeholderEnd = "";
    if (!idStart) idStart = "";
    if (!idEnd) idEnd = "";
    return (
      <div className="jdtrp" style={{ textAlign: "initial" }}>
        <DatePicker
          monthTitleEnable={monthTitleEnable}
          containerClass={containerClass}
          inputTextAlign={inputTextAlign}
          customClass={customClassStart}
          placeholder={placeholderStart}
          format={format}
          onChange={this.change}
          cancelOnBackgroundClick={cancelOnBackgroundClick}
          id={idStart}
          preSelected={preSelectedStart}
          {...rest}
        />
        {renderPointer && <div>{pointer || "->"}</div> }
        {!disableFromUnix && <div>{placeholderEnd}</div>}
        {!!disableFromUnix && (
          <DatePicker
            containerClass={containerClass}
            inputTextAlign={inputTextAlign}
            customClass={customClassEnd}
            placeholder={placeholderEnd}
            disableFromUnix={disableFromUnix}
            format={format}
            onChange={this.secondChange}
            cancelOnBackgroundClick={cancelOnBackgroundClick}
            id="datePicker"
            preSelected={preSelectedStart}
            {...rest}
          />
        )}
      </div>
    );
  }
}

export default DateRangePicker;
