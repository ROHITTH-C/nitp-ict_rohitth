import React from "react";
import { Megaphone, GalleryHorizontal } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const sidebarItems = [
    {
      name: "Announcement",
      icon: <Megaphone size={20} className="text-sky-500" />,
      link: "/admin",
    },
    {
      name: "Gallery & Videos",
      icon: <GalleryHorizontal size={20} className="text-sky-500" />,
      link: "/admin/gallery&videos",
    },
  ];

  return (
    <aside className="w-64 h-screen bg-sky-50 p-4 border-l border-sky-200 sticky top-0">
      <h2 className="text-xl font-semibold text-sky-600 mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="flex items-center gap-3 text-sky-700 hover:bg-sky-100 p-2 rounded transition font-medium"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
