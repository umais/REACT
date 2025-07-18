// State interface
export interface USState {
  id: string;
  name: string;
  abbreviation: string;
}

// Mock data - will be replaced with .NET API call later
const mockStates: USState[] = [
  { id: "1", name: "Alabama", abbreviation: "AL" },
  { id: "2", name: "Alaska", abbreviation: "AK" },
  { id: "3", name: "Arizona", abbreviation: "AZ" },
  { id: "4", name: "Arkansas", abbreviation: "AR" },
  { id: "5", name: "California", abbreviation: "CA" },
  { id: "6", name: "Colorado", abbreviation: "CO" },
  { id: "7", name: "Connecticut", abbreviation: "CT" },
  { id: "8", name: "Delaware", abbreviation: "DE" },
  { id: "9", name: "Florida", abbreviation: "FL" },
  { id: "10", name: "Georgia", abbreviation: "GA" },
  { id: "11", name: "Hawaii", abbreviation: "HI" },
  { id: "12", name: "Idaho", abbreviation: "ID" },
  { id: "13", name: "Illinois", abbreviation: "IL" },
  { id: "14", name: "Indiana", abbreviation: "IN" },
  { id: "15", name: "Iowa", abbreviation: "IA" },
  { id: "16", name: "Kansas", abbreviation: "KS" },
  { id: "17", name: "Kentucky", abbreviation: "KY" },
  { id: "18", name: "Louisiana", abbreviation: "LA" },
  { id: "19", name: "Maine", abbreviation: "ME" },
  { id: "20", name: "Maryland", abbreviation: "MD" },
  { id: "21", name: "Massachusetts", abbreviation: "MA" },
  { id: "22", name: "Michigan", abbreviation: "MI" },
  { id: "23", name: "Minnesota", abbreviation: "MN" },
  { id: "24", name: "Mississippi", abbreviation: "MS" },
  { id: "25", name: "Missouri", abbreviation: "MO" },
  { id: "26", name: "Montana", abbreviation: "MT" },
  { id: "27", name: "Nebraska", abbreviation: "NE" },
  { id: "28", name: "Nevada", abbreviation: "NV" },
  { id: "29", name: "New Hampshire", abbreviation: "NH" },
  { id: "30", name: "New Jersey", abbreviation: "NJ" },
  { id: "31", name: "New Mexico", abbreviation: "NM" },
  { id: "32", name: "New York", abbreviation: "NY" },
  { id: "33", name: "North Carolina", abbreviation: "NC" },
  { id: "34", name: "North Dakota", abbreviation: "ND" },
  { id: "35", name: "Ohio", abbreviation: "OH" },
  { id: "36", name: "Oklahoma", abbreviation: "OK" },
  { id: "37", name: "Oregon", abbreviation: "OR" },
  { id: "38", name: "Pennsylvania", abbreviation: "PA" },
  { id: "39", name: "Rhode Island", abbreviation: "RI" },
  { id: "40", name: "South Carolina", abbreviation: "SC" },
  { id: "41", name: "South Dakota", abbreviation: "SD" },
  { id: "42", name: "Tennessee", abbreviation: "TN" },
  { id: "43", name: "Texas", abbreviation: "TX" },
  { id: "44", name: "Utah", abbreviation: "UT" },
  { id: "45", name: "Vermont", abbreviation: "VT" },
  { id: "46", name: "Virginia", abbreviation: "VA" },
  { id: "47", name: "Washington", abbreviation: "WA" },
  { id: "48", name: "West Virginia", abbreviation: "WV" },
  { id: "49", name: "Wisconsin", abbreviation: "WI" },
  { id: "50", name: "Wyoming", abbreviation: "WY" },
];

// Service class
export class StateService {
  // Simulate API call with delay
  static async getStates(): Promise<USState[]> {
    // TODO: Replace with actual .NET API call
    // const response = await fetch('/api/states');
    // return response.json();
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockStates;
  }

  // Search states by name or abbreviation
  static async searchStates(query: string): Promise<USState[]> {
    const states = await this.getStates();
    if (!query) return states;
    
    const lowercaseQuery = query.toLowerCase();
    return states.filter(state => 
      state.name.toLowerCase().includes(lowercaseQuery) ||
      state.abbreviation.toLowerCase().includes(lowercaseQuery)
    );
  }
}
