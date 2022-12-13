import React, { useEffect } from 'react';
import './Table.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserThunk, modalEditOpen, paginSwitch } from '../../store/testActions'

function Table() {
    const dispatch = useDispatch()
    const paginPages = []
    const users = useSelector((store) => store.test.users);
    const curPage = useSelector((store) => store.test.currentPage);

    for (let i = 1; i <= Math.ceil(users.length / 10); i++) {
        paginPages.push(i)
    }

    const tableUsers = users.slice((curPage * 10) - 10, curPage * 10)
    console.log(tableUsers);


    const deleteHandler = (id) => {
        dispatch(deleteUserThunk(id))
    }

    const editHandler = (id) => {
        dispatch(modalEditOpen(id))
    }

    const paginHandler = (num) => {
        dispatch(paginSwitch(num));
    } 

    return (
        <>
            <div className="table">
                <div className="th">ID<span data-sort="id" title="Sort"><span></span><span></span></span></div>
                <div className="th">Firstame<span data-sort="firstname" title="Sort"><span></span><span></span></span></div>
                <div className="th">Lastname<span data-sort="lastname" title="Sort"><span></span><span></span></span></div>
                <div className="th">Email<span data-sort="email" title="Sort"><span></span><span></span></span></div>
                <div className="th">B. Day<span data-sort="bday" title="Sort"><span></span><span></span></span> </div>
                <div className="th">Action </div>
                {tableUsers.map((user) => (<>
                    <div> {user.id}</div>
                    <div> {user.firstName}</div>
                    <div> {user.lastName}</div>
                    <div> {user.email}</div>
                    <div> {user.birthDate}</div>
                    <div>
                        <span className="edit" onClick={() => editHandler(user.id)}></span>
                        <span className="delete" onClick={() => deleteHandler(user.id)}></span>
                    </div>
                </>
                ))}
            </div>
            <div className="pagination">
                {paginPages.map((pageNum) => (
                    pageNum == curPage ? <div className="active" onClick={() => paginHandler(pageNum)}>{pageNum} </div> : <div onClick={() => paginHandler(pageNum)}>{pageNum} </div>
                ))}
            </div>
        </>
    )
}

export default Table;