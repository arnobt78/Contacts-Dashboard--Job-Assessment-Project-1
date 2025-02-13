// Define the structure of an activity
export interface Activity {
  id: number; // Unique identifier for the activity
  description: string; // Description of the activity
  date: string; // Date of the activity
}

// Define the structure of contact statistics
export interface ContactStatistics {
  totalCalls: number; // Total number of calls made
  totalEmails: number; // Total number of emails sent
  totalMeetings: number; // Total number of meetings held
}
