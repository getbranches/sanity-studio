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
      Masse info.
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