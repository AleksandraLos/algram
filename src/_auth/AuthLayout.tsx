import { Outlet, Navigate } from "react-router-dom";
import SideImage from '../assets/side-img.svg'

export default function AuthLayout() {
  const  isAuthenticated = false;
  return (
    <>
    {isAuthenticated ? (
      <Navigate to="/" />
    ) : (
      <>
        <section className="flex flex-1 justify-center items-center flex-col py-10">
          <Outlet />
        </section>
         <img
          src={SideImage}
          alt=""
          className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
        />
      </>
    )}
  </>

  );
}