import Image from 'next/image';
import Link from 'next/link';
import hero_image from "@/assets/banner.png";

const Hero = () => {
    return (
        <section className="w-full bg-[#121212] py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                {/* Main Banner Card */}
                <div className="relative bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-6 sm:p-10 lg:p-14 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Left Content Area */}
                    <div className="flex flex-col items-start z-10 max-w-xl">
                        {/* Small Top Tag */}
                        <span className="text-[#ccff00] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">Workout Library</span>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-none mb-4">Train with intent. Log every set.</h1>

                        {/* Subtitle description */}
                        <p className="text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>

                        {/* Action Button : Hash tag library added in here */}
                        <a href="#library" className="inline-flex items-center justify-center bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold px-7 py-3.5 rounded-full text-sm transition-colors shadow-lg">Browse Workouts</a>
                    </div>

                    {/* Right Banner Image */}
                    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center z-10">
                        <Image src={hero_image} alt="Workout Banner Character" priority className="w-full h-auto object-contain drop-shadow-2xl" />
                    </div>

                    {/* Subtle background glow effect matching dark theme */}
                    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none" />
                </div>

            </div>
        </section>
    );
}

export default Hero;
