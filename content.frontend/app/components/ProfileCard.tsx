type ProfileCardProps={
     name:string,
     title:string,
     avatarUrl:string,
     bio:string,

}


export function ProfileCard({name, title, avatarUrl, bio}:ProfileCardProps){
    return(
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={avatarUrl} alt={name} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{bio}</p>
            </div>
        </div>
    );
}
