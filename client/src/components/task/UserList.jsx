import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsChevronExpand } from 'react-icons/bs'
import { MdCheck } from 'react-icons/md'
import clsx from 'clsx'

import { summary } from '../../assets/data'
import { getInitials } from '../../utils'

const UserList = ({ setTeam, team }) => {
  const data = summary.users
  const [selectedUsers, setSelectedUsers] = useState([])

  const handleChange = (el) => {
    setSelectedUsers(el)
    setTeam(el?.map((u) => u._id))
  }

  return (
    <div>
      <p className='text-gray-700'>
        Assing Task to: 
      </p>

      <Listbox
        value={selectedUsers}
        onChange={(el) => handleChange(el)}
        multiple
      >
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full cursor-default rounded bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-300 sm:text-sm'>
            <span className='block truncate'>
              {selectedUsers?.map((user) => user.name).join(", ")}
            </span>

            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <BsChevronExpand
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default UserList