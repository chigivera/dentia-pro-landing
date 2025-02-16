// src/components/stats-section.tsx

export default function StatsSection() {
    return (
        <section className="relative z-40 w-full p-10 bg-transparent">
        {/* Fluid background */}
        <div className="absolute left-0 right-0 hidden lg:block -top-36">
            <svg className="w-full h-30" viewBox="0 0 999 294" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M999 0C801.424 95.1031 390.335 124.508 0 101.279V217.996C380.918 290.389 599.831 326.576 999 255.667V0Z" fill="#1D4ED8"/>
            </svg>
        </div>
    
        {/* Content */}
        <div className="absolute px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8 bottom-24">
            <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
                <div className="space-y-2">
                    <div className="text-6xl font-bold text-blue-700 lg:text-white sm:text-5xl">90%</div>
                    <div className="text-2xl font-semibold text-blue-700 lg:text-white sm:text-xl">Moins de rendez-vous manqués</div>
                </div>
                <div className="space-y-2">
                    <div className="text-6xl font-bold text-blue-700 lg:text-white sm:text-5xl">20%</div>
                    <div className="text-2xl font-semibold text-blue-700 lg:text-white sm:text-xl">Augmentation de la fidélisation</div>
                </div>
                <div className="space-y-2">
                    <div className="text-6xl font-bold text-blue-700 lg:text-white sm:text-5xl">100%</div>
                    <div className="text-2xl font-semibold text-blue-700 lg:text-white sm:text-xl">Moins de paperasse</div>
                </div>
            </div>
        </div>
        <div className="hidden h-40 lg:block"></div>
    </section>
    );
}