import { createSelector } from 'reselect'

const selectCartUser = state => state.user


export const selectCurrentUser = createSelector(
    [selectCartUser],
    (user) => user.currentUser
)