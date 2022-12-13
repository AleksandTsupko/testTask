import { testTypes } from "./types";

export const getUsers = (users) => ({ type: testTypes.GET_USERS, payload: { users } });

export const deleteUser = (id) => ({ type: testTypes.DELETE_USER, payload: { id } });

export const editUser = (changes) => ({ type: testTypes.EDIT_USER, payload: { changes } });

export const modalEditOpen = (id) => ({ type: testTypes.MODAL_EDIT_OPEN, payload: { id } });

export const paginSwitch = (num) => ({ type: testTypes.PAGIN_SWITCH, payload: { num } });

export const getUsersThunk = () => async (dispatch) => {
    // dispatch(setError(false));
    try {
        const response = await fetch("https://retoolapi.dev/eqsQ4S/users", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // if (response.status != 200) { return dispatch(setError('Не удалось получить список пользователей!')); }

        const users = await response.json()
        dispatch(getUsers(users))
    } catch (err) {
        console.error('err', err);
        // dispatch(setError(err.message));
    }
}

export const deleteUserThunk = (id) => async (dispatch) => {
    // dispatch(setError(false));
    try {
        // тут запрос на бек, далее либо обновляем целиком users (что предпочтительнее,т.к. мы можем работать не одни), либо удаляем из store юзера

        dispatch(deleteUser(id))
    } catch (err) {
        console.error('err', err);
        // dispatch(setError(err.message));
    }
}

export const editUserThunk = (changes) => async (dispatch) => {
    // dispatch(setError(false));
    try {
        // тут запрос на бек, в котором редактируем пользователя

        dispatch(editUser(changes))
    } catch (err) {
        console.error('err', err);
        // dispatch(setError(err.message));
    }
}
