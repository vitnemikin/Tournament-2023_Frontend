import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

interface UserState {
  userData: UserData;
  emailSent: boolean;
  isLoggedIn: boolean;
  error: any; 
}

const initialState: UserState = {
  userData: {
    name: '',
    lastname: '',
    email: '',
    password: '',
  },
  emailSent: false,
  isLoggedIn: false,
  error: null,
};

export const registerUser = createAsyncThunk<UserData, UserData>(
  'user/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('/auth/registration', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.ok) {
        return alert("Успешная регистрация!");
      } else {
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const confirmUser = createAsyncThunk('user/confirmUser', async ({ username, token }: { username: string; token: string }, { rejectWithValue }) => {
  try {
    const response = await fetch(`/auth/${username}/confirm?${token}`);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const loginUser = createAsyncThunk('user/loginUser', async ({ login, password }: { login: string; password: string }, { rejectWithValue }) => {
  try {
    const response = await fetch(`/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  } catch (error) {
    return rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.emailSent = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      })
      .addCase(confirmUser.fulfilled, (state) => {
        // Добавьте обработку успешного подтверждения пользователя, если необходимо
      })
      .addCase(confirmUser.rejected, (state, action: PayloadAction<any>) => {
        // Добавьте обработку ошибок подтверждения пользователя, если необходимо
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
