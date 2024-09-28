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
         <div className='my-10 flex justify-center'>
         <table className='table-auto w-[80%] text-left border-collapse'>
           <thead>
             <tr className="bg-gray-200">
               <th className='px-4 py-2 text-xl border-b border-gray-400'>Company</th>
               <th className='px-4 py-2 text-xl border-b border-gray-400'>Prep</th>
               <th className='px-4 py-2 text-xl border-b border-gray-400'>Summary</th>
               <th className='px-4 py-2 text-xl border-b border-gray-400'>PDF</th>
             </tr>
           </thead>
              <tbody >
            <tr>
              <td className='px-4 py-2 align-top border-b border-gray-300'>Jaguar Land Rover</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>High</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>
                  Propose a strategy to adopt chiplet technology in cars by analyzing where chiplets will add the most value and designing a micro-architecture for optimal throughput.
                  <br />Domain: Automotive Semiconductors & System-on-Chip (SoC) Architecture
                </td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>
                  <a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507304/HP_JLR_snous7.pdf" target='_blank'>Download PDF</a>
                </td>
            </tr>
            <tr>
                <td className='px-4 py-2 align-top border-b border-gray-300'>MPHASIS foundation</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Mid</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Identify optimal flight alternatives for passengers affected by schedule changes, ensuring rule compliance and ranking based on factors like time, ancillary services, and passenger priority.
                  <br />Operations Research, Airline Industry
                </td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507090/MP_Mphasis_grxq8t.pdf" target="_blank">Download PDF</a></td>
            </tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>Solinas</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Low</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>A team needs to design a retractable and extendable shaft that can reach a depth of 5 meters for waste homogenization, while being lightweight, portable, and suitable for underwater use.
                  <br />Domain: Mechanical Engineering, Product Design
                </td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507090/LP_Solinas_ewk3g1.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>Zelta Labs</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Mid</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Create and backtest algorithmic trading strategies for the BTC/USDT cryptocurrency market, focusing on maximizing returns while managing risk effectively.
                  <br />Domain: Algorithmic Trading & Cryptocurrency
                </td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507091/MP_Zelta_ax5vmi.pdf" target='_blank'>Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>Adobe</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Mid</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>The task is to simulate user behavior and content to help marketers estimate social media engagement and create content that drives desired KPIs like likes, comments, and purchases. <br />
                Domain: Marketing Analytics, AI Simulation</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507090/MP_Adobe_n32stc.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>Aptos</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Mid</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>The task involves building decentralized apps on Aptos blockchain, with options like MetaMask Snap integration, decentralized futures trading, on-chain Wordle/Qwordle, or a decentralized radio protocol, using Aptos' unique features for scalability and user experience. <br />
                Domain: Blockchain Development, Web3</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507090/MP_Aptos_l0q8fm.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>Ministry of Panchayati Raj</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Low</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'> Create a SIMCITY/Farmville-style game where users plan village development using real GIS data and budgets, optimizing resource allocation for infrastructure like roads, sanitation, schools, and utilities while maintaining citizen morale through strategic placement of assets. <br />
                Domain: Game Development, Urban Planning</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507089/LP_Min_oc9jgm.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>DevRev</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>High</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Create a solution where a language model selects and sequences tools to answer a domain-specific conversational query, including specifying tool arguments and executing tasks.
                  <br />
                  Domain: AI-Assisted Question Answering & Natural Language Processing.</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507087/HP_DevRev_abe30v.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>India Game Developer Conference</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Low</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Design a game that incorporates specific themes (e.g., breakable objects, puzzles) with a scoring mechanism and local leaderboard, and submit it with a brief presentation.
                  <br />Domain: Game Design & Development​
                </td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507088/LP_IGDC_ft6uvq.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>WorldQuant Brain</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>High</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Develop "alpha" models using historical market data to predict future financial instrument prices in a competition focused on quantitative research and analysis. <br />
                Domain: Quantitative Finance & Algorithmic Trading</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507088/HP_WQ_hckc33.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>Trumio</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>High</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Trumio seeks teams to ideate, develop, and plan go-to-market strategies for standalone mobile/web apps that drive alumni engagement, enhance student upskilling with AI tools, and ensure quality delivery of student projects to clients. <br />
                Domain: Software Development, AI Integration</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507087/HP_High_Trumio_kn8vzm.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>CERTN</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>Low</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'>This involves designing tools to enhance cybersecurity audit quality, reducing application vulnerabilities, and developing features to detect and respond to cyber-attacks effectively.
                  <br />Domain: Cybersecurity, Software Development
                </td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507087/LP_CERT_wyseya.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>Engineer's Conclave</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'></td>
                <td className='px-4 py-2 align-top border-b border-gray-300'></td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507104/EC_vpi1qu.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>Student's Academic Conference</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'></td>
                <td className='px-4 py-2 align-top border-b border-gray-300'></td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507095/SAC_po5qzq.pdf" target="_blank">Download PDF</a></td></tr>
                <tr><td className='px-4 py-2 align-top border-b border-gray-300'>Math Bowl</td>
                <td className='px-4 py-2 align-top border-b border-gray-300'></td>
                <td className='px-4 py-2 align-top border-b border-gray-300'></td>
                <td className='px-4 py-2 align-top border-b border-gray-300'><a href="https://res.cloudinary.com/digwr518o/image/upload/v1727507091/No_CMI_qrqufi.pdf" target="_blank">Download PDF</a></td></tr>
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

