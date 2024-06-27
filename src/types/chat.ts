/**
 * Represents a chat item.
 * @typedef {Object} Chat
 * @property {string} avatar - The URL or path to the avatar of the chat.
 * @property {string} name - The name associated with the chat.
 * @property {string} text - The text content of the chat.
 * @property {number} time - The timestamp or time associated with the chat.
 * @property {number} textCount - The count of text messages in the chat.
 * @property {number} dot - A numerical indicator associated with the chat.
 */
export type Chat = {
  avatar: string;
  name: string;
  text: string;
  time: number;
  textCount: number;
  dot: number;
};
