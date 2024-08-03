import { Button, Skeleton, Divider, Input, Typography } from "antd";
import moment from "moment";
const { TextArea } = Input;

export default function NoteForm({
	selected,
	textNewTodo,
	setTextNewTodo,
	nameNewTodo,
	setNameNewTodo,
	newTodo,
	modify,
	selectedTodoUser,
	loadingFetch,
}) {
	const date = moment(selectedTodoUser.createdAt).format(
		"YYYY-MM-DD HH:mm:ss"
	);

	return (
		<>
			{loadingFetch ? (
				<Skeleton active />
			) : (
				<>
					<Typography.Title level={5}>
						Создана: {date}
					</Typography.Title>
					<TextArea
						style={{ marginBottom: 10 }}
						placeholder="Имя заметки"
						autoSize
						value={nameNewTodo}
						disabled={!selected}
						onChange={(e) => setNameNewTodo(e.target.value)}
					/>
					<TextArea
						style={{ marginBottom: 10 }}
						placeholder="Текст заметки"
						autoSize
						value={textNewTodo}
						onChange={(e) => setTextNewTodo(e.target.value)}
					/>
					<Button
						onClick={selected ? () => newTodo() : () => modify()}
						type="primary"
					>
						{selected ? "Новая заметка" : "Редактировать"}
					</Button>
					<Divider />
					{selectedTodoUser.complete ? (
						<Typography.Text
							style={{ fontSize: 20 }}
							type="success"
							strong
						>
							Выполнено
						</Typography.Text>
					) : (
						<Typography.Text
							style={{ fontSize: 20 }}
							type="danger"
							strong
						>
							Не выполнено
						</Typography.Text>
					)}
				</>
			)}
		</>
	);
}
