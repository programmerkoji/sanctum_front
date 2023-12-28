import axios from "axios";

export const loginUser = async (email: string, password: string) => {
	await axios.get("http://localhost:8000/sanctum/csrf-cookie").then(async () => {
		const response = await axios
			.post(
				"http://localhost:8000/api/login",
				{ email, password },
				{
					withCredentials: true,
					withXSRFToken: true,
				}
			)
			// .then((response) => {
			// 	console.log(response);
    // });
    console.log(response);
    return response;
	});
};
