/* eslint-disable @typescript-eslint/no-explicit-any */

export const parseDescription = (str: string) => {
  const title = str.split("||")[0].trim();

  const callMatch = str.match(/Call\s*:\s*☎?(\d+)/i);
  const whatsappMatch = str.match(/WhatsApp\s*☎?(\d+)/i);

  const features: any[] = [];
  const featureMatches = str.match(/1\..+?(?=Available sizes:|Visit us at:)/s); // added fallback
  if (featureMatches?.[0]) {
    featureMatches[0]
      .split(/\d+\./)
      .filter(Boolean)
      .forEach((line: any) => {
        const [key, value] = line.split(":").map((s: any) => s.trim());
        if (key && value) features.push({ key, value });
      });
  }

  const sizes: any[] = [];
  const sizeMatches = str.match(
    /Available sizes:([\s\S]+?)(Visit us at:|✨|$)/i
  );
  if (sizeMatches?.[1]) {
    const sizeLines = sizeMatches[1].split("*").filter(Boolean);
    sizeLines.forEach((line: any) => {
      const label = line.match(/[A-Z]+/)?.[0];
      const chest = line.match(/Chest\s+(\d+)/i)?.[1];
      const length = line.match(/Length\s+(\d+)/i)?.[1];
      if (label && chest && length) {
        sizes.push({ label, chest, length });
      }
    });
  }

  const address = str.match(/Visit us at:\s*(.+?)(✨|$)/i)?.[1]?.trim();
  const hasDeliveryNote = str.includes("Fast delivery");

  return {
    title,
    call: callMatch?.[1] || null,
    whatsapp: whatsappMatch?.[1] || null,
    features,
    sizes,
    address: address || null,
    hasDeliveryNote,
  };
};
