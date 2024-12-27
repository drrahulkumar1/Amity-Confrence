import React, { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-full mt-20 mb-20">
      <p className="w-full text-center text-4xl font-bold">
        <span className="border-b-4 border-gray-700">
          Register Here Please!
        </span>
      </p>
      <div className="max-w-4xl mx-auto px-4 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <p className="text-xl font-semibold">Loading...</p>
          </div>
        )}
        <iframe
          src="https://forms.gle/84RQtbQog5Vw6mSy9"
          className={`w-full h-[591px] border-0 mt-4 text-black ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          title="Event registration form"
          onLoad={handleLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default Register;
