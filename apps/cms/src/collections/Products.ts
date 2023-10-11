import { CollectionConfig } from "payload/types";

const Products: CollectionConfig = {
  slug: "products",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
  ],
  access: {
    read: () => true, // Allow anyone to read this collection
  },
};

export default Products;
