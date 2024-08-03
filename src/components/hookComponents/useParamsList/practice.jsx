import { Button, Form, Input, theme } from "antd";
import Typography from "antd/es/typography/Typography";
import { useNavigate } from "react-router-dom";

export default function UseParamsPractice() {
	const { token } = theme.useToken();
	const navigate = useNavigate();

	const formStyle = {
		maxWidth: 400,
		margin: "auto",
		background: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		padding: "20px 0px 1px 0px",
	};

	function onFinish(values) {
		navigate(`/${values.userid}/${values.postid}`);
	}

	/*
    Работа с формой:

    labelCol: определяет, насколько широкой будет колонка, содержащая метки (label). Параметр span указывает количество колонок, которые будет занимать метка в сетке, состоящей из 24 колонок.

    wrapperCol: определяет, насколько широкой будет колонка, содержащая элементы ввода (обёртка, wrapper). Параметр span указывает количество колонок, которые будет занимать обёртка в сетке, состоящей из 24 колонок.*/

	return (
		<>
			<Typography.Title level={3}>
				Пример (/:userid/:postid)
			</Typography.Title>
			<Form
				style={formStyle}
				name="basic"
				labelCol={{
					span: 6,
				}}
				wrapperCol={{
					span: 18,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
			>
				<Form.Item
					style={{ display: "flex", justifyContent: "center" }}
					label="UserId"
					name="userid"
					rules={[
						{
							required: true,
							message: "Please input userid!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					style={{ display: "flex", justifyContent: "center" }}
					label="PostId"
					name="postid"
					rules={[
						{
							required: true,
							message: "Please input postid!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					style={{ display: "flex", justifyContent: "center" }}
				>
					<Button type="primary" htmlType="submit">
						Перейти
					</Button>
				</Form.Item>
			</Form>
		</>
	);
}
