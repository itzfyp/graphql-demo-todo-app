function addItem(parent, args, context) {
    return context.prisma.createTodo({
        content: args.content,
        isCompleted: false
    })
};


function removeItem(parent, args, context) {
    return context.prisma.deleteTodo({
        id: args.id
    })
};
function updateItem(parent, args, context) {
    return context.prisma.updateTodo({
        where: {
            id: args.id
        },
        data: {
            content: args.content,
            isCompleted: args.isCompleted
        }
    })

};


module.exports = {
    addItem,
    removeItem,
    updateItem
}
