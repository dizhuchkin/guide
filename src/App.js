import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";

import MainContent from "./pages/list/MainContent.jsx";
import LayoutContent from "./pages/LayoutContent.jsx";
import ParamsContent from "./pages/ParamsContent.jsx";
import ErrorContent from "./pages/ErrorContent.jsx";
import LayoutList from "./pages/list/LayoutList.jsx";
import LayoutListHook from "./pages/list/hookContent/LayoutListHook.jsx";
import LayoutListDop from "./pages/list/dopContent/LayoutListDop.jsx";

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<LayoutContent />}>
					<Route path="/" element={<LayoutList />}>
						<Route index element={<MainContent />} />

						<Route
							path="/hook/:nameHook"
							element={<LayoutListHook />}
						/>

						<Route
							path="/dop/:nameDop"
							element={<LayoutListDop />}
						/>
					</Route>
					<Route
						path="/:idUser/:idPost"
						element={<ParamsContent />}
					/>
					<Route path="*" element={<ErrorContent />} />
				</Route>
			</Routes>
		</Provider>
	);
}

export default App;
