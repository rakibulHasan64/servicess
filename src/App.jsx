// App.js
import { Route, Routes } from "react-router-dom";
import AllOutlate from "./route/AllOutlate";
import Regster from "./componet/regshterlogin/Regster";
import Login from "./componet/regshterlogin/Login";
import AllLayout from "./componet/home/AllLayout";
import AllServesPage from "./componet/AllServicespage/AllServesPage";
import AddServasecs from "./componet/AddServecs/AddServasecs";
import PrivateRoute from "./provider/PrivateRoute";
import AllManeage from "./componet/maneageservaces/AllManeage";
import ErrorPage from "../ErrorPage";
import SingleDetailsPage from "./singlePage/SingleDetailsPage";
import Update from "./componet/AddServecs/Update";

// import MyPostServices from "./componet/myservicess/MyPostServices";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllOutlate />}>
          <Route path="/register" element={<Regster />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<AllLayout />} />
          <Route path="AllService" element={<AllServesPage />} />
          <Route path="ManageService" element={<AllManeage />} />
          <Route path="Update/:id" element={<Update />} />
          <Route path="singlePage/:id" element={<SingleDetailsPage />} />
         {/* <Route path="mypost" element={<MyPostServices/>} />  */}

          <Route
            path="Addservices"
            element={
              <PrivateRoute>
                <AddServasecs />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
