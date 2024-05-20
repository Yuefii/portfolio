import { Input } from "@/components/ui/input";
import { baseUrl } from "@/utils/env";

const Districts = ({
  show,
  onClick,
  data,
  setShow,
  value,
  onChange,
}: any) => {
  return (
    <>
      <h1 className="text-white pt-5 font-medium">Kecamatan</h1>
      <Input
        className="bg-[#161616] text-white"
        type="text"
        placeholder="Masukan kode Kabupaten/Kota"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="bg-[#161616] p-3 h-auto rounded-md flex justify-between">
        <p className="text-blue-400">
          {`${baseUrl}/api/nusantara/${
            value ? value : "{regency_code}"
          }/districts`}
        </p>
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

export default Districts;
