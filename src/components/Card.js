import { Button, Row } from "reactstrap";

const Card = ({ user, handleClick }) => {
  return (
    <div>
      <Row>
        <p class="text circle">{user.name.charAt(0)}</p>

        <h3>{user.name}</h3>
        <p style={{ color: "gray", fontStyle: "italic" }}>@{user.username}</p>
        <p>
          <a href={"http://" + user.website}>http://{user.website}</a>
        </p>

        <div>
          <Button
            color="primary"
            outline
            type="submit"
            onClick={() => handleClick(user, true)}
          >
            READ MORE
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default Card;
