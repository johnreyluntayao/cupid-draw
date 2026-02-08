import { Gift, Heart, Sparkles, Users, Infinity } from '@/lib/icon'
import React from 'react'
import Chip from '../atoms/Chip'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'

const Homepage = () => {
  return (
    <div className="min-h-screen overflow-hidden relative px-6 lg:px-8 py-12 md:py-16 lg:py-20">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT COLUMN – Text, description, badges, buttons */}
        <div className="text-left space-y-8 lg:space-y-10">
          {/* Small tag */}
          <Chip leftIcon={<Sparkles className="h-5 w-5 text-pink-500 animate-pulse" />}
            rightIcon={<Heart className="h-5 w-5 text-pink-500" />}
            text="Valentine's Day Magic"
            backgroundColor='bg-pink-200' />

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-rose-600 leading-tight">
            Secret Valentine 
            <br className="block"/>
            <span className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
              Draw
            </span>
            <span className="ml-2 inline-block animate-pulse">♡</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-rose-700/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Like Monito Monita but made for Valentine's Day — create anonymous gift exchanges with friends, office teammates, or family. No self-draws. Completely free. No sign-up required.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-start md:gap-5 gap-8">
            <div className="flex items-center gap-3 px-6 py-3">
              <span className="text-2xl font-bold text-rose-600">100%</span>
              <span className="text-rose-700 font-medium">Anonymous & Private</span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3">
              <Infinity className="h-7 w-7 text-pink-500" />
              <span className="text-rose-700 font-medium">Free Forever</span>
            </div>
          </div>

          {/* CTA Buttons – side by side */}
          <div className="flex flex-col lg:flex-row md:gap-5 gap-6 justify-center lg:justify-start pt-4">

            <Button text="Start a New Exchange"
              leftIcon={<Sparkles className="h-5 w-5 mr-2" />}
              textColor="text-white"
              isRounded={true}
              backgroundColor="bg-pink-600" />

            <Button text="Join an Exchange"
              textColor="text-pink-600"
              isRounded={true}
              backgroundColor="bg-white border border-4 border-pink-600" />

          </div>
        </div>

        {/* RIGHT COLUMN – Visual / illustration area */}
        <div
          className="bg-rose-200 w-full h-[340px] md:h-[380px] lg:h-[400px] rounded-2xl justify-center items-center flex flex-col">
          <div className="flex lg-gap-10 md:gap-12 gap-16">
            <Icon icon={<Heart />} backgroundColor='bg-rose-300/70' iconColor='text-pink-500' />
            <Icon icon={<Gift />} backgroundColor='bg-rose-300/70' iconColor='text-pink-500' />
            <Icon icon={<Users />} backgroundColor='bg-rose-300/70' iconColor='text-pink-500' />

          </div>

          <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-pink-500/50 mt-4 md:mt-6 lg:mt-8">
            Ready to spread the love?
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Homepage