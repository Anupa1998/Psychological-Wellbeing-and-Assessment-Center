import React from 'react'

const TeamCard = () => {
    return (
        <div className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <div className="md:w-1/3 w-full bg-amber-100 h-64 md:h-64">
                <img
                    className="w-full h-full object-cover"
                    src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"
                    alt="Dr. Asanka Bulatwatta"
                />
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 p-4 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800">Dr. Asanka Bulatwatta</h3>
                <p className="text-gray-600 mt-1">Head of the Department</p>
                <p className="text-gray-500 text-sm">Department of Psychology</p>
            </div>
        </div>
    )
}

export default TeamCard