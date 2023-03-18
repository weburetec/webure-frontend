import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addVacancy,
  applyVacancy,
  deleteVacancyById,
  getActiveVacancies,
  getAppliedVacancy,
  getVacancies,
  getVacancy,
  updateVacancy,
} from "../../action/vacancy/vacancyAction";

const VacancyReducer = createSlice({
  name: "Vacancy",
  initialState: {
    vacancies: [],
    vacancy: {},
    vacanciesContainer: [],
    activeVacancies: [],
    activeVacanciesContainer: [],
    appliedVacancies: [],
    appliedVacanciesContainer: [],
    loader: false,
    error: "",
    success: "",
  },
  reducers: {
    filterVacancy: (state, action) => {
      state.vacancies.data = state.vacanciesContainer.filter(
        (u) =>
          u.jobTitle.toLowerCase().includes(action.payload) ||
          u.jobTitle.toUpperCase().includes(action.payload)
      );
    },
    filterActiveVacancy: (state, action) => {
      state.activeVacancies = state.activeVacanciesContainer.filter(
        (u) =>
          u.jobTitle.toLowerCase().includes(action.payload) ||
          u.jobTitle.toUpperCase().includes(action.payload)
      );
    },
    filterAppliedVacancy: (state, action) => {
      state.appliedVacancies = state.appliedVacanciesContainer.filter(
        (u) =>
          u.fullName.toLowerCase().includes(action.payload) ||
          u.fullName.toUpperCase().includes(action.payload)
      );
    },
  },
  extraReducers: {
    // active vacancies
    [getActiveVacancies.pending]: (state, action) => {
      state.loader = true;
    },
    [getActiveVacancies.fulfilled]: (state, action) => {
      state.loader = false;
      state.activeVacancies = action.payload;
      state.activeVacanciesContainer = action.payload;
    },
    [getActiveVacancies.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },
    // all vacancies
    [getAppliedVacancy.pending]: (state, action) => {
      state.loader = true;
    },
    [getAppliedVacancy.fulfilled]: (state, action) => {
      state.loader = false;
      state.appliedVacancies = action.payload;
      state.appliedVacanciesContainer = action.payload;
    },
    [getAppliedVacancy.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },
    [getVacancies.pending]: (state, action) => {
      state.loader = true;
    },
    [getVacancies.fulfilled]: (state, action) => {
      state.loader = false;
      state.vacancies = action.payload;
      state.vacanciesContainer = action.payload.data;
    },
    [getVacancies.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },
    // apply vacancy
    [applyVacancy.pending]: (state, action) => {
      state.loader = true;
    },
    [applyVacancy.fulfilled]: (state, action) => {
      state.loader = false;
      state.appliedVacancies = action.payload;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [applyVacancy.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
    // create vacancy
    [addVacancy.pending]: (state, action) => {
      state.loader = true;
    },
    [addVacancy.fulfilled]: (state, action) => {
      state.loader = false;
      state.vacancies = action.payload;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [addVacancy.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
    // delete Vacancy by ID
    [deleteVacancyById.pending]: (state, action) => {
      state.loader = true;
    },
    [deleteVacancyById.fulfilled]: (state, action) => {
      state.loader = false;
      state.vacancies = action.payload;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [deleteVacancyById.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload?.message;
      toast.error(action.payload?.message);
    },
    // single vacancy
    [getVacancy.pending]: (state, action) => {
      state.loader = true;
    },
    [getVacancy.fulfilled]: (state, action) => {
      state.loader = false;
      state.vacancy = action.payload;
    },
    [getVacancy.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },
    /* -------------------------- update vacancy -------------------------- */
    [updateVacancy.pending]: (state, action) => {
      state.loader = true;
    },
    [updateVacancy.fulfilled]: (state, action) => {
      state.loader = false;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [updateVacancy.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
  },
});

// export
export const { filterVacancy, filterActiveVacancy, filterAppliedVacancy } =
  VacancyReducer.actions;

// export default
export default VacancyReducer.reducer;
