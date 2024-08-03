export function getWordAfterLatsSlash(path) {
	console.log(path);
	const parts = path.split("/");
	return parts[parts.length - 1]; // или можно вернуть пустую строку или другое значение по умолчанию
}
