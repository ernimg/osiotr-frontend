import React, { Component } from 'react';
import Input from '../../Components/FormInputs';
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
    }
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

  render() {
    const ref3 = React.createRef();
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
          <div className='contact__child child1 '></div>
          <div className='contact__child child2 '>
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
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
