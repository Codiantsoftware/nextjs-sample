"use client";
import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T);

/**
 * Hook for interacting with local storage and managing state.
 * @template T - The type of data to be stored in local storage.
 * @param {string} key - The key under which the data is stored in local storage.
 * @param {T} initialValue - The initial value for the data, if not found in local storage.
 * @returns {[T, (value: T | ((val: T) => T)) => void]} - A tuple containing the current value and a function to update it.
 */
function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: SetValue<T>) => void] {
  // State to store our value
  // Pass  initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      if (typeof window !== "undefined") {
        // browser code
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;
      // Save state
      if (typeof window !== "undefined") {
        // browser code
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
