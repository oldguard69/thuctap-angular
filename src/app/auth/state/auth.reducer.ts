import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { ResponseMessage } from 'src/app/models/response.model';
import { UserProfile } from 'src/app/models/userProfile.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  token: string;
  messages: ResponseMessage[];
  userProfile: UserProfile;
  currentActionUrl: string;
  isAdmin: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  messages: null,
  userProfile: null,
  currentActionUrl: null,
  isAdmin: false,
};

export const authLocalStorageKey = 'auth';

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loadAuthTokenFromLocalStorageSuccess, (state, { token }) => ({
    ...state,
    token: token,
  })),
  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    token: token,
    isLoggedIn: true,
    currentActionUrl: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    messages: error,
  })),
  on(AuthActions.registerSuccess, (state, { msg }) => ({
    ...state,
    messages: msg,
  })),
  on(AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    messages: error,
  })),
  on(AuthActions.resetMessages, (state) => ({ ...state, messages: null })),
  on(AuthActions.logout, (state) => ({
    ...state,
    token: null,
    isLoggedIn: false,
    message: null,
    userProfile: null,
    isAdmin: false,
  })),
  on(AuthActions.loadUserProfileSuccess, (state, { userProfile }) => ({
    ...state,
    isLoggedIn: true,
    userProfile,
  })),
  on(AuthActions.loadUserProfileFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    token: null,
    messages: null,
    currentActionUrl: null,
    userProfile: null,
  })),
  on(AuthActions.setCurrentAction, (state, { currentActionUrl, messages }) => ({
    ...state,
    currentActionUrl,
    messages,
  })),
  on(AuthActions.adminLoginSuccess, (state, { token }) => ({
    ...state,
    token: token,
    isAdmin: true,
    isLoggedIn: true,
  })),
  on(AuthActions.changePasswordFailure, (state, { messages }) => ({
    ...state,
    messages,
  })),
  on(AuthActions.changePasswordSuccess, (state, { messages }) => ({
    ...state,
    messages,
  })),
  on(AuthActions.updateProfileSuccess, (state, { messages, userProfile }) => ({
    ...state,
    messages,
    userProfile: {...state.userProfile, ...userProfile}
  })),
  on(AuthActions.updateProfileFailure, (state, { messages }) => ({
    ...state,
    messages,
  })),
);
