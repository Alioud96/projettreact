import React from 'react';

import { FaCirclePlus } from "react-icons/fa6";
import { Nav } from '../../components/Nav';

import { FaRegCircleUser } from "react-icons/fa6";


export const MesPatients = () => {
  return (
    <div>
      <Nav />
      
      <div className='flex justify-between items-center p-7'>
     <h2 className='text-3xl text-[#00aeb0] font-bold text-center'>Mes Rendez-Vous</h2>
     <FaCirclePlus className='text-3xl text-[#00aeb0] font-bold'/>
     </div>
      <div className="p-10">
        <table class="min-w-full bg-white">
            <thead class="bg-[#00aeb0] text-white">
                <tr>
                    <th class="w-1/3 px-4 py-2">Prénom</th>
                    <th class="w-1/3 px-4 py-2">Nom</th>
                    <th class="w-1/3 px-4 py-2">Profil</th>
                </tr>
            </thead>
            <tbody class="text-gray-700">
                 
                <tr>
                    <td class="border px-4 py-2">   <span><FaRegCircleUser className='text-3xl text-[#00aeb0]'/></span>Seydina </td>
                    <td class="border px-4 py-2">Diouf</td>
                    <button className="bg-[#00aeb0] w-20 rounded-lg p-4 mt-7 mb-3 ml-7 text-white">voir</button>
                   
                </tr>
                <tr class="bg-gray-100">
                    <td class="border px-4 py-2">   <span><FaRegCircleUser className='text-3xl text-[#00aeb0]'/></span>Idrissa </td>
                    <td class="border px-4 py-2">Diouf</td>
                 <button className="bg-[#00aeb0] w-20 rounded-lg p-4 mt-7 mb-3 ml-7 text-white">voir</button>
                   
                 
                </tr>
                <tr class="bg-gray-100">
                    <td class="border px-4 py-2">   <span><FaRegCircleUser className='text-3xl text-[#00aeb0]'/></span> Ramatoulaye </td>
                    <td class="border px-4 py-2">Diouf</td>
                    <button className="bg-[#00aeb0] w-20 rounded-lg p-4 mt-7 mb-3 ml-7 text-white">voir</button>
                   
                 
                </tr>
                <tr class="bg-gray-100">
                    <td class="border px-4 py-2">   <span><FaRegCircleUser className='text-3xl text-[#00aeb0]'/></span>Mohamed Rassou </td>
                    <td class="border px-4 py-2">Diouf</td>
                    <button className="bg-[#0d1313] w-20 rounded-lg p-4 mt-7 mb-3 ml-7 text-white">voir</button>
                   
                 
                </tr>
                <tr class="bg-gray-100">
                    <td class="border px-4 py-2">   <span><FaRegCircleUser className='text-3xl text-[#00aeb0]'/></span> Aminata </td>
                    <td class="border px-4 py-2">Diallo</td>
                    <button className="bg-[#00aeb0] w-20 rounded-lg p-4 mt-7 mb-3 ml-7 text-white">voir</button>
                   
                 
                </tr>
               
            </tbody>
        </table>
    </div>
    
</div>
  )
    
  
}


export default MesPatients

