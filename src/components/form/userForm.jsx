import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function UserForm({ newUserData, setNewUserData }) {
	return (
		<>
			<Input
				prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
				style={{ marginBottom: 10 }}
				placeholder="Введите имя пользователя"
				value={newUserData}
				onChange={(e) => setNewUserData(e.target.value)}
			/>
			<Button onClick={() => console.log("111")} type="primary">
				Изменить
			</Button>
		</>
	);
}
