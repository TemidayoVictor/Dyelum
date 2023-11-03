const AdminLeaderBoardTable = ({data, title}) => {
    
    return (
        <div>
            <div className="min-w-full bg-white p-2 px-4 border rounded-[5px] mt-5 max-lg:overflow-scroll">
                <h2 className="font-bold text-[1.2rem]">{title}</h2>
                <table className="min-w-full bg-white p-11 mt-4">
                    <thead>
                        <tr className="border-b border-gray-300">
                            <th className="font-semibold text-[#6E7887] pb-3 px-2">Rank</th>
                            <th className="font-semibold text-[#6E7887] pb-3">Game Mode</th>
                            <th className="font-semibold text-[#6E7887] pb-3">Wallet Address</th>
                            <th className="font-semibold text-[#6E7887] pb-3">Score</th>
                            <th className="font-semibold text-[#6E7887] pb-3">Minted Master NFT</th>
                            <th className="font-semibold text-[#6E7887] pb-3">Minted Legendary NFT</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                            data.map((detail, index) => (
                                <tr className="p-2" key={index}>
                                    <td className="text-center py-4 max-lg:border-r">{detail.rank}</td>
                                    <td className="text-center py-4 max-lg:border-r">{detail.game}</td>
                                    <td className="text-center py-4 max-lg:border-r">{(detail.wallet)}</td>
                                    <td className="text-center py-4 max-lg:border-r">{detail.score}</td>
                                    <td className="text-center py-4 max-lg:border-r">{detail.master}</td>
                                    <td className="text-center py-4 ">{detail.legendary}</td>
                                </tr>
                            ))
                        }
                                                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminLeaderBoardTable