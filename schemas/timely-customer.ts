import { BiWindowOpen } from 'react-icons/bi';
import { defineType } from 'sanity';

export const timelyCustomer = defineType({
  name: 'timely-customer',
  type: 'document',
  title: 'Timely Customer',
  icon: BiWindowOpen,
  groups: [
    { name: 'timely', title: 'Timely' },
    { name: 'tripletex', title: 'Tripletex' },
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      group: 'timely',
      name: 'timelyAccountId',
      type: 'number',
      title: 'Timely Account ID',
      validation: Rule => Rule.required(),
    },
    {
      group: 'timely',
      name: 'timelyToken',
      type: 'string',
      title: 'Timely Token',
      description: `
        The API token of the Timely account.
      `,
      validation: Rule => Rule.required(),
    },
    {
      group: 'timely',
      name: 'timelyDefaultClient',
      type: 'number',
      title: 'Timely Default Client',
      description: `
        The default client to use when creating new Timely projects.
      `,
      validation: Rule => Rule.required(),
    },
    {
      group: 'tripletex',
      name: 'tripletexActivityCode',
      type: 'number',
      title: 'Tripletex Activity Code',
      description: `
        The activity code to use when creating new Tripletex time entries.
      `,
      validation: Rule => Rule.required(),
    },
    {
      group: 'tripletex',
      name: 'employeeToken',
      type: 'string',
      title: 'Employee Token',
      description: `
        The employee token to use when creating new Tripletex time entries.
      `,
      validation: Rule => Rule.required(),
    },
    {
      name: 'employee',
      type: 'array',
      title: 'Employees',
      of: [{ type: 'tripletex-timely-employee' }],
    },
  ],
});
