export default {
  name: 'timely',
  type: 'document',
  title: 'Timely',
  preview: {
    select: {
      docName: 'title', 
    },
    prepare(selection: {docName: string}): {title:string} {
      const { docName } = selection;
      return {
        title: `${docName}`,
      };
     }
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: `
        The title of the document.
      `
    },
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
      name: 'employee',
      type: 'array',
      title: 'Employees',
      of: [{type: 'employee'}],
    },
  ],
};