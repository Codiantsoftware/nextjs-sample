"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
/**
 * A provider component that wraps the entire application with a Redux store.
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 * @returns {JSX.Element} The ReduxProvider component.
 */
persistStore(store);
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  return <Provider store={store}>{children}</Provider>;
}
