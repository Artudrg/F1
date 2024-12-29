import React from 'react'

const BentoCard = ({ src, title, description }) => {
    return (
        <div className='relative size-full'>
            <video
                src={src}
                loop
                muted
                autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>
                        {title}
                    </h1>
                    {description && (
                        <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                    )}
                </div>
            </div>

        </div>
    )
}

const Features = () => {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-lg text-blue-50'>The Art of Speed</p>
                    <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                        Dive into the captivating world of Formula 1, where innovation pushes boundaries and every second counts.
                        Experience the perfect harmony of human ambition and cutting-edge technology on the track.
                    </p>
                </div>

                <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={
                            <>sp<b>e</b>ed</>
                        }
                        description="Dive into the fast lane of Formula 1, where precision meets power, and every lap tells a story of courage and determination."
                    />
                </div>
                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                    <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                        <BentoCard
                            src='videos/feature-2.mp4'
                            title={<>Mcl<b>a</b>ren</>}
                            description="McLaren Mercedes F1 Team are The 2024 Constructors Champions "
                        />
                    </div>
                    <div className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                        <BentoCard
                            src='videos/feature-3.mp4'
                            title={<></>}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features