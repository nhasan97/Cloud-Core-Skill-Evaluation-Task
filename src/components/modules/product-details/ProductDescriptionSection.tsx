import { parseDescription } from "@/src/utils/parseDescription";
import React from "react";
import SectionHeading from "../../UI/SectionHeading";

const ProductDescriptionSection = ({
  description,
}: {
  description: string;
}) => {
  const { title, call, whatsapp, features, sizes, address, hasDeliveryNote } =
    parseDescription(description);

  return (
    <div className="w-full h-full">
      <SectionHeading text={"Product Description"} />

      <h2 className="text-base mb-2">{title}</h2>

      <ul className="list-disc pl-5 mb-4">
        {features.map((f, idx) => (
          <li key={idx}>
            <strong>{f.key}:</strong> {f.value}
          </li>
        ))}
      </ul>

      {sizes.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Available Sizes:</h3>
          <ul className="grid grid-cols-2 gap-2">
            {sizes.map((s, i) => (
              <li key={i} className="bg-gray-100 p-2 rounded text-sm">
                <strong>{s.label}</strong> – Chest: {s.chest}", Length:{" "}
                {s.length}"
              </li>
            ))}
          </ul>
        </div>
      )}

      {address && (
        <p className="text-sm text-gray-700 mb-2">
          <strong>Visit us at:</strong> {address}
        </p>
      )}

      {(call || whatsapp) && (
        <p className="text-sm text-gray-600 mb-4">
          {call && (
            <>
              <strong>Call:</strong>{" "}
              <a href={`tel:${call}`} className="text-blue-600">
                {call}
              </a>
            </>
          )}
          {whatsapp && (
            <>
              {" | "}
              <strong>WhatsApp:</strong>{" "}
              <a
                href={`https://wa.me/88${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-green-600"
              >
                {whatsapp}
              </a>
            </>
          )}
        </p>
      )}

      {hasDeliveryNote && (
        <p className="text-sm text-green-600 font-medium">
          ✨ Fast delivery options available ✨
        </p>
      )}
    </div>
  );
};

export default ProductDescriptionSection;
