import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './App2.css';
import { VscVerified } from "react-icons/vsc";

if (window.screen.width <= 800){
  var margin=''
}else{
  var margin='50%'
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: margin
  }
};



const dotStyles={
  height: '70px',
  width: '70px',
  backgroundColor: '#32CD32',
  borderRadius: '100%',
  lineHeight:'90px',
  display: 'inline-block',
  zIndex: '1',
  textAlign:'center',
  verticalAlign:'middle',
  display:'inline-block'
  
}
const dotStyles1={
  height: '70px',
  width: '70px',
  backgroundColor: '#bbb',
  borderRadius: '50%',
  display: 'inline-block',
  
}
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement');

const modal=()=> {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
     <h6> <a onClick={openModal} >view details</a></h6>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" 
      >

<div class="container padding-bottom-3x mb-1">
<button class='basket-item-remove button button-border button-border-gray button-small' onClick={closeModal} style={{float:'right'}}>X</button>
<br/>
<br/>
             <div class=" mb-3">
               <div class=" p-4 text-center text-white text-lg bg-dark rounded-top"><span class="text-uppercase">Tracking Order No - </span><span class="text-medium">001698653lp</span></div>
               <br/>
               <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                 <div class="w-100 text-center py-1 px-2"><span class="text-small">Shipped Via:<br/>USPS Ground</span></div>
                 <div class="w-100 text-center py-1 px-2"><span class="text-medium">Status: <br/>Checking Quality</span></div>
                 <div class="w-100 text-center py-1 px-2"><span class="text-medium">Expected Date:<br/> APR 27, 2021</span></div>
               </div>
               <div>
                 <br/>
                 <div class="row">
                   <div class="step completed column">
                     <div class="step-icon-wrap" style={dotStyles}>
                       <div class="step-icon"><VscVerified color='white' size='40%'></VscVerified></div>
                     </div>
                     <h5 class="step-title">Confirmed Order</h5>
                   </div>
                   <div class="step completed column">
                     <div class="step-icon-wrap" style={dotStyles1}>
                       <div class="step-icon"><i class="pe-7s-config"></i></div>
                     </div>
                     <h5 class="step-title">Processing Order</h5>
                   </div>
                   <div class="step completed column">
                     <div class="step-icon-wrap" style={dotStyles1}>
                       <div class="step-icon"><i class="pe-7s-medal"></i></div>
                     </div>
                     <h5 class="step-title">Over to USPS</h5>
                   </div>
                   
                   
                 </div>
               </div>
             </div>
             <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
               <div class="custom-control custom-checkbox mr-3">
                 <input class="custom-control-input" type="checkbox" id="notify_me" checked="" />
                 <label class="custom-control-label" for="notify_me"><h5>Notify me when order is delivered</h5></label>
               </div>
               
             </div>
           </div>
        
      </Modal>
    </div>
  );
};
export default modal;

