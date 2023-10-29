"use client";
import axios from "axios";
import React, {useState,useRef,useEffect} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import Navbar from "../../components/Navbars";
import { useChat } from 'ai/react'

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const Completionist = () => <span>You are good to go!</span>;
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    
    const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: '',
          content:
            'Do not answer if the topic is not related to ganga. You are a digital human name Chacha Chaudhary And you help indian government to create awarness about ganga river and you are also a brand ambassador of ganga river. Your Native Language is Hindi and you can speak English also. If Someone Ask you about ganga river you can answer them. But if someone ask you about something else you can not answer them And Sorry I am not able to answer this.',
          role: 'system'
        }
      ],
      api: '/api/chat'
    });


    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }
    const getUserDetails1 = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data.username)
    }
    
    
    return (
        <div>
            <Navbar />
            <audio src="audio.mp3">Audi</audio>
            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">GangaEcoWarriors™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://www.facebook.com/chahachaudhary.tech" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ganga_eco_warriors/?utm_source=qr" className="mr-4 hover:underline md:mr-6">Instagram</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCj5WO9aIrSgNm5PdWWCfAcQ" className="mr-4 hover:underline md:mr-6">Youtube</a>
                </li>
                <li>
                    <a href="https://x.com/eco_ganga5012?t=eZdH7yIfVnFOlHYFH81xgA&s=08" className="hover:underline">Twitter</a>
                </li>
            </ul>
            </div>
        </footer>
            </div>
            
    )
}