
import { Card } from 'react-bootstrap';
export default function UserCard({UserList}) {
   
   
    
   

    return (
        <div>  
        <Card border="info" style={{ width: '18rem', margin:"8px" }}>
    <Card.Header>User Name: {UserList.username}</Card.Header>
    <Card.Body>
      <Card.Title>{UserList.name}</Card.Title>
      <Card.Text>
       <h5 style={{color:" blue"}}>Email:</h5> <h6> {UserList.email}</h6>
      </Card.Text>
    </Card.Body>
  </Card>

        </div>
    )
    
}