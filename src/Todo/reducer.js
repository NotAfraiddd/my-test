import { ADD_JOB, DELETE_JOB, SET_JOB } from './constants'

export const initState = {
    job: "",
    jobs: [],
};

const reducer = (state, action) => {

    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                //...state là bảo lưu state cũ
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs] // lấy mảng cũ
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action.')
    }
}

export default reducer;
