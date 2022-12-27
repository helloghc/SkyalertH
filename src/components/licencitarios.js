import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import "../components/licencitarios.css";
import { Link } from "react-router-dom";
import cities from "../jsonfiles/city.json";
import { findArgsFromCli } from "@craco/craco/lib/args";
import ReactDOM from 'react-dom'

const initialForm = {
    name: "",
    nameBusiness:"",
    cellPhone:"",
    state:"",
    email:"",
    telephone:"",
    city:"",
    options:"",
    other:"",
};



const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    let regexNumbers = /^[0-9]{8,13}$/;

    if(!form.name.trim()){
        errors.name = "El campo Nombre y apellido es requerido";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "Este campo solo admite letras y espacios";
    }

    if(!form.nameBusiness.trim()){
        errors.nameBusiness = "El campo Nombre de la empresa es requerido";
    }else if(!regexName.test(form.nameBusiness.trim())){
        errors.nameBusiness = "Este campo solo admite letras y espacios";
    }

    if(!form.cellPhone.trim()){
        errors.cellPhone = "El campo Celular es requerido";
    }else if(!regexNumbers.test(form.cellPhone.trim())){
        errors.cellPhone = "Agrega un Celular valido";
    }

    if(!form.email.trim()){
        errors.email = "El campo Correo electrónico es requerido";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "Agrega un correo valido";
    }

    if(!form.telephone.trim()){
        errors.telephone = "El campo Teléfono es requerido";
    }else if(!regexNumbers.test(form.telephone.trim())){
        errors.telephone = "Agrega un Telefono valido";
    }

    return errors;
};



const licencitarios = () => {
    const {form,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm)
    const [idCities, setIdCities] = useState(-1);

    const handleChargeCities = function (e) {
        const options = e.target.value;

        setIdCities(options);

    };
    var estadoSeleccionado;

    return (
        <div className="licenciatarios-container">
            <form onSubmit={handleSubmit}>
                <div className="licenciatarios-form-container">
                    <div className="licenciatarios-form-container-one">
                        <div className="input-container">
                            <p>Nombre y apellido</p>
                            <input type="text" name="name" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                            {errors.name && <p className="alert">{errors.name}</p>}
                        </div>
                        <div className="input-container">
                            <p>Nombre de la empresa</p>
                            <input type="text" name="nameBusiness" onBlur={handleBlur} onChange={handleChange} value={form.nameBusiness} required />
                            {errors.nameBusiness && <p className="alert">{errors.nameBusiness}</p>}
                        </div>
                        <div className="input-container">
                            <p>Teléfono</p>
                            <input type="text" name="telephone" onBlur={handleBlur} onChange={handleChange} value={form.telephone} required />
                            {errors.telephone && <p className="alert">{errors.telephone}</p>}
                        </div>
                        <div className="input-container">
                            <p>Celular (10 dígitos)</p>
                            <input type="text" name="cellPhone" onBlur={handleBlur} onChange={handleChange} value={form.cellPhone} required />
                            {errors.cellPhone && <p className="alert">{errors.cellPhone}</p>}
                        </div>
                    </div>
                    <div className="licenciatarios-form-container-two">
                        <div className="input-container">
                            <p>Correo electrónico</p>
                            <input type="text" name="email" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                            {errors.email && <p className="alert">{errors.email}</p>}
                        </div>
                        <div className="input-container">
                            <p>Estado</p>
                            <select name="state" id="selState" className="select" onBlur={handleChargeCities} onChange={handleChange} value={form.state.select} required>
                                <option value={-1}>---</option>
                                {
                                    cities.map((item, i) => (
                                        <option key={"cities"+i} value={i}> {item.estado} </option>
                                    ))
                                };
                            </select>
                        </div>
                        <div className="input-container">
                            <p>Ciudad</p>
                            <select name="city" value={form.city.select} id="setCity" className="select" onBlur={handleBlur} onChange={handleChange}  required>
                                <option value={-1}>---</option>
                                {
                                    idCities > -1  &&
                                    (
                                        cities[idCities].ciudades.map((item, i) =>(
                                            <option key={"ciudades"+i} value={item}> {item} </option>
                                        ))
                                    )
                                }
                            </select>
                        </div>


                    </div>
                </div>
                <div className="radio-container">
                    <p>¿Cómo te enteraste de nosotros?</p>
                    <div className="radiobuttons">
                        <input type="radio" name="options" className="radioButton" value={form.options.select} id="redes" /> <label for="redes">Redes sociales</label>
                    </div>
                    <div className="radiobuttons">
                        <input type="radio" name="options" className="radioButton" value={form.options.select} id="web" /> <label for="web">Sitio web</label>
                    </div>
                    <div className="radiobuttons">
                        <input type="radio" name="options" className="radioButton" value={form.options.select} id="recomendacion" /> <label for="recomendacion">Recomendación</label>
                    </div>
                    <div className="other">
                        <div className="radiobuttons">
                            <input type="radio" name="options" className="radioButton" value={form.options.select} id="other" /> <label for="other">Otro</label>
                        </div>
                        <input type="text" name="other" className="other-text" onBlur={handleBlur} onChange={handleChange} value={form.other} />
                    </div>
                </div>
                <div className="input-submit-container obbt">
                    <input type="submit" value="Enviar" />
                    <br/>
                </div>
            </form>

        </div>
    )
}

export default licencitarios
