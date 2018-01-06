import { InitialState } from '../state/initialState';

export default function UserReducer(s = InitialState.user, action) {
    switch (action.type) {
        default:
            return s;
    }
}
