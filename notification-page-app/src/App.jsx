import React from "react"


const notifications = [
  {id:1, img: 'https://notification-design.netlify.app/static/media/avatar-mark-webber.e3e820b976dfaf7f762a.webp', message : 'Mark Webber reacted to your recent post my first tournament today'},
  {id:2, img: 'https://notification-design.netlify.app/static/media/avatar-angela-gray.be3397e8fa98e1cac926.webp', message : 'Angela Gray following you'},
  {id:3, img: 'https://notification-design.netlify.app/static/media/avatar-jacob-thompson.ef1880754355ebe956bb.webp', message : 'Jacob Thompson has joined your Chess Club'},
  {id:4, img: 'https://notification-design.netlify.app/static/media/avatar-rizky-hasanuddin.2c9e9a5d4982e8f1b614.webp', message : 'Rizky Hanasadunin has sent you a private message'},
  {id:5, img: 'https://notification-design.netlify.app/static/media/avatar-kimberly-smith.00520dc2b2f8e585aac5.webp', message : 'Kimberly Smith commented on your picture'},
  {id:6, img: 'https://notification-design.netlify.app/static/media/avatar-nathan-peterson.03727540c8ed8341d745.webp', message : 'Nathan Patterson reacted to your post 5 end game strategies to increase your win rate'},
  {id:7, img: 'https://notification-design.netlify.app/static/media/avatar-anna-kim.14242399b99facbf45c7.webp', message : 'Anna Kim left the Chess Club'},

]


function App() {
  return(
    <>
    <div className="h-screen flex justify-center">
        <div className="shadow-2xl rounded-lg mt-10 overflow-y-auto w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-3/5">
           <section className="flex justify-between w-full mt-10">
             <h2 className="ml-5 text-lg font-bold">Notification 
               <span className="bg-cyan-950 pr-3 pl-3 pt-1 pb-1 ml-2 text-white">5</span>
             </h2>

            <h2 className="text-right mr-2">Mark all as read</h2>
         </section>

         <div className="mt-10">
           {notifications.map(notification=>{
            return(
             <div key ={notification.id} className="flex items-center ml-5 mb-5">
              <img src={notification.img}></img>
              <p className="ml-5 text-sm">{notification.message}</p>
              </div>
            )
           })}
         </div>
       </div>
    </div>
    </>
  )
}

export default App
