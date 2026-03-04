import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormControl,
  FormText,
  Button,
  CardFooter,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserEdit() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state?.user;
  const index = location.state?.index;

  const [edituser, setEditUser] = useState(
    user || { userName: "", userPlace: "", userEmail: "" }
  );

  useEffect(() => {
    if (!user && index === undefined) {
      navigate("/table");
    }
  }, []);

  function handleChange(e) {
    setEditUser({
      ...edituser,
      [e.target.name]: e.target.value,
    });
  }

  function handleUpdateuser(e) {
    e.preventDefault();

    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    storedUsers[index] = edituser;

    localStorage.setItem("users", JSON.stringify(storedUsers));

    navigate("/table");
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <h1>Edit User Data</h1>
        </CardHeader>

        <Form onSubmit={handleUpdateuser}>
          <CardBody>
            <FormControl
              name="userName"
              value={edituser.userName}
              onChange={handleChange}
              type="text"
            />

            <FormControl
              name="userPlace"
              value={edituser.userPlace}
              onChange={handleChange}
              type="text"
              className="mt-2"
            />

            <FormControl
              name="userEmail"
              value={edituser.userEmail}
              onChange={handleChange}
              type="email"
              className="mt-2"
            />

            <FormText>
              We'll never share your email.
            </FormText>
          </CardBody>

          <CardFooter>
            <Button type="submit">Update</Button>
          </CardFooter>
        </Form>
      </Card>
    </Container>
  );
}