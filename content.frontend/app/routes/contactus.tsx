import { useState, useEffect } from "react";

const contactus = () => {
  const statesList = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" }
  ];

  type FormData = {
    id: number;
    name: string;
    email: string;
    message: string;
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [states, setStates] = useState<{ code: string; name: string }[]>([]);
 const [list, setList] = useState<FormData[]>(() => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("contactus");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
});


  // Load contactus list from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("contactus");
    try {
      setList(stored ? JSON.parse(stored) : []);
      console.log("LocalStorage contactus Being Initialized:", stored);
    } catch {
      setList([]);
    }
  }, []);

  // Save contactus list to localStorage on change
  useEffect(() => {
    localStorage.setItem("contactus", JSON.stringify(list));
    console.log("LocalStorage contactus:", localStorage.getItem("contactus"));
  }, [list]);

  // Save and load states list to/from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedStates = localStorage.getItem("statesList");
      if (!storedStates) {
        localStorage.setItem("statesList", JSON.stringify(statesList));
        setStates(statesList);
        console.log("States list saved to localStorage");
      } else {
        try {
          const parsed = JSON.parse(storedStates);
          setStates(parsed);
          console.log("States list loaded from localStorage");
        } catch {
          setStates([]);
        }
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem: FormData = {
      id: list.length,
      name,
      email,
      message
    };
    setList([...list, newItem]);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to the contact us page! This is where you can reach out to us.
      </p>

      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="states" className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <select
            id="states"
            name="states"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a state</option>
            {states.length === 0 ? (
              <option disabled>Loading states...</option>
            ) : (
              states.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>

        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.name} - {item.email} - {item.message}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default contactus;
