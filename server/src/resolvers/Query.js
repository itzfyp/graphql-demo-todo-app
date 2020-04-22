
async function todos(parents, args, context) {
  return context.prisma.todoes({
    orderBy: 'createdAt_DESC'
  });
}

module.exports = {
  todos
}
