import React from "react";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.scss";
import Calendar from "../../components/Calendar/Calendar";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/toggleModal";

class HomePage extends React.Component {
  closeModalWindow = () => {
    this.props.toggleModal(false);
  };

  render() {
    return (
      <>
        <Header nameOfFirstSection="HOME" nameOfSecondSection="ABOUT US" />
        <main className={`${styles.bg} ${styles.test}`}>
          {this.props.isOpen && (
            <div className={styles.modalWindow}>
              <div>
                <div>
                  <label>
                    Month
                    <input type="text" placeholder={this.props.monthStr} />
                  </label>
                  <label>
                    Day
                    <input
                      type="text"
                      placeholder={`${this.props.currentDayInMonth}th`}
                    />
                  </label>
                </div>
                <button type="button" onClick={this.closeModalWindow}>
                  {"𐌗"}
                </button>
              </div>
            </div>
          )}
          <article className={styles.wrapper}>
            <section className={styles.containerForText}>
              <header>CHOOSE THE DAY FOR THE MEETING</header>
              <p>
                We encourage you to book your appointment online.
                <br /> This will save you time.
              </p>
            </section>
            <section className={styles.containerForCalendar}>
              <Calendar />
            </section>
          </article>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isOpen: state.toggle.isOpen,
  monthStr: state.now.monthStr,
  currentDayInMonth: state.currentDayInMonth.currentDayInMonth,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (boolean) => dispatch(toggleModal(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
