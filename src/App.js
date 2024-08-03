import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route index element={<>Home</>} />
			<Route path="/about" element={<>About</>} />
			<Route path="/login" element={<>Login</>} />
		</Routes>
	);
}

export default App;
