import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
const [user, setUser] = useState({
  userName: "",
  userPlace: "",
  userEmail: ""
});
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
    const stored=JSON.parse(localStorage.getItem("users"));
    if (stored){
      setUsers(stored);
    }
  },[]);
  function handleAddUser(e) {
    e.preventDefault();
  // if (!user.name || !user.age || !user.place) {
  //   alert("All fields are required");
  //   return;
  // }

    
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users",JSON.stringify(updatedUsers));
    setUser({ userName: "", userPlace: "",userEmail:"" });
    navigate("/table")
  }

  return (
    <div className="container m-5 p-5">
      <Card border="primary border-3 "style={{height:"42vh",width:"60vh"}}>
    <Form  onSubmit={handleAddUser}>
      <CardHeader>
      <h2>Add User</h2></CardHeader>
      <CardBody>
      <Form.Control
      className=""
        name="userName"
         value={user.userName}
        type="text"
        placeholder="Enter Your name"
        onChange={handleChange}
      />

      <Form.Control
      className="mt-2"
       name="userPlace"
       value={user.userPlace}
        type="name"
        placeholder="Enter your place"
        onChange={handleChange}
      />
      <Form.Control
      className="mt-2"
      name="userEmail"
        type="email"
        value={user.userEmail}
        placeholder="Enter Your Mail"
        onChange={handleChange}
      />
     <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
</CardBody>
<CardFooter>
      <Button type="submit"className="btn-sm">Add User</Button>
      </CardFooter>
    </Form>
    </Card>
    </div>
  );
}
