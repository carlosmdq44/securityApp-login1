import {Apiurl} from '../services/api'
import React from 'react';
import axios from "axios";
class UserList extends React.Component {
  constructor(props){
    console.log(props)
    super(props);
    this.state ={
      users:[]
    }

  }
  componentDidMount(){
    
    axios.get("http://localhost:3005/user")
    .then((res)=>{
      this.setState({
        users:res.data   
      })
    })
  }
  submit(event,id){
    console.log(id)
    event.preventDefault();
    if(id === 1){
      axios.post("http://localhost:3005/user",{
        email:this.state.email,
        password:this.state.password
      })
      .then((res)=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:3005/user",{
        id:this.state.id,
        email:this.state.email,
        password:this.state.password
      }).then(()=>{
        this.componentDidMount();
      })

    }

  }
  delete(id){
    axios.delete(`http://localhost:3005/user/${id}`)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get(`http://localhost:3005/user/{id}${id}`)
    .then((res)=>{
      console.log(res.data);
      this.setState({
        id:res.data.id,
        name:res.data.name,
        email:res.data.email,
        password:res.data.password
      })
    })
  }

  
  render(){
  return (
    <div className="container" >
    
    <div className="row">
    <div className="col s6">
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>
        {console.log(this.state.users)}
        <tbody>
          {
            this.state.users.map(user=>
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                <button onClick={(e)=>this.edit(user.id)} class="btn waves-effect waves-light" type="submit" name="action">
                  <i class="material-icons">edit</i>
                </button>
                </td>
                <td>
                <button onClick={(e)=>this.delete(user.id)} class="btn waves-effect waves-light" type="submit" name="action">
                  <i class="material-icons">delete</i>
                </button>
                </td>
              </tr>
              )
          }
          
        </tbody>
      </table>
      </div>
    
    </div>
    </div>
  );
  }
}

export default UserList;