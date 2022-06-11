import Header from "components/header";

export function NotFoundPage() {
  return (
    <div>
      <div className="bg-image">
        <Header />
        <div className="bg-primary-dark-op">
          <div className="bg-black-50">
            <div className="hero-inner">
              <div className="content content-full">
                <div className="row justify-content-center">
                  <div className="col-md-6 py-3 text-center">
                    <div className="push">
                      <p className="link-fx fw-bold fs-1">
                        <span className="text-white">404 Page</span>
                      </p>
                      <p className="text-white-75">
                        Stay tuned! We are working on it and it is coming soon!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
