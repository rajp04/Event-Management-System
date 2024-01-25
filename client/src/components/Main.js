import React from 'react'

function Main() {
    return (
        <div className='bg-cyan-950 pb-16'>
            <div className='flex sm:flex-row flex-col items-center justify-center p-20 gap-5 lg:gap-20'>
                <img src={require('../image/google.png')} alt="" className='pb-5'/>
                <img src={require('../image/slack.png')} alt="" className='pb-5'/>
                <img src={require('../image/atlassian.png')} alt="" className='pb-5'/>
                <img src={require('../image/dropbox.png')} alt="" className='pb-5'/>
                <img src={require('../image/shopify.png')} alt="" className='pb-5'/>
            </div>
            <div className='bg-cyan-600 w-5/6 mx-auto rounded-sm'>
                <div className='sm:flex flex-row p-8 pb-12'>
                    <div className='basis-3/5'>
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500  w-14 h-1"></div>
                        <h1 className='text-2xl text-white'>What is Harmoni <br></br> Event</h1>
                    </div>
                    <div className='sm:ps-5'>
                        <p className='text-gray-300'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective not convinced residence own. Connection has put impossiable own aprtsments boisterous. At jointure ladyship an insisted so humanity he. friends bacheolr entrance to on by.</p>
                    </div>
                </div>

                <div className='sm:flex justify-between p-5 pb-12'>
                    <h1 className='text-5xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent pb-5 font-semibold'>Your Event Will be beyond your<br></br> imagination</h1>
                    <p className='text-3xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent pb-2 sm:ps-5'>Explore the Library</p>
                </div>

                <div className='md:flex justify-between p-5 lg:gap-32 pb-16 gap-5'>
                    <div className='pb-5'>
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500  w-14 h-1"></div>
                        <h1 className='text-white text-4xl pb-2'>Chatbots</h1>
                        <p className='text-gray-300'>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
                    </div>
                    <div className='pb-5'>
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500  w-14 h-1"></div>
                        <h1 className='text-white text-4xl pb-2'>Knowledgebase</h1>
                        <p className='text-gray-300'>At jointure ladyship an insisted so humanity he. friends bacheolr entrance to on by.</p>
                    </div>
                    <div className='pb-5'>
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500  w-14 h-1"></div>
                        <h1 className='text-white text-4xl pb-2'>Education</h1>
                        <p className='text-gray-300'>At jointure ladyship an insisted so humanity he. friends bacheolr entrance to on by.</p>
                    </div>
                </div>
            </div>


            <div className='md:flex w-5/6 mx-auto pt-12 '>
                <div className='basis-1/3 pb-12'>
                    <h1 className='text-4xl font-semibold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent md:pe-20'>Harmoni Event Management Firm & Wedding Planners is a group of creative minds who would like to make weddings, birthdays & any kind of events couteous & a better place for our clients to celebrate important moments of their lives...</h1>
                </div>

                <div className='basis-2/3 flex justify-around flex-col'>
                    <div className='lg:flex lg:flex-row pb-5'>
                        <div className='basis-1/2'>
                            <div className="bg-gradient-to-r from-orange-500 to-pink-500  w-14 h-1"></div>
                            <h1 className='text-white text-4xl pb-2'>Photography</h1>
                        </div>
                        <div className='basis-1/2'>
                            <p className='text-gray-300 lg:ps-5'>Creative full HD 1080P Video, a different scape of uour ceremony</p>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row pb-5'>
                        <div className='basis-1/2'>
                            <div className="bg-gradient-to-r from-orange-500 to-pink-500  w-14 h-1"></div>
                            <h1 className='text-white text-4xl pb-2'>Cinematography or Videography Service</h1>
                        </div>
                        <div className='basis-1/2'>
                            <p className='text-gray-300 lg:ps-5'>A blend of out-of-the-box ideas to decore your precious date</p>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row pb-5'>
                        <div className='basis-1/2'>
                            <div className="bg-gradient-to-r from-orange-500 to-pink-500  w-14 h-1"></div>
                            <h1 className='text-white text-4xl pb-2'>Full Venue Decoration Service</h1>
                        </div>
                        <div className='basis-1/2'>
                            <p className='text-gray-300 lg:ps-5'>Just call us and get total event solution under one roof...</p>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row pb-5'>
                        <div className='basis-1/2'>
                            <div className="bg-gradient-to-r from-orange-500 to-pink-500  w-14 h-1"></div>
                            <h1 className='text-white text-4xl pb-2'>Home Decoration</h1>
                        </div>
                        <div className='basis-1/2'>
                            <p className='text-gray-300 lg:ps-5'>A Team of 3 talented Photographers are ready to snap the best moments of your ceremony</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-5/6 mx-auto rounded-md bg-gradient-to-r from-pink-400 to-orange-300 p-8 text-white'>
                <div className='sm:flex justify-between items-center'>
                    <div className='pb-5 text-xl'>
                        <h1 className='pb-5'>Request Early Access to Get Started</h1>
                        <h1>Register Today & start exploring the endless possibilities.</h1>
                    </div>
                    <div>
                        <button className='bg-black rounded-2xl py-2 px-4 text-2xl'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
