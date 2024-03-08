"use client";

import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  PencilSquareIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-auto bg-slate-900 h-16 flex items-center justify-center align-middle rounded-3xl p-4">
      <ul className="flex justify-center space-x-4 p-2">
        <li>
          <Link
            href="/"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <HomeIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link
            href="/create"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <PencilSquareIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link
            href="/ideas"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <LightBulbIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <UserIcon className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
