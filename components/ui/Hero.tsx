import React from 'react'
import Button from '../atoms/Button'
import { ArrowRight } from '@/lib/icon'

const Hero = () => {
    return (
        <div className="min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full bg-linear-to-br from-pink-500 via-rose-500 to-red-500 flex items-center justify-center text-center flex-col px-4 md:px-8 lg:px-16 py-12 rounded-2xl shadow-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6 lg:mb-8">
                Ready to Spread Some Love? <span className="inline-block animate-pulse">💗</span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-white font-light mb-8 md:mb-10 lg:mb-12">
                Create your Valentine's Day Secret Exchange group today. It's free, fun, and takes less than 2 minutes!
            </p>

            <Button
                text="Start My Exchange"
                isRounded={true}
                rightIcon={<ArrowRight />}
                textColor="text-red-500" backgroundColor="bg-white" className="font-bold" 
            />
        </div>
    )
}

export default Hero