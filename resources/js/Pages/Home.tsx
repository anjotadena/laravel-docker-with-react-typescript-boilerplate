import React from "react";
import Layout from "../components/common/layout";

const Home = () => {
    let foo: string = "React";
    const bar: string = "TypeScript";

    return (
        <Layout title="Welcome to my homepage">
            <h1>Hello</h1>
        </Layout>
    );
};

export default Home;
