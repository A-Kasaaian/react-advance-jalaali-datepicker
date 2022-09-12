import React from "react";
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
};

class Years extends React.Component {
  constructor(props) {
    super(props);
    this.yearRef = React.createRef()
    this.state = { year: this.props.year, error: "" };
  }
  yearChanged = () => {
    const { value } = this.yearRef.current;
    let { changeEvent } = this.props;
    this.setState({ year: value });
    if (value.length == 4 && value > 1300 && value < 1500) {
      this.setState({ editable: false, error: "" });
      if (!!changeEvent) changeEvent(parseInt(value));
    } else this.setState({ error: "سال ۴ رقم و درفاصله ۱۳۰۰ تا ۱۵۰۰ باشد" });
  }
  componentWillReceiveProps(nextprops) {
    this.setState({ year: nextprops.year });
  }
  render() {
    let { error, year, editable } = this.state;
    let yearString = year
      .toString()
      .replace(/1|2|3|4|5|6|7|8|9|0/gi, function(e) {
        return mapObj[e];
      });
    return (
      <div className="JC-years">
        <span>سال: </span>
        {!editable && (
          <span
            className="number"
            style={{ cursor: "pointer" }}
            onClick={() => this.setState({ editable: true })}
          >
            {yearString}
          </span>
        )}
        {editable && (
          <input
            type="tel"
            ref={this.yearRef}
            placeholder="سال"
            onChange={this.yearChanged}
            onBlur={this.yearChanged}
            value={year}
          />
        )}
        {editable && (
          <div
            onClick={this.yearChanged}
            style={{
              content: "&quot;&quot",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0px",
              zIndex: "1",
              left: "0px"
            }}
          />
        )}
        {error && (
          <div className="JC-tooltip">
            <p style={{ color: "red" }}>{error}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Years;
