import { useAuth } from "contexts";
import { UserParamsData } from "interfaces/user";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<UserParamsData>();
  const [formError, setFormError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<UserParamsData> = async (data) => {
    setFormError(undefined);
    setIsLoading(true);
    try {
      await signup(data);
      navigate("/dashboard");
    } catch (error) {
      setFormError(error.message);
      setIsLoading(false);
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

              <div className="p-4 w-100 flex-grow-1 d-flex align-items-center">
                <div className="w-100">
                  <div className="text-center mb-5">
                    <p className="mb-3">
                      <i className="fa fa-2x fa-circle-notch text-primary-light"></i>
                    </p>
                    <h1 className="fw-bold mb-2">Registrar</h1>
                    <p className="fw-medium text-muted">
                      Por favor, preencha os campos para se cadastrar
                    </p>
                  </div>

                  <div className="row g-0 justify-content-center">
                    <div className="col-sm-8 col-xl-4">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="js-validation-signin">
                        <div className="mb-4">
                          <input
                            type="email"
                            {...register("email")}
                            placeholder="email@email.com"
                            className="form-control form-control-lg form-control-alt py-3"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            {...register("password")}
                            placeholder="********"
                            className="form-control form-control-lg form-control-alt py-3"
                          />
                        </div>

                        {formError && (
                          <div className="alert alert-danger" role="alert">
                            <p className="fw-medium fs-sm text-center mb-0">
                              {formError}
                            </p>
                          </div>
                        )}

                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <button
                              className="text-muted fs-sm fw-medium d-block d-lg-inline-block mb-1 border-0 px-0 bg-transparent"
                              onClick={() => navigate("/login")}>
                              Voltar para login
                            </button>
                          </div>
                          <div>
                            <button
                              type="submit"
                              className="btn btn-lg btn-alt-primary">
                              {isLoading ? (
                                <div
                                  className="spinner-border spinner-border-sm me-2 opacity-50"
                                  role="status"></div>
                              ) : (
                                <i className="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>
                              )}{" "}
                              Cadastrar
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

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
