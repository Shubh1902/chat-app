import './styles.css'
export const Input = () => {
  return (
    <div className="flex">
      <div>
        <img
          src="https://via.placeholder.com/150/92c952"
          alt=""
          className="comment-height"
        />
      </div>
      <div className="margin-left-10 flex-grow-1">
        <input type="text" className="comment-height border-box full-width input" placeholder="Join the discussion..."/>
      </div>
    </div>
  );
};
