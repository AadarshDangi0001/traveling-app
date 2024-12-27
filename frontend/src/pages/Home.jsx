import { useState, useRef } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../assets/components/LocationSearchPanel";


const Home = () => {
  const [pickup,setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setpanelOpen ] =useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)



  const submitHandler =(e)=>{
     e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
        gsap.to(panelRef.current, {
            height: '70%',
            padding: 24
            // opacity:1
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
            // opacity:0
        })
        gsap.to(panelCloseRef.current, {
            opacity: 0
        })
    }
}, [ panelOpen ])



  return (
    <div className='h-screen relative overflow-hidden'>
         <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
         <div className="h-screen w-screen ">
 
         </div>
         <div className="bg-white  flex flex-col justify-end h-screen absolute top-0 w-full ">
            <div className="h-[30%] p-5 bg-white">
            <h5 ref={panelCloseRef} onClick={() => {
                        setpanelOpen(false)
                    }} className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
            <h4 className="text-3xl font-semibold">Find a trip</h4>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} >
               {/* <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div> */}

               <input
                onClick={()=>{
                   setpanelOpen(true)
                }}
                value={pickup}
                onChange={(e)=>{
                    setPickup(e.target.value)
                }}
                className="bg-[#eee] px-8 py-2 text-lg rouned-lg w-full mt-5" 
                type="text" 
                placeholder="Add a pick-up loaction" />
               <input 
                onClick={()=>{
                  setpanelOpen(true)
                }}
                value={destination}
                onChange={(e)=>{
                    setPickup(e.target.value)
                }}
               className="bg-[#eee] px-8 py-2 text-lg rouned-lg w-full mt-3"
                 type="text" 
                 placeholder="Enter your destination" />

            </form>
            </div>

            <div ref={panelRef} className="h-[70%] bg-white  h-0">
            <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}
                    />

            </div>
         </div>
    </div>
  )
}

export default Home
