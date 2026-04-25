import React from 'react';
import logo from '../assets/Logo.svg';
export default function App() {
  return (
    

<footer class="bg-white rounded-lg shadow dark:bg-richblack-900 mt-20 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-12" alt="Flowbite Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                    <a href="/" class="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                </li>
                
                <li>
                    <a href="/contact" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">Elderly Ways</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
}