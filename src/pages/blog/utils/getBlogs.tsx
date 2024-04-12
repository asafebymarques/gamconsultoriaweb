export async function getBlogs() {
    const response = await fetch(`https://66195447125e9bb9f299b6c0.mockapi.io/blogs`);
    const blogsData = await response.json();

    return blogsData;
}