const Todo = require('../models/todoModel');

const TodoController = {
    async index(req, res) {
        const { data, error } = await Todo.getAll();
        if (error) return res.status(500).json({ error: error.message });
        res.json(data);
    },

    async store(req, res) {
        const { task } = req.body;
        const { data, error } = await Todo.create(task);
        if (error) return res.status(500).json({ error: error.message });
        res.json(data);
    },

    async update(req, res) {
        const { id } = req.params;
        const { task, is_completed } = req.body;
        const { data, error } = await Todo.update(id, { task, is_completed });
        if (error) return res.status(500).json({ error: error.message });
        res.json(data);
    },

    async destroy(req, res) {
        const { id } = req.params;
        const { error } = await Todo.delete(id);
        if (error) return res.status(500).json({ error: error.message });
        res.json({ message: "Đã xóa thành công" });
    }
};

module.exports = TodoController;
