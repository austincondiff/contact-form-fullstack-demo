"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "ContactEntry",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/public-paperslayer-337/form-example/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "ContactEntry",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  }
];
