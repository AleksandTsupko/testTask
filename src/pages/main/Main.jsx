import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Main.css';
import { getUsersThunk} from '../../store/testActions'
import ModalEdit from "../../components/modal/ModalEdit"
import Table from "../../components/table/Table"

function Main() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunk())
    }, []);

    return (
        <>
            <ModalEdit />
            <div className="App">
                <header className="App-header">
                    <div className="Title"> Some test task </div>
                </header>
                <main>
                    <Table />
                </main>
            </div>
        </>
    );
}

export default Main;