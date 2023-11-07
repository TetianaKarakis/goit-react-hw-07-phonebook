import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://654a2d49e182221f8d52aa2e.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkAPI) => {
	try {
		const response = await axios.get("/contacts")
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contact, thunkAPI) => {
		try {
			const response = await axios.post("/contacts", contact);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
});

export const removeContact = createAsyncThunk(
	"contacts/removeContact",
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
});