import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Word } from "./pages/Word";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Word />} />
		</Routes>
	);
}

export default App;
