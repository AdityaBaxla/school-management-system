## Frontend Table View

### Props accepted

columns=[
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      {
        field: 'role',
        header: 'Role',
        sortable: false,
        type: 'dropdown',
        options: [
          { label: 'Admin', value: 1 },
          { label: 'User', value: 2 },
        ],
      },

data = [ {field1, field2, ...}]