import { Outlet } from "react-router-dom";
import AppFooter from "../components/footer";
import AppHeader from "../components/header";
import { Layout } from "antd";

export default function LayoutContent() {
	return (
		<>
			<Layout>
				<AppHeader />
				<Outlet />
				<AppFooter />
			</Layout>
		</>
	);
}
