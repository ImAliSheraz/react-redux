export const baseUrl = process.env.REACT_APP_API_BASE_URL;

// Auth APIs paths
export const signUp = "api/v1/auth/signup";
export const login = "api/v1/auth/login";
export const logout = "api/v1/auth/logout";
export const forgotPassword = "api/v1/auth/forget-password";
export const resetPassword = "api/v1/auth/reset-password";
export const fetchUserProfile = "api/v1/auth/user-detail";
export const updateUserProfile = "api/v1/auth/user-update";

// States APIs Endpoints
export const fetchAllStatesData = "api/v1/auth/states";
export const fetchStateData = "api/v1/auth/state";
export const fetchStateCountiesData = "api/v1/auth/state-counties";

// Counties APIs Endpoints
export const fetchCountyData = "api/v1/auth/county";
export const fetchAllCountiesData = "api/v1/auth/counties";
export const fetchCountyJurisdictionsData = "api/v1/auth/county-jurisdictions";

export const fetchAllJurisdictionsData = "api/v1/auth/jurisdictions";
export const fetchJurisdictionData = "api/v1/auth/jurisdiction";
export const fetchJurisdictionContactsData = "api/v1/auth/jurisdiction-contacts";
export const fetchJurisdictionSearchedData = "api/v1/auth/jurisdiction-search";

export const fetchCountySubmittalRequirementsData = "api/v1/auth/county-submittal-requirements";

export const fetchSubmittalRequirementData = "api/v1/auth/submittal-requirement";
export const fetchContactData = "api/v1/auth/contact-detail";

// Payment method APIs
export const fetchStripePlansData = "api/v1/payment/payment-plans";
export const fetchUserSubscriptionData = "api/v1/payment/user-subscription";
export const fetchStripePlanData = "api/v1/payment/payment-plan";
export const createPaymentIntent = "api/v1/payment/payment-intent";
export const updateSubscription = "api/v1/payment/update-subscription";

export const uploadImage = "api/v1/auth/upload-image";
export const exportPdfDocData = "api/v1/auth/export-pdf";
export const setReportCreditPoint = "api/v1/auth/set-count-search";
export const getReportCreditPoint = "api/v1/auth/get-count-search";

export const resendVerifyLink = "api/v1/auth/email-verify-resend";



export const frontendAppPath = "http://localhost:3000";
export const checkoutRedirectApp = "http://localhost:3000/subscribed";
export const stripePublicKey = "pk_test_51KMoTxAOTHt1blGA4GzjuNY3aCFMYFwsNpwxJrUuU5dpyv6SSWke7aYg3kP9t6l34uRTiOHIzHXMQ7jITdz9JVZJ00ALhWqTVO";




