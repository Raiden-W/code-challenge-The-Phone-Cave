import { Route, Routes } from "react-router";
import "./App.css";
import PhonesPage from "./pages/PhonesPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PhonesPage />} />
				<Route path="/:id" element={<PhonesPage />} />
				<Route path="*" element={<h2>Page Not Found</h2>} />
			</Routes>
		</>
	);
}

export default App;
