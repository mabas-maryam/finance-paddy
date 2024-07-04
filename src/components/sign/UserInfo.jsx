import React from 'react'
import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <div className="container mx-auto px-4 md:px-10">

      <div className='secondParent'>

        <div>
        <Link
            to="/"
            className="justify-center items-center font-primaryFont text-2xl font-semibold"
          >
            Finance <span className="text-primary">Paddy</span>
          </Link>
        </div>

        <form action="">
            <input type="text" />
            <button>proceed</button>
        </form>

        <div>progressBar</div>

      </div>
    </div>
  )
}

export default UserInfo
