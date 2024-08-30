import UseCallbackPractice from "../components/hookComponents/useCallbackList/practice";
import UseCallbackTheory from "../components/hookComponents/useCallbackList/theory";
import UseContextPractice from "../components/hookComponents/useContextList/practice";
import UseContextTheory from "../components/hookComponents/useContextList/theory";
import UseEffectPractice from "../components/hookComponents/useEffectList/practice";
import UseEffectTheory from "../components/hookComponents/useEffectList/theory";
import UseLayoutEffectPractice from "../components/hookComponents/useLayoutEffectList/practice";
import UseLayoutEffectTheory from "../components/hookComponents/useLayoutEffectList/theory";
import UseLocationPractice from "../components/hookComponents/useLocationList/practice";
import UseLocationTheory from "../components/hookComponents/useLocationList/theory";
import UseMemoPractice from "../components/hookComponents/useMemoList/practice";
import UseMemoTheory from "../components/hookComponents/useMemoList/theory";
import UseNavigatePractice from "../components/hookComponents/useNavigateList/practice";
import UseNavigateTheory from "../components/hookComponents/useNavigateList/theory";
import UseParamsPractice from "../components/hookComponents/useParamsList/practice";
import UseParamsTheory from "../components/hookComponents/useParamsList/theory";
import UseReducerPractice from "../components/hookComponents/useReducerList/practice";
import UseReducerTheory from "../components/hookComponents/useReducerList/theory";
import UseRefPractice from "../components/hookComponents/useRefList/practice";
import UseRefTheory from "../components/hookComponents/useRefList/theory";
import UseStatePractice from "../components/hookComponents/useStateList/practice";
import UseStateTheory from "../components/hookComponents/useStateList/theory";
import ErrorContent from "../pages/ErrorContent";

export function CreateContentHookTheory({ params }) {
	switch (params) {
		case "useState":
			return (
				<>
					<UseStateTheory />
				</>
			);
		case "useEffect":
			return (
				<>
					<UseEffectTheory />
				</>
			);
		case "useLayoutEffect":
			return (
				<>
					<UseLayoutEffectTheory />
				</>
			);
		case "useContext":
			return (
				<>
					<UseContextTheory />
				</>
			);
		case "useReducer":
			return (
				<>
					<UseReducerTheory />
				</>
			);
		case "useCallback":
			return (
				<>
					<UseCallbackTheory />
				</>
			);
		case "useMemo":
			return (
				<>
					<UseMemoTheory />
				</>
			);
		case "useRef":
			return (
				<>
					<UseRefTheory />
				</>
			);
		case "useNavigate":
			return (
				<>
					<UseNavigateTheory />
				</>
			);
		case "useLocation":
			return (
				<>
					<UseLocationTheory />
				</>
			);
		case "useParams":
			return (
				<>
					<UseParamsTheory />
				</>
			);
		default:
			return (
				<>
					<ErrorContent />
				</>
			);
	}
}

export function CreateContentHookPractice({ params }) {
	switch (params) {
		case "useState":
			return (
				<>
					<UseStatePractice />
				</>
			);
		case "useEffect":
			return (
				<>
					<UseEffectPractice />
				</>
			);
		case "useLayoutEffect":
			return (
				<>
					<UseLayoutEffectPractice />
				</>
			);
		case "useContext":
			return (
				<>
					<UseContextPractice />
				</>
			);
		case "useReducer":
			return (
				<>
					<UseReducerPractice />
				</>
			);
		case "useCallback":
			return (
				<>
					<UseCallbackPractice />
				</>
			);
		case "useMemo":
			return (
				<>
					<UseMemoPractice />
				</>
			);
		case "useRef":
			return (
				<>
					<UseRefPractice />
				</>
			);
		case "useNavigate":
			return (
				<>
					<UseNavigatePractice />
				</>
			);
		case "useLocation":
			return (
				<>
					<UseLocationPractice />
				</>
			);
		case "useParams":
			return (
				<>
					<UseParamsPractice />
				</>
			);
		default:
			return (
				<>
					<ErrorContent />
				</>
			);
	}
}
