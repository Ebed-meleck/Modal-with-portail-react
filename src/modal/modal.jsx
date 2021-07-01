import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import * as AiIcons from 'react-icons/ai';

const Modal = ({isShow, hide, title, ...props}) =>

  isShow ?
    ReactDom.createPortal(
      <>
        <div className='modal-overlay'>
          <div className='modal-wrapper'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4> {title}</h4>
                <button
                  type='button'
                  className='modal-button-close'
                  onClick={hide}
                >
                 <span> <AiIcons.AiOutlineClose fontSize={30} /></span> 
                </button>
              </div>
              <hr/>
              <div className='modal-body'>
                {props.children}
              </div>
            </div>
          </div>
        </div>

         <style jsx="true">
          {`
            .modal-overlay{
              position:fixed;
              top:0%;
              left:0%;
              width:100vw;
              height:100vh;
              z-index:1040;
              background-color:rgba(0,0,0,0.5);
             
            }
            .modal-wrapper{
              position:fixed;
              top:0;
              left:0;
              z-index:1050;
              width:100%;
              overflow-x:hidden;
              overflow-y:auto;
              height:100%; 
              outline:0;
              display:flex;
              align-items:center;
            }
            .modal-content{
              z-index:100;
              background-color:#fff;
              position:relative;
              margin:auto;
              border-radius:10px;
              max-width:550px;
              width:80%;
              height:auto;
              padding:auto;
              top:-10%;
              transition:1ms;
            }
            .modal-header{
              display:flex;
              justify-content:space-between;
              align-items:center;
            }
            .modal-header h4{
              margin-left:20px;
            }
            .modal-button-close{
              font-size:25px;
              font-weight:500;
              color:black;
              cursor:pointer;
              border:none;
             background:transparent;
            }
            .modal-body{
              padding:1rem;
            }
            `}
        </style>
        
      </>
      , document.getElementById('modal')
    ) : null;
    
Modal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;