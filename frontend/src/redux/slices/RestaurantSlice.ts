import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../../types/types";
import { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import axios from "axios";

export const fetchRestaurants = createAsyncThunk(
  "RestaurantSlice/fetchRestaurants",
  async (endpoint: string): Promise<Restaurant[]> => {
    const response = await axios.get(
      `http://localhost:8080/api/restaurant/${endpoint}`
    );
    return response.data;
  }
);

export type RestaurantState = {
  items: Restaurant[] | any;
  error: null | string;
  isLoading: boolean;
};

const initialState: RestaurantState = {
  items: [],
  error: null,
  isLoading: false,
};

export const RestaurantSlice = createSlice({
  name: "Restaurant",
  initialState,
  reducers: {
    RestaurantsRequest: (state) => {
      state.isLoading = true;
    },
    RestaurantsSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchRestaurants.fulfilled,
        (state, action: PayloadAction<Restaurant[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch restaurants";
      });
  },
});
export const RestaurantActions = RestaurantSlice.actions;

export default RestaurantSlice.reducer;
