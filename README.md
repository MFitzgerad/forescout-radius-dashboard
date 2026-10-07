# Forescout RADIUS Dashboard

A React component-based dashboard for monitoring RADIUS authentication services, including metrics for requests, accepts, rejects, success rates, and service health status.

## Features

- **Real-time Metrics**: Total requests, accepts, rejects, and success rate
- **Recent Activity**: Live feed of authentication events with outcomes
- **Service Status**: RADIUS listeners and database health monitoring
- **Failure Analysis**: Top failure reasons with percentage breakdowns
- **Health Thresholds**: Visual indicators for healthy, degraded, and unavailable states
- **Filtering**: Filter by time range, NAS, authentication method, and outcome

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── RADIUSDashboard.jsx       # Main dashboard component
│   ├── Topbar.jsx                 # Header with branding
│   ├── Filters.jsx                # Filter controls
│   ├── SummaryGrid.jsx            # Summary metrics grid
│   ├── MetricCard.jsx             # Individual metric card
│   ├── MainGrid.jsx               # Main content layout
│   ├── RecentActivity.jsx         # Activity table
│   ├── ServiceStatus.jsx          # Service & DB status
│   ├── Badge.jsx                  # Outcome badge component
│   ├── StatusPill.jsx             # Health status pill
│   └── FailureReasons.jsx         # Failure analysis
├── styles/
│   └── global.css                 # Global styles
└── index.js                        # React entry point
```

## Styling

The dashboard uses CSS custom properties (CSS variables) for theming. Modify the `--*` variables in `src/styles/global.css` to customize colors.

## Components

### RADIUSDashboard
Main component that orchestrates the dashboard layout and manages filter state.

### Topbar
Header with Forescout branding and export button.

### Filters
Filter controls for time range, NAS, authentication method, and outcome.

### SummaryGrid
Displays key metrics in a 4-column grid layout.

### RecentActivity
Table view of recent authentication events with filtering.

### ServiceStatus
Monitors RADIUS services and radius_clients database health.

### FailureReasons
Analyzes and displays top failure reasons with percentage bars.

## License

MIT
