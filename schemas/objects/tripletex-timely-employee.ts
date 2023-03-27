import { defineType } from 'sanity';

export const tripletexTimelyEmployee = defineType({
  name: 'tripletex-timely-employee',
  type: 'object',
  title: 'Employee',
  fields: [
    {
      name: 'email',
      type: 'email',
      title: 'Email',
      description: `
        The email address of the employee.
      `,
      validation: Rule => Rule.required(),
    },
    {
      name: 'employeeId',
      type: 'number',
      title: 'Employee Id',
      validation: Rule => Rule.required(),
    },
    {
      name: 'timelyUserId',
      type: 'number',
      title: 'Timely User Id',
      validation: Rule => Rule.required(),
    },
  ],
});
