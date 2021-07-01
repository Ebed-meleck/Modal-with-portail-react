import React from 'react';
import './App.css';
import useModal from './modal/Usemodal';
import Modal from './modal/modal';
import Hello from './component/hello';


function App() {
  
  const { isShow: show, toggle: _toggleOpen } = useModal()

  return (
    <div className="App">
      <h1> Tuto modal </h1>
      <div className="tuto" >
        <button
          className='btn'
          onClick={_toggleOpen}
        >
          Afficher modal
        </button>
        <Modal
          isShow={show}
          hide={_toggleOpen}
          title='modal running'
        >
          <Hello />
        </Modal>
     </div>
    </div>
  );
}

export default App;
