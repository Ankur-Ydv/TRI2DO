import { Schema, model, models } from "mongoose";

const SheetSchema = new Schema({
  solved: {
    type: [Number],
    default: [],
  },
  bookmarked: {
    type: [Number],
    default: [],
  },
});

const defaultSheet = {
  solved: [],
  bookmarked: [],
};

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  sheet0: {
    type: SheetSchema,
    default: defaultSheet,
  },
  sheet1: {
    type: SheetSchema,
    default: defaultSheet,
  },
  sheet2: {
    type: SheetSchema,
    default: defaultSheet,
  },
  sheet3: {
    type: SheetSchema,
    default: defaultSheet,
  },
  sheet4: {
    type: SheetSchema,
    default: defaultSheet,
  },
  sheet5: {
    type: SheetSchema,
    default: defaultSheet,
  },
});

const Users = models?.User || model("User", UserSchema);

export default Users;
