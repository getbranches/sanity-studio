import { defineType } from 'sanity';

export default defineType({
  name: 'employeeForTimelyIntegration',
  type: 'object',
  title: 'Employee',
  fields: [
    {
      name: 'email',
      type: 'email',
      title: 'Email',
      description: `
        The email address of the employee.
      `
    },
    { 
      name:'employeeId', 
      type: 'number',
      title: 'Employee Id'
    },
    { 
      name:'timelyUserId',
      type: 'number',
      title: 'Timely User Id' 
    }
  ]
});