import React from "react";
import styles from "./Calendar.module.scss";
import { connect } from "react-redux";
import {
  addLocalDate,
  addLocalMonthStr,
  addLocalMonthNum,
  addLocalYear,
  addCountDaysInMonth,
} from "../../redux/actions/getLocalDate";
import { toggleModal } from "../../redux/actions/toggleModal";
import { getCurrentDayInMonth } from "../../redux/actions/getCurrentDayInMonth";
import { getCountDaysInMonth } from "./getCountDaysInMonth";
import { v4 as uuidv4 } from "uuid";
import { returnArrOfNumbers } from "./returnArrOfNumbers";

const { DateTime, Settings } = require("luxon");

Settings.defaultLocale = "en";

class Calendar extends React.Component {
  componentDidMount() {
    this.props.addLocalDate(DateTime.local());
    this.props.addLocalMonthStr(DateTime.local().monthLong);
    this.props.addLocalMonthNum(DateTime.local().month);
    this.props.addLocalYear(DateTime.local().year);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.now !== prevProps.now) {
      this.props.addCountDaysInMonth(
        getCountDaysInMonth(this.props.monthNum, this.props.year)
      );
    }
  }

  onHandlerClick = (e) => {
    this.props.toggleModal(true);
    this.props.getCurrentDayInMonth(e.target.innerHTML);
    e.target.classList.add(`${styles.pseudoElement}`);
    e.target.style.color = "#fdd000";
  };

  render() {
    const arrForMarkup = returnArrOfNumbers(this.props.countDaysInMonth);
    return (
      <>
        <div className={styles.container}>
          <header>
            <button>{"<"}</button>
            <p
              className={styles.containerForYearAndMonth}
            >{`${this.props.monthStr} ${this.props.year}`}</p>
            <button>{">"}</button>
          </header>
          <div className={styles.line}></div>
          <div className={styles.wrapper}>
            {arrForMarkup.map((item) => (
              <p key={uuidv4()} onClick={this.onHandlerClick}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  now: state.now.now,
  monthStr: state.now.monthStr,
  monthNum: state.now.monthNum,
  year: state.now.year,
  countDaysInMonth: state.now.countDaysInMonth,
});

const mapDispatchToProps = (dispatch) => ({
  addLocalDate: (str) => dispatch(addLocalDate(str)),
  addLocalMonthStr: (str) => dispatch(addLocalMonthStr(str)),
  addLocalMonthNum: (num) => dispatch(addLocalMonthNum(num)),
  addLocalYear: (str) => dispatch(addLocalYear(str)),
  addCountDaysInMonth: (num) => dispatch(addCountDaysInMonth(num)),
  toggleModal: (boolean) => dispatch(toggleModal(boolean)),
  getCurrentDayInMonth: (str) => dispatch(getCurrentDayInMonth(str)),
});

// .plus({ months: 1 })
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
