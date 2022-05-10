import { useForm, SubmitHandler } from "react-hook-form";
import type { FormType } from "..";

type FormSignInType = {
  setFormType: React.Dispatch<React.SetStateAction<FormType>>;
};

type FormSignInData = {
  email: string;
  password: string;
};

export const FormSignUp = ({ setFormType }: FormSignInType) => {
  const { register, handleSubmit } = useForm<FormSignInData>();

  const onSubmit: SubmitHandler<FormSignInData> = (data) => console.log(data);

  return (
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
                  type="text"
                  {...register("email")}
                  placeholder="email@email.com"
                  className="form-control form-control-lg form-control-alt py-3"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className="form-control form-control-lg form-control-alt py-3"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <button
                    className="text-muted fs-sm fw-medium d-block d-lg-inline-block mb-1 border-0 px-0 bg-transparent"
                    onClick={() => setFormType("signin")}>
                    Voltar para login
                  </button>
                </div>
                <div>
                  <button type="submit" className="btn btn-lg btn-alt-primary">
                    <i className="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>{" "}
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
