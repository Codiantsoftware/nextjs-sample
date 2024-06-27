/**
 * @file This file contains the profile component, which displays user profile.
 * @module Profile
 */
"use client";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateProfileForm from "@/components/Form/User/UpdateProfileForm";
import { userProfile } from "@/services/User";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { auth } from "@/redux/features/AuthSlice/authSlice";

/**
 * Profile component for user profile page.
 * @component
 * @example
 */
const Profile: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.auth);

  const [name, setName] = useState("");
  /**
   * Handles form submission for updating user profile.
   * @param {Object} value - User profile data.
   * @param {string} value.name - User's name.
   * @param {string} value.email - User's email.
   * @param {string} value.userName - User's username.
   * @param {string} value.phoneNumber - User's phone number.
   */
  const onSubmit = async (value: {
    name: string;
    email: string;
    userName: string;
    phoneNumber: string;
    id?: number;
  }) => {
    try {
      const userId = userData?.userId || 1;
      // const token =
      // value.id = userId;
      const res = await userProfile.userUpdateProfile(value, userId);
      const { status, data, message } = res;
      const { name, email, userName, phoneNumber } = data;
      if (status) {
        const token = userData?.token || "";
        dispatch(auth({ userId, name, email, token, userName, phoneNumber }));
        router.push("/profile");
        toast.success(message);
        setName(name);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error("Some thing went wrong");
    }
  };

  useEffect(() => {
    if (!userData?.token) {
      router.push("/signin");
      return;
    }

    const storedName = userData?.name;
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <DefaultLayout>
        <div className="mx-auto max-w-242.5">
          <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="relative z-20 h-35 md:h-65">
              <Image
                src={"/images/cover/cover-01.png"}
                alt="profile cover"
                className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                width={970}
                height={260}
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
            <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
              <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                <div className="relative drop-shadow-2">
                  <Image
                    src={"/images/user/user-image.jpg"}
                    width={150}
                    height={150}
                    style={{
                      width: "auto",
                      height: "auto",
                      borderRadius: "50%",
                    }}
                    alt="profile"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                  {name || ""}
                </h3>
              </div>
            </div>

            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="p-7">
                  <UpdateProfileForm onSubmit={onSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Profile;
