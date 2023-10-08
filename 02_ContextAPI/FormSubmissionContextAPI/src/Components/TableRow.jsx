import React from "react";
import { useList } from "../context";

export default function TableRow({ itemL }) {
  const { deleteMessage } = useList();
  console.log(itemL);

  const deleteMSG = (ObjId) => {
    console.log(ObjId);
    deleteMessage(ObjId);
  };

  return (
    <>
      <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full"
                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                width="40"
                height="40"
                alt="Alex Shatov"
              />
            </div>
            <div className="font-medium text-gray-800">
              {itemL.FirstName} {itemL.LastName}
            </div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">{itemL.Email}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">
            {itemL.Phone}
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center">{itemL.Message}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <button
            onClick={() => deleteMSG(itemL.id)}
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
