import { useContext } from "react";
import { useAuth } from "contexts/auth";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContextType } from "types/theme";
import { ThemeContext } from "contexts/theme/themeContext";
import useOuterClick from "hooks/useOuterClick";

export function AuthStatus() {
  let { currentUser, signout } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleUserDropDown } = useContext(
    ThemeContext
  ) as ThemeContextType;
  const ref = useOuterClick<HTMLButtonElement>((e: any) => {
    e.preventDefault();
    if (theme.userDropDown) {
      toggleUserDropDown();
    }
  });

  return (
    <div className="dropdown d-inline-block ms-2">
      {currentUser ? (
        <div className="dropdown d-inline-block ms-2">
          <button
            ref={ref}
            type="button"
            className="btn btn-sm btn-alt-secondary d-flex align-items-center"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => toggleUserDropDown()}>
            <img
              className="rounded-circle"
              src="https://i.pravatar.cc/30"
              alt="Header Avatar"
            />
            <span className="d-none d-sm-inline-block ms-2">
              {currentUser.email}
            </span>
            <i
              className={`d-none d-sm-inline-block fa-solid fa-fw ${
                theme.userDropDown ? "fa-angle-up" : "fa-angle-down"
              }`}></i>
          </button>
          <div
            style={
              theme.userDropDown
                ? {
                    position: "absolute",
                    inset: "0px 0px auto auto",
                    margin: "0px",
                    transform: "translate3d(0px, 45px, 0px)",
                  }
                : {}
            }
            aria-labelledby="page-header-user-dropdown"
            className={`dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0 ${
              theme.userDropDown ? " show" : ""
            }`}
            data-popper-placement="bottom-end">
            <div className="p-3 bg-body-light border-bottom rounded-top">
              <p className="mb-0 fw-medium">John Doe</p>
              <p className="mb-0 text-muted fs-sm fw-medium">Developer</p>
            </div>
            <div className="p-2">
              <Link
                to="/settings"
                className="dropdown-item d-flex align-items-center justify-content-between rounded">
                Configura????es
              </Link>
            </div>
            <div role="separator" className="dropdown-divider m-0"></div>
            <div className="p-2">
              <button
                onClick={() => {
                  signout();
                }}
                className="dropdown-item d-flex align-items-center justify-content-between rounded">
                Sair
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-sm"
          onClick={() => {
            navigate("/login");
          }}>
          Entrar
        </button>
      )}
    </div>
  );
}
