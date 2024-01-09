import React, { useState } from 'react';
import DateTimePicker from "./DateTimePicker.js";

function DateTimeRangePicker(props) {
  const {
    placeholderEnd,
    placeholderStart,
    idStart,
    idEnd,
    format,
    customClassStart,
    customClassEnd,
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
  const [disableFromUnix, setDisableFromUnix] = useState("");

  const change = (unix, formatted) => {
    setDisableFromUnix(unix);
    if (onChangeStart) onChangeStart(unix, formatted);
  };

  const secondChange = (unix, formatted) => {
    if (onChangeEnd) onChangeEnd(unix, formatted);
  };

  const placeholderEndValue = placeholderEnd || "";

  return (
    <div className="jdtrp" style={{ textAlign: "initial" }}>
      <DateTimePicker
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
      {renderPointer && <div>{pointer || "->"}</div>}
      {!disableFromUnix && <div>{placeholderEndValue}</div>}
      {!!disableFromUnix && (
        <DateTimePicker
          monthTitleEnable={monthTitleEnable}
          containerClass={containerClass}
          inputTextAlign={inputTextAlign}
          customClass={customClassEnd}
          placeholder={placeholderEndValue}
          disableFromUnix={disableFromUnix}
          format={format}
          cancelOnBackgroundClick={cancelOnBackgroundClick}
          onChange={secondChange}
          id={idEnd || ""}
          preSelected={preSelectedStart}
          {...rest}
        />
      )}
    </div>
  );
}

export default DateTimeRangePicker;
