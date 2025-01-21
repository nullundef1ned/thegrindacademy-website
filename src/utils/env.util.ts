const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || 'dev';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;


const environmentUtil = { ENVIRONMENT, API_URL, DASHBOARD_URL }

export default environmentUtil;