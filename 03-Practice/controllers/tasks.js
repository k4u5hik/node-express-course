const getAllTasks = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tasks: [
        {
          id: 1,
          title: 'Task 1',
          description: 'Task 1 description',
          status: 'incomplete',
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Task 2 description',
          status: 'incomplete',
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'Task 3 description',
          status: 'incomplete',
        },
      ],
    },
  });
};

module.exports = {
  getAllTasks,
};