import React from 'react';

const Content_2937 = React.lazy(() => import("./components/2937/index"),);
const ErrorPage = React.lazy(() => import("./components/ErrorPage/index"))

const routes = [
    {
        path: "/2937",
        element: <Content_2937 />,
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]

export default routes