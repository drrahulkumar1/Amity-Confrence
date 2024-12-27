import React from "react";

const SpeakerCard = (speaker) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="p-8 flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
          <img
            src={`${speaker.image}`}
            alt={`${speaker.name}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          {speaker.name}
        </h2>

        {/* Title */}
        <p className="text-gray-600 text-lg mb-3 text-center">
          {speaker.title}
        </p>

        {/* Department and Institution */}
        <div className="text-center text-gray-600">
          <p className="mb-1">{speaker.institute}</p>
          <p>Varanasi</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
