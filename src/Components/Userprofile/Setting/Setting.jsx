import { useState } from "react";
import { toast } from "react-toastify";
import { updatePassword } from "../../../Function/userRouter";

const SetForm = ({ setform }) => {
  
  const [value, setValue] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setform();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to save the changes?")) {
      if (value.newPassword !== value.confirmPassword) {
        toast.error("Password does not match");
      } else {
        try {
            const res = await updatePassword({
            oldPassword: value.oldPassword,
            newPassword: value.newPassword,
          })
          setform();
          toast.success(res.data.message);
        } catch (error) {
          console.error("Failed to update password", error);
          toast.error("Failed to update password");
        }
      }
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-10">
        <div className="bg-white p-8 rounded shadow-2xl">
          <form className="w-64">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="oldpassword"
              >
                Old Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="oldpassword"
                name="oldPassword"
                type="password"
                placeholder="Old Password"
                value={value.oldPassword}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="newpassword"
              >
                New password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="newPassword"
                type="password"
                placeholder="New password"
                value={value.newPassword}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmpassword"
              >
                Confirm password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={value.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-myGreen hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetForm;
