import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiLogOut, FiEdit2 } from "react-icons/fi";

import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import coverImg from "../../../assets/images/cover.jpg";

const Profile = () => {
  const { user, logOut, updateUserProfile } = useAuth();
  const [role, isRoleLoading] = useRole();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const defaultValues = useMemo(
    () => ({
      displayName: user?.displayName || "",
      photoURL: user?.photoURL || "",
    }),
    [user]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Signed out successfully!");
    } catch (err) {
      toast.error(err?.message || "Failed to sign out.");
    }
  };

  const openEdit = () => {
    reset(defaultValues);
    setIsEditOpen(true);
  };

  const closeEdit = () => setIsEditOpen(false);

  const onSubmit = async (data) => {
    const name = data.displayName?.trim();
    const photo = data.photoURL?.trim();

    // Basic guard
    if (!name) return toast.error("Name is required.");
    if (!photo) return toast.error("Photo URL is required.");

    try {
      setIsUpdating(true);

      // ✅ Update firebase profile
      await updateUserProfile(name, photo);

      toast.success("Profile updated successfully!");
      setIsEditOpen(false);

      // Note: user object might not instantly refresh in UI depending on your AuthProvider.
      // If needed, you can re-fetch user in AuthProvider (common pattern).
    } catch (err) {
      toast.error(err?.message || "Failed to update profile.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (isRoleLoading) return <LoadingSpinner />;

  console.log(role);

  return (
    <section className="w-full bg-base-100">
      {/* Consistent spacing wrapper */}
      <div className="container mx-auto px-6 md:px-12 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Left: Profile card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm overflow-hidden">
              {/* Cover */}
              <div className="relative h-36 md:h-40 w-full">
                <img
                  src={coverImg}
                  alt="Cover"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Avatar + basic info */}
              <div className="p-6 -mt-10">
                <div className="flex items-end justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-20 rounded-full ring-4 ring-base-100">
                        <img
                          src={user?.photoURL || "https://i.ibb.co/2kR8p3q/user.png"}
                          alt="User"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <p className="text-xl font-extrabold leading-tight line-clamp-1">
                        {user?.displayName || "Unnamed User"}
                      </p>
                      <p className="text-sm text-base-content/70 line-clamp-1">
                        {user?.email || "No email found"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl bg-base-200 p-4">
                    <p className="text-xs text-base-content/60">User ID</p>
                    <p className="mt-1 font-semibold break-all">{user?.uid}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={openEdit}
                      className="btn btn-primary w-full sm:w-auto flex-1"
                      type="button"
                    >
                      <FiEdit2 /> Edit Profile
                    </button>

                    <button
                      onClick={handleLogOut}
                      className="btn btn-outline btn-primary w-full sm:w-auto flex-1"
                      type="button"
                    >
                      <FiLogOut /> Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details / Guidelines / Quick info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-6 md:p-7">
              <h2 className="text-xl md:text-2xl font-extrabold">
                Profile Overview
              </h2>
              <p className="mt-2 text-sm text-base-content/70">
                Manage your basic account information. Keep your name and photo
                up to date for a better dashboard experience.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                  <p className="text-xs text-base-content/60">Full Name</p>
                  <p className="mt-1 font-semibold line-clamp-1">
                    {user?.displayName || "—"}
                  </p>
                </div>

                <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                  <p className="text-xs text-base-content/60">Email Address</p>
                  <p className="mt-1 font-semibold line-clamp-1">
                    {user?.email || "—"}
                  </p>
                </div>

                <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                  <p className="text-xs text-base-content/60">Role</p>
                  <p className="mt-1 font-semibold capitalize">{role || "—"}</p>
                </div>

                <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                  <p className="text-xs text-base-content/60">Profile Photo</p>
                  <a
                    className="mt-1 font-semibold text-primary underline break-all"
                    href={user?.photoURL || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user?.photoURL ? "Open Photo URL" : "—"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {isEditOpen && (
          <dialog open className="modal">
            <div className="modal-box w-11/12 max-w-lg rounded-2xl border border-base-300">
              <h3 className="text-xl font-extrabold">Update Profile</h3>
              <p className="mt-2 text-sm text-base-content/70">
                Update your name and profile photo URL.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-4">
                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>
                  <input
                    type="text"
                    className={`input input-bordered w-full ${
                      errors.displayName ? "input-error" : ""
                    }`}
                    placeholder="Enter your full name"
                    {...register("displayName", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Minimum 2 characters" },
                    })}
                  />
                  {errors.displayName && (
                    <p className="mt-1 text-sm text-error">
                      {errors.displayName.message}
                    </p>
                  )}
                </div>

                {/* Photo URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    className={`input input-bordered w-full ${
                      errors.photoURL ? "input-error" : ""
                    }`}
                    placeholder="https://example.com/photo.jpg"
                    {...register("photoURL", {
                      required: "Photo URL is required",
                      pattern: {
                        value: /^https?:\/\/.+/i,
                        message: "Please provide a valid URL",
                      },
                    })}
                  />
                  {errors.photoURL && (
                    <p className="mt-1 text-sm text-error">
                      {errors.photoURL.message}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="modal-action flex gap-3">
                  <button
                    type="button"
                    onClick={closeEdit}
                    className="btn btn-ghost border border-base-300"
                    disabled={isUpdating}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isUpdating}
                  >
                    {isUpdating ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </form>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button onClick={closeEdit}>close</button>
            </form>
          </dialog>
        )}
      </div>
    </section>
  );
};

export default Profile;