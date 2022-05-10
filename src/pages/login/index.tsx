import { useState } from "react";
import { FormForgotPassword, FormSignIn, FormSignUp } from "./components";

export type FormType = "signin" | "signup" | "forgot";

export function LoginPage() {
  const [formType, setFormType] = useState<FormType>("signin");

  const renderForm = () => {
    switch (formType) {
      case "signup":
        return <FormSignUp setFormType={setFormType} />;

      case "forgot":
        return <FormForgotPassword setFormType={setFormType} />;

      default:
        return <FormSignIn setFormType={setFormType} />;
    }
  };

  return (
    <div id="page-container">
      <main id="main-container">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1631624217902-d14c634ab17c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
          }}>
          <div className="row g-0 bg-primary-dark-op">
            <div className="hero-static col-lg-4 d-none d-lg-flex flex-column justify-content-center">
              <div className="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
                <div className="w-100">
                  <a className="link-fx fw-semibold fs-2 text-white" href="/">
                    One<span className="fw-normal">UI</span>
                  </a>
                  <p className="text-white-75 me-xl-8 mt-2">
                    Welcome to your amazing app. Feel free to login and start
                    managing your projects and clients.
                  </p>
                </div>
              </div>
              <div className="p-4 p-xl-5 d-xl-flex justify-content-between align-items-center fs-sm">
                <p className="fw-medium text-white-50 mb-0">
                  <strong>OneUI 1.0</strong> &copy;{" "}
                  <span data-toggle="year-copy"></span>
                </p>
                <ul className="list list-inline mb-0 py-2">
                  <li className="list-inline-item">
                    <a className="text-white-75 fw-medium" href="/">
                      Legal
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-white-75 fw-medium" href="/">
                      Contact
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-white-75 fw-medium" href="/">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hero-static col-lg-8 d-flex flex-column align-items-center bg-body-light">
              <div className="p-3 w-100 d-lg-none text-center">
                <a
                  className="link-fx fw-semibold fs-3 text-dark"
                  href="index.html">
                  One<span className="fw-normal">UI</span>
                </a>
              </div>

              {renderForm()}

              <div className="px-4 py-3 w-100 d-lg-none d-flex flex-column flex-sm-row justify-content-between fs-sm text-center text-sm-start">
                <p className="fw-medium text-black-50 py-2 mb-0">
                  <strong>OneUI 5.2</strong> &copy;{" "}
                  <span data-toggle="year-copy"></span>
                </p>
                <ul className="list list-inline py-2 mb-0">
                  <li className="list-inline-item">
                    <a className="text-muted fw-medium" href="/">
                      Legal
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-muted fw-medium" href="/">
                      Contact
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-muted fw-medium" href="/">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
