import React, { Component } from 'react';
import Contact from './contact';
import '../css/index.css'


const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+380666666666"
}, {
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends Component {
    state = {
      contacts,
      search: "",
    };
  
    
  
    handleSearchChange = (e) => {
      e.persist();
      this.setState( () => ({
        search: e.target.value,
      }));
    };
  
  
    render() {
      const { search } = this.state;
  
      return (
        
          <div className='container'>
              <div className='search'>
                  <input className='input' type="text" value={search} onChange={this.handleSearchChange}/>
              </div>
              {contacts.filter( (e) => (
                  !this.state.search ||e.lastName.toLowerCase().includes(search.toLowerCase()) 
                  || e.firstName.toLowerCase().includes(search.toLowerCase()) 
                  || e.phone.includes(search)))
                  .map( (contact) => (
                    <Contact  contact={contact} />
                  ))
              }
          </div>
        
      );
    }
  }
  
  export default Contacts;