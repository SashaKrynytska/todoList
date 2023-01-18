import React, { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publications';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  //   onPrev = () => {
  //     this.setState(state => ({ index: state.index - 1 }));
  //   };
  //   onNext = () => {
  //     this.setState(state => ({ index: state.index + 1 }));
  //   };
  // объединяем эти два одинаковых метода в один (указываем value - насколько изменять)

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  // читаем из локалсторж
  componentDidMount() {
    console.log(typeof localStorage.getItem(LS_KEY)); // string
    // нам нужен номер (в стейте индекс номер), поэтому
    // const savedIndex = Number(localStorage.getItem(LS_KEY));
    // this.setState({ index: savedIndex });
    // or
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      //если savedState есть тогда он приводится к тру и выводится статья с нужным индексоm
      this.setState({ index: Number(savedState) });
    }
  }

  // записываем в лс
  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.index !== this.state.index) {
      console.log('update');
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    console.log(this.props.items[this.state.index]);
    // const currentItem = this.props.items[this.state.index];

    const { items } = this.props;
    const { index } = this.state;
    const totalItems = items.length; //this.props.items.length
    const currentItem = items[index];

    return (
      <div>
        <Controls
          onChange={this.changeIndex}
          currentItem={index + 1}
          totalItems={totalItems}
        />
        {/* <section>
          <button
            type="button"
            disabled={index === 0}
            onClick={() => this.changeIndex(-1)}
            // onClick={this.onNext}
          >
            Назад
          </button>
          <button
            type="button"
            // disabled={this.state.index === 0}
            disabled={index + 1 === totalItems}
            onClick={() => this.changeIndex(1)}
            // onClick={this.onNext}
          >
            Вперед
          </button>
        </section> */}

        <Progress current={index + 1} total={totalItems} />

        {/* <p>
          {this.state.index + 1}/{totalItems}
        </p> */}

        <Publication item={currentItem} />
        {/* <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article> */}
      </div>
    );
  }
}

export default Reader;
