import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Menu, Category } from "../../types/types";
import { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import axios from "axios";

export const fetchMenus = createAsyncThunk(
  "MenuSlice/fetchMenus",
  async (endpoint: string): Promise<any> => {
    const response = await axios.get(
      `http://localhost:8080/api/menu/${endpoint}`
    );
    return response.data;
  }
);
export const fetchCategories = createAsyncThunk(
  "MenuSlice/fetchCategories",
  async (): Promise<Category[]> => {
    const response = await axios.get(
      `http://localhost:8080/api/menu/category-count`
    );
    return response.data;
  }
);

export type MenuState = {
  items: Menu[];
  item: Menu | null;
  categories: Category[];
  error: null | string;
  isLoading: boolean;
};

const initialState: MenuState = {
  items: [],
  item: null,
  categories: [],
  error: null,
  isLoading: false,
};

export const MenuSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenus.pending, (state) => {
        state.isLoading = true;
        console.log("state.isLoading :>> ", state.isLoading);
      })
      .addCase(
        fetchMenus.fulfilled,
        (state, action: PayloadAction<Menu[] | Menu>) => {
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
      .addCase(fetchMenus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch menus";
      })
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.isLoading = false;
          state.categories = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch categories";
      });
  },
});
export const MenuActions = MenuSlice.actions;

export default MenuSlice.reducer;
