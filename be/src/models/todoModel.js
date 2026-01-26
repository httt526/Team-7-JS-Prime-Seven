const supabase = require('../config/supabase');

let mockTodos = [
  { id: 1, task: "Chua co database", is_completed: false },
  { id: 2, task: "API", is_completed: true },
];

const Todo = {
    async getAll() {

        if (supabase) {
            return await supabase.from('todos').select('*').order('created_at', { ascending: false });
        }
        return { data: mockTodos, error: null };
    },

    async create(task) {
        if (supabase) {
            return await supabase.from('todos').insert([{ task }]).select();
        }
        
        const newTodo = { id: Date.now(), task: task, is_completed: false };
        mockTodos.push(newTodo);
        return { data: [newTodo], error: null };
    },

    async update(id, updates) {
        if (supabase) {
            return await supabase.from('todos').update(updates).eq('id', id).select();
        }

        const index = mockTodos.findIndex(t => t.id == id);
        if (index !== -1) {
            mockTodos[index] = { ...mockTodos[index], ...updates };
            return { data: [mockTodos[index]], error: null };
        }
        return { data: [], error: null };
    },

    async delete(id) {
        if (supabase) {
            return await supabase.from('todos').delete().eq('id', id);
        }

        // Giả vờ xóa
        mockTodos = mockTodos.filter(t => t.id != id);
        return { error: null };
    }
};

module.exports = Todo;