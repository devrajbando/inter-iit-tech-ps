import { useState } from 'react'

import React from 'react';
import './App.css'

function App() {
  
  const [subPage, setSubPage] = useState(1);
  return (
    <>
    <h1 className='text-white text-center font-bold text-2xl py-10'>INTER IIT TECH MEET - PAST PROBLEM STATEMENTS</h1>
    <div className=' w-full md:w-2/5 mx-auto'>
          <ul className='flex flex-wrap p-2 w-full'>
            <li className={`px-4 py-1 font-bold text-lg md:text-xl text-white text-center ${subPage === 1 ? 'bg-[#F9538B]' : ''} rounded-3xl w-full md:w-1/2 `}>
              <button onClick={() => setSubPage(1)}>2023(12.0)</button>
            </li>
            <li className={`px-4 py-1 font-bold text-lg md:text-xl text-white text-center ${subPage === 2 ? 'bg-[#F9538B]' : ''} rounded-3xl w-full md:w-1/2 `}>
              <button onClick={() => setSubPage(2)}>2022(11.0)</button>
            </li>
            
          </ul>
        </div>

        {subPage === 1 && (
          <div className='my-10'>
            
            <table className='mx-auto'>
              <thead >
                <tr>

                <th className='px-36 text-xl '>Company</th>
                <th className='text-xl'>Problem Statement</th>
                </tr>
              </thead>
              <tbody >
                <tr><td>Jaguar Land Rover</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507304/HP_JLR_snous7.pdf" target='_blank'>Download PDF</a></td></tr>
                <tr><td>Engineer's Conclave(G20)</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507104/EC_vpi1qu.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>Student's Academic Conference</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507095/SAC_po5qzq.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>Math Bowl</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507091/No_CMI_qrqufi.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>MPHASIS foundation</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507090/MP_Mphasis_grxq8t.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>Solinas</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507090/LP_Solinas_ewk3g1.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>Zelta Labs</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507091/MP_Zelta_ax5vmi.pdf" target='_blank'>Download PDF</a></td></tr>
                <tr><td>Adobe</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507090/MP_Adobe_n32stc.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>Aptos</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507090/MP_Aptos_l0q8fm.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>Ministry of Panchayati Raj</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507089/LP_Min_oc9jgm.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>DevRev</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507087/HP_DevRev_abe30v.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>India Game Developer Conference</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507088/LP_IGDC_ft6uvq.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>WorldQuant Brain</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507088/HP_WQ_hckc33.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>Trumio</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507087/HP_High_Trumio_kn8vzm.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td>CERTN</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507087/LP_CERT_wyseya.pdf" target="_blank">Download PDF</a></td></tr>
              </tbody>

            </table>
          </div>
        )}

        {subPage === 2 && (
          <div className='my-10'>
          
          <table className='mx-auto'>
            <thead>
              <tr>

              <th className='px-36 text-xl'>Company</th>
              <th className='text-xl'>Problem Statement</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Jaguar Land Rover</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727514158/2022/JAGUAR_LANDROVER_m123nt.pdf" target='_blank'>Download PDF</a></td></tr>
              <tr><td>Quant Insti</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727514158/2022/QUANT_INSTI_rihqna.pdf" target='_blank'>Download PDF</a></td></tr>
              <tr><td>ISRO</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727514157/2022/ISRO_bbcg5n.pdf" target='_blank'>Download PDF</a></td></tr>
              <tr><td>Grow Simplee</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727514157/2022/GROW_SIMPLEE_lpxf6e.pdf" target='_blank'>Download PDF</a></td></tr>
              <tr><td>DevRev</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727514157/2022/DEV_REV_m4bl0f.pdf" target='_blank'>Download PDF</a></td></tr>
              <tr><td>gradCapital</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727514157/2022/GRADE_CAPITAL_k4ae08.pdf" target='_blank'>Download PDF</a></td></tr>
              <tr><td>Cloudphysician</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727514156/2022/CLOUDPHYSICIAN_ndcmuk.pdf" target='_blank'>Download PDF</a></td></tr>
              <tr><td>Drona Aviation</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727514156/2022/DRONA_AVIATION_fcpwxb.pdf" target='_blank'>Download PDF</a></td></tr>
              <tr><td>consensys</td><td><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727514156/2022/CONSENSYS_afhlxc.pdf" target='_blank'>Download PDF</a></td></tr>
            </tbody>

          </table>
        </div>
        )}
    </>
  )
}

export default App
