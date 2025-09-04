"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call a sleeping bull? A bulldozer!"
  ]
  
  const getRandomJoke = () => {
    return jokes[Math.floor(Math.random() * jokes.length)]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        <h1 className="text-6xl font-bold text-red-900 mb-4">
          Good Morning!
        </h1>
        
        <p className="text-xl text-red-700 mb-8 leading-relaxed">
          Welcome to your morning dashboard! Start your day with a smile and 
          explore this beautiful application built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 backdrop-blur-sm border border-red-100 mb-8">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            ☀️ Have a Great Day
          </h2>
          <p className="text-red-600">
            Your morning application is ready! Click the button below to brighten 
            your day with a little humor.
          </p>
        </div>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => setIsOpen(true)}
            >
              😄 Tell me a joke!
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-red-800 text-xl">Morning Joke 😂</DialogTitle>
              <DialogDescription className="text-gray-600 text-base leading-relaxed pt-4">
                {getRandomJoke()}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center pt-4">
              <Button 
                onClick={() => setIsOpen(false)}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Thanks for the laugh! 😊
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}