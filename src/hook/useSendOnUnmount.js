import { useEffect } from "react";

const useSendOnUnmount = (sendDataFunction, data) => {
	useEffect(() => {
		return () => {
			sendDataFunction(data, (data) => {
				console.log(data);
			});
		};
	}, []);
};

export default useSendOnUnmount;
