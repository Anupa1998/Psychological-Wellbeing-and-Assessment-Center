import React from 'react'


const Team = () => {
    return (
        <div className=' grid grid-cols-3'>


            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250" alt="" />
                </a>
                <div class="p-5">

                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">positoin</p>
                    
                </div>
            </div>



        </div>
    )
}

export default Team