import React from 'react';
import '../assets/css/Login.css'
import logo from '../assets/img/vigilador.png'
import { Apiurl } from '../services/api'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


class Login extends React.Component {

    state = {
        form: {
            "username": "",
            "password": ""
        },
        erro: false,
        errorMsg: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        const userData = {
            username: this.state.form.username,
            password: this.state.form.password
        };
        console.log("entro al handle submit")
        //const navigate=useNavigate();
        axios.post(Apiurl + "/auth/login", userData).then((response) => {
            console.log(response.status);
            console.log(response.data.token);
            console.log("Successfully Logged in ");
            window.location = "/home";
            //navigate('/home');
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange = async (e) => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        //console.log(this.state.form)
    }

    handleButton = (e) => {

        let url = Apiurl + "/auth/login";
        axios.post(url, this.state.form)
            .then(response => {
                console.log(response);
            })
    }
    render() {
        return (
            <React.Fragment>

                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src={logo} id="icon" alt="User Icon" />
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="username" className="fadeIn second" name="username" placeholder="Ingrese su email" onChange={this.handleChange} />
                            <input type="password" id="password" className="fadeIn third" name="password" placeholder="Ingrese su contraseña" onChange={this.handleChange} />
                            <input type="submit" className="fadeIn fourth" value="Ingresar" onClick={this.handleButton} />
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="#">Olvidó su contraseña?</a>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Login;