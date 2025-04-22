// src/services/api/electron.js
export default {
    student: {
      getAll: ()    => window.api.student.getAll(),
      create: (d)   => window.api.student.create(d),
      update: (d)   => window.api.student.update(d),
      delete: (id)  => window.api.student.delete(id),
    },
    fee: {
      getAll: ()    => window.api.fee.getAll(),
      create: (d)   => window.api.fee.create(d),
      // …etc…
    }
  }
  