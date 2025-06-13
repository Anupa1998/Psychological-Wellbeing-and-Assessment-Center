import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ApointMentForm = () => {
    const [preferredDate, setPreferredDate] = useState(null);

    const affliationType = [
        "Student",
        "Staff / Faculty",
        "Family Member of Student",
        "Family Member of Staff"
    ];

    const appointmentTypes = [
        "Psychological First Aid",
        "Mental Health Screening",
        "Psychological Assessment",
        "Workshop Registration",
        "Other / Not Sure",
    ];

    const appointmentTime = [
        "9:00 AM – 10:00 AM",
        "10:00 AM – 11:00 AM",
        "11:00 AM – 12:00 PM",
        "2:00 PM – 3:00 PM",
        "3:00 PM – 4:00 PM",
    ];

    return (
        <div className='border border-cusred p-8 mt-4 mb-8 rounded-2xl'>
            <p className='mb-8'> <span className=' text-gray-800 text-lg font-semibold'> Appointment Booking Form for PWAC Appointments </span><br />
                <span className=' font-medium text-gray-700'>
                    Please fill out the form below to request an appointment. All information is kept confidential.
                </span>
            </p>
            <form>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    {/* Name */}
                    <div className='sm:col-span-6'>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder='Enter your full name'
                            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-700 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-700 sm:text-sm'
                        />
                    </div>

                    {/* Email Address */}
                    <div className='sm:col-span-3'>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder='example@gmail.com'
                            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-700 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-700 sm:text-sm'
                        />
                    </div>

                    {/* Phone Number */}
                    <div className='sm:col-span-3'>
                        <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-700 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-700 sm:text-sm'
                        />
                    </div>

                    {/* University Affiliation */}
                    <div className='sm:col-span-3'>
                        <label htmlFor="affiliation" className='block text-sm font-medium text-gray-700 mb-2'>University Affiliation</label>
                        <div className='mt-2 grid grid-cols-1'>
                            <select
                                id="affiliation"
                                name="affiliation"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-700 outline-1 outline-gray-300 focus:outline-2 focus:outline-gray-700 sm:text-sm"
                            >
                                {affliationType.map((ele, index) => (
                                    <option key={index} value={ele}>{ele}</option>
                                ))}
                            </select>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </div>
                    </div>

                    {/* Preferred Appointment Type */}
                    <div className="sm:col-span-4">
                        <fieldset>
                            <legend className='block text-sm font-medium text-gray-700 mb-6'>Preferred Appointment Type</legend>
                            <div className=" space-y-4">
                                {appointmentTypes.map((type, index) => {
                                    const id = `appointment-type-${index}`;
                                    return (
                                        <div key={id} className="flex gap-3">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id={id}
                                                    name="appointmentTypes"
                                                    type="checkbox"
                                                    value={type}
                                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-gray-700 checked:bg-gray-700 focus:outline-gray-700"
                                                />
                                                <svg
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                                                >
                                                    <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-has-checked:opacity-100" />
                                                </svg>
                                            </div>
                                            <label htmlFor={id} className="text-sm font-medium text-gray-700">{type}</label>
                                        </div>
                                    );
                                })}
                            </div>
                        </fieldset>
                    </div>

                    {/* Preferred Date */}
                    <div className="sm:col-span-3">
                        <label htmlFor="preferred-date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                        <div className="mt-2">
                            <DatePicker
                                id="preferred-date"
                                selected={preferredDate}
                                onChange={(date) => setPreferredDate(date)}
                                placeholderText="Select a date"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-700 outline-1 outline-gray-300 focus:outline-2 focus:outline-gray-700 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Preferred Time */}
                    <div className="sm:col-span-3">
                        <label htmlFor="preferred-time" className='block text-sm font-medium text-gray-700 '>Preferred Time Slot</label>
                        <div className='mt-2 grid grid-cols-1'>
                            <select
                                id="preferred-time"
                                name="preferredTime"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-700 outline-1 outline-gray-300 focus:outline-2 focus:outline-gray-700 sm:text-sm"
                            >
                                {appointmentTime.map((ele, index) => (
                                    <option key={index} value={ele}>{ele}</option>
                                ))}
                            </select>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </div>
                    </div>

                    {/* Reason */}
                    <div className="sm:col-span-6">
                        <label htmlFor="visit-reason" className='block text-sm font-medium text-gray-700 mb-2'>Brief Reason for Visit (optional)</label>
                        <textarea
                            id="visit-reason"
                            name="visitReason"
                            rows={3}
                            placeholder="e.g., Feeling stressed, want to talk..."
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-700 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-700 sm:text-sm"
                        />
                    </div>

                    {/* Accessibility */}
                    <div className="sm:col-span-6">
                        <label htmlFor="accessibility" className='block text-sm font-medium text-gray-700 mb-2'>Accessibility / Special Requests</label>
                        <textarea
                            id="accessibility"
                            name="accessibility"
                            rows={3}
                            placeholder="Let us know if you have any special requirements"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-700 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-700 sm:text-sm"
                        />
                    </div>

                    {/* In-person or Virtual */}
                    <div className='sm:col-span-3'>
                        <fieldset>
                            <legend className="text-sm font-semibold text-gray-700">Would you prefer in-person or virtual (if available)?</legend>
                            <div className="mt-6 space-y-4">
                                {["In-person", "Virtual", "Either is fine"].map((option, idx) => {
                                    const value = option.toLowerCase().replace(/\s+/g, '-');
                                    return (
                                        <div key={idx} className="flex items-center gap-x-3">
                                            <input
                                                id={value}
                                                name="meetingMode"
                                                type="radio"
                                                value={option}
                                                className="size-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-700 checked:bg-gray-700 focus:outline-gray-700"
                                            // defaultChecked={idx === 0}
                                            />
                                            <label htmlFor={value} className="block text-sm font-medium text-gray-700">
                                                {option}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-cusred border-2 border-cusred px-4 py-2 text-sm font-semibold text-white shadow hover: cursor-pointer "
                    >
                        Book an Appointment
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ApointMentForm;
