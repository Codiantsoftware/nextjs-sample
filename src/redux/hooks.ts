import { useDispatch, useSelector, useStore } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/**
 * Provides a typed version of the `useDispatch` hook for use throughout the application.
 * This custom hook ensures that the dispatch function is typed with the AppDispatch type.
 *
 * @returns {AppDispatch} The dispatch function for the Redux store.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Provides a typed version of the `useSelector` hook, specific to the RootState.
 * This custom hook ensures that selectors are typed with the RootState type,
 * making state selection type-safe.
 *
 * @type {TypedUseSelectorHook<RootState>}
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Provides a typed version of the `useStore` hook for use throughout the application.
 * This custom hook returns the Redux store typed as AppStore, providing access to
 * the store's state, dispatch, and other functionalities with correct typings.
 *
 * @returns {AppStore} The Redux store.
 */
// export const useAppStore: () => AppStore = useStore;
