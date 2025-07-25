# Replit.md

## Overview

This is a React-based educational platform called "Caminho da Raposa" (Fox's Path) focused on digital security education. The application features interactive learning trails with modules and quizzes, designed with a fox mascot theme and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management, local state with React hooks
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful APIs with `/api` prefix
- **Development**: Hot module replacement with Vite integration

## Key Components

### Frontend Components
1. **Pages**:
   - Home page with focused landing page and call-to-action buttons
   - Trails page with complete trail overview and selection interface
   - Trail page for individual learning paths with modules and quizzes
   - Progress page showing user completion status across all trails and modules
   - Blog page with platform updates, release notes and educational content
   - About page with project information and creator details (editable content)
   - 404 Not Found page

2. **Core Components**:
   - Header with navigation and mobile menu
   - Footer with links and contact information
   - TrailCard for displaying learning trails
   - Quiz component for interactive assessments
   - Progress tracking system

3. **UI Components**: Complete shadcn/ui component library including:
   - Cards, buttons, dialogs, forms
   - Navigation, tooltips, progress bars
   - Charts, calendars, tables, and more

### Backend Components
1. **Server Setup**: Express server with middleware for JSON parsing and request logging
2. **Storage Interface**: Abstract storage layer with in-memory implementation for development
3. **Database Schema**: User management with Drizzle ORM and Zod validation
4. **Route Registration**: Modular route system for API endpoints

### Data Management
1. **Static Content**: Learning trails and modules stored as JSON files with flexible content sections
2. **Progress Tracking**: Client-side localStorage for user progress across all trails and modules
3. **Trail Loader**: Service layer for loading educational content with support for modular sections
4. **Type Safety**: Full TypeScript coverage with shared types and content section interfaces

## Data Flow

1. **Content Loading**: JSON files → Trail Loader service → React Query cache → UI components
2. **User Progress**: User actions → useProgress hook → localStorage → UI updates
3. **Navigation**: User interactions → Wouter router → Page components (Home, Trails, Progress, Blog, About)
4. **Quiz Flow**: Quiz component → Score calculation → Progress update → Module completion
5. **Blog Content**: Static blog posts data → Blog page components → Category filtering → Newsletter signup

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React ecosystem with TypeScript
- **Styling**: Tailwind CSS with PostCSS processing
- **Components**: Radix UI primitives via shadcn/ui
- **State**: TanStack Query for data fetching
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icons
- **Utilities**: clsx, class-variance-authority for styling

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Runtime**: Node.js with ESM modules
- **Validation**: Zod schemas for type safety
- **Session**: PostgreSQL session store (configured but not actively used)

### Development Tools
- **Build**: Vite with React plugin and error overlay
- **TypeScript**: Full type checking and IDE support
- **Database Migrations**: Drizzle Kit for schema management
- **Cartographer**: Replit-specific development enhancement

## Deployment Strategy

### Development Environment
- **Server**: Development server runs on Node.js with hot reloading
- **Database**: Neon serverless PostgreSQL with environment-based configuration
- **Build Process**: Vite handles frontend builds with TypeScript compilation
- **File Structure**: Monorepo structure with client/, server/, and shared/ directories

### Production Build
- **Frontend**: Static assets built to dist/public/ directory
- **Backend**: ESM bundle created with esbuild for Node.js deployment
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Static Serving**: Express serves built frontend assets in production

### Environment Configuration
- **Development**: Uses Vite dev server with Express API proxy
- **Production**: Single Express server serves both API and static files
- **Database Migrations**: Manual migration system with drizzle-kit push command
- **Session Management**: PostgreSQL-backed sessions (currently using in-memory storage)

The architecture is designed to be scalable and maintainable, with clear separation of concerns between educational content management, user progress tracking, and interactive learning features. The system currently uses static JSON files for content but can be easily extended to use a full CMS or database-driven content management system.