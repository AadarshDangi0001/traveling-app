import { Link } from "react-router-dom"


const Start = () => {
  return (
    <div>
       <div className="h-screen pt-8 flex justify-between flex-col w-full bg-center  bg-cover bg-[url(https://images.unsplash.com/photo-1714711566175-b4ec7e0a5893?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <img className="w-16 ml-8 " src="https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png" alt=""  />
           <div className="bg-white pb-7 py-4 px-4">
               <h2 className="text-3xl font-bold">Get Started with Uber</h2>
               <Link to="/login" className="flex item-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
           </div>
       </div>
    </div>
  )
}

export default Start
