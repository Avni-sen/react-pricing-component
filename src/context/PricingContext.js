import { createContext, useState } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const allPricing = {
    Full: {
      Basic: "$199.99",
      Pro: "$249.99",
      Master: "$399.99",
    },
    Monthly: {
      Basic: "$19.99",
      Pro: "$24.99",
      Master: "$39.99",
    },
  };

  const [enabled, setEnabled] = useState(true);
  return (
    <PricingContext.Provider value={{ allPricing, enabled, setEnabled }}>
      {children}
    </PricingContext.Provider>
  );
};
