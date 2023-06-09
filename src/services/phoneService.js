import axios from "axios";

export const getPhonesFromAPI = async () => {
	const response = await axios.get(
		`${import.meta.env.VITE_BASE_API_URL}/api/phones`
	);
	if (response.status === 200) {
		return response.data;
	}
};

export const getOnePhoneFromAPI = async (id) => {
	const response = await axios.get(
		`${import.meta.env.VITE_BASE_API_URL}/api/phones/${id}`
	);
	if (response.status === 200) {
		return response.data;
	}
};
