# TryDevin Project

This repository contains a Next.js application foundation built with App Router and server-side actions.

## Project Structure

- `app/` - Next.js application code
- `docs/` - Documentation

## Development

Navigate to the app directory and install dependencies:

```bash
cd app
pnpm install
```

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm lint:fix` - Run Biome linter with auto-fix
- `pnpm format` - Format code with Biome

### Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Biome** for linting and formatting
- **Server-side actions** structure
- Basic routing with `/login` page

### Next Steps

- Implement login functionality
- Add authentication system
- Configure for CloudFlare deployment

## Technology Stack

- Next.js 15.3.3
- React 19
- TypeScript 5.8.3
- Biome 1.9.4
- pnpm package manager
