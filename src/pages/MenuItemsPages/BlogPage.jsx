import { useQuery } from "@tanstack/react-query";
import PageContainer from "../../components/PageContainer/PageContainer";

const fetchBlogs = async () => {
    const res = await fetch("/data/blogs.json");
    return res.json();
};

const BlogPage = () => {

    const { data: blogs, isLoading } = useQuery({
        queryKey: ["blogs"],
        queryFn: fetchBlogs,
    });

    return (
        <PageContainer>
            <section>

                <div className="relative h-[320px] md:h-[420px] w-full rounded-2xl overflow-hidden">

                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                        alt="blog banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">

                        <h1 className="text-4xl md:text-5xl font-bold">
                            Our Blog
                        </h1>
                        <p className="mt-4 text-sm md:text-lg max-w-2xl text-gray-200">
                            Explore insights, stories, and updates from Hopeaid. Stay informed with our latest articles and news.
                        </p>

                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto px-4 py-12">

                    {isLoading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {blogs?.map(blog => (
                                <div
                                    key={blog.id}
                                    className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
                                >
                                    {/* Image (optional) */}
                                    {blog.image && (
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="h-40 w-full object-cover"
                                        />
                                    )}
                                    <div className="p-4">
                                        <h2 className="text-black text-xl font-semibold">
                                            {blog.title}
                                        </h2>
                                        <p className="text-gray-600 mt-2 text-sm">
                                            {blog.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PageContainer>
    );
};

export default BlogPage;