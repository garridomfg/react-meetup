
import { Routes, Route } from "react-router-dom";
import { AllMeetupsPage, Favorites, NewMeetupsPage } from "../pages";

const AppRouter = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="new-meetup" element={<NewMeetupsPage />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}

export default AppRouter
