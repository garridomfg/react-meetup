
import { Routes, Route, Navigate } from "react-router-dom";
import { AllMeetupsPage, Favorites, NewMeetupsPage } from "../pages";

const AppRouter = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="new-meetup" element={<NewMeetupsPage />} />
        <Route path="favorites" element={<Favorites />} />

        <Route path="/*" element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default AppRouter
