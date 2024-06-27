import APIrequest from "../../axios";
import { UserProfile } from "../../../api/index";

/**
 * Represents the body data required for updating a user's profile.
 * @typedef {Object} UpdateProfileData
 * @property {string} email - The user's email.
 * @property {string} phoneNumber - The user's phone number.
 * @property {string} name - The user's name.
 * @property {string} userName - The user's username.
 */
interface updateProfile {
  email: string;
  phoneNumber: string;
  name: string;
  userName: string;
}

/**
 * Object containing functions for user profile operations.
 * @namespace
 */
export const userProfile = {
  /**
   * Function to update a user's profile.
   * @async
   * @function
   * @param {UpdateProfileData} bodyData - The body data for updating the user's profile.
   * @returns {Promise<any>} - A promise that resolves with the response data.
   * @throws {Error} - If an error occurs during the profile update process.
   */
  userUpdateProfile: async (bodyData: updateProfile, id: number) => {
    try {
      const payload = {
        ...UserProfile.userUpdateProfile(id),
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      throw error;
    }
  },
};
