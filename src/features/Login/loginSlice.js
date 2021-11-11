import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { useSelector, useDispatch } from "react-redux";
import {loginAPI} from './loginAPI';

const initialState = {
  name: '',
  token: null,
  loading: false,
};

const login = createAsyncThunk(
  'auth/login',
  async creds => await loginAPI(creds),
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkToken: state => {
      let data = localStorage.getItem('session');
      if (!data) data = sessionStorage.getItem('session');
      if (data) {
        data = JSON.parse(data);
        state.name = data.name;
        state.token = data.token;
        state.loading = false;
      }
    },
    logout: state => {
      state.name = '';
      state.token = null;
      localStorage.removeItem('session');
      sessionStorage.removeItem('session');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => (state.loading = true))
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('session', JSON.stringify(action.payload));
        state.name = action.payload.name;
        state.token = action.payload.token;
        state.loading = false;
      });
  },
});

export function useAuth() {
  const dispatch = useDispatch();

  return {
    authState: useSelector(state => state.auth),
    checkToken: () => dispatch(authSlice.actions.checkToken()),
    logout: () => dispatch(authSlice.actions.logout()),
    login: (creds) => dispatch(login(creds))
  }
}

export default authSlice.reducer;
