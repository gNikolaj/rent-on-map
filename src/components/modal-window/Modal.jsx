import React, {useState} from 'react';

import './Modal.css';

const Modal = ({addProduct, setShowModal, newMarker}) => {
    const [productName, setName] = useState('');
    const [productPrice, setPrice] = useState('0');
    const [productAddress, setAddress] = useState('');

    const confirmForm = (e) => {
        e.preventDefault();
        const updateValue = {
            title: productName,
            price: productPrice,
            address: productAddress,
            lat: newMarker.lat,
            lng: newMarker.lng
        }
        if (productPrice !== '0' && productName !== '' && productAddress !== '') {
            addProduct(updateValue);
            setShowModal(false);
        }
    }

    return (
        <div className='modal-window'>
            <div className='modal-window-content'>
                <form>
                    <label>Product name</label>
                    <input
                        type="text"
                        required
                        value={productName}
                        onChange={e => setName(e.target.value)}
                    />
                    <label>Product price</label>
                    <input
                        type="text"
                        required
                        value={productPrice}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <label>Detailed address</label>
                    <input
                        type="text"
                        required
                        value={productAddress}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <button onClick={e => confirmForm(e)}>Confirm</button>
                    <button onClick={() => setShowModal(false)}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
