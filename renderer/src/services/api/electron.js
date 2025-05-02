// src/services/api/electron.js
export default {
  student: {
    getAll: () => window.api.student.getAll(),
    create: (d) => window.api.student.create(d),
    update: (id, d) => window.api.student.update(id, d),
    delete: (id) => window.api.student.delete(id),
  },
  fee: {
    getAll: () => window.api.fee.getAll(),
    create: (d) => window.api.fee.create(d),
    update: (id, d) => window.api.fee.update(id, d),
    delete: (id) => window.api.fee.delete(id),
  },
};
