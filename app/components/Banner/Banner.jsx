import React from 'react'

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-[#FF6FB9]/10 to-[#6797FF]/10 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 py-10'>
            <div className=' flex items-center justify-between '>
                <div className='flex items-start justify-between gap-10 mx-auto'>
                    {/* left side  */}
                    <div className='flex flex-col'>
                        <h1 className='text-6xl my-3'>Your AI- <br /> Powered Sales Coach</h1>
                        <div className='flex justify-between items-center'>
                            <div>
                                <img src={"/assets/robot.png"} alt="" />
                            </div>
                            <div>
                                <p>Get real-time coaching, script <br/> suggestions, and deal-closing <br/> strategies powered by advanced AI <br/> technology.</p>
                            </div>
                        </div>
                    </div>
                    {/* right side  */}
                    <div>
                        <div>
                            <img src={"/assets/hero.png"} alt="" />
                        </div>
                        <div>
                            <div>
                                <h1>721+</h1>
                                <h1>1000+</h1>
                            </div>
                            <h3>Growth is our priority.</h3>
                            <p>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Banner
