import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactGA from 'react-ga';
import ApiController from '../../../api';
import CustomField from './CustomField';
import { DEFAULT_VALUES_FORM, DEFAULT_OPTION, NOT_AVAILABLE_OPTION, MESSAGES_ERROR } from './Constants';
import * as Styles from '../Styles';
import PropTypes from 'prop-types';
import statesMX from '../../../data/country_states.json';

const MODAL_ROOT = document.getElementById('modal-root');

const Api = new ApiController();

class ModalEpicenter extends Component {
  state = {
    fadeType: '',
    hasError: false,
    isLoading: false,
    sectionView: 'FORM',
    requestMessageError: '',
    fieldsForm: DEFAULT_VALUES_FORM,
    listCities:[],
    listStates: [],
  };

  filteredOptions = (list, type) => {
    const filteredList = list.map((element) => ({
      text: type === 'state' ? element.nom_agee : element.nom_agem,
      value: type === 'state' ? element.cve_agee : element.cve_agem,
      disabled: false,
      selected: false,
    }));
    filteredList.unshift(DEFAULT_OPTION);
    return filteredList;
  }

  activeLoadingInFieldsFetch = (name, params = { loading: false, disabled: false }) => {
    const {loading, disabled } = params;
    if(['city', 'state'].includes(name)){
      const findIndex = this.findPositionInput(name);
      if(findIndex >= 0) {
        const updateFieldState = this.state.fieldsForm[findIndex];
        updateFieldState.isLoading = loading;
        updateFieldState.isDisabled = disabled;
        // const fieldsForm = this.state.fieldsForm;
        // fieldsForm[findIndex] = updateFieldState
        // console.log(this.state.fieldsForm, updateFieldState);
        this.updateFieldsValues(updateFieldState);
      }
    }
  }

  listNotAvailable = (name) => {
    const isFieldState = name === 'state';
    if(['city', 'state'].includes(name)){
        const updateStateField = isFieldState ? {
          listStates: NOT_AVAILABLE_OPTION('state'),
          listCities: NOT_AVAILABLE_OPTION('city')
        } : { listCities: NOT_AVAILABLE_OPTION('city') };
        this.setState(updateStateField);

        const fieldsForUpdate = isFieldState ? ['state', 'city'] : ['city'];
        fieldsForUpdate.forEach(name => {
          const findIndex = this.findPositionInput(name);
          if(findIndex >= 0) {
            const updateFieldState = this.state.fieldsForm[findIndex];
            updateFieldState.value = `${name} not available`;
            this.updateFieldsValues(updateFieldState);
          }
        });
    }
  }

  fetchListLocation = async (field, value = '') => {
    const isFieldState = field === 'state';
    let isNotAvailableField = false;
    this.activeLoadingInFieldsFetch(field, { loading: true, disabled: true});
    try{
      let response = null;
      if(isFieldState){
        response = await Api.getAllStatesMX();
      } else{
        response = await Api.getState(value);
      }
      const rawList = response.datos;
      if(rawList.length){
        if(isFieldState){
          this.setState({ listStates: this.filteredOptions(rawList, field)});
        }else{
          const indexCity = this.findPositionInput(field);
          const updateFields = this.state.fieldsForm;
          updateFields[indexCity].isDisabled = false;
          this.setState({
            fieldsForm: updateFields,
            listCities: this.filteredOptions(rawList, field)
          });
        }
      }else{
        isNotAvailableField = true;
        this.listNotAvailable(field);
      }
    } catch(e){
      isNotAvailableField = true;
      this.listNotAvailable(field);
      console.error(`Fail to fetch ${field} from api `, e);
    } finally {
      this.activeLoadingInFieldsFetch(field, { loading: false, disabled: isNotAvailableField });
    }
  };

