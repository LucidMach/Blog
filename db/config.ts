import { defineDb, defineTable, column } from "astro:db";

const Order = defineTable({
  columns: {
    // id: column.number({ primaryKey: true }),
    // time: column.date(),
    fname: column.text(),
    lname: column.text(),
    email: column.text(),
    phno: column.number(),
    address: column.text(),
    pincode: column.number(),
    paid: column.boolean(),
  },
});

export default defineDb({
  tables: { Order },
});
