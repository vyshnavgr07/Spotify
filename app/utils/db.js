const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Declare a global variable prisma if not already declared
global.prisma = global.prisma || prismaClientSingleton();

// Export the prisma instance
module.exports = global.prisma;

// Assign the prisma instance to the global variable if not in production
if (process.env.NODE_ENV !== 'production') {
  global.prisma = module.exports;
}
