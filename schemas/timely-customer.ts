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
      name: 'timelyAuthClientId',
      type: 'string',
      title: 'Timely Auth Client ID',
      description: `
        The Auth Client ID of the Timely account.
      `,
      validation: Rule => Rule.required(),
    },
    {
      group: 'timely',
      name: 'timelyAuthClientSecret',
      type: 'string',
      title: 'Timely Auth Client Secret',
      description: `
        The Auth Client Secret of the Timely account.
      `,
      validation: Rule => Rule.required(),
    },
    {
      group: 'timely',
      name: 'timelyAuthClientRedirectUri',
      type: 'string',
      title: 'Timely Auth Client Redirect URI',
      description: `
        The Auth Client Redirect URI of the Timely account. If not set, it is assumed to be 'urn:ietf:wg:oauth:2.0:oob'.
      `,
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
      name: 'timelyRefreshToken',
      type: 'string',
      title: 'Timely Refresh Token',
      description: `
        The refresh token of the Timely API token.
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
      name: 'employees',
      type: 'array',
      title: 'Employees',
      of: [{ type: 'tripletex-timely-employee' }],
    },
  ],
});
