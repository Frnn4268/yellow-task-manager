import React, { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { MdGridView } from 'react-icons/md'
import { useParams } from 'react-router-dom'

import Loading from '../components/Loader'
import Title from '../components/Title'

const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
]

const TASK_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
}

const Tasks = () => {
  const params = useParams()

  const [selected, setSelected] = useState(0)
  const [open, setOpen]  = useState(false)
  const [loading, setLoading] = useState(false)

  const status = params?.status || ""

  return loading ? (
    <div className='py-10'>
      <Loading />
    </div> 
  ) : (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-4'>
        <Title title={status ? `${status} Tasks` : "Tasks"} />
      </div>
    </div>
  )
}

export default Tasks