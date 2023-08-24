import MapImage from "../assets/google-maps-old-800.png";

const LoadingSkeleton = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            {/* MAP */}
            <div className="flex flex-col items-center justify-center w-[80%] border-1 rounded-md mx-auto">
                <div className=" bg-gray-300/60 flex w-[95%] min-h-[50vh] animate-pulse items-center justify-center m-5 rounded-md">
                    <img src={MapImage} alt="map image" className="w-[30%] min-w-[180px] " />
                </div>
            </div>

            {/* TABLE */}
            <div className="flex flex-col items-center justify-center w-[80%] min-h-[50vh] border-1 rounded-md mx-auto">
                <div className=" bg-gray-300/60 flex w-[45%] h-[50px] min-w-[120px] animate-pulse items-center justify-center m-5 rounded-md"></div>
                <table className="overflow-x-scroll bg-gray-300/60 flex flex-col w-[95%] h-[300px] animate-pulse items-start justify-center m-5 rounded-md">
                    <thead className="skeleton-thead">
                        <tr className="skeleton-tr text-slate-700 outline-none border-none">
                            <th className="skeleton-th">Name</th>
                            <th className="skeleton-th">Year discovered</th>
                            <th className="skeleton-th">Mass in grams</th>
                            <th className="skeleton-th">Classification</th>
                            <th className="skeleton-th" colSpan="2">
                                Geolocation
                            </th>
                        </tr>
                    </thead>
                    <tbody className="skeleton-tbody">
                        {[...Array(5)].map((_, index) => (
                            <tr key={index} className="skeleton-tbody-tr border-b-[1px] h-9 p-0 ">
                                <td className="flex items-center justify-center bg-transparent outline-none border-none rounded-md w-[20%] p-0">
                                    <div className="bg-gray-300/60 w-[70%] min-w-[60px] h-[10px] p-0 rounded-md"></div>
                                </td>
                                <td className="flex items-center justify-center p-0 bg-transparent outline-none border-none rounded-md w-[20%]">
                                    <div className="bg-gray-300/60 w-[80%] min-w-[60px] h-[10px] p-0 rounded-md"></div>
                                </td>
                                <td className="flex items-center justify-center bg-transparent outline-none border-none rounded-md w-[20%] p-0">
                                    <div className="bg-gray-300/60 w-[80%] h-[10px] p-0 rounded-md min-w-[60px]"></div>
                                </td>
                                <td className="flex items-center justify-center bg-transparent outline-none border-none rounded-md w-[20%] p-0">
                                    <div className="bg-gray-300/60 w-[80%] min-w-[60px] h-[10px] p-0 rounded-md"></div>
                                </td>
                                <td className="flex items-center justify-center bg-transparent outline-none border-none rounded-md w-[20%] p-0">
                                    <div className="bg-gray-300/60 w-[85%] min-w-[60px] h-[10px] p-0 rounded-md"></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoadingSkeleton;
