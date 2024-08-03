import { Layout } from "antd";

const { Footer } = Layout;

const footerStyle = {
	textAlign: "center",
	height: 64,
};
export default function AppFooter() {
	return (
		<Footer style={footerStyle}>
			React Help ©{new Date().getFullYear()} Created by Nicodemous
		</Footer>
	);
}
