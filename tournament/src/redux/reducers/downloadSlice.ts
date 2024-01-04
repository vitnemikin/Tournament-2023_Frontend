import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface DownloadState {
  downloadData: object;
}

const initialState: DownloadState = {
  downloadData: {},
};

export const downloadGame = createAsyncThunk('download/downloadGame', async (os: string) => {
  const response = await fetch(`/downloads/${os}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
});

export const downloadSlice = createSlice({
  name: 'download',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(downloadGame.fulfilled, (state, action) => {
        state.downloadData = action.payload;
      });
  },
});




export const { actions: downloadActions, reducer: downloadReducer } = downloadSlice;
