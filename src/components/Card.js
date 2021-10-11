function Card() {
  return(
    <div className="card">
      <img className="favorite" src="/img/heart-unliked.jpg" alt="heart" />
      <img className="cardImg" src="/img/sneakers/1.jpg" alt="sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img className="buttonImg" src="/img/plus.svg" alt="+" />
        </button>
      </div>
    </div>
  );
}
export default Card;