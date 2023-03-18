import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL VACANCIES
export const getVacancies = createAsyncThunk(
  "vacancy/get-all-vacancies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/vacancies`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// ADD NEW VACANCY
export const addVacancy = createAsyncThunk(
  "vacancy/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/v1/add-vacancy`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// DELETE VACANCY
export const deleteVacancyById = createAsyncThunk(
  "vacancy/deleteVacancyById",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`/v1/vacancy/${id}`);

      dispatch(getVacancies());
      dispatch(getActiveVacancies());

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// GET VACANCY
export const getVacancy = createAsyncThunk(
  "vacancy/get-all-vacancy",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/vacancy/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// GET ACTIVE VACANCY
export const getActiveVacancies = createAsyncThunk(
  "vacancy/get-active-vacancy",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/active-vacancies`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// UPDATE/PATCH VACANCY
export const updateVacancy = createAsyncThunk(
  "vacancy/update-vacancy",
  async (
    { values, jobPosition, technicalSkill, skillSet, id },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.patch(`/v1/vacancy/${id}`, {
        ...values,
        jobPosition,
        technicalSkill,
        skillSet,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/* -------------------------------------------------------------------------- */
/*                               Applied Vacancy                              */
/* -------------------------------------------------------------------------- */

export const applyVacancy = createAsyncThunk(
  "vacancy/apply-vacancy",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/v1/vacancy/apply`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// GET APPLIED VACANCIES
export const getAppliedVacancy = createAsyncThunk(
  "vacancy/get-applied-vacancy",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/applied-vacancies`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
