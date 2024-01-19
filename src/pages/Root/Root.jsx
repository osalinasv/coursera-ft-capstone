import { Footer } from '#components/shared/Footer'
import { Header } from '#components/shared/Header'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import './styles.css'

function Root() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default Root
