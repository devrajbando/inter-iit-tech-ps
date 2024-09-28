import { useState } from 'react'

import React from 'react';
import './App.css'

function App() {
  
  const [subPage, setSubPage] = useState(1);
  return (
    <>
    <h1 className='text-white'>INTER IIT TECH MEET - PAST PROBLEM STATEMENTS</h1>
    <div className='border-white border-2 rounded-3xl border-collapse w-full md:w-2/5'>
          <ul className='flex flex-wrap p-2 w-full'>
            <li className={`px-4 py-1 font-bold text-lg md:text-xl text-white text-center ${subPage === 1 ? 'bg-[#F9538B]' : ''} rounded-3xl w-full md:w-1/3 `}>
              <button onClick={() => setSubPage(1)}>Competitions</button>
            </li>
            <li className={`px-4 py-1 font-bold text-lg md:text-xl text-white text-center ${subPage === 2 ? 'bg-[#F9538B]' : ''} rounded-3xl w-full md:w-1/3 `}>
              <button onClick={() => setSubPage(2)}>Workshops</button>
            </li>
            
          </ul>
        </div>

        {subPage === 1 && (
          <div className='my-10'>
            <h2>2023(12.0)</h2>
            <table>
              <thead className='w:[50%]'>
                <tr>

                <th className='px-5'>Problem statement/Domain</th>
                <th>Download Link</th>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
              </tbody>

            </table>
          </div>
        )}

        {subPage === 2 && (
          <div className='my-10'>
          <h2>2023(12.0)</h2>
          <table>
            <thead className='w:[50%]'>
              <tr>

              <th className='px-5'>Problem statement/Domain</th>
              <th>Download Link</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </tbody>

          </table>
        </div>
        )}
    </>
  )
}

export default App
