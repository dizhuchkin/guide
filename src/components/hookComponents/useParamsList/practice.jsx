import { Button, Form, Input, theme, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

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
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Пример (/:userid/:postid)">
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
			</Card>

			<Card title="Код">
				<pre style={codeStyle}>{`
const { idUser, idPost } = useParams();
function onFinish(values) {
	navigate('/${"values.userid"}/${"values.postid"}');
}

<---------------------------------------------------->

<InputNumber
	disabled
	value={idUser}
	style={{ width: "200px", marginRight: "20px" }}
/>
<InputNumber
	disabled
	value={idPost}
	style={{ width: "200px", marginRight: "20px" }}
/>
	`}</pre>
			</Card>
		</Space>
	);
}
