import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AllJobs from './components/AllJobs/AllJobs.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import JobsDetails from './components/JobDetails/JobsDetails.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: 'statistics',
        element: <h1>This is Statistics Pages</h1>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs/>,
        loader: () => fetch('jobs.json')
      },
      {
        path: 'blog',
        element: <h1>This is Blog Pages</h1>
      },
      {
        path:'/jobs',
        element: <AllJobs></AllJobs>,
      },
      {
        path: '/job/:id',
        element:<JobsDetails/>, 
        loader: () => fetch('jobs.json') 
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
