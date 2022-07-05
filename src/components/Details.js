import { Button, Table } from "reactstrap";

const Details = ({ user, handleClick }) => {
  if (user) {
    return (
      <div style={{ marginTop: "10px" }}>
        <div className="container-details">
          <Table hover>
            <tbody>
              <tr>
                <th scope="row">Name:</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th scope="row">Username:</th>
                <td>@{user.username}</td>
              </tr>
              <tr>
                <th scope="row">E-mail:</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th scope="row">Phone:</th>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <th scope="row">Company:</th>
                <td>{user.company.name}</td>
              </tr>
              <tr>
                <th scope="row">Website:</th>
                <td><a href={"http://" + user.website}>http://{user.website}</a></td>
              </tr>
              <tr>
                <th scope="row">Address:</th>
                <td>{user.address.street} {user.address.suite} - {user.address.zipcode} / {user.address.city}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <Button
            color="primary"
            outline
            type="submit"
            onClick={() => handleClick(null, false)}
            style={{ marginTop: "10px" }}
          >
            BACK TO HOME
          </Button>
        </div>
      </div>
    );
  }
};

export default Details;
