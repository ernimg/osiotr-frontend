import React, { Component } from 'react';
import Input from '../../../Components/FormInput/FormInputs';
import './Css/Constact.css';
class Contact extends Component {
  state = {
    contactForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          name: 'Imie *'
          // placeholder: 'Imie'
        },
        value: ''
      },
      surname: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          name: 'Nazwisko *'
          // placeholder: 'Nazwisko'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          name: 'Email *'
          // placeholder: 'Email'
        },
        value: ''
      },
      phone_number: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          name: 'Telefon *'
          // placeholder: 'Telefon'
        },
        value: ''
      },
      message: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text',
          name: 'Wiadomość *'
          // placeholder: 'Wiadomość ...'
        },
        value: ''
      }
    },
    contactIcon: [
      {
        id: 1,
        icon: (
          <i
            className='contact-ico__img fa fa-map-marker'
            aria-hidden='true'
          ></i>
        ),
        value: `BOBROWIEC 22
        BRANIEWO 14-500`
      },
      {
        id: 2,
        icon: (
          <i className='contact-ico__img  fa fa-phone' aria-hidden='true'></i>
        ),
        value: `+48 602 77 62 75`
      },
      {
        id: 3,
        icon: (
          <i className='contact-ico__img  fa fa-info' aria-hidden='true'></i>
        ),
        value: `NIP PL 5821543230 `
      },
      {
        id: 4,
        icon: (
          <i className='contact-ico__img  fa fa-info' aria-hidden='true'></i>
        ),
        value: `Regon 170973890`
      },
      {
        id: 5,
        icon: (
          <i
            className='contact-ico__img  fa fa-envelope'
            aria-hidden='true'
          ></i>
        ),
        value: `aqua-osiotr@wp.pl`
      }
    ]
  };

  inputHandler = (event, idInput) => {
    const contactForm = {
      ...this.state.contactForm
    };
    const contactFormUpdate = {
      ...contactForm[idInput]
    };
    contactFormUpdate.value = event.target.value;
    contactForm[idInput] = contactFormUpdate;

    this.setState({ contactForm });
  };
  messagesDeliveryHandler = event => {
    event.preventDefault();
  };
  render() {
    const ref3 = React.createRef();
    const contactIconData = this.state.contactIcon.map(contactItem => (
      <p className='contact-ico' key={contactItem.id}>
        {contactItem.icon}
        <span className='contact-ico__decription'>{contactItem.value}</span>
      </p>
    ));

    const ElementsArr = [];
    for (const key in this.state.contactForm) {
      ElementsArr.push({
        id: key,
        config: this.state.contactForm[key]
      });
    }

    return (
      <section id='ref3' className='contact' ref={ref3}>
        <div className='contact__wrapper'>
          <div className='contact__child child1 '>{contactIconData}</div>
          <div className='contact__child child2 '>
            <h2 className='contact__title'>Skontaktuj się z nami</h2>
            <form className='form' onSubmit={this.messagesDeliveryHandler}>
              {ElementsArr.map(formElement => (
                <Input
                  key={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  inputHandler={event =>
                    this.inputHandler(event, formElement.id)
                  }
                />
              ))}
              <button className='form__btn'>Wyślij</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
