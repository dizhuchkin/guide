import { Route, Router, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<>Home</>} />
				<Route path="/about" element={<>About</>} />
				<Route path="/login" element={<>Login</>} />
			</Routes>
		</Router>
	);
}

export default App;
