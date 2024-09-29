
import PropTypes from 'prop-types'; 
import './Message.css'

function Message({ winner, onContinue }) {
    return (
      <div className="message">
        <h2>Ganador: {winner}</h2>
        <button onClick={onContinue}>Reiniciar juego</button>
      </div>
    );
  }
  Message.propTypes = {
    winner: PropTypes.string.isRequired,
    onContinue: PropTypes.func.isRequired, 
  };
  
  export default Message;
  