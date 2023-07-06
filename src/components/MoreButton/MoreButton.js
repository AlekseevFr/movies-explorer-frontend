import './MoreButton.css';

function MoreButton({ onClick }) {
  return (
    <button onClick={onClick} className="movieslist__button" type="button">Ещё</button>
  );
}

export default MoreButton;