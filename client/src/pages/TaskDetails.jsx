import clsx from 'clsx'
import moment from 'moment'
import React, { useState } from 'react'
import { FaBug, FaTasks, FaThumbsUp, FaUser } from 'react-icons/fa'
import { GrInProgress } from 'react-icons/gr'
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
  MdOutlineDoneAll,
  MdOutlineMessage,
  MdTaskAlt,
} from 'react-icons/md'
import { RxActivityLog } from 'react-icons/rx'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

import { tasks } from '../assets/data'
import Tabs from '../components/Tabs'
import { PRIORITYSTYELS, TASK_TYPE } from '../utils'

const assets = [
  'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2534523/pexels-photo-2534523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/804049/pexels-photo-804049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
]

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
}

const bgColor = {
  high: 'bg-red-200',
  medium: 'bg-yellow-200',
  low: 'bg-blue-200',
}

const TABS = [
  { title: 'Task Detail', icon: <FaTasks /> },
  { title: 'Activities/Timeline', icon: <RxActivityLog /> },
]

const TASKTYPEICON = {
  commented: (
    <div className='w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white'>
      <MdOutlineMessage />,
    </div>
  ),
  started: (
    <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white'>
      <FaThumbsUp size={20} />
    </div>
  ),
  assigned: (
    <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-500 text-white'>
      <FaUser size={14} />
    </div>
  ),
  bug: (
    <div className='text-red-600'>
      <FaBug size={24} />
    </div>
  ),
  completed: (
    <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white'>
      <MdOutlineDoneAll size={24} />
    </div>
  ),
  'in progress': (
    <div className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-600 text-white'>
      <GrInProgress size={16} />
    </div>
  ),
}

const act_types = [
  'Started',
  'Completed',
  'In Progress',
  'Commented',
  'Bug',
  'Assigned',
]

const TaskDetails = () => {
  const { id } = useParams()
  
  const [selected, setSelected] = useState(0)
  const task = tasks[0]


  return (
    <div className='w-full flex flex-col gap-3 mb-4 overflow-y-hidden'>
      <h1 className='text-2xl text-gray-600 font-bold'>
        {task?.title}
      </h1>

      <Tabs tabs={TABS} setSelected={setSelected}>
        {
          selected === 0? 
          <>
            <div className='w-full flex flex-col md:flex-row gap-5 2xl:gap-8 bg-white shadow-md p-8 overflow-y-auto'>
              {/* RIGHT */}
              <div className='w-full md:w-1/2 space-y-8'>
                <div className='flex items-center gap-5'>
                  <div
                    className={clsx(
                      'flex gap-1 items-center text-base font-semibold px-3 py-1 rounded-full',
                      PRIORITYSTYELS[task?.priority],
                      bgColor[task?.priority]
                    )}
                  >
                    <span className='text-lg'>{ICONS[task?.priority]}</span>
                    <span className='uppercase'>{task?.priority} Priority</span>
                  </div>

                  <div className={clsx("flex items-center gap-2")}>
                    <div
                      className={clsx(
                        "w-4 h-4 rounded-full",
                        TASK_TYPE[task.stage]
                      )}
                    />
                    <span className='text-black uppercase'>{task?.stage}</span>
                  </div>
                </div>
                  <p className='text-gray-500'>
                    Created At: {new Date(task?.date).toDateString()}
                  </p>
              </div>

              {/* LEFT */}
              <div className='w-full md:w-1/2 space-y-8'>
                
              </div>
            </div> 
          </> 
          : 
          <>
          </>
        }
      </Tabs>
    </div>
  )
}

export default TaskDetails
