import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "./index";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelectore = useSelector.withTypes<RootState>();