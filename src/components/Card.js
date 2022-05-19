import { StyledCard } from "./styles/Card-s";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>

        <div>
          <img src={`./imgs/${image}`} alt="" />
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
