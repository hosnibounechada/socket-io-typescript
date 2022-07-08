export const userSchema = {
  id: "/user",
  type: "object",
  properties: {
    userId: { type: "string" },
  },
  required: ["userId"],
};
