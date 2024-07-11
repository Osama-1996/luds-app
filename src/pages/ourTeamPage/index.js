const AboutPage = () => {
    const teamMembers = [
        {
            name: "John Doe",
            image: "https://source.unsplash.com/random/100x100?person1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.",
        },
        {
            name: "Jane Smith",
            image: "https://source.unsplash.com/random/100x100?person2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.",
        },
        {
            name: "Michael Brown",
            image: "https://source.unsplash.com/random/100x100?person3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.",
        },
        {
            name: "Emily White",
            image: "https://source.unsplash.com/random/100x100?person4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.",
        },
    ];
    return (

        < div className="bg-gradient-to-b from-[#050105] to-[#321423] py-16" >
            <div className="text-center text-white mb-12 pt-8" data-aos="fade-down">
                <h2 className="text-3xl font-bold border-b-4" style={{ display: 'inline', borderBottomColor: '#86164e' }}>OUR TEAM</h2>

            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6" data-aos="zoom-in-up">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-[#6e6969] rounded-lg p-6 text-center h-[300px]">
                        <img
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                            src={member.image}
                            alt={member.name}
                        />

                        <p className="text-white mt-2">{member.description}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}
export default AboutPage;