Clone the repository:
git clone https://github.com/your-username/cms.git

Navigate to the project directory:
cd backend

Create a .env file based on the .env.example file and configure the DATABASE_URL with your postgreSQL connection string.
Install dependencies:

npm install

Run database migrations:
npm run prisma:migrate

Run Commands:
1. tsc -b  // to compile the ts code to js
2. node dist/index.ts


Try out all the 3 endpoints.

