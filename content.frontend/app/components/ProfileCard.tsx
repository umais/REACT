type ProfileCardProps={
     name:string,
     title:string,
     avatarUrl:string,
     bio:string,

}


export function ProfileCard({name, title, avatarUrl, bio}:ProfileCardProps){
    return(
        <div className="max-w-sm bg-white text-green rounded-xl shadow-lg p-6 hover:shadpow-xl transition">
            <div className="flex items-center space-x-4">
                <img src={avatarUrl} alt={name} className="w-16 h-16 rounded-full" />
                <div>
                    <h2 className="text-xl font-bold mb-2">{name}</h2>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                
                </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm">{bio}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Follow Me
            </button>
        </div>
    );
}
