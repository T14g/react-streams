import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

// onClick={(e) => e.stopPropagation()} evita que a div interna receba o onclick da externa 
//evita o efeito de bolha estourando

const Modal = props =>{
    return ReactDOM.createPortal(
        <div onClick={ () => history.push('/') } className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standart modal visible active">
                <div className="header">Delete Stream</div>
                <div className="content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dicta harum veniam. Quo officiis voluptatum laborum? Alias nam eaque adipisci exercitationem voluptate magni, magnam cumque esse corporis sit ea cupiditate!
                </div>

                <div className="actions">
                    <button className="ui primary button">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')

    );
};

export default Modal;