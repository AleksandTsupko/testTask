import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalEditOpen, editUserThunk } from '../../store/testActions'
import './Modal.css';

function ModalEdit() {
    const dispatch = useDispatch()
    const modalEditStatus = useSelector((store) => store.test.modalEdit);
    const users = useSelector((store) => store.test.users);
    const [changes, setChanges] = useState({})

    const modalCloseHandler = () => {
        dispatch(modalEditOpen(false))
    }

    const inputHandler = (e) => {
        setChanges((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    }

    const applyHandler = () => {
        dispatch(editUserThunk(changes))
        dispatch(modalEditOpen(false))
    }

    useEffect(() => {
        const user = users.filter((user) => user.id == modalEditStatus)[0] || {}
        setChanges(user)
    },[modalEditStatus])

    return !modalEditStatus ? null : (
        <div className="modal" onClick={modalCloseHandler}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title"> Edit user</h3>
                    <span className="modal-close" onClick={modalCloseHandler}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">
                        <label>First Name</label>
                        <input name="firstName" type="text" value={changes.firstName} onChange={inputHandler} />
                        <label>Last Name</label>
                        <input name="lastName" type="text" value={changes.lastName} onChange={inputHandler} />
                        <label>E-mail</label>
                        <input name="email" type="text" value={changes.email} onChange={inputHandler} />
                        <label>Birth Date</label>
                        <input name="birthDate" type="text" value={changes.birthDate} readOnly />
                    </div>
                    <button onClick={applyHandler}>Apply</button>
                </div>
            </div>
        </div>
    );
}

export default ModalEdit;