import { useState,useEffect } from "react"




const contactus=()=>{

  type FormData={
    id:number;
    name:string;
    email:string;
    message:string;
  }


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [message,setMessage]=useState("");

const[list,setList]=useState<FormData[]>([]);

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
     const newItem:FormData={
        id:list.length,
        name,
        email,
        message
     }
    setList([...list,newItem]);
    setName("");
    setEmail("");
    setMessage("");
}

return(<div className="p-8 space-y-6">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <p className="text-lg text-gray-700">
      Welcome to the contact us page! This is where you can reach out to us.
    </p>

   <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e=>setName(e.target.value)} 
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
          onChange={e=>setEmail(e.target.value)}
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
          onChange={e=>setMessage(e.target.value)}  
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
        {list.map(item=>(
            <li key={item.id}>{item.name} - {item.email} - {item.message}</li>
        ))}
      </ul>
    </form>




</div>)

}

export default contactus;
