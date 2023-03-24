export default {
  name: 'timely',
  type: 'document',
  title: 'Timely',
  preview: {
    select: {
      timelyAccountId: 'timelyAccountId',
      timelyToken: 'timelyToken',
      timelyDefaultClient: 'timelyDefaultClient',
      tripletexActivityCode: 'tripletexActivityCode',
      employeeToken: 'employeeToken',
    },
    prepare(selection: {
      timelyAccountId: string;
      timelyToken: string;
      timelyDefaultClient: number;
      tripletexActivityCode: number;
      employeeToken: string;
    }): { title: string } {
      const {
        timelyAccountId,
        timelyToken,
        timelyDefaultClient,
        tripletexActivityCode,
        employeeToken,
      } = selection;
      return {
        title: `${timelyAccountId} → ${timelyToken} → ${timelyDefaultClient} → ${tripletexActivityCode} → ${employeeToken}`,
      };
    },
  },
  fields: [
    {
      name: 'timelyAccountId',
      type: 'string',
      title: 'Timely Account ID',
      description: `
        The account ID of the Timely account.
      `
    },
    {
      name: 'timelyToken',
      type: 'string',
      title: 'Timely Token',
      description: `
        The API token of the Timely account.
      `
    },
    {
      name: 'timelyDefaultClient',
      type: 'number',
      title: 'Timely Default Client',
      description: `
        The default client to use when creating new Timely projects.
      `
    },
    {
      name: 'tripletexActivityCode',
      type: 'number',
      title: 'Tripletex Activity Code',
      description: `
        The activity code to use when creating new Tripletex time entries.
      `
    },
    {
      name: 'employeeToken',
      type: 'string',
      title: 'Employee Token',
      description: `
        The employee token to use when creating new Tripletex time entries.
      `
    },
    {
      name: 'employees',
      type: 'array',
      title: 'Employees',
      of: [{ type: 'string', title: 'email' }],
    },
  ],
};