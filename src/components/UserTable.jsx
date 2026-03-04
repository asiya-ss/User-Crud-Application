import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function UserTable(){

const[users,setUsers]=useState([]);
const navigate=useNavigate();
useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem("users"));
    if (stored){
        setUsers(stored)}
    else 
        {
        setUsers([])
    }
    
},[]);

function userDelete(indexToDelete){
const filtered=users.filter((a,index)=>index!==indexToDelete);
setUsers(filtered);
localStorage.setItem("users",JSON.stringify(filtered));
}
function userUpdate(user,index){
navigate("/edit",{state:{user,index}});
}
    return(
     
        <Container>
            <Card>

                <CardHeader>
                    <h1>User Details</h1>
                </CardHeader>
                <CardBody>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id No.</th>
                                <th>User Name</th>
                                <th>User Place</th>
                                <th>User E-mail</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.userPlace}</td>
                                        <td>{user.userEmail}</td>
                                        <td><i className="bi bi-trash" onClick={()=>userDelete(index)} style={{ cursor: "pointer"}}></i></td>
                                        <td><i className="bi bi-pencil" onClick={()=>userUpdate(user,index)}  style={{ cursor: "pointer" }}></i></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Container>
    )
}
