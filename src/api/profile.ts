/**
 * @interface UserProfileConfig
 * @property {string} url - The URL for updating the user profile.
 * @property {"PUT"} method - The HTTP method for the update operation, always "PUT".
 */
interface UserProfileConfig {
  url: string;
  method: "PUT";
}

const UserProfileConfigs = {
  /**
   * Configuration for updating user profile.
   * @param {string} id - The user ID.
   * @returns {UserProfileConfig} - The user profile configuration.
   */
  userUpdateProfile: (id :number) => ({
    url: `user/me/:${id}`,
    method: "PUT" as const,
  }),
};
export default UserProfileConfigs;
