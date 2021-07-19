import './styles.css';
interface Props {
  placeholder: string;
  imgSrc: string;
  reply: boolean;
}
const Input = (props: Props) => {
  return (
    <div className="flex margin-top-20">
      <div>
        <img src={props.imgSrc} alt="" className="comment-height" />
      </div>
      <div className="margin-left-10 flex-grow-1">
        <input
          type="text"
          className="comment-height border-box full-width input"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};
export default Input;
