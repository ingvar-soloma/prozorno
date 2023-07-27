# ProZorno Project - Backend Setup and Usage

Welcome to the ProZorno project!
This repository contains the backend code built using Strapi, a powerful headless CMS and API generator. Below are
instructions on how to set up and use the backend for the ProZorno project.

## Setup

Before getting started, please make sure you have Node.js and npm installed on your machine. Additionally, we use
Microsoft Rush for managing dependencies, so you'll need to install it globally:

```bash
npm install @microsoft/rush -g
```

Once Rush is installed, you can proceed with the following steps:

1. Clean the existing dependencies:

```bash
rush purge
```

2. Update dependencies to their latest versions:

```bash
rush update --full -p
```

**Note**: Do not run `npm install` from any subdirectory within the project, as Rush manages all dependencies.

## Running the Backend (Strapi)

To run the Strapi backend, follow these steps:

1. Build the backend code:

```bash
cd apps/backend
npm run build
```

Start the Strapi server in development mode:

```bash
npm run dev:server
```

Upon successful start, you will see the local URL where you can access the Strapi administration panel for
authorization.

### Stripe Credentials

For Stripe integration, you can use the following credentials:

- Email: prozornoteam@gmail.com
- Password: SuperAdmin1

### Running the Website (Frontend)

To run the frontend website, follow the steps below:

#### Windows:

Install the cross-env package globally on your Windows system:

```bash
npm install cross-env -g
```

Run the frontend website with the appropriate API token:

```bash
cd apps/website
cross-env API_TOKEN=<api_token> npm run dev:client
```

## GraphQL

We use GraphQL for our API. To test queries, follow these steps:

1. Access the GraphQL endpoint at <strapi_url>/graphql.

2. In the bottom section of your GraphQL client (e.g., Insomnia, Postman, or GraphQL Playground), add the following
   authorization header:

```json
{
  "Authorization": "Bearer <token>"
}
```

### Example of a GraphQL query:

```graphql
query home {
  corruptions {
    data {
      attributes {
        url
        cost
        createdAt
      }
    }
  }
}
```

## Contributing

We welcome contributions from the community! If you find any issues or have suggestions, please feel free to create a
pull request or submit an issue.

Happy coding! 🚀
