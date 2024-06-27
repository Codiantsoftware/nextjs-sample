/**
 * Represents the properties for a card item.
 * @typedef {Object} CardItemProps
 * @property {string} [imageSrc] - The source URL or path for the main image.
 * @property {string} [name] - The name associated with the card item.
 * @property {string} [role] - The role or position associated with the card item.
 * @property {string} [cardImageSrc] - The source URL or path for the card image.
 * @property {string} [cardTitle] - The title of the card.
 * @property {string} [cardContent] - The content or description of the card.
 */
export type CardItemProps = {
  imageSrc?: string;
  name?: string;
  role?: string;
  cardImageSrc?: string;
  cardTitle?: string;
  cardContent?: string;
};
