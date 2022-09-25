import "./App.css";
import image1 from "./assets/img/image-product-desktop.jpg";

function App() {
  return (
    <div className="App">
      <div className="grid h-screen place-items-center">
        <figure className="max-w-md md:max-w-2xl bg-white rounded-lg shadow-xl">
          <div className="md:flex">
            <div id="img" className="md:shrink-0">
              <img src={image1} alt="Product1" className="w-34 md:h-custom object-contain rounded-l md:rounded-tr-none sm:w-full sm:object-cover sm:object-center sm:h-64 sm:rounded-t-lg" />
            </div>

            <div className="text-left p-10">
              <h5 className="font-Montserrat uppercase text-xl mb-3 tracking-custom-wide text-slate-700">perfume</h5>
              <h1 className="mb-3 font-Fraunces text-4xl font-black">Gabrielle Essense Eau De Parfum</h1>
              <p className="fonr-Montserrat text-slate-700 mb-7">
                A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Create for the house of <span>CHANEL</span>
              </p>
              <p className="mb-5">
                <span className="text-dark-blue text-4xl font-Fraunces font-black">$149.99</span>
                <span className="ml-8 align-super line-through">$169.99</span>
              </p>
              <button className="w-full rounded-lg bg-dark-cyan active:bg-dark-blue hover:bg-dark-blue text-white px-4 py-4 font-bold text-lg">
                <span className="flex items-center justify-center space-x-1">
                  <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg" className="mr-3 fill-white">
                    <path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" />
                  </svg>
                  <span>Add to cart</span>
                </span>
              </button>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default App;
