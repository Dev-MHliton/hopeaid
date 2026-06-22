import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";

const PopularCauses = () => {
    const [causes, setCauses] = useState([]);

    useEffect(() => {
        fetch("/causes.json")
            .then(res => res.json())
            .then(data => setCauses(data));
    }, []);

    return (
        <section className="py-16">
            <SectionTitle heading={"Popular Causes"} />

            <div
                id="Causes"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {causes.map(cause => {
                    const percentage = Math.round(
                        (cause.raised / cause.goal) * 100
                    );

                    return (
                        <div
                            key={cause.id}
                            className="bg-white rounded-xl border shadow-sm overflow-hidden"
                        >
                            <img
                                src={cause.image}
                                alt={cause.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {cause.title}
                                </h3>

                                <p className="text-sm text-gray-500 mt-2">
                                    {cause.description}
                                </p>

                                <div className="flex justify-between mt-4 text-sm">
                                    <span>
                                        ${cause.raised.toLocaleString()} raised of $
                                        {cause.goal.toLocaleString()}
                                    </span>

                                    <span>{percentage}%</span>
                                </div>

                                <progress
                                    className="progress progress-success w-full mt-2"
                                    value={percentage}
                                    max="100"
                                ></progress>

                                <button className="btn btn-outline w-full mt-4">
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PopularCauses;