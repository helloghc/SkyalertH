import React, { Component } from 'react'
import PhoneInput from 'react-phone-input-2';
import { ICONS_INPUTS } from './Constants';
import * as Styles from '../Styles';
import es from 'react-phone-input-2/lang/es.json';

import 'react-phone-input-2/lib/style.css';

const INPUT_CONFIG_CELL = {
    country: 'mx',
    location: es,
    specialLabel: '',
    countryCodeEditable: false,
    defaultMask: '.. ... ... ....',
    preferredCountries: ['mx', 'us'],
};


const INPUT_CONFIG_PHONE = {
    country: 'mx',
    location: es,
    specialLabel: '',
    countryCodeEditable: false,
    defaultMask: '.. ... ... ....',
    preferredCountries: ['mx', 'us'],
    disableDropdown: true,
};

const MAX_TEXT_AREA_CHARACTERS = 300;

class Fields extends Component {
    state = {
        commentLength: 0,
    };
    
    handlerOnChangeTxtArea = (e) => {
        const { value } = e.target;
        this.setState({commentLength: value.substring(0, MAX_TEXT_AREA_CHARACTERS).length });
        this.props.onChange(e);
    }

    pathAsset = ( iconName = 'user') => `/img/modal/epicenter/${ICONS_INPUTS[iconName]}`;

    renderFieldType = (field, propsInput) => {
        const { commentLength } = this.state;
        switch(field){
            case 'input':
                return (
                    <Styles.FieldCustomText {...propsInput} ref={this.props.ref}/>
                );
            case 'select': {
                if(propsInput.isLoading){
                    return (
                        <Styles.FieldCustomSelect disabled>
                            <Styles.FieldCustomSelectOpt disabled selected>
                                Cargando...
                            </Styles.FieldCustomSelectOpt>
                        </Styles.FieldCustomSelect>
                    );
                }
                if(propsInput.options){
                    return (
                        <Styles.FieldCustomSelect {...propsInput}>
                            {Object.values(propsInput.options).map((optionSelect)=>
                                <Styles.FieldCustomSelectOpt 
                                    key={optionSelect.text} {...optionSelect}>
                                    {optionSelect.text}
                                </Styles.FieldCustomSelectOpt>
                            )}
                        </Styles.FieldCustomSelect>
                    );
                }
                return <select />
            }
            case 'textArea':
                return (
                    <React.Fragment>
                        <Styles.FieldTextarea {...propsInput}  onChange={this.handlerOnChangeTxtArea}/>
                        {
                            propsInput.name === 'comment' &&
                            <Styles.FieldLetterCounter>
                                {commentLength}/{MAX_TEXT_AREA_CHARACTERS}
                            </Styles.FieldLetterCounter>    
                        }
                    </React.Fragment>
                );
            default: 
                return <div />
        }
    };

    renderIconState = (name, icon, props, loading) => {
        const fieldsLoading = ['city', 'state'];
        if(fieldsLoading.includes(name) && loading){
            return (
                <Styles.ContainerLoading>
                    <Styles.IconLoading />
                </Styles.ContainerLoading>
            );   
        }    
        
        return <Styles.Icon {...props} src={this.pathAsset(icon)} />;
    };

    render() {
        const {
            field,
            name, 
            value, 
            onChange,
            onChangePhone,
            icon, 
            maxLength, 
            type, 
            text,
            pattern, 
            placeholder, 
            isError, 
            isRequired,
            isDisabled, 
            options,
            message,
            showMessage,
            rows,
            isLoading,
        } = this.props;
        
        const propsInput = {
            rows,
            name,
            value,
            options,
            onChange,
            maxLength,
            placeholder,
            pattern,
            isLoading,
            required: isRequired,
            disabled: isDisabled,
        };

        const propsWrapper = {
            className: `${isError ? 'error': ''} ${isDisabled || isLoading ? 'disabled': ''}`,
        };

        const propsPhoneInput = name !== 'phone' ? INPUT_CONFIG_CELL : INPUT_CONFIG_PHONE;

        return (
            <Styles.FieldContainer>
                <Styles.FieldTextsContainer>
                    <Styles.FieldLabel>
                        {text} {isRequired && <Styles.Required>*</Styles.Required> }
                    </Styles.FieldLabel>
                    {showMessage && <Styles.FieldMessageError>{message}</Styles.FieldMessageError>}
                </Styles.FieldTextsContainer>
                {
                    field !== 'phone' ? (
                        <React.Fragment>
                            <Styles.FieldWrapper {...propsWrapper}>
                                {
                                    name !== 'comment' && this.renderIconState(name,icon, propsWrapper, isLoading)
                                }
                                { this.renderFieldType(field, propsInput) }
                            </Styles.FieldWrapper>
                        </React.Fragment>    
                    ) : (
                        <React.Fragment>
                            <Styles.FieldWrapper {...propsWrapper}>
                                <Styles.Icon {...propsWrapper} src={this.pathAsset(icon)} />
                            </Styles.FieldWrapper>
                            <Styles.FieldCustomPhone>
                                <PhoneInput
                                    {...propsPhoneInput}
                                    inputProps={{ name, type, maxLength}}
                                    disabled={isDisabled}
                                    placeholder={placeholder}
                                    value={value}
                                    onChange={(valueInput) => onChangePhone(name, valueInput)}
                                />
                            </Styles.FieldCustomPhone>  
                        </React.Fragment>
                    )
                }
            </Styles.FieldContainer>
        );
    }
};

export default Fields;
