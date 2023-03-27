import { defineType } from 'sanity';

export default defineType({
  name: 'tripletex-time-customers',
  type: 'document',
  title: 'Tripletex Time Customers',
  preview: {
    select: {
      consumerCompanyName: 'consumerCompany.name',
      producerCompanyName: 'producerCompany.name',
    },
    prepare(selection: {
      consumerCompanyName: string;
      producerCompanyName: string;
    }): { title: string } {
      const { consumerCompanyName, producerCompanyName } = selection;
      return {
        title: `${producerCompanyName} → ${consumerCompanyName}`,
      };
    },
  },
  fields: [
    {
      name: 'consumerCompany',
      type: 'object',
      title: 'Consumer Company',
      description: `

        The company that time is synchronized to. In other words, where
        the main project is created and maintained. Where the time is
        invoiced from – the company we sync to.
      `,
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'activityCode',
          type: 'number',
          title: 'Activity Code',
        },
        {
          name: 'employeeToken',
          type: 'string',
          title: 'Employee Token',
        },
      ],
    },
    {
      name: 'producerCompany',
      type: 'object',
      title: 'Producer Company',
      description: `
        Producer company is the company that we track time in.
        In the context of employment, where we are employed.
      `,
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'customerId',
          type: 'number',
          title: 'Customer ID',
        },
        {
          name: 'projectCategoryId',
          type: 'number',
          title: 'Project Category ID',
        },
        {
          name: 'projectManagerEmail',
          type: 'string',
          title: 'Project Manager Email',
        },
        {
          name: 'employeeToken',
          type: 'string',
          title: 'Employee Token',
        },
      ],
    },
    {
      name: 'employees',
      type: 'array',
      title: 'Employees',
      of: [{ type: 'string', title: 'email' }],
    },
  ],
});
