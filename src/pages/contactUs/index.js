const Contactus = () => {
    return (
        <div className="bg-black px-16 pb-10  pt-16">
            <h1 className="text-[45px] font-[800] text-white mt-16">NEED HELP?</h1>
            <h1 className="text-[36px] font-[500] text-white">DON’T WORRY JUST <span className="text-[#911A57]">CONTACT US</span> </h1>
            <form className="p-8 rounded-xl shadow-md w-full max-w-md">
                <div className="mb-6">
                 
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter Name"
                        className="w-full bg-[#D9D9D9] rounded-full py-4 px-6 text-[#716A6A] font-[500] focus:outline-none"
                    />
                </div>
                <div className="mb-6">
                   
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        className="w-full bg-[#D9D9D9] rounded-full py-4 px-6 text-[#716A6A] font-[500] focus:outline-none"
                    />
                </div>
                <div className="mb-6">
                    
                    <textarea
                        id="message"
                        placeholder="Enter Message"
                        className="w-full bg-[#D9D9D9] rounded-xl py-4 px-6 text-[#716A6A] font-[500] focus:outline-none"
                        rows="4"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#D9D9D9] rounded-xl p-4 flex items-center justify-center text-gray-700 font-bold hover:bg-gray-300 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Contactus;