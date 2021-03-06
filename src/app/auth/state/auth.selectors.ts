import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";


export const selectAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const selectAuthToken = createSelector(
    selectAuthFeatureState,
    state => state.token
)

export const selectIsLoggedIn = createSelector(
    selectAuthFeatureState,
    state => state.isLoggedIn
);

export const selectAuthMessages = createSelector(
    selectAuthFeatureState,
    state => state.messages
);

export const selectUserProfile = createSelector(
    selectAuthFeatureState,
    state => state.userProfile
);

export const selectCurrentActionUrl = createSelector(
    selectAuthFeatureState,
    state => state.currentActionUrl
)

export const selectIsAdmin = createSelector(
    selectAuthFeatureState,
    state => state.isAdmin
)