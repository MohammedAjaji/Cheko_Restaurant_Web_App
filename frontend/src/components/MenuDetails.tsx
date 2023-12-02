import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMenus } from "../redux/slices/MenuSlice";
import { AppDispatch } from "../redux/store";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  id: number;
};
function MenuDetails(popup: PopupProps) {
  // const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   dispatch(fetchMenus(popup.id.toString()));
  // }, [dispatch, popup.id]);
  // if (!popup.isOpen) {
  //   return null;
  // }
  // return <div>MenuDetails</div>;
}

export default MenuDetails;
