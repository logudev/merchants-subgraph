import { Merchant } from "./db.js";

export const resolvers = {
  Query: {
    merchants: async () => Merchant.findAll(),
    merchant: (_root, { id }) => Merchant.findById(id),
  },
  Merchant: {
    transactions: (merchant) => {
      return merchant.transactionIds.map((id) => {
        return { __typename: "Transaction", id };
      });
    },
  },
};