 componentDidMount() {
    window.addEventListener('keydown', this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: 'in' }), 0);
    console.log(this.state.fieldsForm);

    this.fetchListLocation('state');
  }

  componentDidUpdate(prevProps) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: 'out' });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeyDown, false);
  }

  sendEventGA = () => {
    const registrerEvent = window.location.href;
    ReactGA.initialize('UA-90455538-1');
    ReactGA.event({
      category: 'Epicenter Footer Cotización',
      action: registrerEvent,
      label: '',
    });
  }

  searchText = (name, value) => {
    const {listStates, listCities} = this.state;

    const OPTIONS_LIST = {
      state: listStates,
      city: listCities,
    };

    if(value !== `${name} not available` ){
      const itemLocation = OPTIONS_LIST[name].find((element) => {
      if(element.value === value){
          return element
        }
      })
      return itemLocation.text || 'No disponible';
    }else{
      return value;
    }
  }

  sendInformationForm = async (fields) => {
    const body = Object.values(fields).reduce((prev, cur) => {
      const fieldsNameLocation = ['state', 'city'];
      const value = fieldsNameLocation.includes(cur.name) ? this.searchText(cur.name, cur.value) : cur.value;
      return {...prev, [cur.name]: value}
    },{});

    const oddoRequiredName = body.partner_name +'#'+ 'alertamiento_Epicenter';
    const descriptionForm = body.people + '\n' + body.aboutUs + '\n' + body.comment;
    const state = statesMX[body.state] ? statesMX[body.state].toString() : body.state;

    const bodyForm = {
      name: oddoRequiredName,
      contact_name: body.contact_name,
      email: body.email,
      company: body.partner_name,
      phone: body.phone,
      mobile: body.mobile,
      state_id: state,
      city: body.city,
      description: descriptionForm,
      form: 'MXEPICENTER'
    }

    const {REQUIRED, SERVER, UNKNOWN} = MESSAGES_ERROR;
    try {
      this.setState({isLoading: true});
      const responseStatus = await Api.createLead(bodyForm);
      switch (responseStatus) {
        case 200:
            this.sendEventGA();
            this.setState({
              sectionView: 'FINISH',
            })
            break;
        case 400:
          this.setState({ requestMessageError: REQUIRED });
          break;
        default:
          this.setState({ requestMessageError: SERVER });
          break;
      }
    }catch(error){
      this.setState({ requestMessageError: UNKNOWN });
      console.error('Fail request lead ',error);
    } finally{
      this.setState({isLoading: false});
    }
  }

  validationFields = () => {
    const { fieldsForm } = this.state;
    return Object.values(fieldsForm).map((field) => {
      if (!field.value && field.isRequired) {
        field.isError = true;
        this.updateFieldsValues(field);
        return true;
      }

      const excludeFieldsMaxLenght = ['comment', 'mobile'];
      if(!excludeFieldsMaxLenght.includes(field.name) && !field.value > !field.maxLength){
        field.isError = true;
        this.updateFieldsValues(field);
        return true;
      }

      const excludeFieldsRegex = ['mobile'];
      if(!excludeFieldsRegex.includes(field.name) && field.regex && !field.value.match(field.regex)){
        field.isError = true;
        field.showMessage = true;
        this.updateFieldsValues(field);
        return true;
      }

      return false;
    }, []);
  }

  resetAndClose = () => {
    const { fieldsForm } = this.state;
    const resetValues = Object.values(fieldsForm).map((field) => {
      field.value = '';
      field.showMessage = false;
      field.isError = false;
      field.isDisabled = field.name === 'city';
      return field;
    });

    this.setState({
      fadeType: 'out',
      requestMessageError: '',
      fieldsForm: resetValues,
    });
  }

  updateFieldsValues = (newValue) => {

    const newValueIndex = this.state.fieldsForm.findIndex(x => x.name === newValue.name);
    const fieldsForm = this.state.fieldsForm;
    fieldsForm[newValueIndex] = newValue;

    this.setState({ fieldsForm: fieldsForm});
  }

  findPositionInput = (name) => this.state.fieldsForm.findIndex((field) => field.name === name);

  triggerUpdateValue =  (name, value) => {
    const { fieldsForm } = this.state;
    const findIndex = this.findPositionInput(name);

    if(findIndex >= 0) {
      const newValueInput = fieldsForm[findIndex];
      newValueInput.value = value;
      newValueInput.isError = false;
      newValueInput.showMessage = false;
      this.updateFieldsValues(newValueInput);
    }
  }

  onEscKeyDown = (e) => {
    if (e.key !== 'Escape') return;
    this.setState({ fadeType: 'out' });
  };

  transitionEnd = (e) => {
    const {fadeType} = this.state;
    if (e.propertyName !== 'opacity' || fadeType === 'in') return;
    if (fadeType === 'out') {
      this.props.onClose();
    }
  };

  handlerStates = (value) => {
    this.fetchListLocation('city', value);
  }

  handlerInputOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if(name === 'state'){
      this.triggerUpdateValue('city', '');
      this.handlerStates(value);
    }
    this.triggerUpdateValue(name, value);
  };

  handlerInputPhoneOnChange = (name, value) => {
    this.triggerUpdateValue(name, value);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { fieldsForm } = this.state;
    this.setState({ requestMessageError: '' });
    const fieldsCheck = this.validationFields();
    const isAllCorrect = fieldsCheck.every(field => !field);
    if(isAllCorrect){
      await this.sendInformationForm(fieldsForm);
    }else{
      const formSideElement = document.getElementById('formSide');
      if(formSideElement){
        formSideElement.scrollTo({top: 275, behavior: 'smooth'});
      }
    }
  }

  handlerOnClick = (e) => {
    e.preventDefault();
    this.resetAndClose();
  };

  renderLoader = () => (
    <Styles.LoaderContainer>
      { Array(2).fill('loader').map((key, index) =>
        <Styles.LoaderBounce key={`${key}-${index + 1}`}/>
      )}
    </Styles.LoaderContainer>
  );

  renderForm = () => {
    const { isLoading, fieldsForm, requestMessageError, listStates, listCities } = this.state;

    const OPTIONS_LIST = {
      state: listStates,
      city: listCities,
    };

    return (
      <Styles.ModalContainer>
        <Styles.SideImage />
        <Styles.SideForm id='formSide'>
          <Styles.ButtonClose onClick={this.handlerOnClick}>×</Styles.ButtonClose>
          { isLoading && this.renderLoader() }
          <Styles.FormHeader>
            <Styles.LogoSkyAlertTitle src={'/img/logo.png'} alt='SkyAlert' className="logopop"/>
            <Styles.Title>ALERTAMIENTO SÍSMICO PARA EMPRESAS</Styles.Title>
            <Styles.Subtitle>¡Hola! </Styles.Subtitle>
            <Styles.Subtitle>
              Agradecemos que nos dejes tus datos y el motivo de tu solicitud para ponernos en contacto contigo.
            </Styles.Subtitle>
          </Styles.FormHeader>
          <Styles.FormBody>
            <Styles.FormFields>
              { Object.values(fieldsForm).map((field, index) =>
                <CustomField
                  {...field}
                  options={OPTIONS_LIST[field.name] || field.options}
                  isDisabled={field.isDisabled || isLoading}
                  key={`field-custom-${index + 1}`}
                  onChange={this.handlerInputOnChange}
                  onChangePhone={this.handlerInputPhoneOnChange}
                />
              ) }
              <Styles.FieldLabel>
                <Styles.Required>*</Styles.Required>Campo obligatorio
              </Styles.FieldLabel>
            </Styles.FormFields>
          </Styles.FormBody>
          { !!requestMessageError.length &&
            <Styles.MessageError>{requestMessageError}</Styles.MessageError>
          }
          <Styles.FormFooter>
            <Styles.ButtonSend type='submit' onClick={this.handleSubmit} disabled={isLoading}>
              Contáctanos
            </Styles.ButtonSend>
          </Styles.FormFooter>
        </Styles.SideForm>
      </Styles.ModalContainer>
    );
  };

  renderCompletedForm = () => (
    <Styles.ModalCompleted>
      <Styles.ButtonClose onClick={this.handlerOnClick}>×</Styles.ButtonClose>
      <Styles.LogoSkyAlert src={'/img/modal/epicenter/logo-skyalert.svg'} alt='SkyAlert' />
      <Styles.TitleCompleted>¡Gracias por tu interés!</Styles.TitleCompleted>
      <Styles.ContainerTexts>
        <Styles.Paragraph>Hemos recibido tu información.</Styles.Paragraph>
        <Styles.Paragraph>Responderemos al correo que registraste.</Styles.Paragraph>
      </Styles.ContainerTexts>
      <Styles.ButtonSend onClick={this.handlerOnClick}>
        Aceptar
      </Styles.ButtonSend>
    </Styles.ModalCompleted>
  );


  render() {
    const { id, modalClass } = this.props;
    const { fadeType, sectionView } = this.state;

    return ReactDom.createPortal(
      <Styles.ModalStyled
        id={id}
        role='dialog'
        onTransitionEnd={this.transitionEnd}
        className={`fade-${fadeType} ${modalClass}`}
      >
        {
          sectionView !== 'FORM' ?
            this.renderCompletedForm() :
            this.renderForm()
        }
        <Styles.ModalBackground />
      </Styles.ModalStyled>,
      MODAL_ROOT
    );
  }
}

ModalEpicenter.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  modalClass: PropTypes.string,
}

ModalEpicenter.defaultProps = {
  id: '',
  modalClass: '',
}

export default ModalEpicenter;
