import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import publicRouter from "./routes/routes";
import DefaultLayout from "./layout/defaultLayout/DefaultLayout";
import Home from "./layout/Home/Home";
import AuthAPI from "./api/authAPI";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRouter.map((route, idx) => {
          let Page = Home;
          let Layout = DefaultLayout;

          if (route.layout === "onlyLayout") {
            Layout = route.component;
          }
          if (route.layout === null) {
            Page = route.component;
          }

          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Layout>
                  <Page></Page>
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
