import MountComponent from './src/MountComponent';
import 'react-native-url-polyfill/auto';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './src/APIs/store/store';

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default function App() {
	return (
		<MountComponent />
	);
}
