import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbar from '../components/Navbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios from "axios";

const Rrhh = () => {
  const [empleados, setEmpleados] = useState([]);
  const [tablaEmpleados, setTablaEmpleados] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8001/employee")
      .then((res) => {
        console.log('res', res);
        setEmpleados(res.data);
        setTablaEmpleados(res.data);
      })
  }, []);

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaEmpleados.filter((elemento) => {
      if (elemento.personalInformation.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
         || elemento.personalInformation.lastname.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
         || elemento.personalInformation.nationalId.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setEmpleados(resultadosBusqueda);
  }

  return (
    <>
      <Navbar className="mb-3">
      </Navbar>
      <Form className="d-flex">

        <Form.Control
          type="search"
          value={busqueda}
          placeholder="Search"
          className="me-2 margin-10"
          aria-label="Search"
          onChange={handleChange}
        />

      </Form>
      <div className="align-right">
        <Button className="margin-10" variant="primary">+ Añadir</Button>
      </div>

      {empleados.length === 0 ?
        <div className="" > No hay Datos </div> :
        empleados.map((item) => (

          <div key={item.id} className="card margin-10">
            <div className="card-body">
              <div className="row">

                <div className="col-md-1">
                  <img src={require('../assets/img/cara1.png')} alt="" width="80" />
                </div>
                <div className="col-md-4">
                  <p className="card-text"> <a href="#"> {item.personalInformation.name} {item.personalInformation.lastname} </a></p>
                  <p className="card-text">{item.city.name}</p>
                </div>
                <div className="col-md-4">
                  <p className="card-text">Dni</p>
                  <p className="card-text">{item.personalInformation.nationalId}</p>
                </div>
                <div className="col-md-3">
                  <p className="card-text">Email</p>
                  <p className="card-text">Email@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Rrhh;
