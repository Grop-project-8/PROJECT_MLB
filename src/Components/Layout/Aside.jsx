import React from 'react'

const Aside = () => {
  return (
    <div>
       <aside className="w-full bg-gray-100 p-4">
        <h3 className="text-lg font-semibold mb-4">หมวดหมู่</h3>
        <ul className="space-y-2">
          <li
            className="cursor-pointer text-blue-500"
          >
            ความปลอดภัย
          </li>
          <li
            className="cursor-pointer text-blue-500"
          >
            อัปเดตข้อมูล
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Aside
