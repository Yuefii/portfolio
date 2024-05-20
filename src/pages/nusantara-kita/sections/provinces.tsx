import { baseUrl } from "@/utils/env";

const Provinces = ({ show, onClick, data, setShow }: any) => {
  return (
    <>
      <h1 className="text-white font-medium">Provinsi</h1>
      <div className="bg-[#161616] p-3 h-auto rounded-md flex justify-between">
        <p className="text-blue-400">{baseUrl + "/api/nusantara/provinces"}</p>
        {!show ? (
          <button
            onClick={onClick}
            className="text-white text-xs py-1.5 px-3 rounded-md bg-green-600"
          >
            GET
          </button>
        ) : (
          <button
            onClick={() => setShow(false)}
            className="text-white text-xs py-1.5 px-3 rounded-md bg-red-600"
          >
            Close
          </button>
        )}
      </div>
      {show && (
        <>
          <p className="text-white">Response :</p>
          <div className="bg-[#161616] h-[400px] overflow-auto rounded-md">
            <ul className="text-white p-3">
              <pre className="text-white">
                {JSON.stringify({ data }, null, 2)}
              </pre>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Provinces;
