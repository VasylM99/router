import React from 'react';
import '../css/contact.css';

function Contact(props) {
    const { contact }  = props;

    const renderIconClass = ()=> {
           if (contact.gender==='male') {
               return(<i className='fa fa-male'></i>)
           } else if(contact.gender==='female'){
            return(<i className='fa fa-female'></i>)
           }
        }
       
            return (
                
                    <div className='info'>
                        <div className='fullname'>
                            <div className='lastName'>
                                {contact.lastName}
                            </div>
                            <div className='firstName'>
                                {contact.firstName}
                            </div>   
                        </div>
                        <div className='info-contact'>
                            <div className='phone'>
                                {contact.phone}
                            </div> 
                            <div className='gender'>
                                {renderIconClass()}
                            </div>    
                        </div>  
                    </div>
                        
                    
                
            );
  };
      
      
  export default Contact;
    
  
