import React from "react";

interface Props {
    title?: string;
}

const Layout: React.FC<Props> = props => {
    const { title, children } = props;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1>{title || "No Title"}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
