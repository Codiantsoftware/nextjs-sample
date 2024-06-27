/**
 * Represents a product.
 * @typedef {Object} Product
 * @property {string} image - The URL or path to the image of the product.
 * @property {string} name - The name of the product.
 * @property {string} category - The category to which the product belongs.
 * @property {number} price - The price of the product.
 * @property {number} sold - The quantity of the product sold.
 * @property {number} profit - The profit generated from the product.
 */
export type Product = {
  image: string;
  name: string;
  category: string;
  price: number;
  sold: number;
  profit: number;
};
