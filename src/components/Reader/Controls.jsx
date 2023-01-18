export const Controls = ({ currentItem, totalItems, onChange }) => {
  return (
    <section>
      <button
        type="button"
        disabled={currentItem === 1}
        onClick={() => onChange(-1)}
        // onClick={this.onNext}
      >
        Назад
      </button>
      <button
        type="button"
        // disabled={this.state.index === 0}
        disabled={currentItem === totalItems}
        onClick={() => onChange(1)}
        // onClick={this.onNext}
      >
        Вперед
      </button>
    </section>
  );
};
