import { useState } from "react";
import { updateProfile } from "../../../Function/userRouter";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

const EditForm = ({ Editform, data }) => {
  const [value, setValue] = useState({
    height: data.height || "",
    weight: data.weight || "",
  });

  const handleCancel = (e) => {
    e.preventDefault();
    Editform();
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to save the changes?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save it!',
    });

    if (result.isConfirmed) {
      try {
        const res = await updateProfile({
          height: value.height,
          weight: value.weight,
        });
        Editform();
        toast.success(res.data);
      } catch (error) {
        console.error("Error occurred while updating data", error);
        toast.error("Failed to update data");
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
                htmlFor="height"
              >
                Height (cm)
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="height"
                type="number"
                name="height"
                placeholder="Enter height"
                value={value.height}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="weight"
              >
                Weight (kg)
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="weight"
                type="number"
                name="weight"
                placeholder="Enter weight"
                value={value.weight}
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

export default EditForm;
