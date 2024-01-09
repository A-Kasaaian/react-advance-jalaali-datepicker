import React from "react";
import DatePicker from "./index.js";

const DateRangePicker = (props) => {
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
    onChangeStart,
    onChangeEnd,
    renderPointer = true,
    pointer,
    ...rest
  } = props;

  const [disableFromUnix, setDisableFromUnix] = React.useState("")

  const change = (unix, formatted) => {
    setDisableFromUnix(unix);
    if (!!onChangeStart) onChangeStart(unix, formatted);
  }

  const secondChange = (unix, formatted) => {
    if (!!onChangeEnd) onChangeEnd(unix, formatted);
  }

  const placeholderEndValue = placeholderEnd || "";

  return (
    <div className="jdtrp" style={{ textAlign: "initial" }}>
      <DatePicker
        monthTitleEnable={monthTitleEnable}
        containerClass={containerClass}
        inputTextAlign={inputTextAlign}
        customClass={customClassStart}
        placeholder={placeholderStart || ""}
        format={format}
        onChange={change}
        cancelOnBackgroundClick={cancelOnBackgroundClick}
        id={idStart || ""}
        preSelected={preSelectedStart}
        {...rest}
      />
      {renderPointer && <div>{pointer || "->"}</div> }
      {!disableFromUnix && <div>{placeholderEndValue}</div>}
      {!!disableFromUnix && (
        <DatePicker
          containerClass={containerClass}
          inputTextAlign={inputTextAlign}
          customClass={customClassEnd}
          placeholder={placeholderEndValue}
          disableFromUnix={disableFromUnix}
          format={format}
          onChange={secondChange}
          cancelOnBackgroundClick={cancelOnBackgroundClick}
          id={idEnd || ""}
          preSelected={preSelectedStart}
          {...rest}
        />
      )}
    </div>
  );
}

export default DateRangePicker;
