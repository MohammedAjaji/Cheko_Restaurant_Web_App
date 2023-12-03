import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Category, Restaurant } from "../../types/types";
import { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import axios from "axios";

export const fetchRestaurants = createAsyncThunk(
  "RestaurantSlice/fetchRestaurants",
  async (endpoint: string): Promise<any> => {
    const response = await axios.get(
      `http://localhost:8080/api/restaurant/${endpoint}`
    );
    return response.data;
  }
);
export const fetchRestaurantMenuCategories = createAsyncThunk(
  "MenuSlice/fetchCategories",
  async (id: string): Promise<Category[]> => {
    const response = await axios.get(
      `http://localhost:8080/api/restaurant/menu/category-count/${id}`
    );
    return response.data;
  }
);

export type RestaurantState = {
  items: Restaurant[];
  item: Restaurant | null;
  categories: Category[];
  error: null | string;
  isLoading: boolean;
};

const initialState: RestaurantState = {
  items: [],
  item: null,
  categories: [],
  error: null,
  isLoading: false,
};

export const RestaurantSlice = createSlice({
  name: "Restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.isLoading = true;
        console.log("state.isLoading :>> ", state.isLoading);
      })
      .addCase(
        fetchRestaurants.fulfilled,
        (state, action: PayloadAction<Restaurant[] | Restaurant>) => {
          state.isLoading = false;
          if (Array.isArray(action.payload)) {
            state.items = action.payload;
            state.error = null;
          } else {
            state.item = action.payload;
            state.error = null;
          }
        }
      )
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch restaurants";
      })
      .addCase(
        fetchRestaurantMenuCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.isLoading = false;
          state.categories = action.payload;
          state.error = null;
        }
      );
  },
});
export const RestaurantActions = RestaurantSlice.actions;

export default RestaurantSlice.reducer;
